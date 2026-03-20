import { Group, Flex, Stack, Divider, Text } from "@mantine/core";

export default function AboutMeSection() {
  return (
    <>
      <Group justify="space-between" p="xl">
        <Flex direction={{ base: "column", md: "row" }} justify="space-evenly">
          <Group maw="60%">
            <Stack>
              <Text fz="h1">About Me</Text>
              <Text>
                I'm someone who combines technical development, visual
                communication, and real business experience. I enjoy building
                products that are not only functional, but also clear, usable,
                and meaningful.
              </Text>
            </Stack>
          </Group>
          <Divider orientation="vertical" />
          <Group maw="40%">
            {" "}
            <Text fz="h1">Academics</Text>
          </Group>
        </Flex>
      </Group>
      <Divider my="md" />
    </>
  );
}
