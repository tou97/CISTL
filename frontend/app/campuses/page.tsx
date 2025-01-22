import { Container, Title, Text, Divider, SimpleGrid, Card, CardSection, Image, Paper, Button } from '@mantine/core';

const Campuses = () => {
  return (
    <Container size="md" py="xl">
      <Paper shadow="xs" p="md">
        <Title order={1} ta="center" mb="lg">
          Our Work on College Campuses
        </Title>
        <Divider my="sm" />
        <Text size="lg" ta="center" c="dimmed" mb="lg">
          We are dedicated to fostering faith, community, and service among college students. We currently serve at three campuses, each with unique opportunities to grow and connect. Click on the cards below to learn more about our work at each campus.
        </Text>

        <SimpleGrid cols={3} spacing="lg">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <CardSection>
              <Image src="/images/umsl.webp" alt="Campus A" height={160} />
            </CardSection>
            <Title order={4} mt="md">Campus A</Title>
            <Text size="sm" c="dimmed" mt="sm">
              Focused on weekly Bible studies, mentorship programs, and service projects.
            </Text>
            <Button component="a" mt="sm" variant="light" color="blue" href="/campuses/campus-a" fullWidth>
              Learn more
            </Button>
          </Card>

          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <CardSection>
              <Image src="/images/slu.webp" alt="Campus B" height={160} />
            </CardSection>
            <Title order={4} mt="md">Campus B</Title>
            <Text size="sm" c="dimmed" mt="sm">
              Known for its vibrant worship nights and student-led outreach events.
            </Text>
            <Button component="a" mt="sm" variant="light" color="blue" href="/campuses/campus-b" fullWidth>
              Learn more
            </Button>
          </Card>

          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <CardSection>
              <Image src="/images/washu.webp" alt="Campus C" height={160} />
            </CardSection>
            <Title order={4} mt="md">Campus C</Title>
            <Text size="sm" c="dimmed" mt="sm">
              Home to an inclusive community offering prayer groups and leadership training.
            </Text>
            <Button component="a" mt="sm" variant="light" color="blue" href="/campuses/campus-c" fullWidth>
              Learn more
            </Button>
          </Card>
        </SimpleGrid>

        <Text ta="center" mt="lg" c="dimmed">
          Want to get involved or learn more? Contact us at (123) 456-7890 or email@church.org.
        </Text>
      </Paper>
    </Container>
  );
};

export default Campuses;
