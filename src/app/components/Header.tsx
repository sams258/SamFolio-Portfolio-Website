'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // For dynamic path detection
import '../globals.css';

const Header: React.FC = () => {
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-teal-600">samFolio</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-700">
            {isMainPage ? (
              <>
                <li><a href="#" className="hover:text-teal-600">Home</a></li>
                <li><a href="#about" className="hover:text-teal-600">About</a></li>
                <li><a href="#projects" className="hover:text-teal-600">Projects</a></li>
              </>
            ) : (
              <>
                <li><Link href="/" className="hover:text-teal-600">Home</Link></li>
                <li><Link href="/#about" className="hover:text-teal-600">About</Link></li>
                <li><Link href="/#projects" className="hover:text-teal-600">Projects</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;