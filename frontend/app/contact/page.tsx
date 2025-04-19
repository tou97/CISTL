"use client";
import {
  Center,
  Container,
  Grid,
  GridCol,
  Paper,
  Title,
  Text,
  Space,
  TextInput,
  Textarea,
  Button,
  useMantineTheme, // Import the hook
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Image from "next/image"; // Keep using Next.js Image
import { IconMessages } from "@tabler/icons-react";

// Contact page component
const ContactUs = () => {
  // --- Get theme values ---
  const theme = useMantineTheme();
  const largeRadius = theme.radius.lg;
  // Define border color (using wood[6] as before, with fallback)
  const borderColorValue = theme.colors.wood?.[6] || '#A47D5E';

  // --- Define the common image style object ---
  const imageStyle = {
    borderRadius: largeRadius,
    border: `2px solid ${borderColorValue}`,
    display: 'block', // Good practice
    overflow: 'hidden', // Ensure content respects border radius
    objectFit: 'cover' as const, // Ensures image covers the area nicely
  };
  // --------------------------

  // Form setup and validation
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? "Name is too short" : null),
      email: (value) => (!/^\S+@\S+$/.test(value) ? "Invalid email" : null),
      message: (value) =>
        value.trim().length < 10 ? "Message is too short" : null,
    },
  });

  // Handle form submission
  const handleSubmit = (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log("Form submitted:", values); // Log submitted values
    // Add actual submission logic here (e.g., API call)
    alert("Message sent! (Check console for details)"); // Placeholder feedback
    form.reset();
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
      {/* Header section with terracotta background */}
      <Space bg="terracotta" h="xl" />
      <Space bg="terracotta" h="xl" />
      <Grid bg="terracotta" align="center" gutter="xl">
        {/* ... (Header Grid content remains unchanged) ... */}
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} ta="center" c="offwhite">
            Contact us
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text c="offwhite" ta="justify" size="xl" px="xl">
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as we can!
          </Text>
        </GridCol>
      </Grid>
      <Space bg="terracotta" h="xl" />
      <Space bg="terracotta" h="xl" />

      {/* Spacing between sections */}
      <Space h="xl" />
      <Space h="xl" />

      {/* Contact Form and Image */}
      <Grid align="center" gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          {/* ... (Form Paper content remains unchanged) ... */}
          <Paper p="lg" radius="lg" withBorder bd="1px solid wood">
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                label="Name"
                placeholder="Your name"
                mb="md"
                required // Added required attribute
                {...form.getInputProps("name")}
              />
              <TextInput
                label="Email"
                placeholder="your@email.com"
                mb="md"
                required // Added required attribute
                type="email" // Use email type for better validation
                {...form.getInputProps("email")}
              />
              <Textarea
                label="Message"
                placeholder="Your message"
                minRows={4}
                mb="xl"
                required // Added required attribute
                {...form.getInputProps("message")}
              />
              <Center>
                <Button
                  type="submit"
                  bg="offwhite"
                  c="wood"
                  bd="1px solid wood"
                  radius="lg"
                  w="75%"
                  leftSection={<IconMessages />}
                  className="standard-button"
                >
                  Send Message
                </Button>
              </Center>
            </form>
          </Paper>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Center>
            {/* --- Update Image component --- */}
            <Image
              src="/images/contact/contact_us.webp" // Updated src
              width={600}
              height={400}
              alt="Stylized image representing communication or contact" // Updated alt text
              style={imageStyle} // Apply the style object here
            />
            {/* ----------------------------- */}
          </Center>
        </GridCol>
      </Grid>

      {/* Bottom spacing */}
      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
};

export default ContactUs;