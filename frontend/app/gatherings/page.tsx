"use client";

import {
  Center,
  Container,
  Grid,
  GridCol,
  Image,
  Title,
  Text,
  Space,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Gatherings = () => {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Container fluid>
      <Space bg="sky" h="xl" />
      <Space bg="sky" h="xl" />
      <Grid bg="sky" align="center" gutter="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} ta="center" c="offwhite">
            Our gatherings
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text
            c="offwhite"
            ta={isMobile ? "center" : "left"}
            size="xl"
            px="xl"
          >
            Join us for weekly gatherings and special events!
            <br />
            Here&apos;s our schedule:
          </Text>
        </GridCol>
      </Grid>
      <Space bg="sky" h="xl" />
      <Space bg="sky" h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Grid gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Center>
            <Image
              src="https://placehold.co/600x400"
              alt="Placeholder"
              h={400}
              w={600}
            />
          </Center>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={2} c="wood">
            Sunday service
          </Title>
          <Space h="md" />
          <Text size="xl" c="wood">
            Every Sunday at 10:00 AM until 12:00 PM
            <br />
            Location: Meeting hall
          </Text>
        </GridCol>
      </Grid>
      <Space h="xl" />
      <Space h="xl" />
      <Grid gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Center>
            <Image
              src="https://placehold.co/600x400"
              alt="Placeholder"
              h={400}
              w={600}
            />
          </Center>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={2} c="wood">
            Prayer meeting
          </Title>
          <Space h="md" />
          <Text size="xl" c="wood">
            Every Tuesday at 7:30 PM until 8:30 PM
            <br />
            Location: Various homes
          </Text>
        </GridCol>
      </Grid>
      <Space h="xl" />
      <Space h="xl" />
      <Grid gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Center>
            <Image
              src="https://placehold.co/600x400"
              alt="Placeholder"
              h={400}
              w={600}
            />
          </Center>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={2} c="wood">
            Small group meetings
          </Title>
          <Space h="md" />
          <Text size="xl" c="wood">
            Every Friday, times vary depending on group
            <br />
            Location: Various homes
          </Text>
        </GridCol>
      </Grid>
      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
};

export default Gatherings;
