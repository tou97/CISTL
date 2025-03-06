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
} from "@mantine/core";
import Image from "next/image";
import {
  IconCalendar,
  IconMapPin,
  IconFileDescription,
} from "@tabler/icons-react";

// GatheringItem component for displaying individual gathering information
interface GatheringItemProps {
  title: string;
  schedule: string;
  location: string;
  description: string;
}

const GatheringItem = ({
  title,
  schedule,
  location,
  description,
}: GatheringItemProps) => (
  <Grid gutter="xl" px="xl">
    <GridCol span={{ base: 12, md: 6 }}>
      <Center>
        <Image
          src="/images/600_400.webp"
          width={600}
          height={400}
          alt="Placeholder"
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
            color="#A58870"
            style={{ flexShrink: 0, marginTop: "0.25rem" }}
          />
          <Text size="xl" c="wood">
            {schedule}
          </Text>
        </Group>
        <Group gap="sm" wrap="nowrap">
          <IconMapPin
            color="#A58870"
            style={{ flexShrink: 0, marginTop: "0.25rem" }}
          />
          <Text size="xl" c="wood">
            {location}
          </Text>
        </Group>
        <Group gap="sm" wrap="nowrap" align="flex-start">
          <IconFileDescription
            color="#A58870"
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

// Gatherings component that displays church gathering information
const Gatherings = () => {
  // Data for each gathering
  const gatheringsData = [
    {
      title: "Sunday service",
      schedule: "Sundays from 10:00 AM until 12:00 PM",
      location: "Meeting hall",
      description: "Description",
    },
    {
      title: "Prayer meeting",
      schedule: "Tuesdays from 7:30 PM until 8:30 PM",
      location: "Various homes",
      description:
        "Gather with others to petition and pray for the Lord's interest on the earth",
    },
    {
      title: "Small group meetings",
      schedule: "Fridays, times vary depending on group",
      location: "Various homes",
      description:
        "Get connected with a home group in your area and enjoy fellowship with others",
    },
    {
      title: "Young peoples meeting",
      schedule: "Saturdays from 5:30 PM until 8:00 PM",
      location: "Various homes",
      description:
        "Our middle and high schoolers enjoy singing hymns and getting into God's word together",
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
      {/* Header section with blue background */}
      <Space bg="sky" h="xl" />
      <Space bg="sky" h="xl" />
      <Grid bg="sky" align="center" gutter="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} ta="center" c="offwhite">
            Our gatherings
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text c="offwhite" ta="justify" size="xl" px="xl">
            Gather with us! Explore the many ways we connect as a church family
            - from Sunday services to small groups and special events. Find a
            place to belong and grow with us. For campus related gatherings,
            check out our{" "}
            <a
              href="/campuses"
              className="font-bold underline inline-flex items-center text-[#FDFAF1] visited:text-[#FDFAF1]"
            >
              campus page
            </a>
            .
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
          />
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
