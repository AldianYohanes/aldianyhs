"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

// Wide photo that drifts slowly against the scroll. Depth cue only.
export default function ParallaxBand({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const still = !!useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);

  return (
    <div ref={ref} className="band">
      <motion.div className="band__img" style={{ y: still ? 0 : y }}>
        <Image src={src} alt={alt} fill sizes="(min-width: 1200px) 1100px, 90vw" style={{ objectFit: "cover" }} />
      </motion.div>
    </div>
  );
}
