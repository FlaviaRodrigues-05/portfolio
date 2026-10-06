import React, { useRef } from "react";
import useReducedMotion from "../lib/useReducedMotion.js";

// Gently tilts whatever is inside it toward the mouse pointer.
// Does nothing on touch screens or when reduced-motion is on.
export default function Tilt({ children, className = "", max = 7 }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const onMove = (e) => {
    if (reduced || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${(-py * max * 2).toFixed(2)}deg) rotateY(${(px * max * 2).toFixed(2)}deg)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ transition: "transform 140ms ease-out", willChange: "transform" }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}
