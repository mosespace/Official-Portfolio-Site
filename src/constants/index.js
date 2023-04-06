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
  docker,
  meta,
  starbucks,
  typify,
  academy,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Team Lead",
    company_name: "Mihasoft",
    icon: starbucks,
    iconBg: "#ffff",
    date: "Jan 2023 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Typify Media",
    icon: typify,
    iconBg: "#000000",
    date: "Nov 2022 - December 2022",
    points: [
      "Doing the backend on websites, using PHP and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "I was able to do the creating, maintaining, testing, and debugging the entire back end of an applications as tasked",
    ],
  },
  {
    title: "Graphics Designer",
    company_name: "Mihasoft Academy",
    icon: academy,
    iconBg: "#53bc7b",
    date: "Jan 2021 - Dec 2022",
    points: [
      "I was responsible for developing various types of creative content for advertisements, brochures, or magazines.",
      "Mostly i used multiple tools depending on the medium and goals of the final project.",
      "Implementing responsive design and ensuring high quality compatibility.",
      "I used different marketing tools to create beautiful work according to the company customers’ needs.",
    ],
  },
  {
    title: "UI Designer",
    company_name: "Bantu Creative",
    icon: meta,
    iconBg: "#ffd53d",
    date: "Jan 2019 - Dec 2020",
    points: [
      "I gathered and evaluate user requirements in collaboration with product managers and engineers",
      "I developed UI mockups and prototypes that clearly illustrate how sites function and look like",
      "I prepared and presented rough drafts to internal teams and key stakeholders",
      "I created the user interface for many applications, websites, and other interactive media.",
      "I used my skills to illustrate design ideas using storyboards, process flows, and sitemaps.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Don Wanyama",
    designation: "COO",
    company: "Next Media",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Christopher Landslen",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const projects = [
  {
    name: "Kunga",
    description:
      "Whatever your interest, from coding and reading to networking and skill sharing, there are thousands of people who share it on Kunga. Events are happening every day—log in to join the fun!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gatsby",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/mosespace/Kunga",
    live_preview: "https://kunga.gatsbyjs.io/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
