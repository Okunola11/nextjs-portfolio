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
          <p className="text-xs mt-5">
            <span className="font-bold">Tech Stack: </span>
            {project.description.techStack}
          </p>
          <p className="text-xs mt-5">
            <span className="font-bold">Live at: </span>

            <Link
              className="no-underline text-black bg-purple-200 hover:bg-purple-300 border border-solid rounded p-1 shadow-xl"
              href={project.description.link}
              target="_blank"
            >
              {project.description.linkName}
            </Link>
          </p>
          <p className="text-xs mt-5">
            <span className="font-bold">Github: </span>
            <Link
              className="no-underline text-black bg-purple-200 hover:bg-purple-300 border border-solid rounded p-1 shadow-xl"
              href={project.description.frontendLink}
              target="_blank"
            >
              Frontend
            </Link>
          </p>
          {project.description.backendLink && (
            <p className="text-xs mt-5">
              <span className="font-bold">Github: </span>
              <Link
                className="no-underline text-black bg-purple-200 hover:bg-purple-300 border border-solid rounded p-1 shadow-xl"
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
        <div className="h-full w-full  flex items-center justify-center text-white">
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
