export default function Skills() {

  const skills = [
    { name: "HTML5", level: "95%" },
    { name: "CSS3", level: "90%" },
    { name: "JavaScript", level: "80%" },
    { name: "React.js", level: "75%" },
    { name: "Python", level: "85%" },
    { name: "Java", level: "70%" },
    { name: "MySQL", level: "80%" },
    { name: "AWS Cloud", level: "65%" },
    { name: "Git & GitHub", level: "85%" },
    { name: "AI / ML Basics", level: "70%" }
  ];

  return (
    <section className="py-24 px-6 bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Skills & Technologies
        </h2>

        {/* SKILL BARS */}
        <div className="space-y-6">

          {skills.map((skill, i) => (
            <div key={i} data-aos="fade-right">

              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span className="text-gray-400">{skill.level}</span>
              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>

            </div>
          ))}

        </div>

        {/* EXTRA TECH STACK */}
        <div className="mt-12 text-center">

          <h3 className="text-xl text-gray-300 mb-4">
            Tech Stack & Tools I Use
          </h3>

          <div className="flex flex-wrap justify-center gap-3 text-sm">

            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full">React</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full">Node.js</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full">Express</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full">MongoDB</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full">GitHub</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full">VS Code</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full">Figma</span>

          </div>

        </div>

      </div>

    </section>
  );
}