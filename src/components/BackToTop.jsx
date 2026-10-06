import React, { useEffect, useState } from "react";

// Appears once you've scrolled down a bit; jumps back to the top.
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-5 z-40 font-pixel text-[10px] bg-cyan text-ink px-3 py-3 pixel-corners-sm pixel-press hover:bg-pink"
    >
      ▲ TOP
    </button>
  );
}
