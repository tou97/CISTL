import CampusPage, { CampusSchedule } from "../CampusPage";

const scheduleData: CampusSchedule[] = [
  {
    day: "Thursdays",
    time: "6:00 PM",
    activity: "Family Time",
    description:
      "Family Time is a time for the students across all our different campuses to come together to enjoy the Lord and His Word together in a more intimate setting.",
  },
  {
    day: "Fridays",
    time: "12:00 PM",
    activity: "Bible Study",
    description:
      "Bible Study is a time dedicated to getting into the Word of God with other believers in the midst of our busy week. We are currently getting into the Book of Romans!",
  },
];

export default function SluPage() {
  return (
    <CampusPage
      imageSrc="/images/slu_campus.webp"
      cardTitle="Saint Louis University"
      cardTitleColor="#003DA5"
      cardSubtitle="Christian Students on Campus"
      // cardSubtitleColor="#C8C9C7"
      scheduleData={scheduleData}
    />
  );
}
