import AnimatedProjects from "../other_projects/AnimatedProjects";
import { otherProjects } from "@/app/portfolio";

export default function OtherProjectSection() {
  if (otherProjects.display) {
    return (
      <section className="h-screen my-3 md:my-4 py-2 md:py-4 border-b scroll-mt-20" id="otherprojects">
        <h1 className="text-4xl md:text-5xl mb-6">{otherProjects.title}</h1>
        <p className="dark:text-[#868e96] mb-4">{otherProjects.subtitle}</p>
        <AnimatedProjects />
      </section>
    );
  }
  return null;
}
