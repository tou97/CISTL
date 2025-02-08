import {
  Card,
  Container,
  Box,
  Image,
  Title,
  Text,
  Paper,
  Table,
} from "@mantine/core";

const scheduleData = [
  { day: "Thursday", time: "6:00 PM", activity: "Family Time" },
  { day: "Friday", time: "12:00 PM", activity: "Bible Study" },

];

export default function HomePage() {
  return (
    <Container size="lg" my="xl">
      <Box style={{ position: "relative" }}>
        <Image
          src="/images/slu_campus.webp"
          alt="University Campus"
          h={600}
          fit="cover"
        />
        <Box
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translate(-50%, 75%)",
            width: "90%",
          }}
        >
          <Card
            shadow="lg"
            padding="xl"
            radius="lg"
            ta="center"
            c="#BD302C"
            withBorder
          >
            <Title order={1} c="#003DA5">
              Saint Louis University
            </Title>
            <Text size="lg" mt="sm" c="#C8C9C7">
              Christian Students on Campus
            </Text>
          </Card>
        </Box>
      </Box>
      <Box mt={150}>
        <Title order={2} ta="center" mb="md">
          Weekly Activities
        </Title>
        <Paper shadow="sm" p="md" radius="lg" withBorder>
          <Table highlightOnHover>
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
      <Box mt="xl">
        <Paper shadow="xs" p="md" radius="lg" withBorder>
          <Title order={3}>Get in Touch</Title>
          <Text mt="sm">
            Interested in learning more about our campus ministry or
            volunteering? Contact us at{" "}
            <a href="mailto:contact@yourchurch.org">contact@yourchurch.org</a>.
          </Text>
        </Paper>
      </Box>
    </Container>
  );
}
