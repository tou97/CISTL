// Organized imports by category and alphabetically
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Center,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  List,
  ListItem,
  Space,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import { IconCaretRightFilled } from "@tabler/icons-react";

// Faith beliefs data - extracted outside component for better organization
const BELIEFS = [
  {
    value:
      "The Bible is the complete divine revelation inspired word by word by God through the Holy Spirit.",
    verses: [
      {
        ref: "2 Pet. 1:21",
        text: "For no prophecy was ever borne by the will of man, but men spoke from God while being borne by the Holy Spirit.",
      },
      {
        ref: "2 Tim. 3:16",
        text: "All Scripture is God-breathed and profitable for teaching, for conviction, for correction, for instruction in righteousness,",
      },
    ],
  },
  {
    value:
      "God is uniquely one, yet triune - the Father, the Son, and the Spirit.",
    verses: [
      {
        ref: "1 Tim. 2:5",
        text: "For there is one God and one Mediator of God and men, the man Christ Jesus,",
      },
      {
        ref: "Matt. 28:19",
        text: "Go therefore and disciple all the nations, baptizing them into the name of the Father and of the Son and of the Holy Spirit,",
      },
    ],
  },
  {
    value:
      "The Son of God, even God Himself, was incarnated to be a man by the name of Jesus Christ.",
    verses: [
      {
        ref: "John 1:1",
        text: "In the beginning was the Word, and the Word was with God, and the Word was God.",
      },
      {
        ref: "John 1:14",
        text: "And the Word became flesh and tabernacled among us (and we beheld His glory, glory as of the only Begotten from the Father), full of grace and reality.",
      },
    ],
  },
  {
    value:
      "Christ died on the cross for our sins, shedding His blood for our redemption.",
    verses: [
      {
        ref: "1 Pet. 2:24",
        text: "Who Himself bore up our sins in His body on the tree, in order that we, having died to sins, might live to righteousness; by whose bruise you were healed.",
      },
      {
        ref: "Eph. 1:7",
        text: "In whom we have redemption through His blood, the forgiveness of offenses, according to the riches of His grace,",
      },
    ],
  },
  {
    value: "Christ resurrected from among the dead on the third day.",
    verses: [
      {
        ref: "1 Cor. 15:4",
        text: "And that He was buried, and that He has been raised on the third day according to the Scriptures;",
      },
    ],
  },
  {
    value: "Christ ascended to the right hand of God to be Lord of all.",
    verses: [
      {
        ref: "Acts 1:9",
        text: "And when He had said these things, while they were looking on, He was lifted up, and a cloud took Him away from their sight.",
      },
      {
        ref: "Acts 2:33",
        text: "Therefore having been exalted to the right hand of God and having received the promise of the Holy Spirit from the Father, He has poured out this which you both see and hear.",
      },
      {
        ref: "Acts 2:36",
        text: "Therefore let all the house of Israel know assuredly that God has made Him both Lord and Christ, this Jesus whom you have crucified.",
      },
    ],
  },
  {
    value:
      "Whenever any person repents to God and believes in the Lord Jesus Christ, he is regenerated (born again) and becomes a living member of the one Body of Christ.",
    verses: [
      {
        ref: "Acts 20:21",
        text: "Solemnly testifying both to Jews and to Greeks repentance unto God and faith in our Lord Jesus.",
      },
      {
        ref: "John 3:3",
        text: "Jesus answered and said to him, Truly, truly, I say to you, Unless one is born anew, he cannot see the kingdom of God.",
      },
      {
        ref: "Eph. 1:22-23",
        text: "And He subjected all things under His feet and gave Him to be Head over all things to the church, Which is His Body, the fullness of the One who fills all in all.",
      },
      {
        ref: "Rom. 12:5",
        text: "So we who are many are one Body in Christ, and individually members one of another.",
      },
    ],
  },
  {
    value: "Christ is coming again to receive His believers to Himself.",
    verses: [
      {
        ref: "1 Thes. 2:19",
        text: "For what is our hope or joy or crown of boasting before our Lord Jesus at His coming? Are not even you?",
      },
    ],
  },
];

// Reusable section title component
const SectionTitle = ({ title }: { title: string }) => (
  <Group px="lg" grow preventGrowOverflow={false} wrap="nowrap">
    <Divider color="olive" />
    <Title ta="center" order={1} c="olive">
      {title}
    </Title>
    <Divider color="olive" />
  </Group>
);

