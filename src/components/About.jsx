import React from "react";
import SectionHeader from "./SectionHeader.jsx";
import { personalInfo, spokenLanguages, interests } from "../data.js";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <SectionHeader level="LEVEL 01" title="About Me" />

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 border-2 border-purple bg-panel pixel-corners p-6 sm:p-8 relative">
          <span className="absolute -top-3 left-6 bg-ink px-2 font-pixel text-[9px] text-cyan">
            PLAYER INFO
          </span>
          <p className="text-xl sm:text-2xl leading-relaxed text-ivory">
            {personalInfo.about}
          </p>
        </div>

        <div className="border-2 border-purple bg-panel pixel-corners p-6 sm:p-8">
          <h3 className="font-pixel text-[11px] text-green mb-5">
            QUICK STATS
          </h3>

          <StatRow label="Location" value={personalInfo.location} />

          <div className="mb-4">
            <p className="font-pixel text-[9px] text-muted mb-2">
              LANGUAGES SPOKEN
            </p>
            <div className="flex flex-wrap gap-2">
              {spokenLanguages.map((lang) => (
                <span
                  key={lang}
                  className="text-sm font-pixel text-ivory bg-panel2 px-2 py-1 pixel-corners-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-pixel text-[9px] text-muted mb-2">INTERESTS</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((item) => (
                <span
                  key={item}
                  className="text-sm font-pixel text-ivory bg-panel2 px-2 py-1 pixel-corners-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatRow({ label, value }) {
  return (
    <div className="mb-4">
      <p className="font-pixel text-[9px] text-muted mb-1">{label}</p>
      <p className="text-xl text-cyan">{value}</p>
    </div>
  );
}
