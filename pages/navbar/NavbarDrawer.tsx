import { Drawer } from "@mantine/core";

interface NavbarProps {
  children?: React.ReactNode;
  opened: boolean;
  onClose: () => void;
}

export default function NavbarDrawer({
  children,
  opened,
  onClose,
}: NavbarProps) {
  return (
    <Drawer opened={opened} onClose={onClose}>
      {children}
    </Drawer>
  );
}
