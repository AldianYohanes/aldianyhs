"use client";
import Home from "@/pages/home/home";
import NavbarDrawer from "@/pages/navbar/NavbarDrawer";
import {
  AppShell,
  Box,
  Button,
  Divider,
  Group,
  Stack,
  Text,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBriefcase,
  IconCircle,
  IconHome,
  IconMail,
  IconMenu2,
  IconUser,
} from "@tabler/icons-react";
import { Suspense } from "react";

const navItems = [
  { label: "Home", icon: IconHome },
  { label: "About", icon: IconUser },
  { label: "Projects", icon: IconBriefcase },
  { label: "Contact", icon: IconMail },
];

export default function HomePage() {
  return (
    <AppShell padding="md">
      <Suspense>
        <Home />
      </Suspense>
    </AppShell>
  );
}
