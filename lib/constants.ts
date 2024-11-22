export const skills = [
  {
    name: "Next",
    icon: "https://skillicons.dev/icons?i=nextjs",
    tag: "Full-stack",
    type: "Working"
  },
  {
    name: "React",
    icon: "https://skillicons.dev/icons?i=react",
    tag: "Front-end",
    type: "Working"
  },
  {
    name: "Node",
    icon: "https://skillicons.dev/icons?i=nodejs",
    tag: "Back-end",
    type: "Working"
  },
  {
    name: "Express",
    icon: "https://skillicons.dev/icons?i=express",
    tag: "Back-end",
    type: "Working"
  },

  {
    name: "MongoDB",
    icon: "https://skillicons.dev/icons?i=mongodb",
    tag: "Database",
    type: "Working"
  },
  {
    name: "Postgres",
    icon: "https://skillicons.dev/icons?i=postgres",
    tag: "Database",
    type: "Working"
  }, 
  {
    name: "Drizzle",
    icon: "./drizzle.png",
    tag: "ORM",
    type: "Working"
  },
  {
    name: "Prisma",
    icon: "https://skillicons.dev/icons?i=prisma",
    tag: "ORM",
    type: "Other"
  },
  {
    name: "Typescript",
    icon: "https://skillicons.dev/icons?i=typescript",
    tag: "Better Javascript",
    type: "Working"
  },
  {
    name: "Javascript",
    icon: "https://skillicons.dev/icons?i=javascript",
    tag: "Lang",
    type: "Other"
  },
  {
    name: "Java",
    icon: "https://skillicons.dev/icons?i=java",
    tag: "Lang",
    type: "Other"
  },
  {
    name: "C++",
    icon: "https://skillicons.dev/icons?i=cpp",
    tag: "Lang",
    type: "Other"
  },
  {
    name: "Tailwind CSS",
    icon: "https://skillicons.dev/icons?i=tailwind",
    tag: "Front-end",
    type: "Working"
  },
  {
    name: "HTML",
    icon: "https://skillicons.dev/icons?i=html",
    tag: "Front-end",
    type: "Other"
  },
  {
    name: "CSS",
    icon: "https://skillicons.dev/icons?i=css",
    tag: "Front-end",
    type: "Other"
  },
  {
    name: "Docker",
    icon: "https://skillicons.dev/icons?i=docker",
    tag: "DevOps",
    type: "Other"
  },
  {
    name: "Git",
    icon: "https://skillicons.dev/icons?i=git",
    tag: "VersionControl",
    type: "Working"
  },
  {
    name: "Postman",
    icon: "https://skillicons.dev/icons?i=postman",
    tag: "API testing",
    type: "Working"
  },
  {
    name: "Redis",
    icon: "https://skillicons.dev/icons?i=redis",
    tag: "Database",
    type: "Other"
  }
];
export const projects = [
    {
      name: "Anime Bucket",
      icon: "./animebucket.svg",
      shortDescription:"A platform for exploring and managing anime with Jikan API, Axios, and NextAuth for secure, fast logins.",
      tags: ["React", "Next", "MongoDB", "Axios", "Javascript"],
      image:[],
      source_code_link: "https://github.com/vector17002/animbuketsu",
      link:"https://animbuketsu.vercel.app",
      type: "FS"
    },
    {
      name: "Slack cord",
      icon: "./slackcord.svg",
      shortDescription:"A chat app with MERN, JWT authentication and Socket.IO, achieving real time communication.",
      tags: ["React","Node","Express","MongoDB","Socket.io","Typescript"],
      image:[],
      source_code_link: "https://github.com/vector17002/slackcord",
      link:"https://slackcord.onrender.com",
      type: "FS"
    },
    {
      name: "Sumz",
      icon: "./sumz.svg",
      shortDescription:"An AI-powered application that generates concise summaries from article urls.",
      image:[],
      tags:["Next", "React", "Axios", "Javascript", "AI Api"],
      source_code_link: "https://github.com/vector17002/Article-summarizer",
      link:"https://sumz.vercel.app",
      type: "FE"
    },
    {
      name: "Dev Sync",
      icon: "./vercel.svg",
      shortDescription:"Building something unique stay tuned",
      image:[],
      tags:["React", "Next", "Postgres", "Drizzle", "Getstream-io", "Clerk-authentication"],
      source_code_link: "https://github.com/vector17002/DevSync",
      link: "",
      type: "FS"
    },
  ];

  export const experiences = [
    {
      title: "System Engineer",
      organisation: "Tata Consultancy Service",
      icon: "./tcs.png",
      date: "Dec 2024 - Present",
      points: [
        "Going to join TCS as a System Engineer to kickstart my career.",
      ],
    },
  ];

  export const educations = [
    {
      title: "BTech (Information Technology)",
      organisation: "Bharati Vidyapeeth College of Engineering, GGSIPU",
      icon: "./college.jpg",
      date: "Sept 2020 - July 2024",
      cgpa: "83.5"
    },
    {
      title: "Senior Secondary School (XII CBSE)",
      organisation: "Delhi Police Public School, New Delhi, India",
      icon: "./xii.png",
      date: "April 2018 - March 2020",
      cgpa: "94.6"
    },
    {
      title: "High School (X CBSE)",
      organisation: "Delhi Police Public School, New Delhi, India",
      icon: "./x.png",
      date: "April 2007 - March 2018",
      cgpa: "86.4"
    },
  ];

  export type EducationType = typeof educations[0]
  export type ExperienceType = typeof experiences[0]
  export type ProjectType = typeof projects[0]