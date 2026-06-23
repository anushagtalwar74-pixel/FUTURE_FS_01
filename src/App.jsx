import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import WhyHireMe from "./components/WhyHireMe";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-slate-950 text-white">

      <Navbar />

      <section id="home"><Hero /></section>

      <section id="about"><About /></section>

      <section id="skills"><Skills /></section>

      <section id="why"><WhyHireMe /></section>

      <section id="projects"><Projects /></section>

      <section id="education"><Education /></section>

      <section id="certifications"><Certifications /></section>

      <section id="contact"><Contact /></section>

      <Footer />

    </div>
  );
}