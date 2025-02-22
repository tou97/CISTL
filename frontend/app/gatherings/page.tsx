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

const Gatherings = () => {
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
      <Space h="xl" />
      <Space h="xl" />
      <Grid gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Center>
            <Image src="https://placehold.co/600x400" alt="Placeholder" />
          </Center>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={2} c="wood">
            Sunday service
          </Title>
          <Space h="md" />
          <Text size="xl" c="wood">
            Every Sunday from 10:00 AM until 12:00 PM
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
            <Image src="https://placehold.co/600x400" alt="Placeholder" />
          </Center>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={2} c="wood">
            Prayer meeting
          </Title>
          <Space h="md" />
          <Text size="xl" c="wood">
            Every Tuesday from 7:30 PM until 8:30 PM
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
            <Image src="https://placehold.co/600x400" alt="Placeholder" />
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
      <Grid gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Center>
            <Image src="https://placehold.co/600x400" alt="Placeholder" />
          </Center>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={2} c="wood">
            Young peoples meeting
          </Title>
          <Space h="md" />
          <Text size="xl" c="wood">
            Every Saturday from 5:30 P.M until 8:30 P.M
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
