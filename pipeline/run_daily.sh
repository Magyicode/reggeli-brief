#!/bin/zsh
# Reggeli Brief – daily runner, started by the LaunchAgent hu.reggelibrief.daily
# (at login/wake, every 15 min, and weekdays 05:45). Does real work at most once per weekday, after 05:00.
set -u
PROJ="$HOME/Claude/reggeli-brief"
STATE="$PROJ/.state"
LOG="$HOME/Library/Logs/reggeli-brief.log"
DATE=$(TZ=Europe/Budapest date +%F)
DOW=$(TZ=Europe/Budapest date +%u)
HOUR=$(TZ=Europe/Budapest date +%H)

[ "$DOW" -le 5 ] || exit 0
[ "$HOUR" -ge 5 ] || exit 0
mkdir -p "$STATE"
[ -f "$STATE/done-$DATE" ] && exit 0

# single instance; a lock older than 2 hours is considered stale
if ! mkdir "$STATE/lock" 2>/dev/null; then
  [ -n "$(find "$STATE/lock" -maxdepth 0 -mmin +120 2>/dev/null)" ] || exit 0
  rm -rf "$STATE/lock"; mkdir "$STATE/lock" || exit 0
fi
trap 'rm -rf "$STATE/lock"' EXIT

exec >>"$LOG" 2>&1
notify() { osascript -e "display notification \"$1\" with title \"Reggeli Brief\"" >/dev/null 2>&1; }
echo "=== $(date '+%F %T') start $DATE"

# wait up to 10 minutes for the network after wake
for i in {1..40}; do curl -sfI https://github.com >/dev/null && break; sleep 15; done

cd "$PROJ" || exit 1
git pull --rebase --autostash -q origin main || echo "git pull failed"
if [ -f "docs/episodes/$DATE/script.json" ]; then
  echo "already published"; touch "$STATE/done-$DATE"; exit 0
fi

CLAUDE=$(ls -d "$HOME"/.vscode/extensions/anthropic.claude-code-*/resources/native-binary/claude 2>/dev/null | sort -V | tail -1)
if [ -z "$CLAUDE" ]; then echo "claude binary not found"; notify "Hiba: nem található a Claude (VS Code bővítmény)"; exit 1; fi

# at most 2 generation attempts per day
TRIES=$(cat "$STATE/tries-$DATE" 2>/dev/null || echo 0)
[ "$TRIES" -ge 2 ] && { echo "attempt limit reached"; exit 0; }
echo $((TRIES + 1)) > "$STATE/tries-$DATE"

notify "A mai adás készül (~20 perc)…"
caffeinate -i -s "$CLAUDE" -p "$(cat pipeline/DAILY_PROMPT.md)

DATE=$DATE" \
  --permission-mode acceptEdits \
  --allowedTools "Agent WebSearch WebFetch Read Write Edit Glob Grep Bash" \
  --max-turns 300 < /dev/null

git fetch -q origin
if git cat-file -e "origin/main:docs/episodes/$DATE/script.json" 2>/dev/null; then
  touch "$STATE/done-$DATE"
  echo "=== $(date '+%F %T') done"
  notify "Kész a mai adás – a hang pár perc múlva frissül az oldalon."
  # phone notification (ntfy) once the GitHub Action has built the audio and Pages serves the episode
  if [ -f "$STATE/ntfy_topic" ]; then
    for i in {1..40}; do
      curl -sf "https://magyicode.github.io/reggeli-brief/episodes/index.json?t=$(date +%s)" | grep -q "\"$DATE\"" && break
      sleep 30
    done
    python3 - "$STATE/ntfy_topic" "docs/episodes/$DATE/episode.json" <<'PY'
import json, sys, urllib.request
topic = open(sys.argv[1]).read().strip()
ep = json.load(open(sys.argv[2], encoding="utf-8"))
body = {"topic": topic, "title": "🎧 " + ep.get("title", "Reggeli Brief"),
        "message": ep.get("headline", "Kész a mai adás."), "tags": ["headphones"],
        "click": "https://magyicode.github.io/reggeli-brief/"}
req = urllib.request.Request("https://ntfy.sh", json.dumps(body).encode(), {"Content-Type": "application/json"})
urllib.request.urlopen(req, timeout=20)
PY
    echo "ntfy sent"
  fi
else
  echo "=== $(date '+%F %T') FAILED (no episode on origin)"
  notify "Nem sikerült elkészíteni a mai adást – napló: ~/Library/Logs/reggeli-brief.log"
fi
