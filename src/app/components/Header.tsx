"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../globals.css";

const Header: React.FC = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  const [activeSection, setActiveSection] = useState<string>("home");

  const handleScroll = () => {
    const sections = ["home", "about", "projects"];
    const offsets = sections.map((id) => {
      const element = document.getElementById(id);
      return element ? element.offsetTop : 0;
    });

    const scrollPos = window.scrollY + 200; // Adjust for the sticky navbar height
    const active = sections.find(
      (_, i) =>
        scrollPos >= offsets[i] &&
        (i === sections.length - 1 || scrollPos < offsets[i + 1])
    );

    if (active) {
      setActiveSection(active);
    }
  };

  useEffect(() => {
    if (isMainPage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMainPage]);

  return (
    <header className="bg-white shadow fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          {/* Clickable samFolio */}
          <Link
            href="/"
            className="text-2xl font-bold text-teal-600 hover:text-orange-400 transition-colors"
          >
            samFolio
          </Link>
          {/* Social Icons */}
          <div className="flex space-x-4 text-orange-400">
            <Link
              href="https://github.com/sams258"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sam-saati/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Link>
            <Link
              href="mailto:sam4studies@gmail.com"
              className="hover:text-teal-600"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </Link>
          </div>
        </div>
        <nav>
  <ul className="flex space-x-6 md:space-x-4 sm:space-x-2 text-gray-700">
    {isMainPage ? (
      <>
        <li>
          <Link
            href="#"
            className={`hover:text-teal-600 ${
              activeSection === "home"
                ? "text-teal-600 font-semibold"
                : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className={`hover:text-teal-600 ${
              activeSection === "about"
                ? "text-teal-600 font-semibold"
                : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className={`hover:text-teal-600 ${
              activeSection === "projects"
                ? "text-teal-600 font-semibold"
                : ""
            }`}
          >
            Projects
          </Link>
        </li>
      </>
    ) : (
      <>
        <li>
          <Link href="/" className="hover:text-teal-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/#about" className="hover:text-teal-600">
            About
          </Link>
        </li>
        <li>
          <Link href="/#projects" className="hover:text-teal-600">
            Projects
          </Link>
        </li>
      </>
    )}
  </ul>
</nav>
      </div>
    </header>
  );
};

export default Header;
