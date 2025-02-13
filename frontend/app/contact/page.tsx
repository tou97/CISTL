import { Container, Space, Grid, GridCol, Title, Text } from "@mantine/core";

const ContactUs = () => {
  return (
    <Container fluid>
      <Space bg="berry" h="xl" />
      <Space bg="berry" h="xl" />

      {/* Banner */}
      <Grid bg="berry" align="center" gutter="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} ta="center" c="offwhite">
            About Us
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text c="offwhite" ta="justify" size="xl" px="xl">
            We are believers in the Lord Jesus Christ and meet together as the
            church in St. Louis. The church in St. Louis isn&apos;t our name;
            it&apos;s our description. We hold the faith that is revealed in the
            Bible and is common to all genuine believers. We warmly welcome all
            guests and visitors.
          </Text>
        </GridCol>
      </Grid>

      <Space bg="berry" h="xl" />
      <Space bg="berry" h="xl" />

      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
};

export default ContactUs;
