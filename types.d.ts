type Skills = {
  title: string;
  subTitle: string;
  skills: ReactElement<any, string | JSXElementConstructor<any>>[];
  softwareSkills: {
    skillName: string;
    fontAwesomeClassname: IconDefinition;
  }[];
  display: boolean;
};
