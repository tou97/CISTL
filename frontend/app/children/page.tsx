"use client";

import {
  Container,
  Grid,
  GridCol,
  Title,
  Text,
  Space,
  Center,
  Divider,
  Group,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import {
  IconCalendar,
  IconMapPin,
  IconFileDescription,
} from "@tabler/icons-react";
import { minimal_theme } from "../palette";

// EventItem component for rendering individual events
interface EventItemProps {
  title: string;
  schedule: string;
  location: string;
  description: string;
  imgSrc: string;
}

const EventItem = ({
  title,
  schedule,
  location,
  description,
  imgSrc,
}: EventItemProps) => {
  const theme = useMantineTheme();
  const largeRadius = theme.radius.lg;
  const woodColor = minimal_theme.colors?.wood?.[6] || "#A47D5E";

  return (
    <Grid gutter="xl" px="xl">
      <GridCol span={{ base: 12, md: 6 }}>
        <Center>
          <Image
            src={imgSrc}
            width={600}
            height={400}
            alt={`${title} event image`}
            style={{
              borderRadius: largeRadius,
              border: `2px solid ${woodColor}`,
              display: "block",
              overflow: "hidden",
            }}
          />
        </Center>
      </GridCol>
      <GridCol span={{ base: 12, md: 6 }}>
        <Stack gap="md">
          <Title order={2} c="rose">
            {title}
          </Title>
          <Group gap="sm" wrap="nowrap">
            <IconCalendar
              color={minimal_theme.colors!.rose![5]}
              style={{ flexShrink: 0, marginTop: "0.25rem" }}
            />
            <Text size="xl" c="rose">
              {schedule}
            </Text>
          </Group>
          <Group gap="sm" wrap="nowrap">
            <IconMapPin
              color={minimal_theme.colors!.rose![5]}
              style={{ flexShrink: 0, marginTop: "0.25rem" }}
            />
            <Text size="xl" c="rose">
              {location}
            </Text>
          </Group>
          <Group gap="sm" wrap="nowrap" align="flex-start">
            <IconFileDescription
              color={minimal_theme.colors!.rose![5]}
              style={{ flexShrink: 0, marginTop: "0.25rem" }}
            />
            <Text size="xl" c="rose">
              {description}
            </Text>
          </Group>
        </Stack>
      </GridCol>
    </Grid>
  );
};

const Children = () => {
  const theme = useMantineTheme();
  const largeRadius = theme.radius.lg;
  const woodColor = minimal_theme.colors?.wood?.[6] || "#A47D5E";

  // Data for the events
  const eventsData = [
    {
      title: "Children's Meeting",
      schedule: "Every other Wednesday from 4:30 PM until 6:00 PM",
      location: "Various homes",
      description: "A time to gather weekly",
      imgSrc: "/images/children/children.webp",
    },
  ];

  return (
    <Container
      fluid
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        overflow: "hidden",
      }}
    >
      <Space bg="rose" h="xl" />
      <Space bg="rose" h="xl" />

      {/* Banner */}
      <Grid bg="rose" align="center" gutter="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} ta="center" c="offwhite">
            Children
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text c="offwhite" ta="justify" size="xl" px="xl">
            We believe in partnering with families to raise the next generation
            in faith. Our children&apos;s service provides a welcoming
            environment for children to connect with others, learn biblical
            values, and develop a love for Jesus.
          </Text>
        </GridCol>
      </Grid>

      <Space bg="rose" h="xl" />
      <Space bg="rose" h="xl" />

      {/* About section */}
      <Space h="xl" />
      <Space h="xl" />

      <Grid align="center" gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Text size="xl" ta="justify" c="rose">
            <b>Growing together</b> — Each week, our children come together for
            a special time of fun, faith, and friendship. We sing joyful songs,
            engage in creative activities, and explore wonderful Bible stories
            tailored just for them. These gatherings offer a cheerful and
            nurturing environment where children can build friendships, share
            their discoveries, and learn about God&apos;s love in an interactive
            way. Through stories, crafts, games, and simple prayers, our goal is
            to create a warm space where every child feels loved, included, and
            excited to grow in their faith journey.
          </Text>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Center>
            <Image
              src="/images/children/children.webp"
              width={600}
              height={400}
              alt="Children's meeting"
              style={{
                borderRadius: largeRadius,
                border: `2px solid ${woodColor}`,
                display: "block",
                overflow: "hidden",
              }}
            />
          </Center>
        </GridCol>
      </Grid>

      <Space h="xl" />
      <Space h="xl" />

      {/* Events section title */}
      <Group px="lg" grow preventGrowOverflow={false} wrap="nowrap">
        <Divider color="rose" />
        <Title ta="center" order={1} c="rose">
          Events
        </Title>
        <Divider color="rose" />
      </Group>

      <Space h="xl" />
      <Space h="xl" />

      {/* Render events */}
      {eventsData.map((event, index) => (
        <div key={index}>
          <EventItem
            title={event.title}
            schedule={event.schedule}
            location={event.location}
            description={event.description}
            imgSrc={event.imgSrc}
          />
          {index < eventsData.length - 1 && (
            <>
              <Space h="xl" />
              <Space h="xl" />
            </>
          )}
        </div>
      ))}

      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
};

export default Children;
