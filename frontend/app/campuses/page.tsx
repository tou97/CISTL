"use client";

import {
  Button,
  Card,
  CardSection,
  Center,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  Title,
  Text,
  Space,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import { IconArrowRight, IconSchool } from "@tabler/icons-react";

// Campus data for rendering cards
const campusData = [
  // ... (campusData remains unchanged)
  {
    id: "slu",
    name: "Saint Louis University",
    image: "/images/campuses/slu.webp",
  },
  {
    id: "stlcc",
    name: "St. Louis Community College - Meramec",
    image: "/images/campuses/stlcc.webp",
  },
  {
    id: "washu",
    name: "The Washington University",
    image: "/images/campuses/washu.webp",
  },
  {
    id: "umsl",
    name: "University of Missouri - St. Louis",
    image: "/images/campuses/umsl.webp",
  },
];

// Renders a campus card with image, title, description and link
interface Campus {
  id: string;
  name: string;
  image: string;
}

const CampusCard = ({ campus }: { campus: Campus }) => (
  // ... (CampusCard component remains unchanged)
  <Card radius="lg" bd="2px solid wood">
    <CardSection>
      <Center>
        <Image src={campus.image} alt={campus.name} height={160} width={300} />
      </Center>
    </CardSection>
    <Title c="wood" ta="center" order={3}>
      {campus.name}
    </Title>
    <Space h="lg" />
    <Center>
      <Button
        bg="offwhite"
        c="wood"
        bd="2px solid wood"
        radius="lg"
        component="a"
        href={`/campuses/${campus.id}`}
        w="50%"
        leftSection={<IconSchool />}
        rightSection={<IconArrowRight />}
        variant="outline"
        className="standard-button"
      >
        Learn more
      </Button>
    </Center>
  </Card>
);

// Main component that displays information about Christian students on campuses
const Campuses = () => {
  const theme = useMantineTheme();
  const largeRadius = theme.radius.lg;

  const imageStyle = {
    borderRadius: largeRadius,
    display: "block",
    overflow: "hidden",
    objectFit: "cover" as const,
  };

  return (
    <Container
      fluid
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        overflow: "hidden",
      }}
    >
      {/* Hero section */}
      <Space bg="wood" h="xl" />
      <Space bg="wood" h="xl" />
      <Grid bg="wood" align="center" gutter="xl">
        {/* ... (Hero section content remains unchanged) ... */}
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} ta="center" c="offwhite">
            Christian Students on Campus
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text c="offwhite" ta="justify" size="xl" px="xl">
            Connect with fellow college students across St. Louis area campuses!
            We&apos;re a group of students united by faith in Jesus and
            navigating college life together. We focus on building genuine
            friendships, providing mututal support, and exploring what it means
            to follow Christ. Whether you&apos;re just checking things out, have
            lots of questions, or are looking for Christian community, you
            belong here.
          </Text>
        </GridCol>
      </Grid>
      <Space bg="wood" h="xl" />
      <Space bg="wood" h="xl" />

      {/* About section */}
      <Space h="xl" />
      <Space h="xl" />

      <Grid align="center" gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          {/* ... (Text content remains unchanged) ... */}
          <Text size="xl" ta="justify" c="wood">
            <b>Christian Students on Campus</b> is a welcoming community for
            college students across the St. Louis area who are exploring faith
            and navigating university life together. As students who follow
            Jesus, we connect through genuine fellowship, engaging Bible study,
            and providing mututal suport. Wherever you are in your spiritual
            journey - curious, questioning, or committed - you have a place
            here. We aim to create an environment where all students feel
            welcome to explore and belong.
          </Text>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Center>
            <Image
              src="/images/campuses/family_time.webp"
              width={600}
              height={400}
              alt="Students and families spending time together"
              style={imageStyle}
            />
          </Center>
        </GridCol>
      </Grid>

      <Space h="xl" />
      <Space h="xl" />

      {/* Campuses section title */}
      <Group px="lg" grow preventGrowOverflow={false} wrap="nowrap">
        <Divider color="wood" />
        <Title ta="center" order={1} c="wood">
          Campuses
        </Title>
        <Divider color="wood" />
      </Group>

      <Space h="xl" />
      <Space h="xl" />

      {/* Campus cards grid */}
      <Grid align="center" gutter="xl" px="xl">
        {campusData.map((campus) => (
          <GridCol key={campus.id} span={{ base: 12, md: 6 }}>
            <CampusCard campus={campus} />
          </GridCol>
        ))}
      </Grid>

      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
};

export default Campuses;
