"use client";

import {
  Center,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 48em)");
  const titleSize = isMobile ? "250%" : "400%";

  return (
    <Container fluid>
      <Space h="lg" />

      {/* Banner */}
      <Grid align="center" px="xl">
        <GridCol span={{ base: 0, md: "auto" }}>
          <Space />
        </GridCol>
        <GridCol span={{ base: 9, md: 4 }}>
          <Title
            order={1}
            size={titleSize}
            ta="right"
            textWrap="nowrap"
            c="wood"
          >
            Truth, Life,
          </Title>
        </GridCol>
        <GridCol span={{ base: "auto", md: 6 }}>
          <Divider color="wood" />
        </GridCol>
      </Grid>
      <Grid align="center" px="xl">
        <GridCol span={{ base: "auto", md: 5 }}>
          <Divider color="wood" />
        </GridCol>
        <GridCol span={{ base: 9, md: 3 }}>
          <Title
            order={1}
            size={titleSize}
            ta="left"
            textWrap="nowrap"
            c="wood"
          >
            Church, Gospel
          </Title>
        </GridCol>
        <GridCol span={{ base: 0, md: "auto" }}>
          <Space />
        </GridCol>
      </Grid>

      <Space h="xl" />
      <Space h="xl" />

      {/* Church group Photo */}
      <Image
        px="xl"
        radius="lg"
        src="/images/index_main.webp"
        alt="Index Main"
        h={800}
      />

      <Space h="xl" />
      <Space h="xl" />

      {/* Who we are Section */}
      <Grid px="xl">
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
          <Group wrap="nowrap">
            <Title pr="lg" order={1} textWrap="nowrap" c="wood">
              Who we are
            </Title>
            <Divider color="wood" w="20%" />
            <Space />
          </Group>
          <Text c="wood" size="xl">
            We are believers in the Lord Jesus Christ and meet together as the
            church in St. Louis. The church in St. Louis isn&apos;t our name;
            it&apos;s our description. We hold the faith that is revealed in the
            Bible and is common to all genuine believers. We warmly welcome all
            guests and visitors.
          </Text>
        </GridCol>
      </Grid>

      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
}
