import { Group, Text, Divider } from "@mantine/core";

export default function TechStackSection() {
  return (
    <>
      <Text fz="h1">Tech Stack</Text>
      <Group>React, Flutter, Laravel, Supabase, Firebase</Group>
      Extras: LaTeX
      <Divider my="md" />
    </>
  );
}
