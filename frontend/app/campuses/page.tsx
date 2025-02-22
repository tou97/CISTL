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
import { IconArrowRight, IconSchool } from "@tabler/icons-react";

const Campuses = () => {
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

      <Space h="xl" />
      <Space h="xl" />

      <Grid align="center" gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
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
            <Image src="https://placehold.co/600x400" alt="Placeholder" />
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
            <Title c="wood" ta="center" order={3}>
              Saint Louis University
            </Title>
            <Text c="wood" ta="center" size="lg">
              Filler text about the school or club goes here
            </Text>
            <Space h="lg" />
            <Center>
              <Button
                color="offwhite"
                c="wood"
                bd="1px solid wood"
                radius="lg"
                component="a"
                href="/campuses/slu"
                w="75%"
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
            <Title c="wood" ta="center" order={3}>
              St. Louis Community College - Meramec
            </Title>
            <Text c="wood" ta="center" size="lg">
              Filler text about the school or club goes here
            </Text>
            <Space h="lg" />
            <Center>
              <Button
                color="offwhite"
                c="wood"
                bd="1px solid wood"
                radius="lg"
                component="a"
                href="/campuses/stlcc"
                w="75%"
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
            <Title c="wood" ta="center" order={3}>
              The Washington University
            </Title>
            <Text c="wood" ta="center" size="lg">
              Filler text about the school or club goes here
            </Text>
            <Space h="lg" />
            <Center>
              <Button
                color="offwhite"
                c="wood"
                bd="1px solid wood"
                radius="lg"
                component="a"
                href="/campuses/washu"
                w="75%"
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
            <Title c="wood" ta="center" order={3}>
              University of Missouri - St. Louis
            </Title>
            <Text c="wood" ta="center" size="lg">
              Filler text about the school or club goes here
            </Text>
            <Space h="lg" />
            <Center>
              <Button
                color="offwhite"
                c="wood"
                bd="1px solid wood"
                radius="lg"
                component="a"
                href="/campuses/umsl"
                w="75%"
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

export default Campuses;
