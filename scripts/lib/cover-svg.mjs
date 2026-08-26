// Generates an original, on-brand 1200x630 cover SVG per post. Motif + minor
// positional variation are derived deterministically from the post slug, so
// each post gets a distinct-but-consistent piece of cover art with no manual
// per-post design work.

const BG = "#0A0A0C";
const ACCENT = "#F11601";
const FG = "#F2F1ED";

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function seedFromString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function nodesLayer(rng, count = 10) {
  let out = "";
  for (let i = 0; i < count; i++) {
    const x = Math.round(80 + rng() * 1040);
    const y = Math.round(80 + rng() * 470);
    const r = rng() > 0.85 ? 3 : 1.6;
    out += `<circle cx="${x}" cy="${y}" r="${r}" fill="${FG}" opacity="${(0.08 + rng() * 0.12).toFixed(2)}" />`;
  }
  return out;
}

function gridLayer() {
  let out = "";
  for (let x = 0; x <= 1200; x += 60) {
    out += `<line x1="${x}" y1="0" x2="${x}" y2="630" stroke="${FG}" stroke-opacity="0.035" stroke-width="1" />`;
  }
  for (let y = 0; y <= 630; y += 60) {
    out += `<line x1="0" y1="${y}" x2="1200" y2="${y}" stroke="${FG}" stroke-opacity="0.035" stroke-width="1" />`;
  }
  return out;
}

// Motif 1: nested frames with a deliberate gap + escape line breaking through.
function motifBreach(rng) {
  const gapY = 300 + rng() * 60;
  return `
    <rect x="360" y="115" width="480" height="400" rx="28" fill="none" stroke="${FG}" stroke-opacity="0.16" stroke-width="2" />
    <rect x="410" y="155" width="380" height="320" rx="22" fill="none" stroke="${FG}" stroke-opacity="0.22" stroke-width="2" />
    <path d="M 460 195 L 740 195 L 740 ${gapY - 22} M 740 ${gapY + 22} L 740 435 L 460 435" fill="none" stroke="${FG}" stroke-opacity="0.3" stroke-width="2" />
    <circle cx="600" cy="${gapY}" r="90" fill="${ACCENT}" opacity="0.14" />
    <path d="M 600 ${gapY} L 900 ${gapY - 40}" stroke="${ACCENT}" stroke-width="3" fill="none" />
    <circle cx="600" cy="${gapY}" r="7" fill="${ACCENT}" />
    <circle cx="900" cy="${gapY - 40}" r="5" fill="${ACCENT}" />
  `;
}

// Motif 2: mixing-board faders, one centered precisely in a highlighted target zone.
function motifCalibration(rng) {
  const xs = [405, 495, 585, 705, 795, 885];
  const targetIndex = Math.floor(rng() * xs.length);
  let out = "";
  xs.forEach((x, i) => {
    out += `<line x1="${x}" y1="180" x2="${x}" y2="450" stroke="${FG}" stroke-opacity="0.14" stroke-width="2" />`;
    if (i === targetIndex) {
      out += `<rect x="${x - 24}" y="255" width="48" height="40" fill="none" stroke="${ACCENT}" stroke-width="2" stroke-dasharray="4 4" />`;
      out += `<rect x="${x - 20}" y="268" width="40" height="16" rx="4" fill="${ACCENT}" />`;
      out += `<circle cx="${x}" cy="315" r="70" fill="${ACCENT}" opacity="0.1" />`;
    } else {
      const y = 200 + rng() * 200;
      out += `<rect x="${x - 20}" y="${y}" width="40" height="16" rx="4" fill="${FG}" opacity="0.3" />`;
    }
  });
  return out;
}

// Motif 3: node graph, one connection path highlighted end-to-end.
function motifNetwork(rng) {
  const pts = Array.from({ length: 7 }, () => ({
    x: 340 + rng() * 520,
    y: 160 + rng() * 310,
  }));
  let lines = "";
  for (let i = 0; i < pts.length - 1; i++) {
    lines += `<line x1="${pts[i].x.toFixed(0)}" y1="${pts[i].y.toFixed(0)}" x2="${pts[i + 1].x.toFixed(0)}" y2="${pts[i + 1].y.toFixed(0)}" stroke="${i === 2 ? ACCENT : FG}" stroke-opacity="${i === 2 ? 0.8 : 0.16}" stroke-width="${i === 2 ? 2.5 : 1.5}" />`;
  }
  let dots = "";
  pts.forEach((pt, i) => {
    const active = i === 2 || i === 3;
    dots += `<circle cx="${pt.x.toFixed(0)}" cy="${pt.y.toFixed(0)}" r="${active ? 7 : 4}" fill="${active ? ACCENT : FG}" opacity="${active ? 1 : 0.35}" />`;
  });
  return lines + dots;
}

// Motif 4: ascending bars, one bar (the outcome) picked out in red.
function motifAscend(rng) {
  const bars = 7;
  const highlight = 4 + Math.floor(rng() * 3);
  let out = "";
  for (let i = 0; i < bars; i++) {
    const x = 330 + i * 78;
    const h = 60 + i * 28 + rng() * 20;
    const y = 470 - h;
    const isHighlight = i === highlight;
    out += `<rect x="${x}" y="${y.toFixed(0)}" width="46" height="${h.toFixed(0)}" rx="4" fill="${isHighlight ? ACCENT : FG}" opacity="${isHighlight ? 1 : 0.18}" />`;
  }
  out += `<line x1="300" y1="470" x2="900" y2="470" stroke="${FG}" stroke-opacity="0.25" stroke-width="2" />`;
  return out;
}

const MOTIFS = {
  breach: motifBreach,
  calibration: motifCalibration,
  network: motifNetwork,
  ascend: motifAscend,
};

export function generateCoverSvg({ slug, kicker, motif }) {
  const rng = mulberry32(seedFromString(slug));
  const motifFn = MOTIFS[motif] || MOTIFS.network;

  return `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise" />
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.02 0" />
    </filter>
  </defs>
  <rect width="1200" height="630" fill="${BG}" />
  ${gridLayer()}
  ${nodesLayer(rng)}
  ${motifFn(rng)}
  <rect width="1200" height="630" filter="url(#grain)" />
  <text x="64" y="72" font-family="Helvetica, Arial, sans-serif" font-size="20" letter-spacing="2" fill="${FG}" opacity="0.55">${escapeXml(kicker.toUpperCase())}</text>
  <text x="64" y="580" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="1" fill="${FG}" opacity="0.65">Kryttr</text>
</svg>`;
}

export const MOTIF_NAMES = Object.keys(MOTIFS);
