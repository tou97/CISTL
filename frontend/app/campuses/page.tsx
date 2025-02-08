"use client";

import {
  Button,
  Card,
  Container,
  Divider,
  Image,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import classes from "./FeaturesCards.module.css";

const campusdata = [
  {
    title: "Saint Louis University",
    description: "Short description.",
    image: "/images/slu.webp",
    link: "/campuses/slu",
    maincolor: "#003DA5",
    secondarycolor: "#C8C9C7",
  },
  {
    title: "St. Louis Community College - Meramec",
    description: "Short description",
    image: "/images/stlcc.webp",
    link: "/campuses/stlcc",
    maincolor: "#003A70",
    secondarycolor: "#00CCFF",
  },
  {
    title: "University of Missouri - St. Louis",
    description: "Short description.",
    image: "/images/umsl.webp",
    link: "/campuses/umsl",
    maincolor: "#BD302C",
    secondarycolor: "#F5B324",
  },
  {
    title: "The Washington University",
    description: "Short description.",
    image: "/images/washu.webp",
    link: "/campuses/washu",
    maincolor: "#BA0C2F",
    secondarycolor: "#215732",
  },
];

const FeaturesCards = () => {
  const features = campusdata.map((feature) => (
    <Card
      key={feature.title}
      bg="offwhite"
      shadow="lg"
      radius="xl"
      padding="lg"
      withBorder
      bd={`1px solid ${feature.maincolor}`}
      display="flex"
      flex="column"
      h="100%"
    >
      <Image
        src={feature.image}
        alt={feature.title}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
      <Divider mt="sm" color="sky"></Divider>
      <div style={{ flexGrow: 1 }}>
        <Text size="lg" fw="700" mt="sm" c="olive">
          {feature.title}
        </Text>
        <Text size="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </div>
      <Button
        component="a"
        href={feature.link}
        c="white"
        color={feature.maincolor}
        fullWidth
        mt="md"
        radius="xl"
      >
        Learn More
      </Button>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Paper ta="center" bg="olive" c="offwhite" radius="xl" shadow="lg" p="xl">
        <Title order={1} mb="md">
          Christian Students on Campus
        </Title>
        <Text size="lg">
          Christian Students on Campus is a vibrant and inclusive community of
          students who are passionate about living out their faith and making a
          positive impact on campus and beyond. Together, we seek to grow in our
          understanding of Christ, build meaningful relationships, and serve
          others with love and compassion. Whether through worship, Bible study,
          community outreach, or simply walking alongside one another in faith,
          we aim to create a welcoming space where students can explore and
          strengthen their relationship with God. Our mission is to be a light
          on campus, supporting one another in our spiritual journeys, and
          sharing the hope and grace of Jesus Christ with those around us.
        </Text>
      </Paper>
      <Divider size="sm" mt="lg" mb="lg" color="sky" />
      <Paper bg="sky" radius="xl" shadow="lg" p="xl">
        <SimpleGrid cols={{ base: 1, lg: 4 }} spacing="lg">
          {features}
        </SimpleGrid>
      </Paper>

      <Divider size="sm" mt="lg" mb="lg" color="sky" />

      <Title order={2} className={classes.title} ta="center" mt="md">
        Family Time
      </Title>

      <Divider size="sm" mt="lg" mb="lg" color="sky" />

      <Title order={2} className={classes.title} ta="center" mt="md">
        Conferences
      </Title>
    </Container>
  );
};

export default FeaturesCards;
