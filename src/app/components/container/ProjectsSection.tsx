"use client";

import ProjectContent from "../projects/ProjectContent";
import { projectSection } from "@/app/portfolio";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function ProjectsSection() {
  const content = ProjectContent();

  if (!projectSection.display) {
    return null;
  }

  return (
    <section
      className="custom-min-height mt-6 md:mt-8 border-b scroll-mt-20"
      id="projects"
    >
      <h1 className="text-4xl md:text-5xl mb-6">{projectSection.title} </h1>
      <p className="dark:text-[#868e96] mb-4">{projectSection.subtitle}</p>
      <div className="p-2 md:p-10 flex items-center justify-center font-mono">
        <StickyScroll content={content} contentClassName="md:block" />
      </div>
    </section>
  );
}
