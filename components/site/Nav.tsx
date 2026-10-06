"use client";
import Link from "next/link";
import { motion, useScroll, useSpring } from "motion/react";
import { person } from "@/lib/content";

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/#design", label: "Design" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <header className="nav">
      <div className="nav__row">
        <Link href="/" className="nav__name">
          {person.name}
        </Link>
        <nav aria-label="Primary" className="nav__links">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <motion.div className="nav__progress" style={{ scaleX }} aria-hidden />
    </header>
  );
}
