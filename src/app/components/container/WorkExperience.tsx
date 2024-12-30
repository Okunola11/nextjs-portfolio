import { workExperiences } from "@/app/portfolio";
import ExperienceCard from "../experience/experienceCard";

export default function WorkExperience() {
  if (workExperiences.display) {
    return (
      <div
        className="custom-min-height my-3 scroll-mt-20 border-b py-2 md:my-4 md:py-4"
        id="experiences"
      >
        <div>
          <h1 className="mb-6 text-4xl md:text-5xl">Experiences</h1>
          <div className="flex w-full flex-col flex-wrap items-center justify-between gap-4 p-2 font-mono md:flex-row md:p-8">
            {workExperiences.experience.map((experience, i) => {
              return <ExperienceCard key={i} experience={experience} />;
            })}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
