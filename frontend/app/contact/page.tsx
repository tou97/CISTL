import { Container, Grid, GridCol, Title, Text, Space } from "@mantine/core";

const ContactUs = () => {
  return (
    <Container fluid>
      <Space bg="berry" h="xl" />
      <Space bg="berry" h="xl" />
      <Grid bg="berry" align="center" gutter="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} ta="center" c="offwhite">
            Contact us
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text c="offwhite" ta="justify" size="xl" px="xl">
            Test
          </Text>
        </GridCol>
      </Grid>
      <Space bg="berry" h="xl" />
      <Space bg="berry" h="xl" />
    </Container>
  );
};

export default ContactUs;
