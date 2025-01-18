"use client";

import React from "react";
import { motion } from "framer-motion";
import "../globals.css";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <motion.div
        className="container mx-auto text-center px-4 sm:px-10 md:px-28"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-600">
        As a dynamic and innovative professional with an ongoing B.Sc. in 
Computer Science, combined with a strong background in digital media & 
digital marketing, I am eager to leverage my comprehensive skills in 
technology and digital media within a multinational company.  
My goal is to contribute to cutting-edge digital solutions, optimizing digital 
marketing strategies, and driving technological innovation. My commitment 
to ...
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;