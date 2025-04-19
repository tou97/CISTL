import CampusPage, { CampusSchedule } from "../CampusPage";

const scheduleData: CampusSchedule[] = [
  {
    day: "Mondays",
    time: "12:00 PM",
    activity: "Bible Study",
    description:
      "Bible Study is a time dedicated to getting into the Word of God with other believers in the midst of our busy week. We are currently getting into the Book of Romans!",
  },
  {
    day: "Thursdays",
    time: "6:00 PM",
    activity: "Family Time",
    description:
      "Family Time is a time for the students across all our different campuses to come together to enjoy the Lord and His Word together in a more intimate setting.",
  },
];

export default function StlccPage() {
  return (
    <CampusPage
      imageSrc="/images/campuses/stlcc_biblestudy.webp"
      cardTitle="St. Louis Community College - Meramec"
      cardTitleColor="#003A70"
      cardSubtitle="Christian Students on Campus"
      scheduleData={scheduleData}
    />
  );
}
