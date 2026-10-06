import React, { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { skillGroups, technicalSkills, softSkills } from "../data.js";
import { burst, toast } from "../lib/effects.js";

// Every group becomes a card. The two lists at the end are added to the same grid.
const groups = [
  ...skillGroups,
  { title: "Analytical Skills", color: "cyan", items: technicalSkills },
  { title: "Soft Skills", color: "green", items: softSkills },
];
const total = groups.reduce((sum, g) => sum + g.items.length, 0);

export default function Skills() {
  // which skills the visitor has "collected" by clicking them
  const [collected, setCollected] = useState(() => new Set());

  const toggle = (key, event) => {
    const next = new Set(collected);
    if (next.has(key)) {
      next.delete(key);
    } else {
      next.add(key);
      const r = event.currentTarget.getBoundingClientRect();
      const done = next.size === total;
      burst(r.left + 14, r.top + r.height / 2, done ? 28 : 14);
      if (done) toast("All skills collected! Achievement unlocked.");
    }
    setCollected(next);
  };

  const percent = (collected.size / total) * 100;

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

      {/* collection meter */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8">
        <p className="font-pixel text-[10px] text-cyan" aria-live="polite">
          COLLECTED {collected.size}/{total}
        </p>
        <div
          className="flex-1 min-w-[140px] h-3.5 border-2 border-purple bg-panel"
          role="progressbar"
          aria-label="Skills collected"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={collected.size}
        >
          <div
            className="h-full bg-green"
            style={{
              width: `${percent}%`,
              transition: "width 300ms steps(8)",
            }}
          />
        </div>
        <p className="text-muted text-lg">Click a skill to collect it.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <SkillCard
            key={group.title}
            group={group}
            collected={collected}
            onToggle={toggle}
          />
        ))}
      </div>
    </section>
  );
}

const colorMap = {
  pink: { border: "border-pink", text: "text-pink", dot: "bg-pink", ring: "border-pink" },
  cyan: { border: "border-cyan", text: "text-cyan", dot: "bg-cyan", ring: "border-cyan" },
  green: { border: "border-green", text: "text-green", dot: "bg-green", ring: "border-green" },
};

function SkillCard({ group, collected, onToggle }) {
  const c = colorMap[group.color];
  const got = group.items.filter((i) => collected.has(`${group.title}:${i}`)).length;

  return (
    <div className={`border-2 ${c.border} bg-panel pixel-corners p-6`}>
      <div className="flex items-center justify-between mb-5">
        <h3 className={`font-pixel text-[11px] ${c.text}`}>{group.title}</h3>
        <span className="font-pixel text-[9px] text-muted">
          {got}/{group.items.length}
        </span>
      </div>
      <ul className="flex flex-col gap-1">
        {group.items.map((item) => {
          const key = `${group.title}:${item}`;
          const on = collected.has(key);
          return (
            <li key={item}>
              <button
                type="button"
                data-no-spark
                aria-pressed={on}
                onClick={(e) => onToggle(key, e)}
                className="group flex w-full items-center gap-3 py-1.5 text-left transition-transform duration-100 hover:translate-x-1"
              >
                <span
                  className={`w-3 h-3 shrink-0 border-2 ${c.ring} pixel-corners-sm ${
                    on ? `${c.dot} animate-pop` : "bg-transparent"
                  }`}
                />
                <span
                  className={`text-xl transition-colors ${
                    on ? "text-ivory" : "text-muted group-hover:text-ivory"
                  }`}
                >
                  {item}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
