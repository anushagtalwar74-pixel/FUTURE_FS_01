import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Let’s connect and build something amazing 🚀
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <div className="space-y-6">

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <p className="text-blue-400">anushagtalwar74@gmail.com</p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-semibold mb-2">📱 Phone</h3>
              <p className="text-blue-400">+91 8073918356</p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-semibold mb-3">🔗 Follow Me</h3>

              <div className="flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/anusha-g-t-5177972a2"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  LinkedIn Profile
                </a>

                <a
                  href="https://github.com/anushagtalwar74-pixel"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  GitHub Profile
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">

            <form ref={form} onSubmit={sendEmail} className="grid gap-6">

              <input
                name="user_name"
                placeholder="Your Name"
                className="p-3 rounded-lg bg-slate-900 border border-slate-700"
              />

              <input
                name="user_email"
                placeholder="Your Email"
                className="p-3 rounded-lg bg-slate-900 border border-slate-700"
              />

              <input
                name="subject"
                placeholder="Subject"
                className="p-3 rounded-lg bg-slate-900 border border-slate-700"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="p-3 rounded-lg bg-slate-900 border border-slate-700"
              ></textarea>

              <button className="bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;