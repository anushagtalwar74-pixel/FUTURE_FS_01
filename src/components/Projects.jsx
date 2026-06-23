function Projects() {

  const projects = [
    {
      title: "Student Management System",
      desc: "Full-stack system to manage student records, attendance, and performance tracking.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"]
    },
    {
      title: "Agro Smart Vision AI",
      desc: "AI-based crop recommendation system using soil and climate analysis.",
      tech: ["Python", "AI", "Data Science"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900 text-white">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12" data-aos="fade-up">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:scale-105 transition"
              data-aos="zoom-in"
            >

              <h3 className="text-2xl font-bold mb-3">
                {p.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {p.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-blue-600/20 border border-blue-500 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3">

                <a
                  href="#"
                  className="px-4 py-2 bg-blue-600 rounded-lg text-sm hover:bg-blue-700"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="px-4 py-2 border border-blue-500 rounded-lg text-sm hover:bg-blue-500"
                >
                  GitHub
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;