// Main component
const AboutUs = () => {
  return (
    <Container fluid>
      {/* Banner Section */}
      <Space bg="olive" h="xl" />
      <Space bg="olive" h="xl" />
      <Grid bg="olive" align="center" gutter="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} ta="center" c="offwhite">
            About Us
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text c="offwhite" ta="justify" size="xl" px="xl">
            We are a community of people in St. Louis who believe in Jesus
            Christ. We simply see ourselves as a local expression of the
            Christian church, holding to the core faith found in the Bible that
            unites all believers. Whoever you are, wherever you&apos;re form, we
            warmly welcome you to join us and discover more.
          </Text>
        </GridCol>
      </Grid>
      <Space bg="olive" h="xl" />
      <Space bg="olive" h="xl" />

      <Space h="xl" />
      <Space h="xl" />

      {/* Introduction Section */}
      <Grid align="center" gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Text size="xl" ta="justify" c="wood">
            <b>We treasure the Holy Bible</b> as God&apos;s revelation of
            Himself and His eternal purpose. Our beloved Jesus Christ is the
            center of all our gatherings.
          </Text>
          <Space h="md" />
          <Text size="xl" ta="justify" c="wood">
            Through prayer and fellowship with one another, we endeavor to grow
            spiritually both individually and as the Body of Christ. Our
            small-group church life provides opportunities to enjoy Christian
            companionship that encourages, strengthens, and sustains us to live
            the Christian life.
          </Text>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Center>
            <Image
              src="/images/600_400.webp"
              width={600}
              height={400}
              alt="Placeholder"
            />
          </Center>
        </GridCol>
      </Grid>

      <Space h="xl" />
      <Space h="xl" />

      {/* Our Faith Section */}
      <SectionTitle title="Our faith" />
      <Space h="lg" />
      <Title order={2} c="olive" ta="center">
        We hold the faith which is common to all the believers:
      </Title>
      <Title order={2} c="olive" ta="center">
        (Titus 1:4)
      </Title>
      <Space h="xl" />
      <Accordion px="lg">
        {BELIEFS.map((belief, index) => (
          <AccordionItem p="sm" key={belief.value} value={belief.value}>
            <AccordionControl>
              <Group wrap="nowrap">
                <Title order={3} c="olive">
                  0{index + 1}.
                </Title>
                <Space h="lg" />
                <Title order={3} c="olive" pr="md">
                  {belief.value}
                </Title>
              </Group>
            </AccordionControl>
            <AccordionPanel>
              <List
                withPadding
                icon={<IconCaretRightFilled />}
                spacing="sm"
                size="lg"
              >
                {belief.verses.map((verse) => (
                  <ListItem key={verse.ref} c="wood">
                    <b>{verse.ref}:</b> {verse.text}
                  </ListItem>
                ))}
              </List>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      <Space h="xl" />
      <Space h="xl" />

      {/* Our Name Section */}
      <SectionTitle title="Our name" />
      <Space h="xl" />
      <Space h="xl" />
      <Grid align="center" px="xl" gutter="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Center>
            <Image
              src="/images/600_400.webp"
              width={600}
              height={400}
              alt="Placeholder"
            />
          </Center>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text size="xl" ta="justify" c="wood">
            <b>The church in St. Louis</b> isn&apos;t our name - it&apos;s our
            description. As such, it&apos;s an inclusive title, not an exclusive
            one. We gather together simply as believers of the Lord in this
            city. The first use of the word &quot;church&quot; in Acts refers to
            the believers in Jerusalem as simply &quot;the whole church&quot;
            (Acts 5:11), meaning the called out (congregation), or assembly (in
            Greek, &quot;ekklesia&quot;).
          </Text>
          <Space h="md" />
          <Text size="xl" ta="justify" c="wood">
            In Acts 8:1, they were referred to as &quot;the church which was in
            Jerusalem.&quot; This is the first church established in the Bible
            in Acts and it included all the believers living in Jerusalem. The
            record concerning the establishment of the church in its locality is
            consistent throughout the New Testament (Acts 13:1; 14:23).
          </Text>
        </GridCol>
      </Grid>

      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
};

export default AboutUs;
