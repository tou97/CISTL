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
  Box, // Import Box for potential layout adjustments if needed
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

      <Box px={SPACING_XL}> {/* Apply horizontal padding to the Box */}
  <MantineImage

    src="/images/index/stl-arch-2.webp"
    alt="Church members gather near the St. Louis Arch"
    // No 'px' prop on MantineImage itself
    style={{
      display: 'block', // Helps prevent extra space and ensures block layout
      width: '100%',   // Image takes the full width of the containing Box
      height: isMobile ? 'auto' : 600, // Fixed height on desktop, auto on mobile
      aspectRatio: isMobile ? '1 / 1' : undefined, // Enforce 1:1 aspect ratio ONLY on mobile
      objectFit: 'cover',
      objectPosition: 'center 70%', // Keep your desired image positioning
      overflow: 'hidden', // Ensure content respects the radius/bounds
    }}
  />
</Box>

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
  // Get the actual color value from the theme, using a fallback
  const woodColorValue = theme.colors[WOOD_COLOR]?.[6] || '#A47D5E'; // Assuming shade 6
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`); // Use theme breakpoint for consistency

  return (
    // Apply horizontal padding to the Grid itself
    <Grid px={SPACING_XL} gutter={SPACING_XL}> {/* Add gutter for spacing between columns */}

      {/* Image Column */}
      <GridCol
        span={{ base: 12, md: 6 }}
        // On mobile (base), this column comes second (order: 2)
        // On desktop (md), this column comes first (order: 1)
        order={{ base: 2, md: 1 }}
      >
        <Center>
           {/* Use NextImage with direct inline styles */}
           <NextImage
            src="/images/index/who-we-are.webp"
            width={600} // Required for NextImage without fill
            height={400} // Required for NextImage without fill
            alt="Group photo illustrating 'Who We Are'" // More descriptive alt text
            style={{ // Apply styles directly using the style prop
              borderRadius: largeRadius,
              border: `2px solid ${woodColorValue}`, // Use the retrieved color value
              display: 'block', // Good practice for images
              overflow: 'hidden', // Ensures the image content respects the border radius
              objectFit: 'cover', // Optional: Ensure image covers dimensions if aspect ratio differs
              maxWidth: '100%', // Ensure image scales down on smaller screens
              height: 'auto', // Maintain aspect ratio when scaling
            }}
          />
        </Center>
      </GridCol>

      {/* Text Column */}
      <GridCol
        span={{ base: 12, md: 6 }}
         // On mobile (base), this column comes first (order: 1)
         // On desktop (md), this column comes second (order: 2)
        order={{ base: 1, md: 2 }}
      >
        {/* Add vertical space above text ONLY on mobile */}
        {isMobile && <Space h={SPACING_LG} />}

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

         {/* Add vertical space below text ONLY on mobile before the image appears */}
         {isMobile && <Space h={SPACING_XL} />}
      </GridCol>

    </Grid>
  );
}