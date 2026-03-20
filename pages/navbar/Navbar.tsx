import { Box } from "@mantine/core";
import { IconCircle } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <Box
      pos="fixed"
      left={0}
      w={50}
      style={{
        alignContent: "center",
        textAlign: "center",
        borderRight: "1px solid white",
        justifyContent: "center",
      }}
      h="75%"
    >
      <IconCircle />
    </Box>
  );
}
