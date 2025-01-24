import { Container, Title, Text, Divider, SimpleGrid, Card, CardSection, Image, Button } from '@mantine/core';

const Campuses = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-blue-50 min-h-screen py-16">
      <Container size="lg" className="space-y-20">
        {/* Hero Section */}
        <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow-lg">
          <Title order={1} className="text-5xl font-extrabold mb-4">Our Work on College Campuses</Title>
          <Text size="lg" className="opacity-90">
            We are dedicated to fostering faith, community, and service among college students. We currently serve at three campuses, each with unique opportunities to grow and connect. Click on the cards below to learn more about our work at each campus.
          </Text>
        </section>

        {/* Campuses Section */}
        <section>
          <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="lg">
            {/* UMSL Campus Card */}
            <Card shadow="sm" padding="lg" radius="md" withBorder style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <CardSection>
                <Image src="/images/umsl.webp" alt="University of Missouri - St. Louis" height={200} />
              </CardSection>
              <Title order={4} className="mt-4 text-gray-800">University of Missouri - St. Louis</Title>
              <Text size="sm" className="text-gray-600" mt="sm">
                Weekly Bible Studies on...
              </Text>
              <Button component="a" mt="sm" variant="light" color="blue" href="/campuses/campus-a" fullWidth>
                Learn more
              </Button>
            </Card>

            {/* Saint Louis University Campus Card */}
            <Card shadow="sm" padding="lg" radius="md" withBorder style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <CardSection>
                <Image src="/images/slu.webp" alt="Saint Louis University" height={200} />
              </CardSection>
              <Title order={4} className="mt-4 text-gray-800">Saint Louis University</Title>
              <Text size="sm" className="text-gray-600" mt="sm">
                Weekly Bible Studies on...
              </Text>
              <Button component="a" mt="sm" variant="light" color="blue" href="/campuses/campus-b" fullWidth>
                Learn more
              </Button>
            </Card>

            {/* Washington University Campus Card */}
            <Card shadow="sm" padding="lg" radius="md" withBorder style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <CardSection>
                <Image src="/images/washu.webp" alt="Washington University - St. Louis" height={200} />
              </CardSection>
              <Title order={4} className="mt-4 text-gray-800">Washington University - St. Louis</Title>
              <Text size="sm" className="text-gray-600" mt="sm">
                Weekly Bible Studies on...
              </Text>
              <Button component="a" mt="sm" variant="light" color="blue" href="/campuses/campus-c" fullWidth>
                Learn more
              </Button>
            </Card>
          </SimpleGrid>
        </section>

        <Divider my="xl" />

        {/* Family Time Section */}
        <section>
          <Title order={2} ta="center" mt="xl" mb="lg" className="text-3xl font-semibold text-gray-800">
            Family Time
          </Title>
          <Text size="lg" ta="center" className="text-gray-600 mb-8">
            In addition to our campus-specific events, we host a bi-weekly &quot;family time&quot; that brings together students from all campuses. This is a time for fellowship tailored to encourage and equip college students in their faith journey.
          </Text>
        </section>

        <Divider my="xl" />

        {/* Conferences and Getaways Section */}
        <section>
          <Title order={2} ta="center" mt="xl" mb="lg" className="text-3xl font-semibold text-gray-800">
            Conferences and Getaways
          </Title>
          <Text size="lg" ta="center" className="text-gray-600 mb-8">
            We also provide opportunities for college-aged Christian believers to meet by organizing conferences and getaways with our sister clubs.
          </Text>
        </section>
      </Container>
    </div>
  );
};

export default Campuses;
