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
      <Space bg="wood" h="xl" />
      <Space bg="wood" h="xl" />
      <Grid bg="wood" align="center" gutter="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} ta="center" c="offwhite">
            Christian Students on Campus
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text
            c="offwhite"
            ta={isMobile ? "center" : "left"}
            size="xl"
            px="xl"
          >
            Our mission is to be a light on campus, supporting one another in
            our spiritual journeys, and sharing the hope and grace of Jesus
            Christ with those around us.
          </Text>
        </GridCol>
      </Grid>
      <Space bg="wood" h="xl" />
      <Space bg="wood" h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Grid align="center" gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Text size="xl" c="wood">
            <b>Christian Students on Campus</b> is a vibrant and inclusive
            community of students who are passionate about living out their
            faith and making a positive impact on campus and beyond. Together,
            we seek to grow in our understanding of Christ, build meaningful
            relationships, and server others with love and compassion. Whether
            through worship, Bible Study, community outreach, or simply walking
            alongside one another in faith, we aim to create a welcoming space
            where students can explore and strengthen their relationship with
            God.
          </Text>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Image bg="black" c="white" alt="Placeholder" h={400} w={600} />
        </GridCol>
      </Grid>
      <Space h="xl" />
      <Space h="xl" />
      <Group px="lg" grow preventGrowOverflow={false} wrap="nowrap">
        <Divider color="wood" />
        <Title ta="center" order={1} c="wood">
          Campuses
        </Title>
        <Divider color="wood" />
      </Group>
      <Space h="xl" />
      <Space h="xl" />
      <Grid align="center" gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Card radius="lg">
            <CardSection pb="lg">
              <Center>
                <Image
                  src="/images/slu.webp"
                  alt="Saint Louis University"
                  h={160}
                  w={300}
                />
              </Center>
            </CardSection>
            <Title c="wood" order={3}>
              Saint Louis University
            </Title>
            <Space h="md" />
            <Button
              color="wood"
              c="offwhite"
              component="a"
              href="/campuses/slu"
            >
              Learn more
            </Button>
          </Card>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Card radius="lg">
            <CardSection pb="lg">
              <Center>
                <Image
                  src="/images/stlcc.webp"
                  alt="St. Louis Community College - Meramec"
                  h={160}
                  w={300}
                />
              </Center>
            </CardSection>
            <Title c="wood" order={3}>
              St. Louis Community College - Meramec
            </Title>
            <Space h="md" />
            <Button
              color="wood"
              c="offwhite"
              component="a"
              href="/campuses/stlcc"
            >
              Learn more
            </Button>
          </Card>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Card radius="lg">
            <CardSection pb="lg">
              <Center>
                <Image src="/images/washu.webp" alt="WashU" h={160} w={300} />
              </Center>
            </CardSection>
            <Title c="wood" order={3}>
              The Washington University
            </Title>
            <Space h="md" />
            <Button
              color="wood"
              c="offwhite"
              component="a"
              href="/campuses/washu"
            >
              Learn more
            </Button>
          </Card>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Card radius="lg">
            <CardSection pb="lg">
              <Center>
                <Image src="/images/umsl.webp" alt="UMSL" h={160} w={300} />
              </Center>
            </CardSection>
            <Title c="wood" order={3}>
              University of Missouri - St. Louis
            </Title>
            <Space h="md" />
            <Button
              color="wood"
              c="offwhite"
              component="a"
              href="/campuses/umsl"
            >
              Learn more
            </Button>
          </Card>
        </GridCol>
      </Grid>
      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
};

export default Gatherings;
