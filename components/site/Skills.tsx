import { skillGroups } from "@/lib/content";
import Reveal from "./Reveal";
import TechIcon from "./TechIcon";
import Spot from "./Spot";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <h2 className="h2">Skills</h2>
        <div className="skillgrid">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} index={i} className={`skillgrid__cell skillgrid__cell--${i}`}>
              <Spot className="card skill" style={{ ["--bg-img" as string]: `url(${g.image})` }}>
                <h3 className="skill__label">{g.label}</h3>
                <ul className="chips" style={{ listStyle: "none" }}>
                  {g.items.map((item) => (
                    <li key={item} className="chip">
                      <TechIcon name={item} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Spot>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
