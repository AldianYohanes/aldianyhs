"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { design, designIntro } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

// Desktop: the section pins and vertical scroll pans the strip sideways.
// Mobile and reduced motion: a plain horizontal scroll-snap strip.
export default function DesignGallery() {
  const wrap = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const el = track.current;
      if (!el) return;
      gsap.to(el, {
        x: () => -(el.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${el.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={wrap} id="design" className="design">
      <div ref={track} className="design__track">
        <div className="design__intro">
          <Image src="/images/brand/alleyway-logo-horizontal.webp" alt="Alleyway Muse logo" width={800} height={261} className="design__logo" />
          <h2 className="h2">Design and photography</h2>
          <p className="muted">{designIntro}</p>
        </div>
        {design.map((it, i) => (
          <figure key={it.src} className={`design__item ${it.contain ? "design__item--contain" : ""}`} style={{ aspectRatio: `${it.w} / ${it.h}`, ["--o" as string]: `${[-4, 5, -2, 6, -5, 3][i % 6]}dvh` }}>
            <Image src={it.src} alt={it.alt} fill sizes="(min-width: 768px) 40vw, 80vw" style={{ objectFit: it.contain ? "contain" : "cover" }} />
          </figure>
        ))}
      </div>
    </section>
  );
}
