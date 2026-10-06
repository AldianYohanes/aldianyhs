import Image from "next/image";
import { chapters, education, statement } from "@/lib/content";
import Reveal from "./Reveal";
import ParallaxBand from "./ParallaxBand";
import ScrollWords from "./ScrollWords";
import Shapes from "./Shapes";
import Spot from "./Spot";

export default function About() {
  return (
    <section id="about" className="section">
      <Shapes preset="about" />
      <div className="wrap">
        <h2 className="h2">About</h2>
        <ScrollWords text={statement} />
        <ParallaxBand src="/images/design/cups-sky-wide.webp" alt="Three iced drinks on a table in front of a bright window" />
        <Reveal>
          <div className="about">
            <ol className="chapters">
              {chapters.map((ch) => (
                <li key={ch.title} className="chapter">
                  <p className="chapter__when mono">{ch.when}</p>
                  <div>
                    <h3 className="chapter__title">{ch.title}</h3>
                    <p className="chapter__text">{ch.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="edu">
              {education.map((e) => (
                <Spot key={e.school} className="card edu__item">
                  {e.logo && (
                    <span className="plate plate--lg">
                      <Image src={e.logo} alt={`${e.school} logo`} width={640} height={164} />
                    </span>
                  )}
                  <p className="edu__school">{e.school}</p>
                  <p className="muted">{e.detail}</p>
                  <p className="mono muted" style={{ fontSize: "0.85rem", marginTop: 6 }}>
                    {e.period}
                  </p>
                  <p className="muted" style={{ marginTop: 10, fontSize: "0.95rem" }}>
                    {e.note}
                  </p>
                </Spot>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
