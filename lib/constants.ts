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
    type: "Other"
  },
  {
    name: "Express",
    icon: "https://skillicons.dev/icons?i=express",
    tag: "Back-end",
    type: "Other"
  },

  {
    name: "MongoDB",
    icon: "https://skillicons.dev/icons?i=mongodb",
    tag: "Database",
    type: "Other"
  },
  {
    name: "PostgresSQL",
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
    name: "Typescript",
    icon: "https://skillicons.dev/icons?i=typescript",
    tag: "Lang",
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
      shortDescription:"An AI-powered application that quickly generates concise summaries from article urls.",
      image:[],
      tags:["Next", "React", "Axios", "Javascript", "AI Api"],
      source_code_link: "https://github.com/vector17002/Article-summarizer",
      link:"https://sumz.vercel.app",
      type: "FE"
    },
    {
      name: "Dev Sync",
      icon: "./vercel.svg",
      shortDescription:"Building something unique stay tuned !!!",
      image:[],
      tags:["React", "Next", "Postgres", "Drizzle", "Getstream-io", "Clerk-authentication"],
      source_code_link: "https://github.com/vector17002/DevSync",
      link: "",
      type: "FS"
    },
  ];

  export type ProjectType = typeof projects[0]