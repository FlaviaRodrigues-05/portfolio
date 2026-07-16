import React, { useState } from "react";

// The sections a nav link can jump to. `id` must match the `id` prop
// given to that section's <section> tag further down the page.
const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  // Tracks whether the mobile menu is open or closed
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-ink/90 backdrop-blur border-b-2 border-purple/60">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
        <a
          href="#hero"
          className="font-pixel text-xs sm:text-sm text-green hover:text-cyan transition-colors"
        >
          Flavia Rodrigues<span className="text-pink">_</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="font-pixel text-[10px] tracking-wide text-muted hover:text-cyan transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden font-pixel text-[10px] text-cyan border border-cyan px-3 py-2 pixel-corners-sm"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? "X" : "MENU"}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-5 pb-5 bg-ink border-t border-purple/40">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="block font-pixel text-[11px] text-muted hover:text-cyan py-3"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
