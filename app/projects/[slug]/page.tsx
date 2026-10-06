import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowLeft, IconArrowRight, IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { getProject, projects } from "@/lib/content";
import { publicFileExists } from "@/lib/assets";
import Art from "@/components/site/Art";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.name, description: project.tagline };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const hasCover = publicFileExists(project.cover);

  return (
    <article className="section" style={{ paddingTop: 48 }}>
      <div className="wrap">
        <Link href="/#projects" className="back">
          <IconArrowLeft size={18} stroke={1.75} aria-hidden /> All projects
        </Link>
        <h1 className="detail__title">{project.name}</h1>
        <p className="detail__tag">{project.tagline}</p>

        <dl className="detail__meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{project.stack.join(", ")}</dd>
          </div>
        </dl>

        {hasCover ? (
          <div className="detail__cover">
            <Image
              src={project.cover!}
              alt={`${project.name} screenshot`}
              fill
              priority
              sizes="(min-width: 1200px) 1100px, 90vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ) : (
          <Art variant={(index % 4) as 0 | 1 | 2 | 3} className="detail__art" />
        )}

        <div className="detail__body">
          <p className="detail__summary">{project.summary}</p>
          <div>
            <ul className="detail__list">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="contact__links">
              {project.github && (
                <a className="btn" href={project.github} target="_blank" rel="noopener noreferrer">
                  <IconBrandGithub size={18} stroke={1.75} aria-hidden /> GitHub
                </a>
              )}
              {project.live && (
                <a className="btn btn--primary" href={project.live} target="_blank" rel="noopener noreferrer">
                  <IconExternalLink size={18} stroke={1.75} aria-hidden /> Live site
                </a>
              )}
            </div>
          </div>
        </div>

        {project.gallery && (
          <div className={`detail__gallery ${project.galleryShape === "square" ? "detail__gallery--square" : ""}`}>
            {project.gallery.map((g) => (
              <figure key={g.src} className="detail__shot">
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 33vw, 90vw" style={{ objectFit: "cover" }} />
              </figure>
            ))}
          </div>
        )}
        {project.credits && <p className="detail__credits muted">{project.credits}</p>}

        <div className="pager">
          <Link href="/#projects" className="back" style={{ margin: 0 }}>
            <IconArrowLeft size={18} stroke={1.75} aria-hidden /> All projects
          </Link>
          <Link href={`/projects/${next.slug}`} className="back" style={{ margin: 0 }}>
            Next: {next.name} <IconArrowRight size={18} stroke={1.75} aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
