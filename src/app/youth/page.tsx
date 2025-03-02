import { Container, Grid, GridCol, Title, Text, Space } from "@mantine/core";

const Youth = () => {
  return (
    <Container
      fluid
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        overflow: "hidden",
      }}
    >
      <Space bg="lavender" h="xl" />
      <Space bg="lavender" h="xl" />

      {/* Banner */}
      <Grid bg="lavender" align="center" gutter="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} ta="center" c="offwhite">
            Young people
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text c="offwhite" ta="justify" size="xl" px="xl">
            For middle and high schooler students and their families - discover
            a welcoming community where teens connect with peers, explore faith
            in relevant ways, and build a positive foundation. We offer support,
            friendship, and opportunities for growth - spiritually and
            personally.
          </Text>
        </GridCol>
      </Grid>

      <Space bg="lavender" h="xl" />
      <Space bg="lavender" h="xl" />

      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
};

export default Youth;
