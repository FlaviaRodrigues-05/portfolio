import React from "react";
import SectionHeader from "./SectionHeader.jsx";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28"
    >
      <SectionHeader
        level="LEVEL 03"
        title="Quest Log: Projects"
        subtitle="A few things I've built along the way."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="group flex flex-col border-2 border-purple bg-panel pixel-corners p-6 sm:p-7 hover:border-cyan transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-pixel text-[9px] text-pink">
                QUEST {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`font-pixel text-[9px] ${
                  project.status === "NEW" ? "text-pink animate-blink" : "text-green"
                }`}
              >
                ★ {project.status}
              </span>
            </div>

            <h3 className="font-pixel text-sm sm:text-base text-ivory mb-1">
              {project.title}
            </h3>
            <p className="font-pixel text-[10px] text-cyan mb-4">
              {project.tagline}
            </p>

            <p className="text-xl text-muted mb-5">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-pixel text-ivory bg-panel2 px-2 py-1.5 pixel-corners-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-auto">
              {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-pixel text-[10px] bg-cyan text-ink px-4 py-3 pixel-corners-sm pixel-press hover:bg-pink"
              >
                VISIT ▸
              </a>
              )}
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-pixel text-[10px] border-2 border-purple text-ivory px-4 py-3 pixel-corners-sm pixel-press hover:border-cyan hover:text-cyan"
              >
                VIEW CODE
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="text-center text-muted text-lg mt-10">
        More projects and code on{" "}
        <a
          href="https://github.com/FlaviaRodrigues-05"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan hover:text-pink underline"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
