import React from "react";
import "../globals.css";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2025 samFolio. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com" className="hover:text-teal-400">
            GitHub
          </a>
          <a href="https://linkedin.com" className="hover:text-teal-400">
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-teal-400"
          >
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
              src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" // URL to Next.js white horizontal logo
              alt="Next.js Logo"
              width={50} // Adjust width as needed
              height={10} // Adjust height as needed
              unoptimized={true}
            />
            <span className="ml-2 text-sm">Made by Next.js</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
