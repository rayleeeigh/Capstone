import { createContext, useState } from "react";

export const navs = createContext();

export default function Navigations() {
  const [NavigationData, setNavigationData] = useState({
    Home: "Home",
    About: "About",
    StudentTask: ["Grades", "Schedule"],
    TeacherTask: [
      "Announcements",
      "Grades",
      "Schedule",
      "Submissions",
      "Enrollment",
    ],
    AdminTask: [
      "Dashboard",
      "Announcement",
      "LogTrail",
      "AccountVerification",
      "Submissions",
      "SampleForms",
    ],
  });
  return <navs.Provider value={NavigationData}></navs.Provider>;
}
