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
        <div className="text-base sm:text-lg text-white space-y-4">
          <p>
            I am a Technology Strategy and Advisory specialist with 8+ years directing
            large-scale digital transformation initiatives across international markets —
            and someone who made a deliberate decision to go deeper. In 2022 I returned
            to university, completed a BSc in Computer Science with Distinction, and am
            now pursuing an MSc in Computer Science: Innovation for Change at Malmö
            University.
          </p>
          <p>
            My graduate work runs on two complementary tracks. In the Master&apos;s
            programme I explore the <em>why</em> behind technology — Innovation,
            Entrepreneurship, Digitalization, and Social Sustainability — building the
            strategic framework that guides how organisations create lasting value in a
            digital world. In parallel, through the VIP Research Programme, I work on
            the <em>how</em> — designing Context Engines and modular AI architectures
            for autonomous mobility systems using Edge AI and ROS2.
          </p>
          <p>
            What ties it together is a rare dual perspective: the analytical mindset of
            a practising engineer and the strategic instincts of someone who has spent
            years translating technology into real business outcomes. I have led
            cross-functional teams across 4 countries, grown digital platforms to over
            1 million followers across 165 countries, and built products from first idea
            through operational scale.
          </p>
          <p>
            I work best as a trusted advisor — sitting between technical and business
            teams, identifying where technology creates genuine value, and helping
            organisations move forward with clarity and confidence.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;