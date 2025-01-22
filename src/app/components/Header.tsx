"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../globals.css";

const Header: React.FC = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  const [activeSection, setActiveSection] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleScroll = () => {
    const sections = ["home", "about", "projects"];
    const offsets = sections.map((id) => {
      const element = document.getElementById(id);
      return element ? element.offsetTop : 0;
    });

    const scrollPos = window.scrollY + 200;
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
      setActiveSection("home");
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMainPage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white glassnav shadow fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="samFolio Logo"
              width={186}
              height={25}
              className="hover:opacity-80 transition-opacity"
              priority
            />
          </Link>
          {/* Social Icons for Medium and Large Screens */}
          <div className="hidden md:flex space-x-2 text-orange-400">
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

        {/* Burger Menu Button */}
        <button
          className="md:hidden bg-transparent sm:bg-transparent text-orange-400 z-10"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="xl" />
        </button>

        {/* Navbar for Medium and Larger Screens */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 text-gray-700">
            {isMainPage ? (
              <>
                <li>
                  <Link
                    href="#"
                    className={`hover:text-teal-600 ${
                      activeSection === "home"
                        ? "text-teal-500 font-semibold"
                        : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className={`hover:text-teal-500 ${
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
                    className={`hover:text-teal-500 ${
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

        {/* Burger Menu for Small Screens */}
        {menuOpen && (
          <nav className="absolute glass1 top-16 left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col space-y-4 text-gray-700 p-4">
              {isMainPage ? (
                <>
                  <li>
                    <Link
                      href="#"
                      className={`hover:text-teal-600 ${
                        activeSection === "home"
                          ? "text-teal-400 font-semibold"
                          : ""
                      }`}
                      onClick={closeMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className={`hover:text-teal-600 ${
                        activeSection === "about"
                          ? "text-teal-400 font-semibold"
                          : ""
                      }`}
                      onClick={closeMenu}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#projects"
                      className={`hover:text-teal-600 ${
                        activeSection === "projects"
                          ? "text-teal-400 font-semibold"
                          : ""
                      }`}
                      onClick={closeMenu}
                    >
                      Projects
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-teal-600"
                      onClick={closeMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#about"
                      className="hover:text-teal-600"
                      onClick={closeMenu}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#projects"
                      className="hover:text-teal-600"
                      onClick={closeMenu}
                    >
                      Projects
                    </Link>
                  </li>
                </>
              )}
              {/* Social Icons for Small Screens */}
              <li className="mt-4 border-t pt-4">
                <p className="text-teal-400 font-medium mb-2">Get in Touch</p>
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
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
