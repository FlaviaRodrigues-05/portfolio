import React from "react";
import PixelCharacter from "./PixelCharacter.jsx";
import { personalInfo } from "../data.js";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-5 sm:px-8 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        {starPositions.map((pos, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-cyan animate-twinkle"
            style={{ top: pos.top, left: pos.left, animationDelay: pos.delay }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-14 items-center">
      
        <div>
          <p className="font-pixel text-cyan text-[10px] sm:text-xs mb-5 animate-blink">
            ▸ NEW PLAYER JOINED
          </p>

          <h1 className="font-pixel text-2xl sm:text-4xl leading-relaxed text-pink drop-shadow-[0_0_12px_rgba(61,255,160,0.45)]">
            {personalInfo.name}
          </h1>

          <p className="font-pixel text-green text-sm sm:text-lg mt-4 drop-shadow-[0_0_10px_rgba(255,63,176,0.4)]">
            {personalInfo.title}
          </p>

          <p className="text-muted text-xl sm:text-2xl mt-6 max-w-md">
            {personalInfo.summary}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="font-pixel text-[11px] bg-pink text-ink px-5 py-3.5 pixel-corners-sm hover:bg-cyan transition-colors"
            >
              ▶ START
            </a>
            <a
              href="#contact"
              className="font-pixel text-[11px] border-2 border-purple text-ivory px-5 py-3.5 pixel-corners-sm hover:border-cyan hover:text-cyan transition-colors"
            >
              CONTACT ME
            </a>
          </div>
        </div>

        {/* Right: the "game screen" containing the animated pixel character */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="border-4 border-green pixel-corners bg-panel p-6 sm:p-8 shadow-[0_0_35px_rgba(61,255,160,0.25)] crt-lines">
            <PixelCharacter />
          </div>
          <p className="text-center font-pixel text-[9px] text-muted mt-4">
            LVL 19 · CS STUDENT · MUMBAI
          </p>
        </div>
      </div>
    </section>
  );
}

const starPositions = [
  { top: "10%", left: "6%", delay: "0s" },
  { top: "20%", left: "88%", delay: "0.4s" },
  { top: "35%", left: "15%", delay: "0.8s" },
  { top: "60%", left: "92%", delay: "1.2s" },
  { top: "75%", left: "8%", delay: "0.6s" },
  { top: "85%", left: "80%", delay: "1.6s" },
  { top: "48%", left: "50%", delay: "1s" },
];
