import React from "react";
import "../globals.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2025 samFolio. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/sams258"
            className="flex items-center hover:text-teal-400"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sam-saati/"
            className="flex items-center hover:text-teal-400"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
            LinkedIn
          </a>
          <a
            href="mailto:sam4studies@gmail.com"
            className="flex items-center hover:text-teal-400"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Email
          </a>
        </div>
        <div className="flex justify-center items-center mt-6 space-x-2">
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-teal-400"
          >
            <Image
              src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png"
              alt="Next.js Logo"
              width={50}
              height={10}
              quality={100}
              unoptimized={true}
            />
            <span className="ml-2 text-sm">Powered by Next.js</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
