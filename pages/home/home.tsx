import {
  Group,
  Paper,
  Stack,
  Text,
  Image,
  Divider,
  Flex,
  Box,
  Popover,
  UnstyledButton,
  Affix,
  Button,
} from "@mantine/core";
import HelloSection from "./sections/Hello";
import TechStackSection from "./sections/TechStack";
import AboutMeSection from "./sections/AboutMe";
import ProjectsSection from "./sections/Projects";
import Navbar from "../navbar/Navbar";
import WorkExperienceSection from "./sections/WorkExperience";
import {
  IconArrowUp,
  IconBrandFigma,
  IconBrandFirebase,
  IconBrandFlutter,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandTypescript,
  IconProps,
  ReactNode,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { ComponentType } from "react";
import SkillsSection from "./sections/Skills";
import Header from "../layout/Header";

export default function Home() {
  const [opened, { close, open }] = useDisclosure(false);
  const gradientStyle = {
    background: "linear-gradient(180deg, #161f22, #2b484e)", // Example gradient
    minHeight: "100vh", // Ensure it covers the full viewport height
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  };
  return (
    <Paper
      //   bg="rgba(0,0,0,0)"
      c="rgba(255,255,255,1)"
      p="xl"
      style={gradientStyle}
    >
      <Header />
      <HelloSection />
      <TechStackSection />
      <AboutMeSection />
      <ProjectsSection />
      <WorkExperienceSection />
      <SkillsSection />
      <Affix position={{ bottom: 20, right: 20 }}>
        <Button
          leftSection={<IconArrowUp />}
          variant="subtle"
          bg="rgba(255,255,255,0.1)"
          c="#fff"
          color="#fff"
        >
          Back to Top
        </Button>
      </Affix>
    </Paper>
  );
}
