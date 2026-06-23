function Certifications() {
  const certs = [
    {
      title: "AWS Solutions Architecture Job Simulation",
      org: "Forage",
      skills: "Cloud Computing, AWS, Solution Architecture",
      year: "Jan 2026 - Jan 2027"
    },
    {
      title: "Tata GenAI Powered Data Analytics Job Simulation",
      org: "Forage",
      skills: "Data Analytics, Data Visualization",
      year: "2026"
    },
    {
      title: "JPMorgan Chase Software Engineering Simulation",
      org: "Forage",
      skills: "Python, Software Engineering, Code Quality",
      year: "Jan 2026 - Jan 2027"
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      org: "Deloitte (Forage)",
      skills: "Data Analysis, Business Insights, Forensic Technology",
      year: "Completed"
    },
    {
      title: "IBM Artificial Intelligence Fundamentals",
      org: "IBM SkillsBuild",
      skills: "Artificial Intelligence, Machine Learning Basics",
      year: "Completed"
    },
    {
      title: "IBM Customer Engagement: Communication & Personality Dynamics",
      org: "IBM SkillsBuild",
      skills: "Communication, Personality Development",
      year: "Completed"
    },
    {
      title: "IBM Problem Solving & Process Controls",
      org: "IBM SkillsBuild",
      skills: "Problem Solving, Analytical Thinking",
      year: "Completed"
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      org: "Amazon Web Services",
      skills: "AWS Cloud, Cloud Computing",
      year: "Feb 2026"
    },
    {
      title: "Networking Basics",
      org: "Cisco Networking Academy",
      skills: "IPv4, IPv6, ARP, Networking Fundamentals",
      year: "Jun 2026"
    },
    {
      title: "Cloud Computing",
      org: "NPTEL - IIT Kharagpur",
      skills: "Cloud Computing, Distributed Systems",
      year: "Completed"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Certifications & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {certs.map((c, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold mb-2">
                {c.title}
              </h3>

              <p className="text-blue-400 text-sm mb-1">
                {c.org}
              </p>

              <p className="text-gray-400 text-sm mb-2">
                {c.skills}
              </p>

              <p className="text-gray-500 text-xs">
                {c.year}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;