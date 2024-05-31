import AboutMeSection from "./components/AboutMeSection";
import DashboardSection from "./components/DashboardSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import EducationSection from "./components/EducationSection";

export default function Home() {
  return (
    <main>
      <DashboardSection />
      <AboutMeSection />
      <WorkExperienceSection />
      <EducationSection />
    </main>
  );
}
