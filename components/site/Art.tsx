"use client";
import { useRef } from "react";

// Generative cover art built from layered CSS (conic wash, rings, core).
// Pointer position drives CSS variables only, so nothing re-renders.
type Variant = 0 | 1 | 2 | 3;

interface Ring {
  size: number; // % of container
  radius: string;
  rotate: number;
  dx: number; // % offset
  dy: number;
  depth: number; // parallax strength in px
}

function rings(variant: Variant): Ring[] {
  const out: Ring[] = [];
  if (variant === 0) {
    // concentric circles
    for (let i = 0; i < 7; i++) out.push({ size: 26 + i * 11, radius: "50%", rotate: 0, dx: 0, dy: 0, depth: 6 + i * 5 });
  } else if (variant === 1) {
    // rotated rounded squares, a network feel
    for (let i = 0; i < 6; i++) out.push({ size: 30 + i * 12, radius: "26%", rotate: i * 14, dx: 0, dy: 0, depth: 8 + i * 5 });
  } else if (variant === 2) {
    // overlapping circles
    for (let i = 0; i < 5; i++) out.push({ size: 52, radius: "50%", rotate: 0, dx: (i - 2) * 11, dy: ((i % 2) - 0.5) * 10, depth: 10 + i * 8 });
  } else {
    // tall pills crossing
    for (let i = 0; i < 6; i++) out.push({ size: 34 + i * 10, radius: "50% / 30%", rotate: i * 30, dx: 0, dy: 0, depth: 8 + i * 5 });
  }
  return out;
}

export default function Art({
  variant = 0,
  className = "",
  core = true,
  children,
}: {
  variant?: Variant;
  className?: string;
  core?: boolean;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", String((e.clientX - r.left) / r.width - 0.5));
    el.style.setProperty("--py", String((e.clientY - r.top) / r.height - 0.5));
  };
  const onLeave = () => {
    ref.current?.style.setProperty("--px", "0");
    ref.current?.style.setProperty("--py", "0");
  };

  return (
    <div ref={ref} className={`art ${className}`} onPointerMove={onMove} onPointerLeave={onLeave} aria-hidden>
      <div className="art__tilt">
        <div className="art__layer" style={{ ["--d" as string]: 24 }}>
          <div className="art__conic" style={{ ["--a" as string]: `${variant * 70}deg` }} />
        </div>
        {rings(variant).map((r, i) => (
          <div key={i} className="art__layer" style={{ ["--d" as string]: r.depth }}>
            <span
              className="art__ring"
              style={{
                width: `${r.size}%`,
                height: `${r.size}%`,
                borderRadius: r.radius,
                left: `${50 + r.dx}%`,
                top: `${50 + r.dy}%`,
                transform: `translate(-50%, -50%) rotate(${r.rotate}deg)`,
                opacity: 0.25 + (i % 3) * 0.2,
              }}
            />
          </div>
        ))}
        {core && (
          <div className="art__layer" style={{ ["--d" as string]: 46 }}>
            <span className="art__core" />
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
