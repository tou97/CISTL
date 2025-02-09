import {
  Center,
  Container,
  Divider,
  Group,
  Image,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function Home() {
  return (
    <Container fluid>
      <Space h="lg" />
      <Group p="xl" grow preventGrowOverflow={false} wrap="nowrap">
        <Title
          ta="right"
          pr="lg"
          order={1}
          textWrap="nowrap"
          size="400%"
          c="wood"
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Truth, Life,
        </Title>
        <Divider color="wood" w="10%" />
      </Group>
      <Group p="xl" grow preventGrowOverflow={false} wrap="nowrap">
        <Divider color="wood" w="10%" />
        <Title
          ta="left"
          pl="lg"
          order={1}
          textWrap="nowrap"
          size="400%"
          c="wood"
        >
          Church, Gospel
        </Title>
      </Group>
      <Space h="xl" />
      <Space h="xl" />
      <Image px="xl" src="/images/index_main.webp" alt="Index Main" h={800} />
      <Space h="xl" />
      <Space h="xl" />
      <Group px="xl" gap="xl" grow>
        <Center>
          <Image alt="Placeholder" bg="black" c="white" h={400} w={600} />
        </Center>
        <Stack justify="flex-start">
          <Group wrap="nowrap">
            <Title pr="lg" order={1} textWrap="nowrap" c="wood">
              Who we are
            </Title>
            <Divider color="wood" w="15%" />
            <Space />
          </Group>
          <Text c="wood" size="xl">
            We are believers in the Lord Jesus Christ and meet together as the
            church in St. Louis. The church in St. Louis isn&apos;t our name;
            it&apos;s our description. We hold the faith that is revealed in the
            Bible and is common to all genuine believers. We warmly welcome all
            guests and visitors.
          </Text>
        </Stack>
      </Group>
      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
}
