import AnimatedProjects from "../other_projects/AnimatedProjects";
import { otherProjects } from "@/app/portfolio";

export default function OtherProjectSection() {
  if (otherProjects.display) {
    return (
      <section
        className="my-3 h-screen scroll-mt-20 border-b py-2 md:my-4 md:py-4"
        id="otherprojects"
      >
        <h1 className="mb-6 text-4xl md:text-5xl">{otherProjects.title}</h1>
        <p className="mb-4 dark:text-[#868e96]">{otherProjects.subtitle}</p>
        <AnimatedProjects />
      </section>
    );
  }
  return null;
}
