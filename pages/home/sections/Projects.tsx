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
import { IconBrandGithub, IconBrowser } from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

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
                    <Carousel withIndicators height={200}>
                      <Carousel.Slide>
                        <Image
                          src={`/images/${project.image}`}
                          w={400}
                          radius="md"
                        />
                      </Carousel.Slide>
                      <Carousel.Slide>
                        <Image
                          src={`/images/${project.image}`}
                          w={400}
                          radius="md"
                        />
                      </Carousel.Slide>
                      <Carousel.Slide>
                        <Image
                          src={`/images/${project.image}`}
                          w={400}
                          radius="md"
                        />
                      </Carousel.Slide>
                    </Carousel>
                    <Box px="lg" pt="sm" pb="md">
                      <Text fz="h3" fw="bold" c="white">
                        {project.name}
                      </Text>

                      <Text c="white">{project.description}</Text>
                      <Group mt="md" justify="space-between">
                        <Group
                          bdrs="xl"
                          bd="1px solid white"
                          bg="rgba(255,255,255,0.3"
                          py="xs"
                          px="md"
                        >
                          {project.skills.map((skill) => {
                            const Icon = skill.icon;

                            return (
                              <Icon
                                key={skill.name}
                                color={skill.color}
                                size={24}
                              />
                            );
                          })}
                        </Group>
                        {project.url && (
                          <Button
                            leftSection={<IconBrowser />}
                            variant="outline"
                            radius="xl"
                            w={110}
                            color="white"
                            c="white"
                            onClick={() => window.open(project.url)}
                          >
                            View on Web
                          </Button>
                        )}
                        <Button
                          leftSection={<IconBrandGithub />}
                          variant="outline"
                          radius="xl"
                          w={110}
                          color="white"
                          c="white"
                          onClick={() => window.open(project.github)}
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
