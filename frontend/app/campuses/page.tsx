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
        w="75%"
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
  const woodColorValue = theme.colors.wood?.[6] || "#A47D5E";

  const imageStyle = {
    borderRadius: largeRadius,
    border: `2px solid ${woodColorValue}`,
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
            Hey students! We&apos;re a community of college students across the
            St. Louis area who are exploring life and faith together. We&apos;re
            simply students who believe in Jesus and want to connect with others
            on campus. Wherever you are in your journey - curious, questioning,
            or committed - you&apos;re welcome to join us and find friends,
            support, and a place to belong.
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
            <b>Christian Students on Campus</b> is all about being a welcoming
            community for students like you across the St. Louis area!
            We&apos;re just students exploring what it means to follow Jesus and
            do life together in college. Whether you&apos;re curious about
            faith, have lots of questions, or are already committed to following
            Christ, you&apos;ll find a place with us. We connect through things
            like hanging out, studying the Bible, serving our campuses, and just
            supporting each other as we navigate college. Our aim is simple: to
            create a space where everyone feels welcome to explore their faith.
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
