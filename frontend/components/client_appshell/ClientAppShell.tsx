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
      header={{ height: 125 }}
      navbar={{
        width: 300,
        breakpoint: "md",
        collapsed: { desktop: true, mobile: !opened },
      }}
    >
      <AppShellHeader bg="offwhite" withBorder={false}>
        <Group h="100%" px="md">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="md"
            size="md"
            color="wood"
          />
          <Group justify="space-between" px="md" flex={1}>
            <Group>
              <Anchor size="2rem" fw={700} c="wood" href="/" underline="never">
                CISTL
              </Anchor>
              <Stack gap={0}>
                <Anchor c="wood" size="sm" href="/" underline="never">
                  Church in
                </Anchor>
                <Anchor c="wood" size="sm" href="/" underline="never">
                  St. Louis
                </Anchor>
              </Stack>
            </Group>
            <Group ml="xl" gap="xl" px="xl" visibleFrom="md">
              <Anchor size="xl" href="/about" c="wood">
                About us
              </Anchor>
              <Anchor size="xl" href="/gatherings" c="wood">
                Our gatherings
              </Anchor>
              <Anchor size="xl" href="/campuses" c="wood">
                Campus work
              </Anchor>
              <Anchor size="xl" href="/contact" c="wood">
                Contact us
              </Anchor>
            </Group>
          </Group>
        </Group>
      </AppShellHeader>

      <AppShellNavbar bg="offwhite" py="sm" px="sm">
        <Stack gap="xs" pl="md">
          <Anchor size="xl" href="/about" c="wood">
            About us
          </Anchor>
          <Anchor size="xl" href="/gatherings" c="wood">
            Our gatherings
          </Anchor>
          <Anchor size="xl" href="/campuses" c="wood">
            Campus work
          </Anchor>
          <Anchor size="xl" href="/contact" c="wood">
            Contact us
          </Anchor>
        </Stack>
      </AppShellNavbar>

      <AppShellMain bg="offwhite">{children}</AppShellMain>
    </AppShell>
  );
}

export default ClientAppShell;
