import { IconProps, IconBrandJavascript, IconBrandTypescript, IconBrandFlutter, IconBrandReact, IconBrandNextjs, IconBrandLaravel, IconBrandMantine, IconBrandTailwind, IconBrandSupabase, IconBrandFirebase, IconBrandFigma, IconBrandGithub } from "@tabler/icons-react";
import { ComponentType } from "react";


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

type TechType = "programming" | "frameworks" | "design" | "tools";

interface ISkills {
  type: TechType;
  name: string;
  icon: ComponentType<IconProps>;
}

export const skills: ISkills[] = [
  {
    type: "programming",
    name: "Javascript",
    icon: IconBrandJavascript,
  },
  {
    type: "programming",
    name: "Typescript",
    icon: IconBrandTypescript,
  },
  {
    type: "programming",
    name: "Flutter",
    icon: IconBrandFlutter,
  },
  {
    type: "frameworks",
    name: "React",
    icon: IconBrandReact,
  },
  {
    type: "frameworks",
    name: "Next.JS",
    icon: IconBrandNextjs,
  },
  {
    type: "frameworks",
    name: "Laravel",
    icon: IconBrandLaravel,
  },
  {
    type: "frameworks",
    name: "Mantine",
    icon: IconBrandMantine,
  },
  {
    type: "frameworks",
    name: "Tailwind",
    icon: IconBrandTailwind,
  },
  {
    type: "frameworks",
    name: "Supabase",
    icon: IconBrandSupabase,
  },
  {
    type: "frameworks",
    name: "Firebase",
    icon: IconBrandFirebase,
  },
  {
    type: "design",
    name: "Figma",
    icon: IconBrandFigma,
  },
  {
    type: "tools",
    name: "GitHub",
    icon: IconBrandGithub,
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