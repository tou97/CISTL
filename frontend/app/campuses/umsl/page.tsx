import CampusPage, { CampusSchedule } from "../CampusPage";


const scheduleData: CampusSchedule[] = [
  { day: "Tuesday", time: "2:00 PM", activity: "Bible Study (a)" },
  { day: "Wednesday", time: "12:00 PM", activity: "Bible Study (b)" },
  { day: "Thursday", time: "6:00 PM", activity: "Family Time" },
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
