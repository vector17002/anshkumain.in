export const skills = [
    // "Typescript", "React", "Next", "PostgresSQL", "Drizzle", "Node", "Express", "MongoDB", "Javascript", "Java", "C++", "Docker", "Git"
    {
      name: "React",
      icon: "https://skillicons.dev/icons?i=react",
      tag: "FR",
      type: "Working"
    },
    {
      name:"Typescript",
      icon: "https://skillicons.dev/icons?i=typescript",
      tag: "Lang",
      type: "Other"
    }
]

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
  ];

  export type ProjectType = typeof projects[0]