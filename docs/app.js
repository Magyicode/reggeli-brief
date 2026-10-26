import { createOrb } from './orb.js';

const SECTIONS = {
  intro:        { label: 'Bevezető',       color: '#7dd3fc' },
  piacok:       { label: 'Piacok',         color: '#fb923c' },
  magyarorszag: { label: 'Magyarország',   color: '#34d399' },
  eu:           { label: 'EU',             color: '#60a5fa' },
  usa:          { label: 'USA',            color: '#f472b6' },
  kina:         { label: 'Kína',           color: '#f87171' },
  vilag:        { label: 'Világpolitika',  color: '#fbbf24' },
  tech:         { label: 'Tech & AI',      color: '#a78bfa' },
  humanoid:     { label: 'Humanoid robotika', color: '#2dd4bf' },
  startup:      { label: 'Startup-ökoszisztéma', color: '#fb7185' },
  kvantum:      { label: 'Kvantum & deep tech', color: '#22d3ee' },
  palyazatok:   { label: 'Pályázatok',     color: '#a3e635' },
  osszefugges:  { label: 'Összefüggések',  color: '#e879f9' },
  lehetoseg:    { label: 'Lehetőségek',    color: '#facc15' },
  zaras:        { label: 'Zárás',          color: '#7dd3fc' },
};
const sec = id => SECTIONS[id] || SECTIONS.intro;

const $ = id => document.getElementById(id);
const audio = $('audio');
const orb = createOrb($('orb'));

let ep = null, base = '', envelope = '', chapters = [];
let satIndex = []; // satellite index per section, for highlighting

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});

const isStandalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
if (!isStandalone && $('installHint')) $('installHint').hidden = false;

init().catch(err => {
  $('epDate').textContent = 'Hiba';
  $('epTitle').textContent = 'Nem sikerült betölteni az adást.';
  $('epHeadline').textContent = String(err);
});

async function init() {
  const idx = await fetchJSON('episodes/index.json');
  renderArchive(idx.episodes);
  const want = new URLSearchParams(location.search).get('d');
  const meta = idx.episodes.find(e => e.date === want) || idx.episodes[0];
  if (!meta) throw new Error('Még nincs adás.');
  base = `episodes/${meta.date}/`;
  ep = await fetchJSON(base + 'episode.json');
  render(ep);
}

// when the app comes back to the foreground, switch to a newer episode if one was published meanwhile
document.addEventListener('visibilitychange', async () => {
  if (document.hidden || !ep || !audio.paused || new URLSearchParams(location.search).has('d')) return;
  try {
    const idx = await fetchJSON('episodes/index.json');
    if (idx.episodes[0] && idx.episodes[0].date !== ep.date) location.reload();
  } catch {}
});

async function fetchJSON(url) {
  const r = await fetch(url, { cache: 'no-cache' });
  if (!r.ok) throw new Error(`${url}: ${r.status}`);
  return r.json();
}

function el(tag, attrs = {}, ...kids) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'style') n.style.cssText = v;
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v);
  }
  for (const k of kids.flat()) if (k != null) n.append(k);
  return n;
}

