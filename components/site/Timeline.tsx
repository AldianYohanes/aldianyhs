"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";

// Wraps the experience list. The accent line fills as the list scrolls past, marking reading progress.
export default function Timeline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    <div ref={ref} className="exp">
      <div className="exp__track" aria-hidden>
        <motion.div className="exp__fill" style={{ scaleY }} />
      </div>
      {children}
    </div>
  );
}
