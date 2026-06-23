function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Education
        </h2>

        {/* MAIN CARD */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

          {/* DEGREE */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white">
              Bachelor of Engineering (Computer Science)
            </h3>

            <p className="text-blue-400">
              Jain College of Engineering, Belagavi
            </p>

            <p className="text-gray-400 text-sm mt-1">
              2023 – 2027 (Expected)
            </p>

            <p className="text-gray-300 mt-2">
              CGPA: <span className="text-blue-400 font-semibold">8.3</span>
            </p>
          </div>

          <hr className="border-slate-700 my-6" />

          {/* PUC */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">
              Pre-University Course (PUC)
            </h3>

            <p className="text-gray-400">
              Science Stream
            </p>

            <p className="text-gray-300 mt-1">
              Percentage: <span className="text-blue-400">82%</span>
            </p>
          </div>

          <hr className="border-slate-700 my-6" />

          {/* SSLC */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Secondary School (SSLC)
            </h3>

           <p className="text-blue-400">
              KENDRIYA VIDYALAYA NO.2 CANTONMENT BELGAUM
            </p>

            <p className="text-gray-300 mt-1">
              Percentage: <span className="text-blue-400">75%</span>
            </p>
          </div>

        </div>

        {/* EXTRA HIGHLIGHT BOXES */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">

          <div className="bg-slate-900 p-4 rounded-xl text-center border border-slate-800">
            <h4 className="text-blue-400 font-bold">CGPA</h4>
            <p className="text-gray-300 mt-1">8.3 / 10</p>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl text-center border border-slate-800">
            <h4 className="text-blue-400 font-bold">Branch</h4>
            <p className="text-gray-300 mt-1">Computer Science</p>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl text-center border border-slate-800">
            <h4 className="text-blue-400 font-bold">Focus</h4>
            <p className="text-gray-300 mt-1">Full Stack + AI</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;