/* This file contains all data for the Portfolio Project */

import emoji from "react-easy-emoji";

// Header Avatar
const headerAvatar = {
  image: "/images/okunola.png",
  fallback: "OA",
};

// Hero section

const heroGreeting = {
  username: "Okunola Abdulwasiu",
  title: "Hi, I'm Okunola",
  subtitle: `A result driven Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript | Reactjs | Nextjs | Nodejs | Nestjs | Python | Django and some other cool libraries and frameworks`,
  resumeLink: "",
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

const skillsSection = {
  title: "What I do",
  subTitle:
    "CURIOUS FULL STACK DEVELOPER EAGER TO DIVE DEEP INTO VARIOUS TECH STACKS",
  skills: [
    emoji(
      "⚡ Develop engaging front-end experiences and user interfaces for web applications"
    ),
    emoji(
      "⚡ Develop resilient and scalable backend APIs to seamlessly communicate with the frontend."
    ),

    emoji(
      "⚡ Seamless Integration of third party services such as Algolia Search / PostgreSQL / Paystack"
    ),
  ],

  /* Get correct Font Awesome Classname to view icons. Check: https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationSection = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bells University",
      //   logo: require("/images/bells.jpg"),
      subHeader:
        "Bachelor of Engineering in Electrical and Electronics Engineering",
      duration: "October 2018 - August 2023",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
  ],
};

// Projects Section

const projectSection = {
  title: "Projects",
  subtitle: "SOME PROJECTS I HAVE WORKED ON WITH VARIOUS TECH STACKS",
  projects: [
    {
      //   image: require(""),
      projectName: "Al Amin Schools",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      //   image: require(""),
      projectName: "Mdx Blog",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

export {
  headerAvatar,
  heroGreeting,
  socialMediaLinks,
  skillsSection,
  educationSection,
  projectSection,
};
