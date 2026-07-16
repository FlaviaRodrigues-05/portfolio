import React from "react";
import SectionHeader from "./SectionHeader.jsx";
import { education, experience } from "../data.js";

export default function Education() {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28"
    >
      <SectionHeader
        level="LEVEL 04"
        title="XP & Milestones"
        subtitle="Education and experience, in order."
      />

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-pixel text-[11px] text-green mb-6">EDUCATION</h3>
          <ol className="relative border-l-2 border-purple pl-6 flex flex-col gap-8">
            {education.map((item) => (
              <li key={item.id} className="relative">
                <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 bg-cyan pixel-corners-sm" />
                <p className="font-pixel text-[9px] text-pink mb-1">
                  {item.period}
                </p>
                <p className="text-2xl text-ivory leading-snug">
                  {item.course}
                </p>
                <p className="text-xl text-muted">{item.school}</p>
                {item.detail && (
                  <p className="text-lg text-cyan mt-1">{item.detail}</p>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="font-pixel text-[11px] text-green mb-6">
            EXPERIENCE
          </h3>
          <div className="flex flex-col gap-6">
            {experience.map((job) => (
              <div
                key={job.id}
                className="border-2 border-purple bg-panel pixel-corners p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-pixel text-xs text-ivory">{job.role}</p>
                  <span className="font-pixel text-[9px] text-pink">
                    {job.year}
                  </span>
                </div>
                <p className="font-pixel text-[10px] text-cyan mb-4">
                  {job.org}
                </p>
                <ul className="flex flex-col gap-2">
                  {job.points.map((point, i) => (
                    <li key={i} className="text-xl text-muted flex gap-2">
                      <span className="text-green">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
