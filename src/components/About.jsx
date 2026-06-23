export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900 text-white">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">
          About Me
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
          A passionate Computer Science Engineering student focused on building
          real-world software solutions using modern technologies.
        </p>

        {/* MAIN BOX */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12">

          {/* INTRO */}
          <p className="text-gray-300 leading-8 text-lg">
            I am <span className="text-white font-semibold">Anusha G Talawar</span>,
            a final-year Computer Science Engineering (AI & ML) student at Jain College
            of Engineering, Belagavi with a CGPA of 8.3.
          </p>

          <p className="text-gray-400 mt-6 leading-8">
            I am passionate about Full Stack Web Development, Artificial Intelligence,
            and Cloud Computing. I enjoy turning complex ideas into simple, scalable,
            and user-friendly applications.
          </p>

          <p className="text-gray-400 mt-6 leading-8">
            My journey in tech started with curiosity about how websites and applications
            work behind the scenes. Since then, I have built multiple academic projects
            and continuously improved my skills in frontend, backend, and databases.
          </p>

          <p className="text-gray-400 mt-6 leading-8">
            I specialize in building MERN-style applications, working with APIs,
            database integration, and creating responsive UI designs.
            I also have exposure to AI/ML concepts and AWS Cloud fundamentals.
          </p>

          {/* HIGHLIGHTS */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800" data-aos="fade-up">
              🎓 Education
              <p className="text-gray-400 text-sm mt-2">
                B.E CSE (AI & ML) – 2027
              </p>
            </div>

            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800" data-aos="fade-up" data-aos-delay="100">
              💻 Focus Area
              <p className="text-gray-400 text-sm mt-2">
                Full Stack Development & AI Systems
              </p>
            </div>

            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800" data-aos="fade-up" data-aos-delay="200">
              🚀 Career Goal
              <p className="text-gray-400 text-sm mt-2">
                Become a Software Engineer & AI Developer
              </p>
            </div>

          </div>

          {/* EXTRA PERSONAL TOUCH */}
          <div className="mt-10 text-gray-400 leading-7">
            <p>
              I am actively seeking internship opportunities where I can contribute
              to real projects, learn from industry professionals, and grow as a developer.
            </p>

            <p className="mt-4">
              I believe in continuous learning, writing clean code, and building
              impactful digital solutions that solve real-world problems.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}