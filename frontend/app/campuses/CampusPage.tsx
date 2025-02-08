import {
  Container,
  Box,
  Image,
  Card,
  Title,
  Paper,
  Space,
  Table,
  TableThead,
  TableTr,
  TableTh,
  TableTbody,
  TableTd,
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
  scheduleTitle = "Weekly Activities",
}: CampusPageProps) {
  return (
    <Container size="lg" my="xl">
      <Box pos="relative">
        <Image src={imageSrc} alt={imageAlt} h={600} fit="cover" radius="xl" />
        <Box
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translate(-50%, 75%)",
            width: "90%",
          }}
        >
          <Card shadow="lg" padding="xl" radius="xl" ta="center" withBorder>
            <Title order={1} c={cardTitleColor}>
              {cardTitle}
            </Title>
            <Title order={2} mt="sm" c={cardSubtitleColor}>
              {cardSubtitle}
            </Title>
          </Card>
        </Box>
      </Box>
      <Space h="200"></Space>
      <Box>
        <Title order={2} ta="center" mb="md">
          {scheduleTitle}
        </Title>
        <Paper shadow="md" p="xl" radius="xl" withBorder>
          <Table striped highlightOnHover verticalSpacing="sm">
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
      </Box>
    </Container>
  );
}
