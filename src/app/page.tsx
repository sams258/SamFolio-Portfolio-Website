import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import "./globals.css";
import "./fontawesome"

const HomePage: React.FC = () => {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
    </>
  );
};

export default HomePage;
