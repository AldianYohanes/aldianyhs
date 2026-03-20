"use client";
import { Group, Paper, Text, UnstyledButton } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconX,
} from "@tabler/icons-react";
export default function Footer() {
  return (
    <Paper bg="rgba(30, 45, 57, 1)" c="white" bottom={0} w="100%" p="xl">
      <Group justify="space-between">
        <Group>
          <Text>@2026 Aldian Yohanes | </Text>
          <UnstyledButton
            onClick={() => window.open("https://github.com/aldianyohanes")}
          >
            <IconBrandGithub />
          </UnstyledButton>
          <UnstyledButton
            onClick={() => window.open("https://linkedin.com/in/aldianyohanes")}
          >
            <IconBrandLinkedin />
          </UnstyledButton>

          <UnstyledButton
            onClick={() => window.open("https://instagram.com/aldianyhs")}
          >
            <IconBrandInstagram />
          </UnstyledButton>
        </Group>

        <Text>All Rights Reserved</Text>
      </Group>
    </Paper>
  );
}
