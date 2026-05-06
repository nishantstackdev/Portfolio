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
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Optional overlay ONLY on image */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-white text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-white/30 text-white py-2 rounded-lg hover:bg-white/10 transition"
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