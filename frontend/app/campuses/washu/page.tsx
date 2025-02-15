import CampusPage, { CampusSchedule } from "../CampusPage";

const scheduleData: CampusSchedule[] = [
  {
    day: "Thursday",
    time: "12:00 PM",
    activity: "Bible Study",
    description:
      "Bible Study is a time dedicated to getting into the Word of God with other believers in the midst of our busy week. We are currently getting into the Book of Romans!",
  },
  {
    day: "Thursday",
    time: "6:00 PM",
    activity: "Family Time",
    description:
      "Family Time is a time for the students across all our different campuses to come together to enjoy the Lord and His Word together in a more intimate setting.",
  },
];

export default function HomePage() {
  return (
    <CampusPage
      imageSrc="/images/washu_campus.webp"
      cardTitle="The Washington University"
      cardTitleColor="#BA0C2F"
      cardSubtitle="Christian Students on Campus"
      // cardSubtitleColor="#215732"
      scheduleData={scheduleData}
    />
  );
}
