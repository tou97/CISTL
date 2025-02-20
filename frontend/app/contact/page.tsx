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
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";

const ContactUs = () => {
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

  interface ContactFormValues {
    name: string;
    email: string;
    message: string;
  }

  const handleSubmit = (values: ContactFormValues) => {
    console.log(values);
    form.reset();
  };

  const contactInfo = [
    { icon: IconMail, text: "contact@yourcompany.com" },
    { icon: IconPhone, text: "+1 (555) 123-4567" },
    { icon: IconMapPin, text: "123 Business Street, City, Country" },
  ];

  return (
    <Container fluid>
      <Space bg="berry" h="xl" />
      <Space bg="berry" h="xl" />
      <Grid bg="berry" align="center" gutter="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} ta="center" c="offwhite">
            Contact us
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text c="offwhite" ta="justify" size="xl" px="xl">
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </Text>
        </GridCol>
      </Grid>

      <Space bg="berry" h="xl" />
      <Space bg="berry" h="xl" />

      <Space h="xl" />
      <Space h="xl" />

      {/* Contact Form */}
      <Grid align="center" gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Paper shadow="xl" p="lg" radius="lg" withBorder bd="1px solid wood">
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
                  color="offwhite"
                  c="wood"
                  bd="1px solid wood"
                  radius="lg"
                  w="75%"
                >
                  Send Message
                </Button>
              </Center>
            </form>
          </Paper>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          {contactInfo.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <item.icon size={24} style={{ marginRight: 12 }} />
              <Text>{item.text}</Text>
            </div>
          ))}
        </GridCol>
      </Grid>

      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
};

export default ContactUs;
