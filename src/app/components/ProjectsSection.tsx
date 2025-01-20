"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
        <h2 className="sm: pt-20 sm:pb-5 text-3xl font-bold text-white text-center mb-6 md:mb-2">
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
              width={350}
              height={219}
              quality={100}
              className="rounded mb-4"
            />
            <h3
              className="text-lg md:text-xl font-bold text-gray-800 cursor-pointer"
              onClick={() =>
                window.open("https://github.com/sams258/IoT-Project", "_blank")
              }
            >
              IndaHouse - IoT-Project
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              IndaHouse involves building a temperature and humidity monitoring
              system using a Raspberry Pi Pico WH, a DHT11 sensor, and a Node js
              + MongoDB backend.🌡️
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl"
          >
            <Image
              src="/project2.jpg"
              alt="Project 2"
              width={350}
              height={219}
              quality={100}
              className="rounded mb-4"
            />
            <h3
              className="text-lg md:text-xl font-bold text-gray-800 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/sams258/Big-Data-Analytics-Project",
                  "_blank"
                )
              }
            >
              iOS vs Android - Big Data Project
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              This project studies the ever-persistent iOS vs Android debate by
              analyzing user behavior, sentiments, and preferences using Amazon
              reviews for cell phones and accessories. 📱✨.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl"
          >
            <Image
              src="/project3.jpg"
              alt="Project 3"
              width={350}
              height={219}
              quality={100}
              className="rounded mb-4"
            />
            <h3
              className="text-lg md:text-xl font-bold text-gray-800 cursor-pointer"
              onClick={() =>
                window.open("https://github.com/sams258/laundrybuddy", "_blank")
              }
            >
              LaundryBuddy - FullStack Project
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              This web application is designed to streamline the laundry booking
              process for apartment residents, allowing them to book slots for
              laundry machines and manage their bookings.👕
            </p>
          </motion.div>
        </div>
        <div className="text-center mt-4">
          <Link href="/github" className="text-teal-500 font-medium text-lg hover:text-teal-600 mt-4">
            More projects...
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
