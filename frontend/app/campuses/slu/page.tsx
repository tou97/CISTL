import CampusPage, { CampusSchedule } from "../CampusPage";

const scheduleData: CampusSchedule[] = [
  { day: "Thursday", time: "6:00 PM", activity: "Family Time" },
  { day: "Friday", time: "12:00 PM", activity: "Bible Study" },
];


export default function SluPage() {
  return (
    <CampusPage
      imageSrc="/images/slu_campus.webp"
      cardTitle="Saint Louis University"
      cardTitleColor="#003DA5"
      cardSubtitle="Christian Students on Campus"
      cardSubtitleColor="#C8C9C7"
      scheduleData={scheduleData}
    />
  )
}
