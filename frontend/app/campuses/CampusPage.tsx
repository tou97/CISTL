import {
  Center,
  Container,
  Grid,
  GridCol,
  Title,
  Space,
  Stack,
  Card,
  Group,
  Badge,
  Text,
} from "@mantine/core";
import Image from "next/image";
import { IconClock, IconCalendar } from "@tabler/icons-react";

// Schedule data structure
export type CampusSchedule = {
  day: string;
  time: string;
  activity: string;
  description: string;
};

// Component props
export interface CampusPageProps {
  imageSrc: string;
  imageAlt?: string;
  cardTitle: string;
  cardTitleColor?: string;
  cardSubtitle: string;
  cardSubtitleColor?: string;
  scheduleData: CampusSchedule[];
  scheduleTitle?: string;
}

/**
 * Campus page displaying header information and weekly schedule
 */
export default function CampusPage({
  imageSrc,
  imageAlt = "Campus Image",
  cardTitle,
  cardTitleColor,
  cardSubtitle,
  scheduleData,
}: CampusPageProps) {
  return (
    <Container fluid>
      {/* Header section */}
      <Space bg={cardTitleColor} h="xl" />
      <Space bg={cardTitleColor} h="xl" />
      <Grid bg={cardTitleColor} align="center" gutter="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} c="offwhite" ta="center" px="xl">
            {cardTitle}
          </Title>
          <Title order={2} c="offwhite" ta="center" px="xl">
            {cardSubtitle}
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text c="offwhite" ta="justify" size="xl" px="xl">
            Club and campus description goes here maybe?
          </Text>
        </GridCol>
      </Grid>
      <Space bg={cardTitleColor} h="xl" />
      <Space bg={cardTitleColor} h="xl" />

      {/* Spacing between sections */}
      <Space h="xl" />
      <Space h="xl" />

      {/* Content section */}
      <Grid align="center" gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Stack gap="md">
            {scheduleData.map((item, index) => (
              <Card
                key={index}
                p="md"
                radius="lg"
                withBorder
                bd="1px solid wood"
              >
                <Group mb="xs">
                  <IconCalendar />
                  <Text fw={600}>{item.day}</Text>
                  <Badge bg={cardTitleColor}>{item.activity}</Badge>
                </Group>
                <Group mb="xs">
                  <IconClock />
                  <Text fw={600}>{item.time}</Text>
                </Group>
                <Text size="sm">{item.description}</Text>
              </Card>
            ))}
          </Stack>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Center>
            <Image src={imageSrc} width={600} height={400} alt={imageAlt} />
          </Center>
        </GridCol>
      </Grid>

      {/* Bottom spacing */}
      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
}
