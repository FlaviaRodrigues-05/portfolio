import React from "react";
import { personalInfo } from "../data.js";

export default function Footer() {
  return (
    <footer className="border-t-2 border-purple/60 py-8 px-5 text-center">
      <p className="font-pixel text-[9px] text-muted">
        © {new Date().getFullYear()} {personalInfo.name} · MADE WITH REACT + TAILWIND
      </p>
    </footer>
  );
}
