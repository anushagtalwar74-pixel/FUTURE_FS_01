import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    ).then(
      () => {
        alert("Message sent successfully!");
      },
      () => {
        alert("Failed to send message.");
      }
    );
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Contact Me
        </h2>

        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">

          <form ref={form} onSubmit={sendEmail} className="grid gap-6">

            <input name="user_name" placeholder="Your Name" className="p-3 rounded-lg bg-slate-900 border border-slate-700" />

            <input name="user_email" placeholder="Your Email" className="p-3 rounded-lg bg-slate-900 border border-slate-700" />

            <input name="subject" placeholder="Subject" className="p-3 rounded-lg bg-slate-900 border border-slate-700" />

            <textarea name="message" rows="5" placeholder="Message"
              className="p-3 rounded-lg bg-slate-900 border border-slate-700"
            ></textarea>

            <button className="bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;