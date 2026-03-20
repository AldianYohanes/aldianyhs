import LiveClock from "@/components/live-clock/LiveClock";
import { Flex, Text } from "@mantine/core";

export default function Header() {
  return (
    <>
      <Flex justify="space-between">
        <Text>Portfolio</Text>
        <LiveClock />
      </Flex>
    </>
  );
}
