import { skills } from "../skillsdata";

const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-16">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 hover:border-indigo-500/40 active:border-indigo-500/40 rounded-2xl p-6 transition duration-300 transform hover:-translate-y-1"
            >
              {/* Header: Icon & Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl text-indigo-400">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </div>

              {/* Clean Tag/Category display instead of Progress bar */}
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full font-medium">
                  {skill.category || "Proficient"}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;