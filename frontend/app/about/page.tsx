import {
  Accordion,
  AccordionItem,
  Container,
  Divider,
  Title,
  Text,
  List,
  ListItem,
  AccordionControl,
  AccordionPanel,
  Flex,
} from "@mantine/core";
import { IconPoint } from "@tabler/icons-react";

const beliefs = [
  {
    value:
      "The Bible is the complete divine revelation inspired word by word by God through the Holy Spirit.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>
          <b>2 Pet. 1:21:</b> For no prophecy was ever borne by the will of man,
          but men spoke from God while being borne by the Holy Spirit.
        </ListItem>
        <ListItem>
          <b>2 Tim. 3:16:</b> All Scripture is God-breathed and profitable for
          teaching, for conviction, for correction, for instruction in
          righteousness,
        </ListItem>
      </List>
    ),
  },
  {
    value:
      "God is uniquely one, yet triune - the Father, the Son, and the Spirit.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>
          <b>1 Tim. 2:5:</b> For there is one God and one Mediator of God and
          men, the man Christ Jesus,
        </ListItem>
        <ListItem>
          <b>Matt. 28:19:</b> Go therefore and disciple all the nations,
          baptizing them into the name of the Father and of the Son and of the
          Holy Spirit,
        </ListItem>
      </List>
    ),
  },
  {
    value:
      "The Son of God, even God Himself, was incarnated to be a man by the name of Jesus Christ.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>
          <b>John 1:1:</b> In the beginning was the Word, and the Word was with
          God, and the Word was God.
        </ListItem>
        <ListItem>
          <b>John 1:14:</b> And the Word became flesh and tabernacled among us
          (and we beheld His glory, glory as of the only Begotten from the
          Father), full of grace and reality.
        </ListItem>
      </List>
    ),
  },
  {
    value:
      "Christ died on the cross for our sins, shedding His blood for our redemption.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>
          <b>1 Pet. 2:24:</b> Who Himself bore up our sins in His body on the
          tree, in order that we, having died to sins, might live to
          righteousness; by whose bruise you were healed.
        </ListItem>
        <ListItem>
          <b>Eph. 1:7:</b> In whom we have redemption through His blood, the
          forgiveness of offenses, according to the riches of His grace,
        </ListItem>
      </List>
    ),
  },
  {
    value: "Christ resurrected from among the dead on the third day.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>
          <b>1 Cor. 15:4:</b> And that He was buried, and that He has been
          raised on the third day according to the Scriptures;
        </ListItem>
      </List>
    ),
  },
  {
    value: "Christ ascended to the right hand of God to be Lord of all.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>
          <b>Acts 1:9:</b> And when He had said these things, while they were
          looking on, He was lifted up, and a cloud took Him away from their
          sight.
        </ListItem>
        <ListItem>
          <b>Acts 2:33:</b> Therefore having been exalted to the right hand of
          God and having received the promise of the Holy Spirit from the
          Father, He has poured out this which you both see and hear.
        </ListItem>
        <ListItem>
          <b>Acts 2:36:</b> Therefore let all the house of Israel know assuredly
          that God has made Him both Lord and Christ, this Jesus whom you have
          crucified.
        </ListItem>
      </List>
    ),
  },
  {
    value:
      "Whenever any person repents to God and believes in the Lord Jesus Christ, he is regenerated (born again) and becomes a living member of the one Body of Christ.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>
          <b>Acts 20:21:</b> Solemnly testifying both to Jews and to Greeks
          repentance unto God and faith in our Lord Jesus.
        </ListItem>
        <ListItem>
          <b>John 3:3:</b> Jesus answered and said to him, Truly, truly, I say
          to you, Unless one is born anew, he cannot see the kingdom of God.
        </ListItem>
        <ListItem>
          <b>Eph. 1:22-23:</b> And He subjected all things under His feet and
          gave Him to be Head over all things to the church, Which is His Body,
          the fullness of the One who fills all in all.
        </ListItem>
        <ListItem>
          <b>Rom. 12:5:</b> So we who are many are one Body in Christ, and
          individually members one of another.
        </ListItem>
      </List>
    ),
  },
  {
    value: "Christ is coming again to receive His believers to Himself.",
    description: (
      <List withPadding icon={<IconPoint />} spacing="md">
        <ListItem>
          <b>1 Thes. 2:19:</b>For what is our hope or joy or crown of boasting
          before our Lord Jesus at His coming? Are not even you?
        </ListItem>
      </List>
    ),
  },
];

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
            padding: "5rem 1.5rem",
            borderRadius: "3rem",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Title order={1} className="text-5xl font-extrabold mb-4">
            About Us
          </Title>
          <Text size="lg" className="opacity-90">
            We are believers in the Lord Jesus Christ and meet together as the
            church in St. Louis. The church in St. Louis isn&apos;t our name;
            it&apos;s our description. We hold the faith that is revealed in the
            Bible and is common to all genuine believers. We warmly welcome all
            guests and visitors.
          </Text>
        </Container>

        {/* Who We Are Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          <Flex
            direction="column"
            justify="center"
            align="center"
            w={{ base: "100%", lg: "50%" }}
            p="md"
            bg="sky"
            c="black"
            ta="center"
            style={{
              borderRadius: "3rem",
              boxShadow: "xl",
              fontSize: "2rem",
              fontWeight: 800,
            }}
          >
            Who We Are
          </Flex>
          <div className="lg:w-1/2 space-y-6">
            <Text size="lg" className="text-gray-600 leading-relaxed">
              We treasure the Holy Bible as God&apos;s revelation of Himself and
              His eternal purpose. Our beloved Jesus Christ is the center of all
              our gatherings.
            </Text>
            <Text size="lg" className="text-gray-600 leading-relaxed">
              Through prayer and fellowship with one another, we endeavor to
              grow spiritually both individually and as the Body of Christ. Our
              small-group church life provides opportunities to enjoy Christian
              companionship that encourages, strengthens, and sustains us to
              live the Christian life.
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
            w={{ base: "100%", lg: "50%" }}
            p="md"
            bg="sky"
            c="black"
            ta="center"
            style={{
              borderRadius: "3rem",
              boxShadow: "xl",
              fontSize: "2rem",
              fontWeight: 800,
            }}
          >
            Our Faith
          </Flex>
          <div className="lg:w-1/2 space-y-6">
            <Text size="lg" className="text-gray-600 leading-relaxed">
              We hold the faith which is common to all the believers: (Titus
              1:4)
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
            w={{ base: "100%", lg: "50%" }}
            p="md"
            bg="sky"
            c="black"
            ta="center"
            style={{
              borderRadius: "3rem",
              boxShadow: "xl",
              fontSize: "2rem",
              fontWeight: 800,
            }}
          >
            Our Name
          </Flex>
          <div className="lg:w-1/2 space-y-6">
            <Text size="lg" className="text-gray-600 leading-relaxed">
              The church in St. Louis isn&apos;t our name - it&apos;s our
              description. As such, it&apos;s an inclusive title, not an
              exclusive one. We gather together simply as believers of the Lord
              in this city. The first use of the word &quot;church&quot; in Acts
              refers to the believers in Jerusalem as simply &quot;the whole
              church&quot; (Acts 5:11), meaning the called out (congregation),
              or assembly (in Greek, &quot;ekklesia&quot;).
            </Text>
            <Text size="lg" className="text-gray-600 leading-relaxed">
              In Acts 8:1, they were referred to as &quot;the church which was
              in Jerusalem.&quot; This is the first church established in the
              Bible in Acts and it included all the believers living in
              Jerusalem. The record concerning the establishment of the church
              in its locality is consistent throughout the New Testament (Acts
              13:1; 14:23).
            </Text>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutUs;
