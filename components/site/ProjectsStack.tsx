"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { Project } from "@/lib/content";
import Art from "./Art";
import Spot from "./Spot";
import TechIcon from "./TechIcon";

gsap.registerPlugin(ScrollTrigger);

// Cards pin under the nav with CSS sticky. GSAP only scales and dims the card
// that is being covered, so the stack reads as depth. Desktop and motion-OK only.
export default function ProjectsStack({ projects }: { projects: (Project & { hasCover: boolean })[] }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".stack__card", root.current);
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.94,
          filter: "brightness(0.55)",
          ease: "none",
          scrollTrigger: { trigger: cards[i + 1], start: "top bottom", end: "top 25%", scrub: true },
        });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={root} className="stack">
      {projects.map((p, i) => (
        <Spot key={p.slug} className="stack__card card" >
          <div className="stack__body" style={{ ["--i" as string]: i }}>
            <div className="stack__text">
              <h3 className="stack__name">
                <Link href={`/projects/${p.slug}`} className="stretched">
                  {p.name}
                </Link>
              </h3>
              <p className="stack__tag">{p.tagline}</p>
              <ul className="card__points">
                {p.highlights.slice(0, 3).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <ul className="chips" style={{ listStyle: "none", marginTop: "auto", paddingTop: 24 }}>
                {p.stack.slice(0, 5).map((s) => (
                  <li key={s} className="chip">
                    <TechIcon name={s} />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="stack__cta">
                View case study <IconArrowUpRight size={18} stroke={1.75} aria-hidden />
              </p>
            </div>
            {p.hasCover ? (
              <div className="stack__art stack__photo">
                <Image src={p.cover!} alt={`${p.name} brand photo`} fill sizes="(min-width: 768px) 440px, 90vw" style={{ objectFit: "cover" }} />
              </div>
            ) : (
              <Art variant={(i % 4) as 0 | 1 | 2 | 3} className="stack__art" />
            )}
          </div>
        </Spot>
      ))}
    </div>
  );
}
