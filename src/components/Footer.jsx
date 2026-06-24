function Footer() {
  return (
    <footer className="bg-black text-white border-t border-slate-800 py-12">

      <div className="max-w-6xl mx-auto text-center">

        {/* NAME */}
        <h2 className="text-2xl font-bold text-blue-400">
          &lt; Anusha G Talawar /&gt;
        </h2>

        <p className="text-gray-400 mt-2">
          Crafting digital experiences, one line at a time.
        </p>

        {/* MAIN NAV LINKS */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-gray-400">

          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#education" className="hover:text-white">Education</a>
          <a href="#certifications" className="hover:text-white">Certifications</a>
          <a href="#whyhireme" className="hover:text-white">Why Hire Me</a>
          <a href="#contact" className="hover:text-white">Contact</a>

        </div>

        {/* HIGHLIGHT INFO */}
        <div className="mt-6 text-sm text-gray-500 space-y-2">

          <p>🐱 GitHub | Open Source & Projects</p>
          <p>💼 LinkedIn | Professional Profile</p>
          <p>🎓 Education | CSE (AI & ML)</p>
          <p>🏆 Certifications | AWS • IBM • Cisco • Deloitte</p>
          <p>⚡ Skills | React • Python • AI • Cloud • Full Stack</p>
          <p>🚀 Why Hire Me | Problem Solver • Fast Learner • Builder</p>

        </div>

        {/* FOOTER NOTE */}
        <p className="mt-8 text-xs text-gray-600">
          © 2026 Anusha. Designed & Built with ❤️ in Karnataka, India.
        </p>

      </div>

    </footer>
  );
}

export default Footer;