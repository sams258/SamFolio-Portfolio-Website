"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../globals.css";

const HeroSection: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen relative bg-white/20 backdrop-blur-md shadow-lg pt-20 md:py-20 lg:pt-32 lg:pb-20 px-6 overflow-hidden flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left lg:w-1/2 sm:pl-4 lg:pl-25">
          <h1 className="text-teal-500 text-4xl lg:text-5xl font-bold mb-4">
            Hi, I am <span className="text-orange-400">Sam</span>,
            <br />a dynamic and innovative{" "}
            <span className="text-orange-400">professional</span>.
          </h1>
          <p className="text-teal-500 font-bold mb-6">
            Digitalizing the world, one bit at a time!.
          </p>
          <div className="space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold rounded-lg shadow hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              View My Work
            </a>
            <a
              href="/samscv0825.pdf"
              download="samscv0825.pdf"
              className="px-6 py-3 bg-white border-2 border-orange-400 text-orange-400 font-bold rounded-lg shadow-md hover:bg-orange-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <Image
            src="/hero-image.jpg"
            alt="Hero Image"
            width={600}
            height={400}
            priority
            className="rounded-lg shadow-lg hero-image"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
