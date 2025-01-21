"use client";

import React from "react";
import { motion } from "framer-motion";
import "../globals.css";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="h-screen bg-gray-300 flex justify-center items-center"
    >
      <motion.div
        className="container mx-auto text-center px-4 sm:px-10 md:px-28"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-orange-400 mb-6">About Me</h2>
        <p className="text-lg text-gray-600">
        As a Computer Science student nearing the completion of my B.Sc., I bring a mix of technical knowledge and practical experience in digital media and marketing. My journey back to university in 2022 marked a major personal and professional shift, requiring determination and resilience. This has shaped me into a focused and resourceful individual, ready to take on new challenges.

With a background in creating content, analyzing audience engagement, and managing projects, I’ve developed a solid understanding of how technology and marketing intersect. My hands-on experience with programming, user experience design, and digital tools allows me to approach problems with both creativity and logic. Additionally, I’ve built a strong foundation in managing data, exploring its potential for meaningful insights, and applying it to real-world problems.

I aspire to work in a multinational environment where I can contribute to innovative solutions and help refine digital strategies that make a measurable impact. My passion for learning and embracing change keeps me driven to improve and adapt, whether it’s by mastering new tools, exploring cutting-edge trends, or collaborating with diverse teams. I thrive in environments where technology meets creativity, and I look forward to making a meaningful contribution to both.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
