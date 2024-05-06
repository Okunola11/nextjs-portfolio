"use client";

import ProjectContent from "../projects/ProjectContent";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function ProjectsSection() {
  const content = ProjectContent();

  return (
    <section className="custom-min-height mt-4 md:mt-8" id="products">
      <div className="p-2 md:p-10 flex items-center justify-center h-screen font-mono">
        <StickyScroll content={content} contentClassName="md:block" />
      </div>
    </section>
  );
}
