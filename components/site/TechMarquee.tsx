import { skillGroups } from "@/lib/content";
import TechIcon from "./TechIcon";

// The one marquee on the page: tool names with their logos, slow, pauses on hover.
// Under reduced motion it becomes a static wrapped list.
export default function TechMarquee() {
  const names = skillGroups.flatMap((g) => g.items);
  const row = (hidden: boolean) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {names.map((n) => (
        <li key={n} className="marquee__item">
          <TechIcon name={n} size={26} />
          <span>{n}</span>
          <span className="marquee__spark" aria-hidden />
        </li>
      ))}
    </ul>
  );

  return (
    <section className="marquee" aria-label="Tools I use">
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
