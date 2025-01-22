import { Container, Title, Text, Divider, Timeline, TimelineItem, Group, Paper } from '@mantine/core';

const Gatherings = () => {
  return (
    <Container size="md" py="xl">
      <Paper shadow="xs" p="md">
        <Title order={1} ta="center" mb="lg">
          Gatherings
        </Title>
        <Divider my="sm" />
        <Text size="lg" ta="center" c="dimmed">
          Join us for our weekly gatherings and special events! Here’s our schedule:
        </Text>
        <Divider my="lg" />

        <Timeline active={1} bulletSize={24} lineWidth={2}>
          <TimelineItem title="Sunday Service">
            <Text c="dimmed" size="sm">Every Sunday at 9:00 AM and 11:00 AM</Text>
            <Text size="xs" mt={4}>Location: Main Sanctuary</Text>
          </TimelineItem>

          <TimelineItem title="Midweek Bible Study">
            <Text c="dimmed" size="sm">Wednesdays at 7:00 PM</Text>
            <Text size="xs" mt={4}>Location: Fellowship Hall</Text>
          </TimelineItem>

          <TimelineItem title="Youth Group">
            <Text c="dimmed" size="sm">Fridays at 6:30 PM</Text>
            <Text size="xs" mt={4}>Location: Youth Center</Text>
          </TimelineItem>

          <TimelineItem title="Community Outreach">
            <Text c="dimmed" size="sm">First Saturday of every month at 10:00 AM</Text>
            <Text size="xs" mt={4}>Location: Meet at the church parking lot</Text>
          </TimelineItem>
        </Timeline>

        <Group justify="center" mt="lg">
          <Text size="sm" ta="center" c="dimmed">
            For more details or to volunteer, contact us at (123) 456-7890 or email@church.org
          </Text>
        </Group>
      </Paper>
    </Container>
  );
};

export default Gatherings;
