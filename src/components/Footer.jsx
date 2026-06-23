function Footer() {
  return (
    <footer className="bg-black text-white border-t border-slate-800 py-10">

      <div className="max-w-6xl mx-auto text-center">

        {/* NAME STYLE */}
        <h2 className="text-2xl font-bold text-blue-400">
          &lt; Anusha G Talawar /&gt;
        </h2>

        <p className="text-gray-400 mt-2">
          Crafting digital experiences, one line at a time.
        </p>

        {/* LINKS */}
        <div className="flex justify-center gap-6 mt-6 text-gray-400">

          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>

        </div>

        {/* ICON STYLE INFO */}
        <div className="mt-6 text-sm text-gray-500 space-y-1">

          <p>🐱 GitHub | Code & Projects</p>
          <p>💼 LinkedIn | Professional Profile</p>
          <p>⚡ Skills | React • Python • AI • Cloud</p>

        </div>

        <p className="mt-6 text-xs text-gray-600">
          © 2026 Anusha. Designed & Built with ❤️ in Karnataka, India.
        </p>

      </div>

    </footer>
  );
}

export default Footer;