import React from "react";
import Head from "next/head";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import "./globals.css";
import "./fontawesome"

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home - Samfolio</title>
        <meta name="description" content="Welcome to the homepage of Samfolio, where you can discover my latest projects and skills." />
      </Head>
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
    </>
  );
};

export default HomePage;
