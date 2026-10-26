// Audio-reactive particle globe + orbiting "news satellites" (one per story, colored by section).
import * as THREE from './vendor/three.module.min.js';

export function createOrb(canvas) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.setClearColor(0x070b14, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 6);

  // --- particle sphere (fibonacci distribution)
  const N = 5200;
  const pos = new Float32Array(N * 3);
  const seed = new Float32Array(N);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const th = golden * i;
    pos.set([Math.cos(th) * r, y, Math.sin(th) * r], i * 3);
    seed[i] = Math.random();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('seed', new THREE.BufferAttribute(seed, 1));

  const uniforms = {
    uTime: { value: 0 },
    uLevel: { value: 0 },
    uColA: { value: new THREE.Color('#7dd3fc') },
    uColB: { value: new THREE.Color('#a78bfa') },
    uSize: { value: 2.2 * renderer.getPixelRatio() },
    uCamDist: { value: 7 },
    uFade: { value: 1 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */`
      attribute float seed;
      uniform float uTime, uLevel, uSize, uCamDist;
      varying float vMix; varying float vAlpha;
      float wave(vec3 p, float t) {
        return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) * sin(p.z * 3.4 + t * 0.9);
      }
      void main() {
        vec3 p = position;
        float t = uTime;
        float w = wave(p * (1.0 + uLevel), t) + 0.5 * wave(p * 2.3, t * 1.7);
        float disp = 0.06 * w + uLevel * (0.22 * w + 0.08 * sin(seed * 40.0 + t * 8.0));
        p *= 1.55 + disp;
        vMix = 0.5 + 0.5 * w;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float depth = -mv.z;
        vAlpha = mix(1.0, 0.18, smoothstep(uCamDist - 1.6, uCamDist + 1.6, depth)) * (0.55 + 0.45 * seed);
        gl_PointSize = uSize * (1.0 + uLevel * 1.4) * (uCamDist / depth);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uColA, uColB;
      uniform float uFade;
      varying float vMix; varying float vAlpha;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c);
        if (d > 0.5) discard;
        float glow = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(mix(uColA, uColB, vMix), glow * vAlpha * uFade);
      }`,
  });
  const globe = new THREE.Points(geo, mat);
  scene.add(globe);

  // --- background stars
  const SN = 900, sp = new Float32Array(SN * 3);
  for (let i = 0; i < SN; i++) sp.set([(Math.random() - .5) * 40, (Math.random() - .5) * 40, -10 - Math.random() * 20], i * 3);
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
  const stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0x64748b, size: 0.06, transparent: true, opacity: 0.7 }));
  scene.add(stars);

  // --- satellites
  const satGroup = new THREE.Group();
  scene.add(satGroup);
  const dotTex = makeDotTexture();
  let sats = [];
  function setSatellites(colors) {
    satGroup.clear();
    sats = colors.map((c, i) => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: dotTex, color: new THREE.Color(c), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      s.scale.setScalar(0.16);
      satGroup.add(s);
      return {
        s,
        r: 2.15 + (i % 4) * 0.18,
        speed: 0.12 + ((i * 37) % 10) / 70,
        phase: (i / colors.length) * Math.PI * 2,
        tilt: ((i * 53) % 17) / 17 * 1.4 - 0.7,
      };
    });
  }

  // --- state
  let level = 0, target = 0, highlight = -1, camDist = 7;
  const colA = new THREE.Color('#7dd3fc'), colB = new THREE.Color('#a78bfa');

  function resize() {
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // fit globe + satellite ring (radius ~2.9) horizontally; keep it in the upper part of the screen
    const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    camDist = Math.max(3.6 / tanHalf, 3.0 / (tanHalf * camera.aspect));
    camera.position.set(0, -tanHalf * camDist * 0.55, camDist);
    uniforms.uCamDist.value = camDist;
    camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize);
  resize();

  let scrollY = 0;
  addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  const clock = new THREE.Clock();
  let running = true;
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) { clock.getDelta(); requestAnimationFrame(frame); }
  });

  function frame() {
    if (!running) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;
    level += (target - level) * Math.min(1, dt * 10);
    uniforms.uLevel.value = reduced ? level * 0.3 : level;
    uniforms.uTime.value = t * (reduced ? 0.2 : 1);
    uniforms.uColA.value.lerp(colA, dt * 2);
    uniforms.uColB.value.lerp(colB, dt * 2);
    globe.rotation.y += dt * (0.08 + level * 0.25);
    globe.rotation.x = Math.sin(t * 0.1) * 0.15;
    const fade = Math.max(0.25, 1 - scrollY / (innerHeight * 1.2));
    uniforms.uFade.value = fade;
    globe.position.y = scrollY / innerHeight * 1.2;
    satGroup.position.y = globe.position.y;
    sats.forEach((o, i) => {
      const a = o.phase + t * o.speed * (reduced ? 0.2 : 1);
      o.s.position.set(Math.cos(a) * o.r, Math.sin(a) * o.r * o.tilt * 0.5, Math.sin(a) * o.r);
      const hl = i === highlight;
      const k = camDist / 7;
      o.s.scale.setScalar(k * (hl ? 0.34 + Math.sin(t * 6) * 0.05 : 0.15));
      o.s.material.opacity = hl ? 1 : 0.75 * fade;
    });
    stars.rotation.z = t * 0.005;
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  return {
    setLevel(v) { target = v; },
    setColors(a, b) { colA.set(a); colB.set(b || a); },
    setSatellites,
    highlight(i) { highlight = i; },
  };
}

function makeDotTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.25, 'rgba(255,255,255,.8)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}
