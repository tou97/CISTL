"use client";

import { useState } from 'react';
import { Button, Drawer, NavLink, useMantineTheme } from '@mantine/core';
import { IconHome, IconBible, IconUsersGroup, IconSchool, IconMessages, IconMenu2} from '@tabler/icons-react';

const MenuButton: React.FC = () => {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => setOpened((prev) => !prev);

  const theme = useMantineTheme()

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleMenu}
          rightSection={<IconMenu2 />}
          size='lg'
          radius="xl"
          c="wood"
          color="offwhite"
          styles={{
            root: {
              border: `1px solid ${theme.colors.wood[0]}`
            }
          }}
        >
        Menu
        </Button>
      </div>

      {/* Navigation Overlay */}
      <Drawer
        opened={opened}
        onClose={toggleMenu}
        padding="md"
        size="md"
        position="right"
        offset={10}
        radius="lg"
        title="THE CHURCH IN ST. LOUIS"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4}}
        className="bg-white"
      >
        <nav className="flex flex-col gap-4">
          <NavLink label="Home" component="a" href="/" leftSection={<IconHome/>} />
          <NavLink label="About Us" component="a" href="/about" leftSection={<IconBible/>} />
          <NavLink label="Our Gatherings" component="a" href="/gatherings" leftSection={<IconUsersGroup/>} />
          <NavLink label="Christians Students on Campus" component="a" href="/campuses" leftSection={<IconSchool/>} />
          <NavLink label="Questions?" component="a" href="/contact" leftSection={<IconMessages/>} />
        </nav>
      </Drawer>
    </>
  );
};

export default MenuButton;
