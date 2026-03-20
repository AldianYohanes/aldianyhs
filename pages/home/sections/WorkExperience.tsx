import { Divider, Group, Stack, Text } from "@mantine/core";

export default function WorkExperienceSection() {
  return (
    <>
      <Group>
        <Stack>
          <Text fz="h1">Work Experience</Text>
          <Group justify="space-between">
            <Text>PT Inti Utama Solusindo (Pharos Group)</Text>
            <Text>Jan 2026–present</Text>
          </Group>
          <Group justify="space-between">
            <Text>Alleyway Muse Cafe</Text>
            <Text>Fab 2024–present</Text>
          </Group>
          <Group justify="space-between">
            <Text>
              Inkubator Bisnis dan Kerjasama (IBiK) Fakultas Teknologi Informasi
              Universitas Tarumanagara
            </Text>
            <Text>Jan 2025–Jan 2026</Text>
          </Group>
        </Stack>
      </Group>
      <Divider my="md" />
    </>
  );
}
