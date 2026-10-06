import React from "react";
import SectionHeader from "./SectionHeader.jsx";
import { personalInfo } from "../data.js";
import { burst, toast } from "../lib/effects.js";

// Copies the email address so it can be pasted anywhere
async function copyEmail(event) {
  const r = event.currentTarget.getBoundingClientRect();
  try {
    await navigator.clipboard.writeText(personalInfo.email);
    burst(r.left + r.width / 2, r.top + r.height / 2, 14);
    toast("Email copied to clipboard");
  } catch {
    toast("Could not copy. Email: " + personalInfo.email);
  }
}

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

        <button
          type="button"
          data-no-spark
          onClick={copyEmail}
          className="mt-8 font-pixel text-[10px] border-2 border-green text-green px-5 py-3.5 pixel-corners-sm pixel-press hover:bg-green hover:text-ink"
        >
          COPY EMAIL
        </button>
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
      className="border-2 border-purple hover:border-cyan bg-panel2 px-5 py-4 pixel-corners-sm pixel-press min-w-[150px]"
    >
      <p className="font-pixel text-[9px] text-pink mb-2">{label}</p>
      <p className="text-lg text-ivory break-words">{value}</p>
    </a>
  );
}
