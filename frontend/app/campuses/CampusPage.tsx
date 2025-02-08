import {
    Container,
    Box,
    Image,
    Card,
    Title,
    Text,
    Paper,
    Table
  } from '@mantine/core';
  
  export type CampusSchedule = {
    day: string;
    time: string;
    activity: string;
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
    imageAlt = 'Campus Image',
    cardTitle,
    cardTitleColor,
    cardSubtitle,
    cardSubtitleColor,
    scheduleData,
    scheduleTitle = 'Weekly Activities'
  }: CampusPageProps) {
    return (
      <Container size="lg" my="xl">
        <Box style={{ position: 'relative' }}>
          <Image src={imageSrc} alt={imageAlt} h={600} fit="cover" />
          <Box
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translate(-50%, 75%)',
              width: '90%'
            }}
          >
            <Card shadow="lg" padding="xl" radius="lg" ta="center" withBorder>
              <Title order={1} c={cardTitleColor}>
                {cardTitle}
              </Title>
              <Text size="lg" mt="sm" c={cardSubtitleColor}>
                {cardSubtitle}
              </Text>
            </Card>
          </Box>
        </Box>
        <Box mt={150}>
          <Title order={2} ta="center" mb="md">
            {scheduleTitle}
          </Title>
          <Paper shadow="md" p="xl" radius="lg" withBorder>
            <Table highlightOnHover striped withColumnBorders>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.day}</td>
                    <td>{item.time}</td>
                    <td>{item.activity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Paper>
        </Box>
      </Container>
    );
  }
  