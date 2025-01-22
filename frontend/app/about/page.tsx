import { Container, Title, Text, Divider, Group, Paper } from '@mantine/core';

const AboutUs = () => {
  return (
    <Container size="md" py="xl">
      <Paper shadow="xs" p="md">
        <Title order={1} ta="center" mb="lg">
          About Us
        </Title>
        <Divider my="sm" />
        <Text size="lg" ta="center" c="dimmed">
          Welcome to [Your Church Name]! Our mission is to create a community where everyone can grow in faith, share God’s love, and make a positive impact in the world.
        </Text>
        <Divider my="lg" />

        <Group justify="center" gap="md">
          <Text size="sm" ta="center" c="dimmed">
            Address: 123 Church Lane, City, State, ZIP
          </Text>
          <Text size="sm" ta="center" c="dimmed">
            Contact: (123) 456-7890 | email@church.org
          </Text>
          <Text size="sm" ta="center" c="dimmed">
            Service Times: Sundays at 9:00 AM & 11:00 AM
          </Text>
        </Group>
      </Paper>
    </Container>
  );
};

export default AboutUs;