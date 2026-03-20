import {
  Group,
  Stack,
  Flex,
  Popover,
  UnstyledButton,
  Text,
} from "@mantine/core";
import { skills } from "../data";

export default function SkillsSection() {
  return (
    <>
      <Group justify="center">
        <Stack justify="center" align="center">
          <Text fz="h1">Skills</Text>
          <Group>
            {skills.map((skill) => {
              return (
                <>
                  <Flex direction="row">
                    <Popover key={skill.name}>
                      <Popover.Target>
                        <UnstyledButton>
                          <skill.icon size={48} />
                          <Text>{skill.name}</Text>
                        </UnstyledButton>
                      </Popover.Target>
                      <Popover.Dropdown>
                        <Text>{skill.name}</Text>
                      </Popover.Dropdown>
                    </Popover>
                  </Flex>
                </>
              );
            })}
          </Group>
        </Stack>
      </Group>
    </>
  );
}
