import AboutMeSection from "./components/AboutMeSection";
import DashboardSection from "./components/DashboardSection";
import WorkExperienceSection from "./components/WorkExperienceSection";

export default function Home() {
  return (
    <main>
      <DashboardSection />
      <AboutMeSection />
      <WorkExperienceSection />
    </main>
  );
}
