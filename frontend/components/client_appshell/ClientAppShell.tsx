"use client";

import {
  AppShell,
  AppShellHeader,
  AppShellNavbar,
  AppShellMain,
  Anchor,
  Burger,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function ClientAppShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
    >
      <AppShellHeader p={60} bg="offwhite" withBorder={false}>
        <Group justify="space-between">
          <Group justify="flex-start">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              color="wood"
            />
            <Title c="wood">CISTL</Title>
            <Stack align="flex-start" gap="0">
              <Text c="wood" size="sm" fw={500}>
                Church in
              </Text>
              <Text c="wood" size="sm" fw={500}>
                St. Louis
              </Text>
            </Stack>
          </Group>
          <Group gap="xl" justify="flex-end">
            <Anchor size="xl" fw={500} href="/about" c="wood">
              About us
            </Anchor>
            <Anchor size="xl" fw={500} href="/gatherings" c="wood">
              Our gatherings
            </Anchor>
            <Anchor size="xl" fw={500} href="/campuses" c="wood">
              Campus Work
            </Anchor>
            <Anchor size="xl" fw={500} href="/contact" c="wood">
              Contact us
            </Anchor>
          </Group>
        </Group>
      </AppShellHeader>

      <AppShellNavbar bg="offwhite" py="md" px={4}>
        <Anchor size="xl" fw={500} href="/about" c="wood">
          About us
        </Anchor>
        <Anchor size="xl" fw={500} href="/gatherings" c="wood">
          Our gatherings
        </Anchor>
        <Anchor size="xl" fw={500} href="/campuses" c="wood">
          Campus Work
        </Anchor>
        <Anchor size="xl" fw={500} href="/contact" c="wood">
          Contact us
        </Anchor>
      </AppShellNavbar>

      <AppShellMain bg="offwhite">{children}</AppShellMain>
    </AppShell>
  );
}

export default ClientAppShell;
