"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../globals.css";

const ProjectsSection: React.FC = () => {
  return (
    <motion.section
  id="projects"
  className="h-auto md:min-h-screen flex justify-center items-center bg-gray-800"
  initial={{ y: 0, opacity: 0 }} /* Prevent initial Y offset */
  whileInView={{ opacity: 1 }} /* Only animate opacity */
  transition={{ duration: 0.8 }}
>
  <div className="container mx-auto px-4">
    <h2 className="sm: pt-20 sm:pb-10 text-3xl font-bold text-white text-center mb-6 md:mb-12">
      Featured Projects
    </h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Project Cards */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl"
      >
        <Image
          src="/project1.jpg"
          alt="Project 1"
          width={250}
          height={150}
          className="rounded mb-4"
        />
        <h3 className="text-lg md:text-xl font-bold text-gray-800">
          Project One
        </h3>
        <p className="text-sm md:text-base text-gray-400">
          Short description of Project One.
        </p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl"
      >
        <Image
          src="/project2.jpg"
          alt="Project 2"
          width={250}
          height={150}
          className="rounded mb-4"
        />
        <h3 className="text-lg md:text-xl font-bold text-gray-800">
          Project Two
        </h3>
        <p className="text-sm md:text-base text-gray-400">
          Short description of Project Two.
        </p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl"
      >
        <Image
          src="/project3.jpg"
          alt="Project 3"
          width={250}
          height={150}
          className="rounded mb-4"
        />
        <h3 className="text-lg md:text-xl font-bold text-gray-800">
          Project Three
        </h3>
        <p className="text-sm md:text-base text-gray-400">
          Short description of Project Three.
        </p>
      </motion.div>
    </div>
  </div>
</motion.section>

  );
};

export default ProjectsSection;
