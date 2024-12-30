import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import OtherProjectSection from "./OtherProjectsSection";
import WorkExperience from "./WorkExperience";

export default function Main() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <EducationSection />
      <WorkExperience />
      <ProjectsSection />
      <OtherProjectSection />
      <ContactSection />
    </>
  );
}
