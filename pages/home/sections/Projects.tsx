import {
  Group,
  Stack,
  Box,
  Text,
  Divider,
  Card,
  ScrollArea,
  Image,
  Flex,
  Button,
} from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import { projects } from "../data";

export default function ProjectsSection() {
  return (
    <>
      {" "}
      <Group justify="center">
        <Stack>
          <Group justify="end">
            <Text fz="h1">Projects</Text>
          </Group>
          <ScrollArea
            type="auto"
            w={1500}
            scrollbarSize={8}
            offsetScrollbars
            styles={{ viewport: { whiteSpace: "nowrap" } }}
          >
            <Group wrap="nowrap" style={{ flexDirection: "row-reverse" }}>
              {projects.map((project) => {
                return (
                  <Card
                    p={0}
                    bg="rgba(255,255,255,0.2)"
                    bd="1px solid white"
                    w={400}
                    style={{ flexShrink: 0 }}
                  >
                    <Image
                      src={`/images/${project.image}`}
                      w={400}
                      radius="md"
                    />
                    <Box px="lg" pt="sm" pb="md">
                      <Text fz="h3" fw="bold" c="white">
                        {project.name}
                      </Text>

                      <Text c="white">{project.description}</Text>
                      <Group mt="md" justify="end">
                        <Button
                          leftSection={<IconBrandGithub />}
                          variant="outline"
                          radius="xl"
                          w={110}
                          color="white"
                          c="white"
                        >
                          GitHub
                        </Button>
                      </Group>
                    </Box>
                  </Card>
                );
              })}
            </Group>
          </ScrollArea>
        </Stack>
      </Group>
      <Divider my="md" />
    </>
  );
}
