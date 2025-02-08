import CampusPage, { CampusSchedule } from "../CampusPage";


const scheduleData: CampusSchedule[] = [
  { day: "Thursday", time: "12:00 PM", activity: "Bible Study" },
  { day: "Thursday", time: "6:00 PM", activity: "Family Time" },
];

export default function HomePage() {
  return (
    <CampusPage
      imageSrc="/images/wash_campus.webp"
      cardTitle="WashU"
      cardTitleColor="#BA0C2F"
      cardSubtitle="Christian Students on Campus"
      cardSubtitleColor="#215732"
      scheduleData={scheduleData}
    />
  )
}
