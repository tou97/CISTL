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

// Navigation links used in both header and mobile navbar
const NAV_LINKS = [
  { label: "About us", href: "/about" },
  { label: "Our gatherings", href: "/gatherings" },
  { label: "Campus students", href: "/campuses" },
  { label: "Youth", href: "/youth" },
  { label: "Children", href: "/children" },
  { label: "Contact us", href: "/contact" },
];

/**
 * Main application shell component with responsive layout
 */
import { ReactNode } from "react";

export function ClientAppShell({ children }: { children: ReactNode }) {
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
      {/* Header with logo and desktop navigation */}
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
            {/* Logo section */}
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

            {/* Desktop navigation */}
            <Group ml="xl" gap="xl" px="xl" visibleFrom="md">
              {NAV_LINKS.map((link) => (
                <Anchor key={link.href} size="xl" href={link.href} c="wood">
                  {link.label}
                </Anchor>
              ))}
            </Group>
          </Group>
        </Group>
      </AppShellHeader>

      {/* Mobile navigation sidebar */}
      <AppShellNavbar bg="offwhite" py="sm" px="sm">
        <Stack gap="xs" pl="md">
          {NAV_LINKS.map((link) => (
            <Anchor key={link.href} size="xl" href={link.href} c="wood">
              {link.label}
            </Anchor>
          ))}
        </Stack>
      </AppShellNavbar>

      {/* Main content area */}
      <AppShellMain bg="offwhite">{children}</AppShellMain>
    </AppShell>
  );
}

export default ClientAppShell;
