import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  cpp,
  meta,
  starbucks,
  tesla,
  programming,
  WEBOPs,
  shopify,
  taskmanager,
  InstiOLX,
  stockprice,
  python,
  cfi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competitive Coder",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },   
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Deputy Coordinator",
    company_name: "Webops and Blockchain Club",
    icon: WEBOPs,
    iconBg: "#383E56",
    date: "Nov 2023 - May 2024",
    points: [
      "Learnt basics of what web development exactly is and what langauges are used in web development.",
      "In my tenure here I learnt git, HTML, CSS and bascis of Javascript. Did many tasks involving HTML, CSS and Javascript.",
    ],
  },
  {
    title: "Deputy Coordinator",
    company_name: "Programming Club",
    icon: programming,
    iconBg: "#383E56",
    date: "Nov 2023 - May 2024",
    points: [
      "Learnt what competitive coding is and also solve more that 250 problems on platforms like CodeForces, CSES and LeetCode.",
      "In my tenure here I learnt many interesting algorithms like dynamic programming, binary search, trees(BFS and DFS) and many more.",
    ],
  },
  {
    title: "Coordinator",
    company_name: "Webops and Blockchain Club",
    icon: WEBOPs,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "I began my tenure by leading the first Summer School session, where I taught HTML and CSS to over 500 participants in MS Teams.",
      "Conducted many sessions on mulitple topics to juniors. Also attend blockchain sessions conducted and learnt few concepts of blockchain.",
    ],
  },
  {
    title: "Project Member",
    company_name: "Webops and Blockchain Club",
    icon: WEBOPs,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "I'm working on a project called Tradecraft, which focuses on quant, real-time stock data and hosting quant-based competitions.",
      "For this project, I've learnt new tech stacks such as React, Node.js, MongoDB, Prisma ORM, and TypeScript",
    ],
  },
  {
    title: "Software Guild Contingent",
    company_name: "Centre For Innovation",
    icon: cfi,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      "This is the group of top 40 candidates selected for the Inter IIT Tech Meet, this team is called Guild.",
      "Had to perform well in a 2 day hackathon to get selected for the Inter IIT Software Guild Contingent",
    ],
  },
];

const projects = [
  {
    name: "InstiCollab",
    description:
      "Web-based collaborative task management application designed to help users organize and manage their tasks efficiently. It features user authentication, group chatting , task creation, and categorization of tasks based on their importance and completion status.",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "MONGODB",
        color: "green-text-gradient",
      },
      {
        name: "TAILWIND",
        color: "pink-text-gradient",
      },
    ],
    image: taskmanager,
    source_code_link: "https://github.com/Abijith27UK/InstiCollab",
  },
  {
    name: "InstiOLX",
    description:
      "Web-based platform for buying and selling items within your community , here IIT Madras. This project showcases a responsive and visually appealing front-end design for an online marketplace. This website was deployed using AWS",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: InstiOLX,
    source_code_link: "https://instiolx.s3.eu-north-1.amazonaws.com/page.html",
  },
  {
    name: "Trading API - Stock Price  ",
    description:
      "Web app that visualizes stock prices using real-time data fetched from API, with options for 5-minute or 1-day intervals showing the opening and closing prices.I integrated the TradingView API to implement candlestick charts for stock price visualization",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: stockprice,
    source_code_link: "https://github.com/Abijith27UK/Trading_StockPrice",
  },
];

export { services, technologies, experiences , projects };
