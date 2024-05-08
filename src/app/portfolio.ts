/* This file contains all data for the Portfolio Project */

import {
  SiNestjs,
  SiRedux,
  SiDjango,
  SiPostgresql,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import {
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaPython,
} from "react-icons/fa";
import { Contact, Projects, School, Skills } from "../../types";

// Header Avatar
const headerAvatar = {
  image: "/images/okunola.png",
  fallback: "OA",
};

// Hero section

const heroGreeting = {
  username: "Okunola Abdulwasiu",
  title: "Hi, I'm Okunola",
  subtitle: `A result driven Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript | Reactjs | Nextjs | Redux | Nodejs | Nestjs | Python | Django and some other cool libraries and frameworks.`,
  resumeLink: "/resume/okunola-resume.pdf",
  displayGreeting: true, // I can use this to control the display of the greeting
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/okunola11",
  linkedin: "https://www.linkedin.com/in/waas",
  gmail: "abdayoade@gmail.com",
  twitter: "https://twitter.com/AbdulAyo4",
  blog: "https://nextjs-mdx-blog-iota.vercel.app/projects",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia

  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection: Skills = {
  title: "What I do",
  subTitle:
    "CURIOUS FULL STACK DEVELOPER EAGER TO DIVE DEEP INTO VARIOUS TECH STACKS",
  skills: [
    "⚡ Develop engaging front-end experiences and user interfaces for web applications",

    "⚡ Develop resilient and scalable backend APIs to seamlessly communicate with the frontend",

    "⚡ Seamless Integration of third party services such as Algolia Search / PostgreSQL / Paystack",
  ],

  /* These icons are imported at the top. Import any addition you need. Check: https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      iconName: SiJavascript,
    },
    {
      skillName: "python",
      iconName: FaPython,
    },
    {
      skillName: "nextjs",
      iconName: RiNextjsFill,
    },
    {
      skillName: "nestjs",
      iconName: SiNestjs,
    },
    {
      skillName: "redux-toolkit",
      iconName: SiRedux,
    },
    {
      skillName: "django",
      iconName: SiDjango,
    },
    {
      skillName: "reactjs",
      iconName: FaReact,
    },
    {
      skillName: "nodejs",
      iconName: FaNodeJs,
    },
    {
      skillName: "git",
      iconName: FaGitAlt,
    },
    {
      skillName: "html-5",
      iconName: FaHtml5,
    },
    {
      skillName: "css3",
      iconName: FaCss3Alt,
    },
    {
      skillName: "sass",
      iconName: FaSass,
    },

    {
      skillName: "npm",
      iconName: FaNpm,
    },
    {
      skillName: "postgres-sql",
      iconName: SiPostgresql,
    },
    {
      skillName: "mongodb",
      iconName: SiMongodb,
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationSection = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bells University of Technology",
      logo: "/images/bells.jpg",
      subHeader:
        "Bachelor of Engineering in Electrical and Electronics Engineering",
      duration: "October 2018 - August 2023",
      grade: "4.24/5.0",
      descBullets: [
        "Software Development Life Cycle",
        "Computer Logic",
        "Software Packages in Engineering",
        "Control systems ",
      ],
    },
  ],
};

// Projects Section

const projectSection: Projects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I HAVE WORKED ON WITH VARIOUS TECH STACKS",
  projects: [
    {
      title: "Waasi Blog",
      description: {
        projectDesc:
          "Waasi Blog is my personal blog project. A dynamic Next.js blog project powered by Markdown files. Content is authored in MDX format, seamlessly synced from a separate GitHub repository. Readers get to explore a modern blogging experience, with fast rendering and easy content management for me.",
        techStack: "NextJS | Tailwind CSS | Aceternity UI",
        link: "https://nextjs-mdx-blog-iota.vercel.app/projects",
        linkName: "Waasi Blog",
        frontendLink: "https://github.com/Okunola11/Nextjs-Mdx-Blog",
        backendLink: "",
      },
      imgSrc: "/images/projects/waasi-blog.png",
      imgAlt: "Waasi Blog",
    },
    {
      title: "Al Amin Schools",
      description: {
        projectDesc:
          "This application is a robust platform tailored for efficient management of student and employee data within educational institutions. It offers user-friendly interfaces for public information dissemination and secure portals for students and staff. Additionally, it facilitates grade calculation and academic assessment based on teacher input, ensuring a comprehensive experience.",
        techStack: "ReactJS | NodeJS | ExpressJS | MongoDB | CSS",
        link: "https://al-amin.onrender.com/",
        linkName: "Al Amin",
        frontendLink: "https://github.com/Okunola11/Al-Amin-Frontend",
        backendLink: "https://github.com/Okunola11/Al-Amin-Backend",
      },
      imgSrc: "/images/projects/al-amin.png",
      imgAlt: "Al Amin",
    },
    {
      title: "Chun L. techNotes",
      description: {
        projectDesc:
          "This is an app designed to streamline job management for repair shops by providing a comprehensive ticketing system. With this app, repair shop owners and employees can easily issue, track, and manage tickets for every job, ensuring efficient workflow and organization.",
        techStack: "ReactJS | NodeJS | ExpressJS | MongoDB| CSS",
        link: "https://ticketingnotes.onrender.com/",
        linkName: "Chun L. Notes",
        frontendLink: "https://github.com/Okunola11/ticketingNotes",
        backendLink: "https://github.com/Okunola11/ticketingNotes-api",
      },
      imgSrc: "/images/projects/tech-notes.png",
      imgAlt: "Chun L. techNotes",
    },
    {
      title: "Python Weather App",
      description: {
        projectDesc:
          "A dynamic weather application built using Python Flask framework, CSS, and HTML. This innovative app seamlessly integrates with OpenWeather's API to provide real-time weather data, empowering users with accurate and up-to-date forecasts. Stay informed and prepared for any weather condition with this intuitive and responsive weather project.",
        techStack: "Python | Html | Flask | CSS",
        link: "https://python-weather-app-7ozf.onrender.com/",
        linkName: "Weather App",
        frontendLink: "https://github.com/Okunola11/Python-Weather-App",
        backendLink: "",
      },
      imgSrc: "/images/projects/python-weather.png",
      imgAlt: "Weather App",
    },
    {
      title: "Acme Rockets",
      description: {
        projectDesc:
          "The Acme Rockets project was crafted as my debut exploration with Tailwind CSS. It served as a flex project, demonstrating my adeptness in crafting responsive user interfaces tailored for diverse screen sizes. This endeavor showcases my commitment to mastering modern design tools and techniques.",
        techStack: "Html | Tailwind CSS | JavaScript",
        link: "https://visit-space.onrender.com/",
        linkName: "Acme Rockets",
        frontendLink: "https://github.com/okunola11/learning_tailwind",
        backendLink: "",
      },
      imgSrc: "/images/projects/acme-rockets.png",
      imgAlt: "Acme Rockets",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Other Projects Section
const otherProjects = {
  title: "Other Projects",
  subtitle: "SOME PROJECTS THAT ARE NOT HOSTED YET BUT ARE WORTH CHECKING OUT",
  projects: [
    {
      title: "Django E-commerce API",
      description: {
        projectDesc:
          "This project was created to explore the intricacies of the Django REST Framework. It features an API designed for an e-commerce product company.Notably, the project integrates Algolia's powerful search engine API, enhancing search capabilities.",
        techStack:
          "Python | Django Rest Framework | TypeScript | Algolia | Html",
      },
      github: "https://github.com/Okunola11/Learning-Django-Rest-Framework",
      imgSrc: "/images/projects/waasi-blog.png",
      imgAlt: "Django E-commerce API",
    },
    {
      title: "Django Blog Project",
      description: {
        projectDesc:
          "A project crafted entirely with the Django framework. It serves as an exploration of Django's robust capabilities, showcasing its prowess as a full-stack framework. Content is rendered dynamically using HTML templates, highlighting Django's versatility and power.",
        techStack: "Python | Django | Html",
      },
      github: "https://github.com/Okunola11/Django_Blog_Project",
      imgSrc: "/images/projects/waasi-blog.png",
      imgAlt: "Django Blog Project",
    },
    {
      title: "NextJS Search App",
      description: {
        projectDesc:
          "This is a project I used to practice basics and nuances of Nextjs.It is a search app that implements the wikipedia api",
        techStack: "NextJS | TypeScript | Algolia",
      },
      github: "https://github.com/Okunola11/Next.js-Wiki-App",
      imgSrc: "/images/projects/waasi-blog.png",
      imgAlt: "NexJS Search App",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Contact Section
const contactSection: Contact = {
  title: "Contact Me",
  subtitle: {
    msg1: "Contact me",
    msg2: "Like my work?",
    msg3: "Discuss a Project?",
    msg4: "Connect with me on socials",
  },
  email_address: "abdayoade@gmail.com",
};

const footerSection = {
  display: true, // Set false to hide this section, defaults to true
};

export {
  headerAvatar,
  heroGreeting,
  socialMediaLinks,
  skillsSection,
  educationSection,
  projectSection,
  contactSection,
  footerSection,
  otherProjects,
};
