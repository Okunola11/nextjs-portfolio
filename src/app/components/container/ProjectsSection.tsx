"use client";

import ProjectContent from "../projects/ProjectContent";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function ProjectsSection() {
  const content = ProjectContent();

  return (
    <section className="custom-min-height mt-4 md:mt-8 p-10" id="products">
      <StickyScroll content={content} />
    </section>
  );
}
