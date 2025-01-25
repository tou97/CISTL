import { Container, Title, Text, Timeline, TimelineItem, Group } from '@mantine/core';

const Gatherings = () => {
  return (
    <div className="min-h-screen py-16">
      <Container size="lg" className="space-y-20">
        {/* Hero Section */}
        <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow-lg">
          <Title order={1} className="text-5xl font-extrabold mb-4">Gatherings</Title>
          <Text size="lg" className="opacity-90">
            Join us for our weekly gatherings and special events! Here’s our schedule:
          </Text>
        </section>

        {/* Timeline Section */}
        <section>
          <Timeline active={1} bulletSize={24} lineWidth={2}>
            <TimelineItem title="Sunday Service" className="text-gray-800">
              <Text c="dimmed" size="sm">Every Sunday at 9:00 AM and 11:00 AM</Text>
              <Text size="xs" mt={4}>Location: Main Sanctuary</Text>
            </TimelineItem>

            <TimelineItem title="Midweek Bible Study" className="text-gray-800">
              <Text c="dimmed" size="sm">Wednesdays at 7:00 PM</Text>
              <Text size="xs" mt={4}>Location: Fellowship Hall</Text>
            </TimelineItem>

            <TimelineItem title="Youth Group" className="text-gray-800">
              <Text c="dimmed" size="sm">Fridays at 6:30 PM</Text>
              <Text size="xs" mt={4}>Location: Youth Center</Text>
            </TimelineItem>

            <TimelineItem title="Community Outreach" className="text-gray-800">
              <Text c="dimmed" size="sm">First Saturday of every month at 10:00 AM</Text>
              <Text size="xs" mt={4}>Location: Meet at the church parking lot</Text>
            </TimelineItem>
          </Timeline>
        </section>

        {/* Contact Section */}
        <Group justify="center" mt="lg">
          <Text size="sm" ta="center" c="dimmed">
            For more details or to volunteer, contact us at (123) 456-7890 or email@church.org
          </Text>
        </Group>
      </Container>
    </div>
  );
};

export default Gatherings;
