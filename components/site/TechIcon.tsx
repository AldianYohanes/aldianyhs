import {
  siBun,
  siDart,
  siDjango,
  siFastapi,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siGitlab,
  siJavascript,
  siLatex,
  siLaravel,
  siMantine,
  siNextdotjs,
  siPostgresql,
  siPython,
  siReact,
  siStreamlit,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";

// Brand glyphs from Simple Icons, drawn in the current text color so the palette stays single-accent.
const icons: Record<string, { path: string }> = {
  Bun: siBun,
  Dart: siDart,
  Django: siDjango,
  FastAPI: siFastapi,
  Figma: siFigma,
  Firebase: siFirebase,
  Flutter: siFlutter,
  Git: siGit,
  GitHub: siGithub,
  GitLab: siGitlab,
  JavaScript: siJavascript,
  LaTeX: siLatex,
  Laravel: siLaravel,
  Mantine: siMantine,
  "Next.js": siNextdotjs,
  PostgreSQL: siPostgresql,
  Python: siPython,
  React: siReact,
  Streamlit: siStreamlit,
  Supabase: siSupabase,
  Tailwind: siTailwindcss,
  TypeScript: siTypescript,
  Vercel: siVercel,
};

export default function TechIcon({ name, size = 16 }: { name: string; size?: number }) {
  const icon = icons[name];
  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden className="techicon">
      <path d={icon.path} />
    </svg>
  );
}
