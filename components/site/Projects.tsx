import { projects } from "@/lib/content";
import { publicFileExists } from "@/lib/assets";
import ProjectsStack from "./ProjectsStack";

export default function Projects() {
  const items = projects.map((p) => ({ ...p, hasCover: publicFileExists(p.cover) }));
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <h2 className="h2">Selected projects</h2>
        <ProjectsStack projects={items} />
      </div>
    </section>
  );
}
