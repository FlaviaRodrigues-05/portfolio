import React, { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0); // how far down the page, 0-100
  const [active, setActive] = useState(null); // which section is on screen

  // XP bar: fills up as you scroll down the page
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Highlights the nav link of the section you're currently reading
  useEffect(() => {
    const ids = ["hero", ...links.map((l) => l.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

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
                aria-current={active === link.id ? "true" : undefined}
                className={`font-pixel text-[10px] tracking-wide transition-colors hover:text-cyan ${
                  active === link.id ? "text-cyan" : "text-muted"
                }`}
              >
                {active === link.id && <span className="text-pink">▸ </span>}
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

      {/* XP bar */}
      <div
        className="relative h-2 bg-panel2"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
      >
        <div
          className="h-full bg-gradient-to-r from-pink via-purple to-cyan"
          style={{ width: `${progress}%` }}
        />
        <span className="hidden sm:block absolute right-5 -top-0.5 font-pixel text-[7px] leading-3 text-ivory/80">
          XP {Math.round(progress)}%
        </span>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-5 pb-5 bg-ink border-t border-purple/40">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block font-pixel text-[11px] hover:text-cyan py-3 ${
                  active === link.id ? "text-cyan" : "text-muted"
                }`}
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
