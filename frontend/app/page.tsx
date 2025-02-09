import {
  Container,
  Divider,
  Grid,
  GridCol,
  Image,
  Space,
  Text,
  Title,
} from "@mantine/core";

export default function Home() {
  return (
    <Container fluid>
      <Grid pt={100} align="center">
        <GridCol span={6}>
          <Title order={1} ta="right" size="4vw" c="wood">
            Truth, Life,
          </Title>
        </GridCol>
        <GridCol span={6}>
          <Divider size="xs" color="wood" />
        </GridCol>
      </Grid>
      <Grid align="center">
        <GridCol span={4}>
          <Divider size="xs" color="wood" />
        </GridCol>
        <GridCol span={8}>
          <Title order={1} ta="left" size="4vw" c="wood">
            Church, Gospel
          </Title>
        </GridCol>
      </Grid>
      <Space h="5vh" />
      <Image
        pl={30}
        pr={30}
        src="/images/index_main.webp"
        alt="Index Main"
        h={600}
      />
      <Space h="5vh" />
      <Grid pb={100}>
        <GridCol span={4}></GridCol>
        <GridCol span={8}>
          <Grid align="center">
            <GridCol span={2}>
              <Title c="wood" order={1} size="4vh">
                Who we are
              </Title>
            </GridCol>
            <GridCol span={2}>
              <Divider color="wood" size="xs" />
            </GridCol>
          </Grid>
          <GridCol span={12}>
            <Text c="wood" size="xl">
              We are believers in the Lord Jesus Christ and meet together as the
              church in St. Louis. The church in St. Louis isn&apos;t our name;
              it&apos;s our description. We hold the faith that is revealed in
              the Bible and is common to all genuine believers. We warmly
              welcome all guests and visitors.
            </Text>
          </GridCol>
        </GridCol>
      </Grid>
    </Container>
  );
}
