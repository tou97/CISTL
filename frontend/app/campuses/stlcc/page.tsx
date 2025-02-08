import CampusPage, { CampusSchedule } from "../CampusPage";


const scheduleData: CampusSchedule[] = [
  { day: "Monday", time: "12:00 PM", activity: "Bible Study" },
  { day: "Thursday", time: "6:00 PM", activity: "Family Time" },
];

export default function StlccPage() {
    return (
        <CampusPage
            imageSrc="/images/stlcc_campus.webp"
            cardTitle="St. Louis Community College - Meramec"
            cardTitleColor="#003A70"
            cardSubtitle="Christian Students on Campus"
            cardSubtitleColor="#00CCFF"
            scheduleData={scheduleData}
        />
    )
}
