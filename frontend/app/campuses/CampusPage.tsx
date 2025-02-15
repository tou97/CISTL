import {
  Center,
  Container,
  Image,
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

export type CampusSchedule = {
  day: string;
  time: string;
  activity: string;
  description: string;
};

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

export default function CampusPage({
  imageSrc,
  imageAlt = "Campus Image",
  cardTitle,
  cardTitleColor,
  cardSubtitle,
  cardSubtitleColor,
  scheduleData,
}: CampusPageProps) {
  return (
    <Container fluid>
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

      <Space h="xl"></Space>
      <Space h="xl"></Space>

      <Grid align="center" gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Paper shadow="xl" p="lg" radius="lg" withBorder bd="1px solid wood">
            <Title order={2} ta="justify" c="wood">
              Weekly Activities
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
            <Image src={imageSrc} alt={imageAlt} h={400} w={600} />
          </Center>
        </GridCol>
      </Grid>

      <Space h="xl"></Space>
      <Space h="xl"></Space>
    </Container>
  );
}
