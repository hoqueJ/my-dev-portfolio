import DashboardSection from "./sections/DashboardSection";
import AboutMeSection from "./sections/AboutMeSection";
import WorkExperienceSection from "./sections/WorkExperienceSection";
import EducationSection from "./sections/EducationSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  return (
    <main>
      <DashboardSection />
      <AboutMeSection />
      {/* <WorkExperienceSection /> */}
      <EducationSection />
      {/* <ProjectsSection /> */}
      <ContactSection />
    </main>
  );
}
