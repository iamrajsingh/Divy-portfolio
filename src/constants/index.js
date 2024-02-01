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
  cetpa,
  techprolabz,
  nike,
  priceTracker,
  threejs,
  awesome,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "3D Website",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    title: "Frontend Developer",
    company_name: "Hubx.ai",
    icon: "",
    iconBg: "#E6DEDD",
    date: "october 2023 - Present",
    points: [
      "Developing and maintaining E-commerce application using NextJS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Collably Network",
    icon: "",
    iconBg: "#FFFF",
    date: "December 2023 - Present",
    points: [
      "Developing websites for Web3 clients, showcasing proficiency in blockchain and decentralized technologies.",
      "Create seamless user experiences through ReactJS and NextJS, while leveraging backend services for data management and authentication.",
      "Utilizing Tailwind CSS for styling implies a focus on efficiency and maintainability in the design process.",
      "Responsible for managing hosting, likely involving deployment and maintenance of web applications.",
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
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Nike Landing Page",
    description:
      "Explore a modern Nike design that embodies innovation, athleticism, and core values. It's a dynamic celebration of Nike's heritage and future vision.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/iamrajsingh/Nike_website_design",
  },
  {
    name: "Price Tracker",
    description:
      "Developed an automated Amazon product tracking Website. It scours Amazon for price drops and notifies users via email, ensuring they never miss a deal.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
    ],
    image: priceTracker,
    source_code_link: "https://github.com/iamrajsingh/price_tracker",
  },
  {
    name: "Awesome Blogging",
    description:
      "Crafted a user-friendly blogging platform that empowers users to create, manage, and share their content effortlessly. Seamlessly perform CRUD operations on your blogs.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: awesome,
    source_code_link: "https://github.com/iamrajsingh/Awesome_Blogging",
  },
];

export { services, technologies, experiences, testimonials, projects };
