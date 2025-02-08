import CampusPage, { CampusSchedule } from "../CampusPage";


const scheduleData: CampusSchedule[] = [
  { day: "Tuesday", time: "2:00 PM", activity: "Bible Study (a)", description: "Bible Study is a time dedicated to getting into the Word of God with other believers in the midst of our busy week. We are currently getting into the Book of Romans!" },
  { day: "Wednesday", time: "12:00 PM", activity: "Bible Study (b)", description: "Bible Study is a time dedicated to getting into the Word of God with other believers in the midst of our busy week. We are currently getting into the Book of Romans!" },
  { day: "Thursday", time: "6:00 PM", activity: "Family Time", description: "Family Time is a time for the students across all our different campuses to come together to enjoy the Lord and His Word together in a more intimate setting." },
];

export default function UmslPage() {
  return (
    <CampusPage
      imageSrc="/images/umsl_campus.webp"
      cardTitle="University of Missouri - St. Louis"
      cardTitleColor="#BD302C"
      cardSubtitle="Christian Students on Campus"
      cardSubtitleColor="#F5B324"
      scheduleData={scheduleData}
    />
  )
}
