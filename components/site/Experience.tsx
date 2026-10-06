import Image from "next/image";
import { experience } from "@/lib/content";
import Reveal from "./Reveal";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <h2 className="h2">Experience</h2>
        <Timeline>
          {experience.map((e) => (
            <Reveal key={e.org}>
              <article className="exp__row">
                <p className="exp__period mono">{e.period}</p>
                <div>
                  <h3 className="exp__role">{e.role}</h3>
                  <p className="exp__org">
                    {e.logo && (
                      <span className={e.logo.plate ? "plate" : "plate plate--bare"}>
                        <Image src={e.logo.src} alt={e.logo.alt} width={640} height={400} />
                      </span>
                    )}
                    {e.org}
                  </p>
                  <ul className="exp__points">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
                <div className="exp__thumb">
                  <Image src={e.image} alt={e.imageAlt} fill sizes="220px" style={{ objectFit: "cover" }} />
                </div>
              </article>
            </Reveal>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
