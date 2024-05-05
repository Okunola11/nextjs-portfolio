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

type School = {
  schoolName: string;
  logo: any;
  subHeader: string;
  duration: string;
  grade: string;
  descBullets: string[];
};
