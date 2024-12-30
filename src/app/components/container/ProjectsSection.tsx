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
      className="custom-min-height my-3 scroll-mt-20 border-b py-2 md:my-4 md:py-4"
      id="projects"
    >
      <h1 className="mb-6 text-4xl md:text-5xl">{projectSection.title} </h1>
      <p className="mb-4 dark:text-[#868e96]">{projectSection.subtitle}</p>
      <div className="flex items-center justify-center p-2 font-mono md:p-10">
        <StickyScroll content={content} contentClassName="md:block" />
      </div>
    </section>
  );
}
