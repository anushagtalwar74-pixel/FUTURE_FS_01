import profile from "../assets/anusha.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-black via-slate-900 to-blue-950 text-white px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-blue-400 tracking-widest mb-3">
            Developer Portfolio
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-3">
            Anusha G Talawar
          </h1>

          <h2 className="text-xl text-gray-300 mb-5">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "AI & ML Enthusiast",
                1500,
                "Cloud Learner",
                1500,
                "Problem Solver",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="text-gray-400 leading-7 mb-6">
            Computer Science Engineering student passionate about building
            scalable web applications, AI systems, and cloud solutions.
            I love turning ideas into real-world products.
          </p>

          {/* INFO */}
          <div className="flex gap-6 text-sm text-gray-300 mb-6">
            <span>📍 India</span>
            <span>🎓 CSE </span>
            <span>💼 Open to Internships</span>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-6">

            <a
              href="#projects"
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download="Anusha_Resume.pdf"
              className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Download Resume
            </a>

          </div>

          {/* 🔗 SOCIAL LINKS (NEW ADDITION) */}
          <div className="flex gap-4 text-sm">

            <a
              href="https://www.linkedin.com/in/anusha-g-t-5177972a2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/anushagtalwar74-pixel/FUTURE_FS_01"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-700 transition"
            >
              GitHub
            </a>

          </div>

          {/* SKILLS PREVIEW */}
          <div className="flex flex-wrap gap-2 mt-5">

            {["React", "Python", "Java", "MySQL", "AWS"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-600/20 border border-blue-500 rounded-full text-sm hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>

            <img
              src={profile}
              alt="Anusha"
              className="relative w-80 h-80 rounded-full border-4 border-blue-500 shadow-2xl"
            />

          </div>

        </div>

      </div>

      {/* SCROLL */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm animate-bounce">
        ↓ Scroll Down
      </div>

    </section>
  );
}

export default Hero;