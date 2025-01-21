import { Container, Text } from '@mantine/core';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <Container>
        {/* Copyright */}
        <Text ta="center" size="sm" opacity={0.7}>
          © {new Date().getFullYear()} The Church in St. Louis. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
};

export default Footer;
