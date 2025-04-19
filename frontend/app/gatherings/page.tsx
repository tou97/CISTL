"use client"; // Add the client directive

// Organized imports
import {
  Center,
  Container,
  Grid,
  GridCol,
  Group,
  Stack,
  Title,
  Text,
  Space,
  useMantineTheme, // Import useMantineTheme
} from "@mantine/core";
import Image from "next/image"; // Keep using Next.js Image
import {
  IconCalendar,
  IconMapPin,
  IconFileDescription,
} from "@tabler/icons-react";

// GatheringItem component props updated to include image source
interface GatheringItemProps {
  title: string;
  schedule: string;
  location: string;
  description: string;
  imgSrc: string; // Add image source prop
  imgAlt: string; // Add image alt text prop
}

const GatheringItem = ({
  title,
  schedule,
  location,
  description,
  imgSrc, // Receive image source
  imgAlt, // Receive image alt text
}: GatheringItemProps) => {
  // Get theme values inside the component where they are used
  const theme = useMantineTheme();
  const largeRadius = theme.radius.lg;
  // Define wood color, using a fallback. Adjust 'wood' and shade [6] if needed.
  const woodColorValue = theme.colors.wood?.[6] || '#A47D5E';

  // Define the common image style object
  const imageStyle = {
    borderRadius: largeRadius,
    border: `2px solid ${woodColorValue}`,
    display: 'block',
    overflow: 'hidden',
    objectFit: 'cover' as const,
  };

  return (
    <Grid gutter="xl" px="xl">
      <GridCol span={{ base: 12, md: 6 }}>
        <Center>
          {/* Use Next.js Image with dynamic src, alt, and applied style */}
          <Image
            src={imgSrc} // Use dynamic src
            width={600}
            height={400}
            alt={imgAlt} // Use dynamic alt text
            style={imageStyle} // Apply the defined style
          />
        </Center>
      </GridCol>
      <GridCol span={{ base: 12, md: 6 }}>
        <Stack gap="md">
          <Title order={2} c="wood">
            {title}
          </Title>
          <Group gap="sm" wrap="nowrap">
            <IconCalendar
              color="#A58870" // Consider using theme.colors.wood[4] or similar
              style={{ flexShrink: 0, marginTop: "0.25rem" }}
            />
            <Text size="xl" c="wood">
              {schedule}
            </Text>
          </Group>
          <Group gap="sm" wrap="nowrap">
            <IconMapPin
              color="#A58870" // Consider using theme.colors.wood[4] or similar
              style={{ flexShrink: 0, marginTop: "0.25rem" }}
            />
            <Text size="xl" c="wood">
              {location}
            </Text>
          </Group>
          <Group gap="sm" wrap="nowrap" align="flex-start">
            <IconFileDescription
              color="#A58870" // Consider using theme.colors.wood[4] or similar
              style={{ flexShrink: 0, marginTop: "0.25rem" }}
            />
            <Text size="xl" c="wood">
              {description}
            </Text>
          </Group>
        </Stack>
      </GridCol>
    </Grid>
  );
};

// Gatherings component that displays church gathering information
const Gatherings = () => {
  // Data for each gathering, now including image src and alt text
  const gatheringsData = [
    {
      title: "Sunday service",
      schedule: "Sundays from 10:00 AM until 12:00 PM",
      location: "Meeting hall",
      description: "Our main weekly gathering for worship, teaching, and fellowship, centered on remembering the Lord Jesus.", // Updated description
      imgSrc: "/images/gatherings/lords_table.webp", // Image for Sunday service
      imgAlt: "Bread and cup representing the Lord's Table during Sunday service",
    },
    {
      title: "Prayer meeting",
      schedule: "Tuesdays from 7:30 PM until 8:30 PM",
      location: "Various homes",
      description: "Gather with others to petition and pray together for the Lord's interests on the earth.", // Slightly updated description
      imgSrc: "/images/gatherings/prayer_meeting.webp", // Image for prayer meeting
      imgAlt: "Group of people praying together",
    },
    {
      title: "Small group meetings",
      schedule: "Fridays, times vary depending on group",
      location: "Various homes",
      description: "Connect with a home group in your area for fellowship, Bible study, and mutual encouragement.", // Updated description
      imgSrc: "/images/gatherings/home_meeting.webp", // Image for small group/home meetings
      imgAlt: "People meeting and discussing in a home setting",
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
      {/* Header section */}
      <Space bg="sky" h="xl" />
      <Space bg="sky" h="xl" />
      <Grid bg="sky" align="center" gutter="xl">
        {/* ... (Header content remains unchanged) ... */}
         <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} ta="center" c="offwhite">
            Our gatherings
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text c="offwhite" ta="justify" size="xl" px="xl">
            Gather with us and find your place in our church family! Explore the
            many ways we connect, from Sunday service and small groups to
            special events. Learn more about campus gatherings on our{" "}
            <a
              href="/campuses"
              className="font-bold underline inline-flex items-center text-[#FDFAF1] visited:text-[#FDFAF1]"
            >
              campus
            </a>{" "}
            page, find ways for youth to connect on our{" "}
            <a
              href="/youth"
              className="font-bold underline inline-flex items-center text-[#FDFAF1] visited:text-[#FDFAF1]"
            >
              youth
            </a>{" "}
            page, and discover activities for children on our{" "}
            <a
              href="/children"
              className="font-bold underline inline-flex items-center text-[#FDFAF1] visited:text-[#FDFAF1]"
            >
              children&apos;s
            </a>{" "}
            page.
          </Text>
        </GridCol>
      </Grid>
      <Space bg="sky" h="xl" />
      <Space bg="sky" h="xl" />

      {/* Gatherings list section */}
      <Space h="xl" />
      <Space h="xl" />

      {/* Map through gatherings data to render each item */}
      {gatheringsData.map((gathering, index) => (
        <div key={index}>
          <GatheringItem
            title={gathering.title}
            schedule={gathering.schedule}
            location={gathering.location}
            description={gathering.description}
            imgSrc={gathering.imgSrc} // Pass image source
            imgAlt={gathering.imgAlt} // Pass image alt text
          />
          {/* Add spacing between items */}
          {index < gatheringsData.length - 1 && (
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

export default Gatherings;