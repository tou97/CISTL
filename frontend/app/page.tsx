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

// Constants
const WOOD_COLOR = "wood";
const SPACING_XL = "xl";
const SPACING_LG = "lg";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 48em)");
  const titleSize = isMobile ? "250%" : "400%";

  return (
    <Container
      fluid
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        overflow: "hidden",
      }}
    >
      <Space h={SPACING_LG} />

      {/* Banner Section */}
      <Banner titleSize={titleSize} />

      <Space h={SPACING_XL} my={SPACING_XL} />

      {/* Church Group Photo */}
      <Image
        px={SPACING_XL}
        radius="lg"
        src="/images/index/stl-arch-2.webp"
        alt="Index Main"
        h={600}
        style={{ objectFit: 'cover', objectPosition: 'center 70%' }}
      />
      <Space h={SPACING_XL} my={SPACING_XL} />

      {/* Who We Are Section */}
      <WhoWeAreSection />

      <Space h={SPACING_XL} my={SPACING_XL} />
    </Container>
  );
}

/**
 * Renders the banner with stylized text and dividers
 */
function Banner({ titleSize }: { titleSize: string }) {
  return (
    <>
      <Grid align="center" px={SPACING_XL}>
        <GridCol span={{ base: 0, md: "auto" }}>
          <Space />
        </GridCol>
        <GridCol span={{ base: 9, md: 4 }}>
          <Title
            order={1}
            size={titleSize}
            ta="right"
            textWrap="nowrap"
            c={WOOD_COLOR}
          >
            Truth, Life,
          </Title>
        </GridCol>
        <GridCol span={{ base: "auto", md: 6 }}>
          <Divider color={WOOD_COLOR} />
        </GridCol>
      </Grid>

      <Grid align="center" px={SPACING_XL}>
        <GridCol span={{ base: "auto", md: 5 }}>
          <Divider color={WOOD_COLOR} />
        </GridCol>
        <GridCol span={{ base: 9, md: 3 }}>
          <Title
            order={1}
            size={titleSize}
            ta="left"
            textWrap="nowrap"
            c={WOOD_COLOR}
          >
            Church, Gospel
          </Title>
        </GridCol>
        <GridCol span={{ base: 0, md: "auto" }}>
          <Space />
        </GridCol>
      </Grid>
    </>
  );
}

/**
 * Renders the "Who We Are" section with image and text
 */
function WhoWeAreSection() {
  return (
    <Grid px={SPACING_XL}>
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
          <Title pr={SPACING_LG} order={1} textWrap="nowrap" c={WOOD_COLOR}>
            Who we are
          </Title>
          <Divider color={WOOD_COLOR} w="20%" />
        </Group>
        <Text c={WOOD_COLOR} ta="justify" size="xl">
          We are believers in the Lord Jesus Christ and meet together as the
          church in St. Louis. The church in St. Louis isn&apos;t our name;
          it&apos;s our description. We hold the faith that is revealed in the
          Bible and is common to all genuine believers. We warmly welcome all
          guests and visitors.
        </Text>
      </GridCol>
    </Grid>
  );
}
