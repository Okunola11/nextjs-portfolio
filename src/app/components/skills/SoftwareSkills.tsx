import { skillsSection } from "../../portfolio";
import "./skills.css"

export default function SoftwareSkill() {
  return (
    <div>
      <ul className="pl-0 my-0 flex flex-wrap justify-center self-center">
        {skillsSection.softwareSkills.map((skills, i) => {
          return (
            <li
              key={i}
              className="inline mr-5 mb-5 text-4xl dark:text-[#868e96] hover:text-blue-400"
            >
              <div className="rotate-icon">
              {skills.iconName && <skills.iconName fontSize={50} />}
              </div>
              <p className="text-[10px] text-center">{skills.skillName}</p>
              <span className="sr-only">{skills.skillName}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
