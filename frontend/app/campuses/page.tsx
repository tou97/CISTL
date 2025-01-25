'use client'

import {
  Button,
  Card,
  Container,
  Divider,
  Image,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import classes from './FeaturesCards.module.css';

const campusdata = [
  {
    title: 'University of Missouri - St. Louis',
    description:
      'Short description.',
    image: '/images/umsl.webp',
    link: '/campuses/umsl',
  },
  {
    title: 'Saint Louis University',
    description:
      'Short description.',
    image: '/images/slu.webp',
    link: '/campuses/slu',
  },
  {
    title: 'Washington University - St. Louis',
    description:
      'Short description.',
    image: '/images/washu.webp',
    link: '/campuses/washu',
  },
];

const FeaturesCards = () => {
  const features = campusdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" padding="xl">
      <Image src={feature.image} alt={feature.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <Text fz="lg" fw={500} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
      <Button component="a" href={feature.link} variant="light" color="blue" fullWidth mt="md" radius="md">
        Learn More
      </Button>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Christian Students on Campus
      </Title>
      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
        hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid cols={{ base: 1, lg: 3}} spacing="xl" mt="xl">
        {features}
      </SimpleGrid>

      <Divider mt="xl" />

      <Title order={2} className={classes.title} ta="center" mt="md">
        Family Time
      </Title>

      <Divider mt="xl" />

      <Title order={2} className={classes.title} ta="center" mt="md">
        Conferences
      </Title>
    </Container>
  );
}

export default FeaturesCards;