import {
  Center,
  Container,
  Grid,
  GridCol,
  Title,
  Text,
  Space,
} from "@mantine/core";
import Image from "next/image";

// GatheringItem component for displaying individual gathering information
interface GatheringItemProps {
  title: string;
  schedule: string;
  location: string;
}

const GatheringItem = ({ title, schedule, location }: GatheringItemProps) => (
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
      <Title order={2} c="wood">
        {title}
      </Title>
      <Space h="md" />
      <Text size="xl" c="wood">
        {schedule}
        <br />
        Location: {location}
      </Text>
    </GridCol>
  </Grid>
);

// Gatherings component that displays church gathering information
const Gatherings = () => {
  // Data for each gathering
  const gatheringsData = [
    {
      title: "Sunday service",
      schedule: "Every Sunday from 10:00 AM until 12:00 PM",
      location: "Meeting hall",
    },
    {
      title: "Prayer meeting",
      schedule: "Every Tuesday from 7:30 PM until 8:30 PM",
      location: "Various homes",
    },
    {
      title: "Small group meetings",
      schedule: "Every Friday, times vary depending on group",
      location: "Various homes",
    },
    {
      title: "Young peoples meeting",
      schedule: "Every Saturday from 5:30 PM until 8:30 PM",
      location: "Various homes",
    },
  ];

  return (
    <Container fluid>
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
