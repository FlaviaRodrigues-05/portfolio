import React from "react";
import SectionHeader from "./SectionHeader.jsx";
import { personalInfo } from "../data.js";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28"
    >
      <SectionHeader
        level="LEVEL 05"
        title="Save & Continue"
        subtitle="Let's connect - reach out through any of these."
      />

      <div className="border-4 border-green pixel-corners bg-panel p-8 sm:p-12 text-center crt-lines shadow-[0_0_35px_rgba(61,255,160,0.2)]">
        <p className="font-pixel text-sm sm:text-lg text-green mb-8 animate-blink">
          ▶ GAME SAVED
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <ContactLink
            href={`mailto:${personalInfo.email}`}
            label="Email"
            value={personalInfo.email}
          />
          <ContactLink
            href={`tel:${personalInfo.phone}`}
            label="Phone"
            value={personalInfo.phone}
          />
          <ContactLink
            href={personalInfo.linkedin}
            label="LinkedIn"
            value="Connect"
            external
          />
          <ContactLink
            href={personalInfo.github}
            label="GitHub"
            value="View Code"
            external
          />
        </div>
      </div>
    </section>
  );
}

function ContactLink({ href, label, value, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="border-2 border-purple hover:border-cyan bg-panel2 px-5 py-4 pixel-corners-sm transition-colors min-w-[150px]"
    >
      <p className="font-pixel text-[9px] text-pink mb-2">{label}</p>
      <p className="text-lg text-ivory break-words">{value}</p>
    </a>
  );
}
