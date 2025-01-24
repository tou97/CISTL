import { Container, Title, Text, Box, Divider } from '@mantine/core';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-blue-50 min-h-screen py-16">
      <Container size="lg" className="space-y-20">
        {/* Hero Section */}
        <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow-lg">
          <Title order={1} className="text-5xl font-extrabold mb-4">About Us</Title>
          <Text size="lg" className="opacity-90">
            We are believers in the Lord Jesus Christ and meet together as The Church in St. Louis. The Church in St. Louis isn&apos;t our name; it&apos;s our description. We hold the faith that is revealed in the Bible and is common  to all genuine believers. We warmly welcome all guests and visitors.
          </Text>
        </section>

        {/* Who We Are Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg shadow-xl p-6">
            <div className="h-full flex items-center justify-center text-white text-4xl font-extrabold">Who We Are</div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <Text size="lg" className="text-gray-600 leading-relaxed">
              We treasure the Holy Bible as God&apos;s revelation of Himself and His eternal purpose. Our beloved Jesus Christ is the center of all our gatherings.
            </Text>
            <Text size="lg" className="text-gray-600 leading-relaxed">
              Through prayer and fellowship with one another, we endeavor to grow spiritually both individually and as the Body of Christ. Our small-group church life provides opportunities to enjoy Christian companionship that encourages, strengthens, and sustains us to live the Christian life.
            </Text>
          </div>
        </section>

        {/* Our Faith Section */}
        <section className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg shadow-xl p-6">
            <div className="h-full flex items-center justify-center text-white text-4xl font-extrabold">Our Faith</div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <Text size="lg" className="text-gray-600 leading-relaxed">
              We hold the faith which is common to all the believers: (Titus 1:4)
            </Text>
            <Divider my="sm" />
            <Box className="space-y-4">
              <Text size="lg" className="text-gray-800 font-medium">
                The Bible is the complete divine revelation inspired word by word by God through the Holy Spirit (2 Pet. 1:21, 2 Tim. 3:16).
              </Text>
              <Text size="lg" className="text-gray-800 font-medium">
                God is uniquely one, yet triune - the Father, the Son, and the Spirit (1 Tim. 2:5a, Matt. 28:19).
              </Text>
              <Text size="lg" className="text-gray-800 font-medium">
                The Son of God, even God Himself, was incarnated to be a man by the name of Jesus Christ (John 1:1, 1:14).
              </Text>
              <Text size="lg" className="text-gray-800 font-medium">
                Christ died on the cross for our sins, shedding His blood for our redemption (1 Pet. 2:24, Eph. 1:7a).
              </Text>
              <Text size="lg" className="text-gray-800 font-medium">
                Christ resurrected from among the dead on the third day (1 Cor. 15:4).
              </Text>
              <Text size="lg" className="text-gray-800 font-medium">
                Christ ascended to the right hand of God to be Lord of all (Acts 1:9, 2:33, 2:36).
              </Text>
              <Text size="lg" className="text-gray-800 font-medium">
                Whenever any person repents to God and believes in the Lord Jesus Christ, he is regenerated (born again) and becomes a living member of the one Body of Christ (Acts 20:21, John 3:3, Eph. 1:22-23, Rom. 12:5).
              </Text>
              <Text size="lg" className="text-gray-800 font-medium">
                Christ is coming again to receive His believers to Himself (1 Thes. 2:19).
              </Text>
            </Box>
          </div>
        </section>

        {/* Our Name Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg shadow-xl p-6">
            <div className="h-full flex items-center justify-center text-white text-4xl font-extrabold">Our Name</div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <Text size="lg" className="text-gray-600 leading-relaxed">
              The Church in St. Louis isn&apos;t our name - it&apos;s our description. As such, it&apos;s an inclusive title, not an exclusive one. We gather together simply as believers of the Lord in this city. The first use of the word &quot;church&quot; in Acts refers to the believers in Jerusalem as simply &quot;the whole church&quot; (Acts 5:11), meaning the called out (congregation), or assembly (in Greek, &quot;ekklesia&quot;).
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
