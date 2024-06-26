import SoftwareSkill from "../skills/SoftwareSkills";
import { skillsSection } from "../../portfolio";
import codingPerson from "../../../../public/lottie/codingPerson.json";
import DisplayLottie from "../hero/DisplayLottie";

export default function SkillsSection() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <section
      className="custom-min-height my-3 md:my-4 py-2 md:py-4 border-b scroll-mt-20"
      id="skills"
    >
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <DisplayLottie animationData={codingPerson} />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl mb-6">{skillsSection.title} </h1>
          <p className="dark:text-[#868e96] mb-4">{skillsSection.subTitle}</p>
          <SoftwareSkill />
          <div>
            {skillsSection.skills.map((skills, i) => {
              return (
                <p key={i} className="text-base">
                  {skills}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
