import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ClickSparkles from "./components/ClickSparkles.jsx";
import Toast from "./components/Toast.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { burst, toast } from "./lib/effects.js";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a",
];

// This file just lays out the page, section by section.
// Reorder sections here if you ever want the page in a different order.
export default function App() {
  // Easter egg: type the Konami code anywhere on the page
  useEffect(() => {
    let step = 0;
    const onKey = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === KONAMI[step]) {
        step += 1;
        if (step === KONAMI.length) {
          step = 0;
          toast("Cheat code activated: +999 XP");
          for (let i = 0; i < 8; i++) {
            setTimeout(
              () =>
                burst(
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerHeight * 0.8,
                  24
                ),
              i * 120
            );
          }
        }
      } else {
        step = key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <ClickSparkles />
      <BackToTop />
      <Toast />
    </div>
  );
}
