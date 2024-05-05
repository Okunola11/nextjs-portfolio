import Link from "next/link";
import Image from "next/image";
import { projectSection } from "@/app/portfolio";

export default function ProjectContent() {
  const projectData = projectSection.projects;
  const content: Content = projectData.map((project) => {
    const dataContent = {
      title: project.title,
      description: (
        <>
          <p>{project.description.projectDesc}</p>
          <p>Tech Stack: {project.description.techStack}</p>
          <p>
            Live at:{" "}
            <Link
              className="no-underline text-black bg-white border border-solid border-white rounded-xl p-1 shadow-xl"
              href={project.description.link}
              target="_blank"
            >
              {project.description.linkName}
            </Link>
          </p>
        </>
      ),
      content: (
        <div>
          <Image
            className="h-full w-full object-contain"
            src={project.imgSrc}
            alt={project.imgAlt}
            width={300}
            height={300}
          />
        </div>
      ),
    };
    return dataContent;
  });
  return content;
}
