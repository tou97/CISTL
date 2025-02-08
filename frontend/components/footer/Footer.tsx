import { Container, Text } from "@mantine/core";
import classes from "./Footer.module.css";

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container p="lg">
        <Text ta="center" size="sm" opacity={0.7}>
          © {new Date().getFullYear()} The Church in St. Louis
        </Text>
      </Container>
    </div>
  );
}

export default FooterSocial;
