import Image from "next/image";
import Link from "next/link";
import { otherProjects } from "@/app/portfolio";
import { Button } from "@/components/ui/button";

export default function OtherProjects() {
  const projects = otherProjects.projects;

  const content = projects.map((project, idx) => {
    return (
      <li
        key={idx}
        className="flex flex-col gap-4 text-center h-full min-h-[410px] p-4 rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 text-white dark:text-white shadow-2xl w-[350px] max-w-full md:w-[450px] font-mono"
        style={{
          background:
            "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
        }}
      >
        <div className="w-28 h-28 overflow-hidden self-center">
          <Image
            className=""
            src={project.imgSrc}
            alt={project.imgAlt}
            width={200}
            height={200}
          />
        </div>
        <h5 className="font-bold">{project.title}</h5>
        <p className="text-sm">{project.description.projectDesc}</p>
        <p className="text-xs text-neutral-400">
          Tech Stack: {project.description.techStack}
        </p>
        <div>
          <Button variant={"secondary"}>
            <Link
              href={project.github}
              className="text-sm text-black dark:text-white"
              target="_blank"
            >
              Visit Repo
            </Link>
          </Button>
        </div>
      </li>
    );
  });

  return content;
}
