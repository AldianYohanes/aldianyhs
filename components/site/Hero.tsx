import Image from "next/image";
import Link from "next/link";
import { IconArrowDown } from "@tabler/icons-react";
import { person } from "@/lib/content";
import Art from "./Art";
import Magnetic from "./Magnetic";

export default function Hero() {
  const [first, last] = person.name.split(" ");
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div>
          <h1 className="hero__title">
            <span className="mask">
              <span style={{ ["--i" as string]: 0 }}>{first}</span>
            </span>
            <span className="mask">
              <span style={{ ["--i" as string]: 1 }}>{last}</span>
            </span>
          </h1>
          <p className="hero__intro rise" style={{ ["--i" as string]: 3 }}>
            {person.intro}
          </p>
          <div className="hero__cta rise" style={{ ["--i" as string]: 4 }}>
            <Magnetic>
              <Link href="/#projects" className="btn btn--primary">
                View projects <IconArrowDown size={18} stroke={1.75} aria-hidden />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/#contact" className="btn">
                Contact
              </Link>
            </Magnetic>
          </div>
        </div>
        <Art variant={0} core={false} className="hero__art rise">
          <div className="art__layer" style={{ ["--d" as string]: 16 }}>
            <div className="collage__main">
              <Image
                src="/images/design/bottles-trio-2.webp"
                alt="Three bottled drinks from Alleyway Muse"
                fill
                priority
                sizes="(min-width: 768px) 320px, 60vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="art__layer" style={{ ["--d"  as string]: 44 }}>
            <div className="collage__small">
              <Image
                src="/images/design/bottle-single.webp"
                alt="A single bottled drink with the Alleyway Muse label"
                fill
                sizes="(min-width: 768px) 180px, 34vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </Art>
      </div>
    </section>
  );
}
