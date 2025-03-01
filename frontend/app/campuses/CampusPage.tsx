import {
  Center,
  Container,
  Grid,
  GridCol,
  Title,
  Paper,
  Space,
  Table,
  TableThead,
  TableTr,
  TableTh,
  TableTbody,
  TableTd,
  Text,
} from "@mantine/core";
import Image from "next/image";

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
  // cardSubtitleColor,
  scheduleData,
  scheduleTitle = "Weekly Activities",
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
          <Paper p="lg" radius="lg" withBorder bd="1px solid wood">
            <Title order={2} ta="justify" c="wood">
              {scheduleTitle}
            </Title>
            <Space h="lg" />
            <Table
              striped
              stripedColor="offwhite"
              verticalSpacing="sm"
              ta="justify"
              c="wood"
              borderColor="wood"
            >
              <TableThead>
                <TableTr>
                  <TableTh>Day</TableTh>
                  <TableTh>Time</TableTh>
                  <TableTh>Activity</TableTh>
                  <TableTh>Description</TableTh>
                </TableTr>
              </TableThead>
              <TableTbody>
                {scheduleData.map((item, index) => (
                  <TableTr key={index}>
                    <TableTd>{item.day}</TableTd>
                    <TableTd>{item.time}</TableTd>
                    <TableTd>{item.activity}</TableTd>
                    <TableTd>{item.description}</TableTd>
                  </TableTr>
                ))}
              </TableTbody>
            </Table>
          </Paper>
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
