import { projects } from "../Projectdata";

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-white mb-10">
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-xl transition flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative group overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Content Container */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Dynamic Tech Stack Badges */}
                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2.5 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-indigo-500 text-white text-sm py-2 px-3 rounded-lg hover:bg-indigo-600 transition font-medium flex items-center justify-center gap-1.5"
                  >
                    {project.isVideoDemo ? "▶ Watch Demo" : "Live Demo"}
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-white/30 text-white text-sm py-2 px-3 rounded-lg hover:bg-white/10 transition font-medium flex items-center justify-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;