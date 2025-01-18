"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../globals.css";

const ProjectsSection: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="h-screen flex justify-center items-center"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-6 rounded-xl shadow-lg neumorphic hover:shadow-xl"
          >
            <Image
              src="/project1.jpg"
              alt="Project 1"
              width={300}
              height={200}
              className="rounded mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Project One</h3>
            <p className="text-gray-400">Short description of Project One.</p>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-6 rounded-xl shadow-lg neumorphic hover:shadow-xl"
          >
            <Image
              src="/project2.jpg"
              alt="Project 2"
              width={300}
              height={200}
              className="rounded mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Project Two</h3>
            <p className="text-gray-400">Short description of Project Two.</p>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-6 rounded-xl shadow-lg neumorphic hover:shadow-xl"
          >
            <Image
              src="/project3.jpg"
              alt="Project 3"
              width={300}
              height={200}
              className="rounded mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Project Three</h3>
            <p className="text-gray-400">Short description of Project Three.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
