"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

type Project = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
};

export default function GitHubPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    window.scrollTo(0, 0);
    
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchProjects();
  }, []);

  return (
    <motion.div
      className="mt-10 min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center text-teal-500 mt-6 mb-6">
          My GitHub Projects
        </h1>
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="glass rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-[-3px] transition-all duration-300 ease-in-out bg-gray-800 bg-opacity-80"
              >
                <a
  href={project.html_url}
  target="_blank"
  rel="noopener noreferrer"
  className="text-xl font-semibold text-teal-400 hover:underline"
>
  <h2>{project.name}</h2>
</a>
                <p className="text-gray-300 mt-2">
                  {project.description || "No description available."}
                </p>
                <p className="mt-4">
                  <strong>Language:</strong>{" "}
                  {project.language || "Various languages"}
                </p>

                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-orange-400 font-medium hover:text-teal-500"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    className=" text-orange-400 mr-2"
                  />{" "}
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
