import portfolioimg from "./assets/4.png";
import EquityPulse from "./assets/EquityPulse.png";
import ecoming from "./assets/3.png";

export const projects = [
  {
    title: "EquityPulse",
    description: "EquityPulse is a high-performance, real-time financial stock screener web application that handles over 5,000 active records smoothly at 55+ FPS using TanStack Virtual and TradingView Lightweight Charts.",
    image: EquityPulse,
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://real-time-stock-screener-1792771238.vercel.app",
    github: "https://github.com/nishantstackdev/real-time-stock-screener-1792771238-uugn66-nishantstackdev",
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