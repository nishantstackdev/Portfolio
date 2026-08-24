import portfolioimg from "./assets/4.png";
import todoimg from "./assets/2.png";
import ecoming from "./assets/3.png";

export const projects = [
  {
    title: "To Do App",
    description: "Interactive task management application built with React, featuring state persistence and task categorization.",
    image: todoimg,
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://basictoodo.netlify.app/",
    github: "https://github.com/developernishant-code/To-do-App",
    isVideoDemo: false,
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio built using modern frontend tools to showcase full-stack web projects.",
    image: portfolioimg,
    techStack: ["React", "Tailwind CSS"],
    live: "https://my-mineportfolio.netlify.app/",
    github: "https://github.com/developernishant-code/FUTURE_FS_01",
    isVideoDemo: false,
  },
  {
    title: "NovaCart (E-commerce Platform)",
    description: "Full-stack e-commerce app featuring Razorpay payment gateway integration, cart management, and real-time MongoDB database order updates.",
    image: ecoming,
    techStack: ["React", "Node.js", "MongoDB", "Express", "Razorpay"],
    live: "https://youtu.be/8J0wj8DKer4", // Apni YouTube Video ka link!
    github: "https://github.com/nishantstackdev/Shopy-zone",
    isVideoDemo: true, // Flag to render "Watch Demo" instead of "Live Demo"
  },
];