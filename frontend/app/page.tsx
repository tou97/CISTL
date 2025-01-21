import { Button, Container, Title, Text, Grid, GridCol, Image } from '@mantine/core';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <Container>
          <div className="text-center">
            <Title order={1} className="text-4xl md:text-6xl font-bold">
              Blah blah blah
            </Title>
            <Text className="mt-4 text-lg md:text-xl">
              Blah Blah Blah
            </Text>
            <Button
              variant="white"
              size="lg"
              mt="lg"
              className="mt-8 shadow-lg hover:shadow-xl transition"
            >
              Get Involved
            </Button>
          </div>
        </Container>
      </header>

      {/* About Section */}
      <section className="py-16">
        <Container>
          <Grid>
            <GridCol span={{ base: 12, md: 6}}>
              <Image
                src="https://placehold.co/600x400/EEE/31343C"
                alt="Church community"
                className="rounded-lg shadow-lg"
              />
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <Title order={2} className="text-3xl font-semibold">
                About Us
              </Title>
              <Text mt="md">
                Little splurge about us and will link to page with more description.
              </Text>
              <Button
                size="md"
                variant="outline"
                mt="lg"
                className="hover:bg-blue-600 hover:text-white transition"
              >
                Learn More
              </Button>
            </GridCol>
          </Grid>
        </Container>
      </section>
    </div>
  );
}
