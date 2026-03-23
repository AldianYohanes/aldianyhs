import { Group, Flex, Stack, Divider, Text, Accordion } from "@mantine/core";

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
          <Stack w="40%" px="xl">
            {" "}
            <Text fz="h1">Academics</Text>
            <Accordion>
              <Accordion.Item value="college">
                <Accordion.Control>
                  <Text fz="h3" c="white">
                    Universitas Tarumanagara | Aug 2023–present
                  </Text>
                </Accordion.Control>
                <Accordion.Panel>
                  Organization: KMK Adhyatmaka, Dewan Perwakilan Mahasiswa
                  Fakultas Teknologi Informasi
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="highschool">
                <Accordion.Control>
                  <Text fz="h3" c="white">
                    SMA Negeri 23 Jakarta | Jul 2020–Jul 2023
                  </Text>
                </Accordion.Control>
                <Accordion.Panel>
                  Organization: Rohkris, Paskibra, Language Club
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Stack>
        </Flex>
      </Group>
      <Divider my="md" />
    </>
  );
}
