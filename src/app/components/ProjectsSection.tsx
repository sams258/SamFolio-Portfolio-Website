'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import '../globals.css';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow-lg neumorphic hover:shadow-xl">
            <Image src="/project1.png" alt="Project 1" width={300} height={200} className="rounded mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Project Name</h3>
            <p className="text-gray-600">Short description of the project.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow-lg neumorphic hover:shadow-xl">
            <Image src="/project2.png" alt="Project 2" width={300} height={200} className="rounded mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Project Name</h3>
            <p className="text-gray-600">Short description of the project.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;