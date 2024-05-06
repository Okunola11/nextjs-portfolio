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

type Projects = {
  title: string;
  subtitle: string;
  projects: {
    title: string;
    description: {
      projectDesc: string;
      techStack: string;
      link: string;
      linkName: string;
      frontendLink: string;
      backendLink?: string;
    };
    imgSrc: string;
    imgAlt: string;
  }[];
  display?: boolean;
};

type Content = {
  title: string;
  description: JSX.Element;
  content: JSX.Element;
}[];

type Contact = {
  title: string;
  subtitle: {
    msg1: string;
    msg2: string;
    msg3: string;
    msg4: string;
  };
  email_address: string;
};
