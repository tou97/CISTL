import { Accordion, AccordionItem, Container, Divider, Title, Text, List, ListItem, AccordionControl, AccordionPanel, Flex } from '@mantine/core';
import { IconPoint } from '@tabler/icons-react';

const beliefs = [
  {
    value: "The Bible is the complete divine revelation inspired word by word by God through the Holy Spirit.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>2 Pet. 1:21: For no prophecy was ever borne by the will of man, but men spoke from God while being borne by the Holy Spirit.</ListItem>
        <ListItem>2 Tim. 3:16: All Scripture is God-breathed and profitable for teaching, for conviction, for correction, for instruction in righteousness,</ListItem>
      </List>
    )
  },
  {
    value: "God is uniquely one, yet triune - the Father, the Son, and the Spirit.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>1 Tim. 2:5: For there is one God and one Mediator of God and men, the man Christ Jesus,</ListItem>
        <ListItem>Matt. 28:19: Go therefore and disciple all the nations, baptizing them into the name of the Father and of the Son and of the Holy Spirit, </ListItem>
      </List>
    )
  },
  {
    value: "The Son of God, even God Himself, was incarnated to be a man by the name of Jesus Christ.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>John 1:1: </ListItem>
        <ListItem>John 1:14: </ListItem>
      </List>
    )
  },
  {
    value: "Christ died on the cross for our sins, shedding His blood for our redemption.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>1 Pet. 2:24: </ListItem>
        <ListItem>Eph. 1:7a: </ListItem>
      </List>
    )
  },
  {
    value: "Christ resurrected from among the dead on the third day.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>1 Cor. 15:4: </ListItem>
      </List>
    )
  },
  {
    value: "Christ ascended to the right hand of God to be Lord of all.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>Acts 1:9: </ListItem>
        <ListItem>Acts 2:33: </ListItem>
        <ListItem>Acts 2:36: </ListItem>
      </List>
    )
  },
  {
    value: "Whenever any person repents to God and believes in the Lord Jesus Christ, he is regenerated (born again) and becomes a living member of the one Body of Christ.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>Acts 20:21: </ListItem>
        <ListItem>John 3:3: </ListItem>
        <ListItem>Eph. 1:22-23: </ListItem>
        <ListItem>Rom. 12:5: </ListItem>
      </List>
    )
  },
  {
    value: "Christ is coming again to receive His believers to Himself.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>1 Thes. 2:19: </ListItem>
      </List>
    )
  }
]

const AboutUs = () => {
  return (
    <div className="min-h-screen py-16">
      <Container size="lg" className="space-y-20">
        {/* Hero Section */}
        <Container 
          ta="center"
          bg="olive"
          c="white"
          style={{
            padding: '5rem 1.5rem',
            borderRadius: '3rem',
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Title order={1} className="text-5xl font-extrabold mb-4">About Us</Title>
          <Text size="lg" className="opacity-90">
            We are believers in the Lord Jesus Christ and meet together as the church in St. Louis. The church in St. Louis isn&apos;t our name; it&apos;s our description. We hold the faith that is revealed in the Bible and is common  to all genuine believers. We warmly welcome all guests and visitors.
          </Text>
        </Container>

        {/* Who We Are Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          <Flex
            direction="column"
            justify="center"
            align="center"
            w={{ base: '100%', lg: '50%' }}
            p="md"
            bg="sky"
            c="black"
            ta="center"
            style={{
              borderRadius: '3rem',
              boxShadow: 'xl',
              fontSize: '2rem',
              fontWeight: 800
            }}
          >
            Who We Are
          </Flex>
          <div className="lg:w-1/2 space-y-6">
            <Text size="lg" className="text-gray-600 leading-relaxed">
              We treasure the Holy Bible as God&apos;s revelation of Himself and His eternal purpose. Our beloved Jesus Christ is the center of all our gatherings.
            </Text>
            <Text size="lg" className="text-gray-600 leading-relaxed">
              Through prayer and fellowship with one another, we endeavor to grow spiritually both individually and as the Body of Christ. Our small-group church life provides opportunities to enjoy Christian companionship that encourages, strengthens, and sustains us to live the Christian life.
            </Text>
          </div>
        </section>

        <Divider mt="xl" />

        {/* Our Faith Section */}
        <section className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <Flex
            direction="column"
            justify="center"
            align="center"
            w={{ base: '100%', lg: '50%' }}
            p="md"
            bg="sky"
            c="black"
            ta="center"
            style={{
              borderRadius: '3rem',
              boxShadow: 'xl',
              fontSize: '2rem',
              fontWeight: 800
            }}
          >
            Our Faith
          </Flex>
          <div className="lg:w-1/2 space-y-6">
            <Text size="lg" className="text-gray-600 leading-relaxed">
              We hold the faith which is common to all the believers: (Titus 1:4)
            </Text>
            <Divider my="sm" />
            <Accordion>
              {beliefs.map((belief) => (
                <AccordionItem key={belief.value} value={belief.value}>
                  <AccordionControl>{belief.value}</AccordionControl>
                  <AccordionPanel>{belief.description}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <Divider mt="xl" />

        {/* Our Name Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          <Flex
            direction="column"
            justify="center"
            align="center"
            w={{ base: '100%', lg: '50%' }}
            p="md"
            bg="sky"
            c="black"
            ta="center"
            style={{
              borderRadius: '3rem',
              boxShadow: 'xl',
              fontSize: '2rem',
              fontWeight: 800
            }}
          >
            Our Name
          </Flex>
          <div className="lg:w-1/2 space-y-6">
            <Text size="lg" className="text-gray-600 leading-relaxed">
              The church in St. Louis isn&apos;t our name - it&apos;s our description. As such, it&apos;s an inclusive title, not an exclusive one. We gather together simply as believers of the Lord in this city. The first use of the word &quot;church&quot; in Acts refers to the believers in Jerusalem as simply &quot;the whole church&quot; (Acts 5:11), meaning the called out (congregation), or assembly (in Greek, &quot;ekklesia&quot;).
            </Text>
            <Text size="lg" className="text-gray-600 leading-relaxed">
              In Acts 8:1, they were referred to as &quot;the church which was in Jerusalem.&quot; This is the first church established in the Bible in Acts and it included all the believers living in Jerusalem. The record concerning the establishment of the church in its locality is consistent throughout the New Testament (Acts 13:1; 14:23).
            </Text>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutUs;
