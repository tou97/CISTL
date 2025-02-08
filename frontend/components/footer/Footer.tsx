import { Container, Text } from "@mantine/core";

export function FooterSocial() {
  return (
    <Container p="md" bg="wood" fluid>
      <Text ta="left" pl="xl" size="sm" c="white">
        © {new Date().getFullYear()} The Church in St. Louis
      </Text>
    </Container>
  );
}

export default FooterSocial;
