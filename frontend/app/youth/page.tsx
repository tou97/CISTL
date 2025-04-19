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

const EventItem = ({ title, schedule, location, description, imgSrc }: EventItemProps) => {
  const theme = useMantineTheme();
  const largeRadius = theme.radius.lg;
  const woodColor = minimal_theme.colors?.wood?.[6] || '#A47D5E';

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
              display: 'block',
              overflow: 'hidden',
            }}
          />
        </Center>
      </GridCol>
      <GridCol span={{ base: 12, md: 6 }}>
        <Stack gap="md">
          <Title order={2} c="lavender">
            {title}
          </Title>
          <Group gap="sm" wrap="nowrap">
            <IconCalendar
              color={minimal_theme.colors!.lavender![5]}
              style={{ flexShrink: 0, marginTop: "0.25rem" }}
            />
            <Text size="xl" c="lavender">
              {schedule}
            </Text>
          </Group>
          <Group gap="sm" wrap="nowrap">
            <IconMapPin
              color={minimal_theme.colors!.lavender![5]}
              style={{ flexShrink: 0, marginTop: "0.25rem" }}
            />
            <Text size="xl" c="lavender">
              {location}
            </Text>
          </Group>
          <Group gap="sm" wrap="nowrap" align="flex-start">
            <IconFileDescription
              color={minimal_theme.colors!.lavender![5]}
              style={{ flexShrink: 0, marginTop: "0.25rem" }}
            />
            <Text size="xl" c="lavender">
              {description}
            </Text>
          </Group>
        </Stack>
      </GridCol>
    </Grid>
  );
};

const Youth = () => {
  const theme = useMantineTheme();
  const largeRadius = theme.radius.lg;
  const woodColor = minimal_theme.colors?.wood?.[6] || '#A47D5E';

  // Data for the events
  const eventsData = [
    {
      title: "Young People's Meeting",
      schedule: "Saturdays from 5:30 PM until 8:00 PM",
      location: "Various homes",
      description: "A time to gather weekly",
      imgSrc: "/images/youth/yp_meeting.webp",
    },
    {
      title: "Winter Getaway",
      schedule: "February (Weekend TBD)",
      location: "Grafton Getaway",
      description: "A time to get away from our normal schedules and concecrate to the Lord",
      imgSrc: "/images/youth/getaway.webp",
    },
    {
      title: "SSOT",
      schedule: "July (Full Week)",
      location: "Campground",
      description: "A week of enjoyment and training in spiritual capacity",
      imgSrc: "/images/youth/ssot.webp",
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
      <Space bg="lavender" h="xl" />
      <Space bg="lavender" h="xl" />

      {/* Banner */}
      <Grid bg="lavender" align="center" gutter="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} ta="center" c="offwhite">
            Young people
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text c="offwhite" ta="justify" size="xl" px="xl">
            For middle and high schooler students and their families - discover
            a welcoming community where teens connect with peers, explore faith
            in relevant ways, and build a positive foundation. We offer support,
            friendship, and opportunities for growth - spiritually and
            personally.
          </Text>
        </GridCol>
      </Grid>

      <Space bg="lavender" h="xl" />
      <Space bg="lavender" h="xl" />

      {/* About section */}
      <Space h="xl" />
      <Space h="xl" />

      <Grid align="center" gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Text size="xl" ta="justify" c="lavender">
            <b>Staying Connected</b> — each week, we come together to enjoy
            dinner, sing, and explore spiritual and practical topics that are
            meaningful and relevant to our youth. These gatherings provide a
            welcoming, supportive space where youth can form connections, share
            experiences, and encourage one another. Whether it&apos;s through music,
            sharing takeaways, or simply being there for one another, our aim is
            to create a gathering where each young person feels at home and able
            to grow spiritually and personally.
          </Text>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Center>
            <Image
              src="/images/youth/youth.webp"
              width={600}
              height={400}
              alt="Youth group gathering"
              style={{
                borderRadius: largeRadius,
                border: `2px solid ${woodColor}`,
                display: 'block',
                overflow: 'hidden',
              }}
            />
          </Center>
        </GridCol>
      </Grid>

      <Space h="xl" />
      <Space h="xl" />

      {/* Events section title */}
      <Group px="lg" grow preventGrowOverflow={false} wrap="nowrap">
        <Divider color="lavender" />
        <Title ta="center" order={1} c="lavender">
          Events
        </Title>
        <Divider color="lavender" />
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

export default Youth;
