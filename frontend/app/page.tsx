"use client";
import {
  Center,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  Space,
  Text,
  Title,
  Image as MantineImage, // Import Mantine Image with a specific name
  useMantineTheme,
} from "@mantine/core";
import NextImage from "next/image"; // Import Next.js Image with a specific name
import { useMediaQuery } from "@mantine/hooks";

// Constants
const WOOD_COLOR = "wood"; // Theme color key
const SPACING_XL = "xl";
const SPACING_LG = "lg";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 48em)"); // Approx 768px
  const titleSize = isMobile ? "250%" : "400%";

  return (
    <Container
      fluid
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        overflow: "hidden", // Keep overflow hidden if desired
      }}
    >
      <Space h={SPACING_LG} />

      {/* Banner Section */}
      <Banner titleSize={titleSize} />

      <Space h={SPACING_XL} my={SPACING_XL} />

      {/* Church Group Photo (Banner Image) - Using MantineImage */}

      <MantineImage
        src="/images/index/stl-arch-2.webp"
        alt="Church members gather near the St. Louis Arch"
        style={{
          display: "block",
          width: "100%",
          height: isMobile ? "auto" : 600,
          aspectRatio: isMobile ? "1 / 1" : undefined,
          objectFit: "cover",
          objectPosition: "center 70%",
          overflow: "hidden",
        }}
      />

      <Space h={SPACING_XL} my={SPACING_XL} />

      {/* Who We Are Section */}
      <WhoWeAreSection />

      <Space h={SPACING_XL} my={SPACING_XL} />
    </Container>
  );
}

// Banner component remains the same structurally
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
  const theme = useMantineTheme(); // Get the theme object
  const largeRadius = theme.radius.lg; // Get Mantine's large radius value
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`); // Use theme breakpoint for consistency

  return (
    <Grid px={SPACING_XL} gutter={SPACING_XL}>
      {/* Image Column */}
      <GridCol span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
        <Center>
          <NextImage
            src="/images/index/who-we-are.webp"
            width={600}
            height={400}
            alt="Group photo illustrating 'Who We Are'"
            style={{
              borderRadius: largeRadius,
              display: "block",
              overflow: "hidden",
              objectFit: "cover",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Center>
      </GridCol>

      {/* Text Column */}
      <GridCol span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
        {isMobile && <Space h={SPACING_LG} />}

        <Group wrap="nowrap">
          <Title pr={SPACING_LG} order={1} textWrap="nowrap" c={WOOD_COLOR}>
            Who we are
          </Title>
          <Divider color={WOOD_COLOR} w="20%" />
        </Group>
        <Text c={WOOD_COLOR} ta="justify" size="xl">
          Welcome! We are believers in the Lord Jesus Christ, meeting simply as
          the church in St. Louis. This descrbies our identity as local
          Christians gathering based on the common faith revealed in the Bible -
          the same faith cherished by believers across the globe. If you&apos;re
          searching for a Christ-centered, Bible-believing community in St.
          Louis, we warmly welcome you. We look forward to meeting guests and
          visitors!
        </Text>

        {isMobile && <Space h={SPACING_XL} />}
      </GridCol>
    </Grid>
  );
}
