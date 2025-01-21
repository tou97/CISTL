"use client";

import { useState } from 'react';
import { Button, Drawer, NavLink } from '@mantine/core';
import { IconHome, IconBible, IconUsersGroup, IconSchool, IconMessages} from '@tabler/icons-react';

const MenuButton: React.FC = () => {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => setOpened((prev) => !prev);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleMenu}
          size='lg'
          className="bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
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
        overlayProps={{ backgroundOpacity: 0.5, blur: 4}}
        className="bg-white"
      >
        <nav className="flex flex-col gap-4">
          <NavLink label="Home" component="a" href="/" leftSection={<IconHome/>} />
          <NavLink label="About Us" component="a" href="/about" leftSection={<IconBible/>} />
          <NavLink label="Our Gatherings" component="a" href="/gatherings" leftSection={<IconUsersGroup/>} />
          <NavLink label="Christians on Campus" component="a" href="/campus" leftSection={<IconSchool/>} />
          <NavLink label="Questions?" component="a" href="/contact" leftSection={<IconMessages/>} />
        </nav>
      </Drawer>
    </>
  );
};

export default MenuButton;
