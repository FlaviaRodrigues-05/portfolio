import React, { useEffect, useState } from "react";

// Small pop-up message at the bottom of the screen.
// Trigger it from anywhere with toast("message") from lib/effects.js
export default function Toast() {
  const [message, setMessage] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    const onToast = (e) => {
      setMessage(e.detail);
      setId((n) => n + 1);
    };
    window.addEventListener("portfolio-toast", onToast);
    return () => window.removeEventListener("portfolio-toast", onToast);
  }, []);

  useEffect(() => {
    if (!message) return undefined;
    const t = setTimeout(() => setMessage(""), 2600);
    return () => clearTimeout(t);
  }, [message, id]);

  return (
    <div role="status" aria-live="polite" className="fixed bottom-6 inset-x-0 z-[60] flex justify-center px-5 pointer-events-none">
      {message && (
        <p
          key={id}
          className="animate-toast border-2 border-green bg-panel text-green font-pixel text-[10px] sm:text-xs px-5 py-3 pixel-corners-sm shadow-[0_0_25px_rgba(61,255,160,0.3)]"
        >
          {message}
        </p>
      )}
    </div>
  );
}
