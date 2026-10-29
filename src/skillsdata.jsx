import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

export const skills = [
  {
    name: "React",
    level: "85%",
    icon: <FaReact />,
  },
  {
    name: "JavaScript",
    level: "80%",
    icon: <SiJavascript />,
  },
  {
    name: "Node.js",
    level: "75%",
    icon: <FaNodeJs />,
  },
  {
    name: "MongoDB",
    level: "70%",
    icon: <SiMongodb />,
  },
  {
    name: "HTML & CSS",
    level: "90%",
    icon: (
      <div className="flex gap-1">
        <FaHtml5 />
        <FaCss3Alt />
      </div>
    ),
  },
  {
    name: "Git & GitHub",
    level: "85%",
    icon: <FaGitAlt />,
  },
];