const fmtDate = d => new Date(d + 'T06:00:00').toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
const fmtTime = s => { s = Math.max(0, Math.floor(s || 0)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };

function render(e) {
  document.title = `Reggeli Brief – ${e.date}`;
  $('epDate').textContent = fmtDate(e.date);
  $('epTitle').textContent = e.title;
  $('epCoverage').textContent = e.coverage || '';
  $('epHeadline').textContent = e.headline || '';
  envelope = e.envelope || '';
  chapters = e.chapters || [];

  audio.src = base + (e.audio || 'audio.mp3');
  if ($('dl')) {
    $('dl').href = audio.src;
    $('dl').setAttribute('download', `reggeli-brief-${e.date}.mp3`);
  }
  $('tDur').textContent = fmtTime(e.duration);

  // markets strip
  if (e.markets?.length) {
    $('markets').hidden = false;
    $('markets').replaceChildren(...e.markets.map(m => el('div', { class: 'mk' },
      el('div', { class: 'l' }, m.label),
      el('div', { class: 'v' }, m.value),
      m.change ? el('div', { class: 'c ' + (/^[-−]/.test(m.change) ? 'down' : 'up') }, m.change) : null)));
  }

  // chips + sections
  const chips = [], blocks = [], satColors = [];
  for (const s of e.sections) {
    const meta = sec(s.id);
    const c = `--c:${meta.color}`;
    chips.push(el('button', { class: 'chip', style: c, 'aria-pressed': 'false',
      onclick: () => document.getElementById('s-' + s.id).scrollIntoView({ behavior: 'smooth' }) },
      el('i'), s.title || meta.label));
    satIndex.push([s.id, satColors.length]);
    const chap = chapters.find(ch => ch.section === s.id);
    blocks.push(el('div', { class: 'sec', id: 's-' + s.id, style: c },
      el('h2', { class: 'sec-h' }, el('i'), s.title || meta.label),
      chap ? el('button', { class: 'listen', onclick: () => seek(chap.t, true) }, `▶ Meghallgatom (${fmtTime(chap.t)})`) : null,
      s.items.map(it => {
        satColors.push(meta.color);
        return el('article', { class: 'card item', style: c },
          el('h3', {}, it.title),
          el('p', {}, it.body),
          it.why ? el('p', { class: 'why' }, el('b', {}, 'Miért fontos: '), it.why) : null,
          el('div', { class: 'src' }, (it.sources || []).map(src =>
            el('a', { href: src.url, target: '_blank', rel: 'noopener' }, `↗ ${src.name}${src.date ? ' · ' + src.date : ''}`))));
      })));
  }
  $('chips').replaceChildren(...chips);
  $('sections').replaceChildren(...blocks);
  orb.setSatellites(satColors);

  if (e.connections?.length) {
    $('connBox').hidden = false;
    $('connections').replaceChildren(...e.connections.flatMap(c => [el('h3', {}, c.title), el('p', {}, c.body)]));
  }
  if (e.opportunities?.length) {
    $('oppBox').hidden = false;
    $('opportunities').replaceChildren(...e.opportunities.flatMap(o => [
      el('h3', {}, o.title), el('p', {}, o.body), o.risk ? el('p', { class: 'risk' }, '⚠ Kockázat: ' + o.risk) : null]));
  }
  if (e.calendar?.length) {
    $('calBox').hidden = false;
    $('calendar').replaceChildren(...e.calendar.map(c => el('li', {}, el('b', {}, c.when), c.what)));
  }

  // chapter marks on the progress bar
  if (e.duration) $('barMarks').replaceChildren(...chapters.slice(1).map(ch => el('i', { style: `left:${(ch.t / e.duration) * 100}%` })));

  setupMediaSession(e);
  updateChapter(0);
}

function renderArchive(list) {
  $('archiveList').replaceChildren(...list.map(x => el('li', {},
    el('a', { href: `?d=${x.date}` }, x.title, el('small', {}, `${fmtDate(x.date)} · ${fmtTime(x.duration)}`)))));
  $('archiveBtn').onclick = () => $('archive').showModal();
}

/* ---------- player ---------- */
const playBtn = $('play');
playBtn.onclick = () => audio.paused ? audio.play() : audio.pause();
$('back').onclick = () => seek(audio.currentTime - 15);
$('fwd').onclick = () => seek(audio.currentTime + 30);
const speeds = [1, 1.15, 1.3, 1.5, 0.9];
let si = 0;
try { si = Math.max(0, speeds.indexOf(+localStorage.getItem('rb-speed'))); } catch {}
const applySpeed = () => { audio.playbackRate = speeds[si]; $('speed').textContent = speeds[si].toString().replace('.', ',') + '×'; };
$('speed').onclick = () => { si = (si + 1) % speeds.length; applySpeed(); try { localStorage.setItem('rb-speed', speeds[si]); } catch {} };
audio.addEventListener('loadedmetadata', applySpeed);
applySpeed();

function seek(t, play) {
  audio.currentTime = Math.max(0, Math.min(t, audio.duration || ep?.duration || t));
  if (play) audio.play();
}

audio.addEventListener('play', () => { $('icPlay').hidden = true; $('icPause').hidden = false; playBtn.setAttribute('aria-label', 'Szünet'); });
audio.addEventListener('pause', () => { $('icPlay').hidden = false; $('icPause').hidden = true; playBtn.setAttribute('aria-label', 'Lejátszás'); orb.setLevel(0); });
audio.addEventListener('timeupdate', () => {
  const d = audio.duration || ep?.duration || 1;
  $('barFill').style.width = (audio.currentTime / d * 100) + '%';
  $('tCur').textContent = fmtTime(audio.currentTime);
  updateChapter(audio.currentTime);
  try { localStorage.setItem('rb-pos-' + ep.date, audio.currentTime | 0); } catch {}
});
audio.addEventListener('loadedmetadata', () => {
  $('tDur').textContent = fmtTime(audio.duration);
  try { const p = +localStorage.getItem('rb-pos-' + ep.date); if (p > 5 && p < audio.duration - 10) audio.currentTime = p; } catch {}
});

// progress bar scrubbing
const bar = $('bar');
const scrub = ev => {
  const r = bar.getBoundingClientRect();
  const x = Math.min(1, Math.max(0, (ev.clientX - r.left) / r.width));
  seek(x * (audio.duration || ep.duration));
};
bar.addEventListener('pointerdown', ev => { bar.setPointerCapture(ev.pointerId); scrub(ev); bar.onpointermove = scrub; });
bar.addEventListener('pointerup', () => { bar.onpointermove = null; });
bar.addEventListener('keydown', ev => { if (ev.key === 'ArrowRight') seek(audio.currentTime + 10); if (ev.key === 'ArrowLeft') seek(audio.currentTime - 10); });

let curChap = -1;
function updateChapter(t) {
  let i = 0;
  for (let k = 0; k < chapters.length; k++) if (chapters[k].t <= t + 0.2) i = k;
  if (i === curChap || !chapters[i]) return;
  curChap = i;
  const ch = chapters[i], meta = sec(ch.section);
  $('nowChapter').innerHTML = '';
  $('nowChapter').append(el('b', {}, meta.label), ch.title !== meta.label ? ' · ' + ch.title : '');
  orb.setColors(meta.color, shift(meta.color));
  document.querySelectorAll('.chip').forEach((c, k) => c.setAttribute('aria-pressed', String(ep.sections[k]?.id === ch.section)));
  const s = satIndex.find(([id]) => id === ch.section);
  orb.highlight(s ? s[1] : -1);
  if ('mediaSession' in navigator && ep) navigator.mediaSession.metadata = mediaMeta(ep, `${meta.label}: ${ch.title}`);
}
const shift = hex => { const n = parseInt(hex.slice(1), 16); const r = n >> 16, g = (n >> 8) & 255, b = n & 255; return `rgb(${b},${r},${g})`; };

// speech envelope (10 Hz, digits 0-9) drives the orb; works offline and in background-safe <audio>
function tick() {
  if (!audio.paused && envelope) {
    const i = Math.floor(audio.currentTime * 10);
    const v = (+envelope[i] || 0) / 9;
    orb.setLevel(v * (0.75 + Math.random() * 0.25));
  }
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

function mediaMeta(e, sub) {
  return new MediaMetadata({
    title: sub || e.title, artist: 'Reggeli Brief', album: fmtDate(e.date),
    artwork: [{ src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' }],
  });
}
function setupMediaSession(e) {
  if (!('mediaSession' in navigator)) return;
  navigator.mediaSession.metadata = mediaMeta(e);
  const ms = navigator.mediaSession;
  ms.setActionHandler('play', () => audio.play());
  ms.setActionHandler('pause', () => audio.pause());
  ms.setActionHandler('seekbackward', () => seek(audio.currentTime - 15));
  ms.setActionHandler('seekforward', () => seek(audio.currentTime + 30));
  ms.setActionHandler('previoustrack', () => seek((chapters[Math.max(0, curChap - 1)] || {}).t || 0));
  ms.setActionHandler('nexttrack', () => { const n = chapters[curChap + 1]; if (n) seek(n.t); });
}
