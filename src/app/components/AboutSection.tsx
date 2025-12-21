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
        <div className="text-base sm:text-lg text-white">
          I am a Computer Scientist with a unique &quot;Dual-Stack&quot; profile: 8 years of operational leadership in digital media backed by a distinction-level technical education.

My current studies at Malmö University operate on two distinct but complementary tracks:

In my Master&apos;s program, &quot;Innovation for Change in a Digital Society,&quot; I focus on the four pillars of modern tech: Innovation, Entrepreneurship, Digitalization, and Sustainability. Here, I explore why we build technology—focusing on ethics, social inclusion, and business viability.

In parallel, I serve as a Research Assistant in the VIP Programme, where I focus on how to build it. I research Robotics and Edge AI, specifically designing &quot;Context Engines&quot; and modular architectures for autonomous mobility systems.

The Professional Bridge: I bring this same duality to my professional life. My background as a Station Manager and Digital Specialist taught me to manage stakeholders and deadlines. My current research allows me to architect complex technical systems.
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
