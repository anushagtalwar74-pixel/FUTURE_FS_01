export default function WhyHireMe() {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">
          Why Hire Me?
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
          I am a dedicated Computer Science Engineering student specializing in
          Full Stack Development and AI-based systems. I focus on building
          scalable, efficient, and real-world applications with clean architecture.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800" data-aos="fade-up">
            ⚡ Fast Learner
            <p className="text-gray-400 mt-3 text-sm">
              I quickly adapt to new technologies, frameworks, and tools.
              I believe in continuous learning and staying updated with industry trends.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800" data-aos="fade-up" data-aos-delay="100">
            💡 Strong Problem Solver
            <p className="text-gray-400 mt-3 text-sm">
              I break complex problems into simple logic and build efficient solutions
              using structured thinking and debugging skills.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800" data-aos="fade-up" data-aos-delay="200">
            🚀 Project Builder Mindset
            <p className="text-gray-400 mt-3 text-sm">
              I don’t just learn — I build complete projects from frontend to backend
              and deploy them with real-world usability.
            </p>
          </div>

        </div>

        {/* EXTRA INFO */}
        <div className="mt-12 text-center text-gray-400 max-w-4xl mx-auto">

          <p>
            I have built multiple academic and personal projects including
            Student Management Systems, AI-based solutions, and responsive web applications.
          </p>

          <p className="mt-4">
            I am actively seeking internship opportunities where I can contribute,
            learn from professionals, and grow as a Software Engineer.
          </p>

        </div>

      </div>

    </section>
  );
}