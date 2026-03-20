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
} from "@mantine/core";

export default function ProjectsSection() {
  return (
    <>
      {" "}
      <Group justify="center">
        <Stack>
          <Text fz="h1">Projects</Text>
          <ScrollArea
            type="auto"
            scrollbarSize={8}
            offsetScrollbars
            styles={{ viewport: { whiteSpace: "nowrap" } }}
          >
            <Group gap="md" w="max-content">
              <Card
                p="md"
                bg="rgba(255,255,255,0.2)"
                bd="1px solid white"
                w={400}
                style={{ flexShrink: 0 }}
              >
                <Image src="/dummy.jpg" w={400} />
                Hello
              </Card>

              <Card
                p="md"
                bg="rgba(255,255,255,0.2)"
                bd="1px solid white"
                w={400}
                style={{ flexShrink: 0 }}
              >
                <Image src="/dummy.jpg" w={400} />
                Hello
              </Card>

              <Card
                p="md"
                bg="rgba(255,255,255,0.2)"
                bd="1px solid white"
                w={400}
                style={{ flexShrink: 0 }}
              >
                <Image src="/dummy.jpg" w={400} />
                Hello
              </Card>

              <Card
                p="md"
                bg="rgba(255,255,255,0.2)"
                bd="1px solid white"
                w={400}
                style={{ flexShrink: 0 }}
              >
                <Image src="/dummy.jpg" w={400} />
                Hello
              </Card>

              <Card
                p="md"
                bg="rgba(255,255,255,0.2)"
                bd="1px solid white"
                w={400}
                style={{ flexShrink: 0 }}
              >
                <Image src="/dummy.jpg" w={400} />
                Hello
              </Card>

              <Card
                p="md"
                bg="rgba(255,255,255,0.2)"
                bd="1px solid white"
                w={400}
                style={{ flexShrink: 0 }}
              >
                <Image src="/dummy.jpg" w={400} />
                Hello
              </Card>

              <Text style={{ flexShrink: 0 }}>MuseUp</Text>
              <Text style={{ flexShrink: 0 }}>Anniversary Book</Text>
              <Text style={{ flexShrink: 0 }}>Internship Report</Text>
            </Group>
          </ScrollArea>
        </Stack>
      </Group>
      <Divider my="md" />
    </>
  );
}
