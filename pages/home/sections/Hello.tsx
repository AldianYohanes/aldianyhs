import { Divider, Group, Stack, Text, Image, Box } from "@mantine/core";
import Marquee from "react-fast-marquee";
import { hellos, whoAmI } from "../data";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";

export default function HelloSection() {
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(
  //     () => setIndex((index) => index + 1),
  //     10000, // every 10 seconds
  //   );
  //   return () => clearTimeout(intervalId);
  // }, []);

  return (
    <>
      <Group justify="space-between" p="xl">
        <Stack gap={0}>
          <Box>
            <Text fz={35} style={{ lineHeight: 1 }}>
              Hello! I'm
            </Text>
            {/* <TextTransition springConfig={presets.wobbly}> */}
            {/* <Text fz={50}>{hellos[index % hellos.length]}!</Text> */}
            {/* </TextTransition> */}
          </Box>
          <Text fz={75} fw="bold">
            {whoAmI.name}
          </Text>
          <Box maw={250}>
            <Marquee>
              <Text fz={35} style={{ lineHeight: 1 }}>
                {whoAmI.roles.join("ㅤㅤㅤㅤㅤㅤㅤ")}
              </Text>
            </Marquee>
          </Box>
        </Stack>
        {/* <Image
          src="https://picsum.photos/20/30"
          h={300}
          w={200}
          radius="20 100 100 20"
        /> */}
      </Group>
      <Divider
        my="md"
        label="I design and build digital experiences across web, mobile, branding, and student-led initiatives"
      />
    </>
  );
}
