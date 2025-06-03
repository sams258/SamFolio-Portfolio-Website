"use client";

import React from "react";
import { motion } from "framer-motion";
import "../globals.css";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"
    >
      <motion.div
        className="container mx-auto text-center px-4 sm:px-6 md:px-10 lg:px-20"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-orange-400 mt-10 mb-4">
          About Me
        </h2>
        <p className="text-base sm:text-lg text-white">
          As a fresh Computer Science graduate with a B.Sc. in Software Engineering, 
          I bring a blend of technical expertise and hands-on experience in digital 
          transformation, data-driven decision-making, and user-centric solutions. 
          My return to academia in 2022 was a pivotal move, reflecting resilience, 
          adaptability, and a growth mindset—traits that fuel my passion for solving 
          complex problems in fast-paced environments. 
          I have a strong foundation in artificial intelligence (AI), machine learning 
          (ML), and computer vision, with my thesis focusing on a &quot;Grid-based approach 
          to parsing 2D screens for web interfaces&quot;. This research, integrating UI 
          analysis, data modeling, and vision-language model (VLM) principles, not only 
          advanced UI parsing accuracy but also positioned me at the intersection of 
          human-computer interaction (HCI) and the future of large language models (LLMs). 
          My work contributes to the next generation of multimodal AI systems, emphasizing 
          scalability, automation, and intelligent user experiences.
          I am passionate about leveraging cutting-edge technologies and I stay ahead of 
          industry trends through continuous learning. My experience includes full-stack 
          development, UX/UI design, data management, and content strategy, equipping 
          me with a holistic view of how technology, design, and business intersect.
          I thrive in agile, cross-functional teams, where I can contribute to innovative 
          AI-driven solutions, optimize digital strategies, and deliver scalable, impactful 
          results. My proficiency in problem-solving, critical thinking, and project management 
          allows me to handle ambiguous challenges while aligning technical efforts with business 
          objectives.
          I aspire to join a dynamic, forward-thinking organization where I can drive digital 
          transformation initiatives, enhance accessibility and UX, and contribute to building 
          next-generation products that leverage the power of AI, automation, and emerging digital 
          ecosystems. I am excited to collaborate with diverse, multidisciplinary teams to shape the 
          future of intelligent digital experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
