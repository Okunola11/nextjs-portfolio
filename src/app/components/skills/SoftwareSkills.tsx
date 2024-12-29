import { skillsSection } from "../../portfolio";
import "./skills.css";

export default function SoftwareSkill() {
  return (
    <div>
      <ul className="my-0 flex flex-wrap justify-center self-center pl-0">
        {skillsSection.softwareSkills.map((skills, i) => {
          return (
            <li
              key={i}
              className="mb-5 mr-5 inline text-4xl hover:text-blue-400 dark:text-[#868e96]"
            >
              <div className="rotate-icon">
                {skills.iconName && <skills.iconName fontSize={50} />}
              </div>
              <p className="text-center text-[10px]">{skills.skillName}</p>
              <span className="sr-only">{skills.skillName}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
