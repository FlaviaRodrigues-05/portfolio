import { useEffect } from "react";
import { burst } from "../lib/effects.js";

// Every click or tap anywhere on the page throws a few pixel sparks.
// Add data-no-spark to an element that does its own effect.
export default function ClickSparkles() {
  useEffect(() => {
    const onDown = (e) => {
      if (e.target.closest && e.target.closest("[data-no-spark]")) return;
      burst(e.clientX, e.clientY, 8);
    };
    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, []);
  return null;
}
