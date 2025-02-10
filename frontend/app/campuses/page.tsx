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
import { IconArrowRight, IconSchool } from "@tabler/icons-react";

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
          <Center>
            <Image
              src="https://placehold.co/600x400"
              alt="Placeholder"
              h={400}
              w={600}
            />
          </Center>
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
        {/* SLU */}
        <GridCol span={{ base: 12, md: 6 }}>
          <Card radius="lg" bd="1px solid wood">
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
            <Text c="wood" size="lg">
              Filler text about the school or club goes here
            </Text>
            <Space h="xl" />
            <Center>
              <Button
                color="offwhite"
                c="wood"
                bd="1px solid wood"
                radius="lg"
                component="a"
                href="/campuses/slu"
                w="50%"
                leftSection={<IconSchool />}
                rightSection={<IconArrowRight />}
              >
                Learn more
              </Button>
            </Center>
          </Card>
        </GridCol>

        {/* STLCC */}
        <GridCol span={{ base: 12, md: 6 }}>
          <Card radius="lg" bd="1px solid wood">
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
            <Text c="wood" size="lg">
              Filler text about the school or club goes here
            </Text>
            <Space h="xl" />
            <Center>
              <Button
                color="offwhite"
                c="wood"
                bd="1px solid wood"
                radius="lg"
                component="a"
                href="/campuses/stlcc"
                w="50%"
                leftSection={<IconSchool />}
                rightSection={<IconArrowRight />}
              >
                Learn more
              </Button>
            </Center>
          </Card>
        </GridCol>

        {/* WashU */}
        <GridCol span={{ base: 12, md: 6 }}>
          <Card radius="lg" bd="1px solid wood">
            <CardSection pb="lg">
              <Center>
                <Image src="/images/washu.webp" alt="WashU" h={160} w={300} />
              </Center>
            </CardSection>
            <Title c="wood" order={3}>
              The Washington University
            </Title>
            <Text c="wood" size="lg">
              Filler text about the school or club goes here
            </Text>
            <Space h="xl" />
            <Center>
              <Button
                color="offwhite"
                c="wood"
                bd="1px solid wood"
                radius="lg"
                component="a"
                href="/campuses/washu"
                w="50%"
                leftSection={<IconSchool />}
                rightSection={<IconArrowRight />}
              >
                Learn more
              </Button>
            </Center>
          </Card>
        </GridCol>

        {/* UMSL */}
        <GridCol span={{ base: 12, md: 6 }}>
          <Card radius="lg" bd="1px solid wood">
            <CardSection pb="lg">
              <Center>
                <Image src="/images/umsl.webp" alt="UMSL" h={160} w={300} />
              </Center>
            </CardSection>
            <Title c="wood" order={3}>
              University of Missouri - St. Louis
            </Title>
            <Text c="wood" size="lg">
              Filler text about the school or club goes here
            </Text>
            <Space h="xl" />
            <Center>
              <Button
                color="offwhite"
                c="wood"
                bd="1px solid wood"
                radius="lg"
                component="a"
                href="/campuses/umsl"
                w="50%"
                leftSection={<IconSchool />}
                rightSection={<IconArrowRight />}
              >
                Learn more
              </Button>
            </Center>
          </Card>
        </GridCol>
      </Grid>

      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
};

export default Gatherings;
