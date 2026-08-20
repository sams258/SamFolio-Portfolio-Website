import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Research from "./components/Research";
import About from "./components/About";
import Projects from "./components/Projects";
import Dissemination from "./components/Dissemination";
import TechnicalProjects from "./components/TechnicalProjects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="grain" />
      <Navbar />
      <Hero />
      <Research />
      <About />
      <Projects />
      <Dissemination />
      <TechnicalProjects />
      <Skills />
      <Timeline />
      <ContactForm />
      <Footer />
    </>
  );
}
