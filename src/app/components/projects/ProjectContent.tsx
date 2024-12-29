import Link from "next/link";
import Image from "next/image";
import { projectSection } from "@/app/portfolio";
import { Content } from "../../../../types";

export default function ProjectContent() {
  const projectData = projectSection.projects;
  const content: Content = projectData.map((project) => {
    const dataContent = {
      title: project.title,
      description: (
        <>
          <p>{project.description.projectDesc}</p>

          <p className="mt-5 text-xs">
            <span className="font-bold">Tech Stack: </span>
            {project.description.techStack}
          </p>
          <p className="mt-5 text-xs">
            <span className="font-bold">Live at: </span>

            <Link
              className="rounded border border-solid bg-purple-200 p-1 text-black no-underline shadow-xl hover:bg-purple-300"
              href={project.description.link}
              target="_blank"
            >
              {project.description.linkName}
            </Link>
          </p>
          <p className="mt-5 text-xs">
            <span className="font-bold">Github: </span>
            <Link
              className="rounded border border-solid bg-purple-200 p-1 text-black no-underline shadow-xl hover:bg-purple-300"
              href={project.description.frontendLink}
              target="_blank"
            >
              Frontend
            </Link>
          </p>
          {project.description.backendLink && (
            <p className="mt-5 text-xs">
              <span className="font-bold">Github: </span>
              <Link
                className="rounded border border-solid bg-purple-200 p-1 text-black no-underline shadow-xl hover:bg-purple-300"
                href={project.description.backendLink}
                target="_blank"
              >
                Backend
              </Link>
            </p>
          )}
        </>
      ),
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
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
