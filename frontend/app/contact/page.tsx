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
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Image from "next/image";
import { IconMessages } from "@tabler/icons-react";

// Contact page component
const ContactUs = () => {
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
    console.log(values);
    form.reset();
  };

  return (
    <Container fluid>
      {/* Header section with terracotta background */}
      <Space bg="terracotta" h="xl" />
      <Space bg="terracotta" h="xl" />
      <Grid bg="terracotta" align="center" gutter="xl">
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
          <Paper p="lg" radius="lg" withBorder bd="1px solid wood">
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                label="Name"
                placeholder="Your name"
                mb="md"
                {...form.getInputProps("name")}
              />
              <TextInput
                label="Email"
                placeholder="your@email.com"
                mb="md"
                {...form.getInputProps("email")}
              />
              <Textarea
                label="Message"
                placeholder="Your message"
                minRows={4}
                mb="xl"
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
            <Image
              src="/images/600_400.webp"
              width={600}
              height={400}
              alt="Placeholder"
            />
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
