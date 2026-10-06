"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

// Abstract moving shapes (blobs, rings, plus signs, sparks) that sit behind a section.
// CSS handles the idle morph and spin; Motion adds a scroll parallax so layers drift at different speeds.
type Kind = "blob" | "ring" | "plus" | "spark" | "dots";
type Tone = "teal" | "amber";

interface Item {
  kind: Kind;
  tone: Tone;
  x: string; // left, css
  y: string; // top, css
  size: number; // px
  drift: number; // parallax travel in px
  delay?: number;
}

const presets: Record<string, Item[]> = {
  hero: [
    { kind: "blob", tone: "teal", x: "58%", y: "-8%", size: 520, drift: 90 },
    { kind: "blob", tone: "amber", x: "-6%", y: "62%", size: 340, drift: -70, delay: 2 },
    { kind: "ring", tone: "teal", x: "46%", y: "74%", size: 150, drift: 60 },
    { kind: "plus", tone: "amber", x: "52%", y: "10%", size: 34, drift: -50 },
    { kind: "spark", tone: "amber", x: "92%", y: "56%", size: 46, drift: 80, delay: 1 },
    { kind: "dots", tone: "teal", x: "36%", y: "8%", size: 110, drift: -40 },
  ],
  about: [
    { kind: "blob", tone: "teal", x: "70%", y: "10%", size: 420, drift: 80 },
    { kind: "blob", tone: "amber", x: "-8%", y: "70%", size: 300, drift: -60, delay: 3 },
    { kind: "spark", tone: "amber", x: "88%", y: "62%", size: 40, drift: 60 },
    { kind: "plus", tone: "teal", x: "4%", y: "34%", size: 28, drift: -40 },
  ],
  contact: [
    { kind: "blob", tone: "amber", x: "62%", y: "20%", size: 380, drift: 70 },
    { kind: "ring", tone: "teal", x: "8%", y: "56%", size: 180, drift: -60 },
    { kind: "plus", tone: "amber", x: "50%", y: "8%", size: 30, drift: 40 },
    { kind: "dots", tone: "teal", x: "84%", y: "70%", size: 120, drift: -50 },
    { kind: "spark", tone: "teal", x: "24%", y: "18%", size: 38, drift: 50 },
  ],
};

function Shape({ item, progress, still }: { item: Item; progress: ReturnType<typeof useScroll>["scrollYProgress"]; still: boolean }) {
  const y = useTransform(progress, [0, 1], [-item.drift, item.drift]);
  return (
    <motion.span
      className="shape-wrap"
      style={{ left: item.x, top: item.y, width: item.size, height: item.size, y: still ? 0 : y }}
      aria-hidden
    >
      <span className={`shape shape--${item.kind} shape--${item.tone}`} style={{ animationDelay: `${item.delay ?? 0}s` }} />
    </motion.span>
  );
}

export default function Shapes({ preset }: { preset: keyof typeof presets }) {
  const ref = useRef<HTMLDivElement>(null);
  const still = !!useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <div ref={ref} className="shapes" aria-hidden>
      {presets[preset].map((item, i) => (
        <Shape key={i} item={item} progress={scrollYProgress} still={still} />
      ))}
    </div>
  );
}
