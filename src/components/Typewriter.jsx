import React, { useEffect, useState } from "react";
import useReducedMotion from "../lib/useReducedMotion.js";

// Types a word, pauses, deletes it, then moves on to the next one.
// With reduced-motion turned on it just shows the first word.
export default function Typewriter({
  words,
  typeSpeed = 85,
  deleteSpeed = 40,
  pause = 1500,
}) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return undefined;
    const word = words[index];
    const atEnd = !deleting && length === word.length;
    const delay = atEnd ? pause : deleting ? deleteSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (atEnd) setDeleting(true);
      else if (deleting && length === 0) {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      } else setLength(length + (deleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [reduced, words, index, length, deleting, typeSpeed, deleteSpeed, pause]);

  if (reduced) return <span>{words[0]}</span>;

  return (
    <span aria-hidden="true">
      {words[index].slice(0, length)}
      <span className="text-pink animate-blink">_</span>
    </span>
  );
}
