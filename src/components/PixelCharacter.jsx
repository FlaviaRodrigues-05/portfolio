import React from "react";
import coderGirl from "../assets/coder_girl_uploaded_transparent.png";

export default function PixelCharacter() {
  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto select-none flex items-center justify-center">
      <div className="absolute w-40 h-40 bg-cyan/20 rounded-full blur-2xl animate-glow" />

      <span
        className="absolute -top-2 left-2 text-cyan font-pixel text-xs animate-float opacity-70"
        style={{ animationDelay: "0.2s" }}
        aria-hidden="true"
      >
        {"</>"}
      </span>
      <span
        className="absolute top-6 right-0 text-green font-pixel text-xs animate-float opacity-60"
        style={{ animationDelay: "1.1s" }}
        aria-hidden="true"
      >
        {"{ }"}
      </span>
      <span
        className="absolute -top-4 right-10 text-pink font-pixel text-[10px] animate-twinkle"
        style={{ animationDelay: "0.6s" }}
        aria-hidden="true"
      >
        ✦
      </span>

      
      <img
        src={coderGirl}
        alt="Pixel art illustration of Flavia coding on a laptop"
        className="relative w-full h-full object-contain animate-bob"
        style={{ imageRendering: "pixelated" }}
        draggable={false}
      />
    </div>
  );
}
