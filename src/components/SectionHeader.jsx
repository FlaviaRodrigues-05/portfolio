import React from "react";


export default function SectionHeader({ level, title, subtitle }) {
  return (
    <div className="mb-10 sm:mb-14">
      <span className="inline-block font-pixel text-[10px] sm:text-xs text-ink bg-green px-3 py-1.5 pixel-corners-sm mb-4">
        {level}
      </span>
      <h2 className="font-pixel text-xl sm:text-3xl text-ivory leading-relaxed">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-xl sm:text-2xl mt-2 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
