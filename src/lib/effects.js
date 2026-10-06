// ---------------------------------------------------------------------
// Small helpers for the interactive bits (sparkles + toast messages).
// They talk to the page directly, so any component can call them
// without needing props or state.
// ---------------------------------------------------------------------

const COLORS = ["#ff3fb0", "#3dffa0", "#4ffbea", "#7a5cff", "#eef0ff"];
let layer = null;

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getLayer() {
  if (!layer || !layer.isConnected) {
    layer = document.createElement("div");
    layer.setAttribute("aria-hidden", "true");
    layer.style.cssText =
      "position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden";
    document.body.appendChild(layer);
  }
  return layer;
}

// Shoots a little burst of square pixels out from (x, y) on the screen.
export function burst(x, y, count = 10) {
  if (prefersReducedMotion()) return;
  const host = getLayer();
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    const size = 4 + Math.floor(Math.random() * 3) * 2; // 4, 6 or 8 px
    const angle = Math.random() * Math.PI * 2;
    const dist = 26 + Math.random() * 46;
    p.style.cssText =
      `position:absolute;left:${x}px;top:${y}px;width:${size}px;height:${size}px;` +
      `background:${COLORS[Math.floor(Math.random() * COLORS.length)]};` +
      `--dx:${(Math.cos(angle) * dist).toFixed(1)}px;--dy:${(Math.sin(angle) * dist).toFixed(1)}px;` +
      `animation:spark 600ms steps(6) forwards`;
    host.appendChild(p);
    setTimeout(() => p.remove(), 650);
  }
}

// Shows a short message at the bottom of the screen (see Toast.jsx).
export function toast(message) {
  window.dispatchEvent(new CustomEvent("portfolio-toast", { detail: message }));
}
