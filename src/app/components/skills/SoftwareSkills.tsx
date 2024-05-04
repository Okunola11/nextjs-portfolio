import { skillsSection } from "../../portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css"; // this is required for NextJS

export default function SoftwareSkill() {
  return (
    <div>
      <ul className="pl-0 my-0 flex flex-wrap justify-center self-center">
        {skillsSection.softwareSkills.map((skills, i) => {
          return (
            <li
              key={i}
              className="inline mr-5 mb-5 text-4xl text-[#868e96] hover:text-blue-400"
            >
              <FontAwesomeIcon
                fontSize={50}
                icon={skills.fontAwesomeClassname}
              />
              <p className="text-[10px] text-center">{skills.skillName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
