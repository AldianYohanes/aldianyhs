import { IconProps, IconBrandJavascript, IconBrandTypescript, IconBrandFlutter, IconBrandReact, IconBrandNextjs, IconBrandLaravel, IconBrandMantine, IconBrandTailwind, IconBrandSupabase, IconBrandFirebase, IconBrandFigma, IconBrandGithub, IconBrandPython } from "@tabler/icons-react";
import { ComponentType } from "react";

// ===================================================================================
// Hero - About Me Section
// ===================================================================================
interface IwhoAmI {
  name: string;
  roles: string[];
}

export const whoAmI: IwhoAmI = {
  name: "Aldian Yohanes",
  roles: [
    " ",
    "IT Student",
    "Software Developer",
    "Business Owner",
    "Graphic Designer",
  ],
};

// ===================================================================================
// Skills Section
// ===================================================================================
type TechType = "programming" | "frameworks" | "design" | "tools";

interface ISkills {
  type: TechType;
  name: string;
  icon: ComponentType<IconProps>;
  color?: string;
}

export const skills: ISkills[] = [
  {
    type: "programming",
    name: "Javascript",
    icon: IconBrandJavascript,
    color: "#F7DF1E"
  },
  {
    type: "programming",
    name: "Typescript",
    icon: IconBrandTypescript,
    color: "#3178C6"
  },
  {
    type: "programming",
    name: "Flutter",
    icon: IconBrandFlutter,
    color: "#02579B"
  },
  {
    type: "programming",
    name: "Python",
    icon: IconBrandPython,
    color: "#3776AB"
  },
  {
    type: "frameworks",
    name: "React",
    icon: IconBrandReact,
    color: "#61DAFB"
  },
  {
    type: "frameworks",
    name: "Next.JS",
    icon: IconBrandNextjs,
    color: "#000000"
  },
  {
    type: "frameworks",
    name: "Laravel",
    icon: IconBrandLaravel,
    color: "#FF2D00"
  },
  {
    type: "frameworks",
    name: "Mantine",
    icon: IconBrandMantine,
    color: "#339AF0"
  },
  {
    type: "frameworks",
    name: "Tailwind",
    icon: IconBrandTailwind,
    color: "#06B6D4"
  },
  {
    type: "frameworks",
    name: "Supabase",
    icon: IconBrandSupabase,
    color: "#3ECF8E"
  },
  {
    type: "frameworks",
    name: "Firebase",
    icon: IconBrandFirebase,
    color: "#FFCA28"
  },
  {
    type: "design",
    name: "Figma",
    icon: IconBrandFigma,
    color: "#F24E1E"
  },
  {
    type: "tools",
    name: "GitHub",
    icon: IconBrandGithub,
    color: "#181717"
  },
  
];

export const hellos = [
  "Hello",
  "你好",
  "こんにちは",
  "Bonjour",
  "Ciao",
  "Salve",
  "Assalamualaikum",
];

// ===================================================================================
// Projects Section
// ===================================================================================
const getSkill = (name: string) => skills.find((skill) => skill.name === name)

interface Iprojects {
  name: string;
  description: string;
  image: string;
  skills: ISkills[]
  url?: string;
  github: string;
}
export const projects: Iprojects[] = [
  {
    name: "MuseUp",
    description: "POS and Customer membership application for Alleyway Muse",
    image: "dummy.jpg",
    url: "https://alleywaymuse.vercel.app/",
    github: "https://github.com/AldianYohanes/museup-alleyway-react",
    skills: ["Flutter", "GitHub", "React"].map((name) => skills.find((skill) => skill.name === name)).filter((skill): skill is ISkills => Boolean(skill)),
  },
  {
    name: "NotulaX",
    description: "Lorem ipsum",
    image: "dummy.jpg",
    github: "https://github.com/AldianYohanes/NotulaX",
    skills: ["Python", "React"].map((name) => skills.find((skill) => skill.name === name)).filter((skill): skill is ISkills => Boolean(skill)),
  },
];