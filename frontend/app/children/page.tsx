import { Container, Grid, GridCol, Title, Text, Space } from "@mantine/core";

const Children = () => {
  return (
    <Container fluid>
      <Space bg="rose" h="xl" />
      <Space bg="rose" h="xl" />

      {/* Banner */}
      <Grid bg="rose" align="center" gutter="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} ta="center" c="offwhite">
            Children
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text c="offwhite" ta="justify" size="xl" px="xl">
            We believe in partnering with families to raise the next generation
            in faith. Our children&apos;s service provides a welcoming
            environment for children to connect with others, learn biblical
            values, and develop a love for Jesus.
          </Text>
        </GridCol>
      </Grid>

      <Space bg="rose" h="xl" />
      <Space bg="rose" h="xl" />

      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
};

export default Children;
