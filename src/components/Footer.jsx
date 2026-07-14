import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <p className="text-slate-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Nishant. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/nishantstackdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 text-xl transition-all duration-300
                       hover:text-indigo-400 hover:scale-110
                       hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.7)]"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nishant-mathur-30b623329/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 text-xl transition-all duration-300
                       hover:text-indigo-400 hover:scale-110
                       hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.7)]"
          >
            <FiLinkedin />
          </a>

          <a
            href="https://www.instagram.com/_nishantmathur/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-slate-400 text-xl transition-all duration-300
                       hover:text-indigo-400 hover:scale-110
                       hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.7)]"
          >
            <FiInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
