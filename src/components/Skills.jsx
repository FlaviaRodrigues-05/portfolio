import React from "react";
import SectionHeader from "./SectionHeader.jsx";
import {
  programmingLanguages,
  technicalSkills,
  softSkills,
} from "../data.js";

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28"
    >
      <SectionHeader
        level="LEVEL 02"
        title="Skills Inventory"
        subtitle="The tools and abilities collected so far."
      />

      <div className="grid md:grid-cols-3 gap-6">
        <SkillCard title="Languages & Tools" color="pink" items={programmingLanguages} />
        <SkillCard title="Technical Skills" color="cyan" items={technicalSkills} />
        <SkillCard title="Soft Skills" color="green" items={softSkills} />
      </div>
    </section>
  );
}

const colorMap = {
  pink: { border: "border-pink", text: "text-pink", dot: "bg-pink" },
  cyan: { border: "border-cyan", text: "text-cyan", dot: "bg-cyan" },
  green: { border: "border-green", text: "text-green", dot: "bg-green" },
};

function SkillCard({ title, color, items }) {
  const c = colorMap[color];
  return (
    <div className={`border-2 ${c.border} bg-panel pixel-corners p-6`}>
      <h3 className={`font-pixel text-[11px] ${c.text} mb-5`}>{title}</h3>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className={`w-2.5 h-2.5 ${c.dot} pixel-corners-sm shrink-0`} />
            <span className="text-xl text-ivory">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
