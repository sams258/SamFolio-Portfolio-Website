"use client";

import { useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

const sections = ["about", "projects", "skills", "experience", "contact"];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const isPinnedRef = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isPinnedRef.current) return;
      const currentY = window.scrollY;
      const nav = navRef.current;
      if (!nav) return;
      if (currentY <= 60) {
        nav.style.transform = "translateY(0)";
      } else if (currentY > lastScrollY.current) {
        nav.style.transform = "translateY(-100%)";
      } else {
        nav.style.transform = "translateY(0)";
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavClick(id: string) {
    isPinnedRef.current = true;
    if (navRef.current) navRef.current.style.transform = "translateY(0)";
    scrollTo(id);
    setTimeout(() => {
      isPinnedRef.current = false;
      lastScrollY.current = window.scrollY;
    }, 1000);
  }

  return (
    <nav ref={navRef} className={styles.nav}>
      <button
        className={styles.logo}
        onClick={() => handleNavClick("home")}
        aria-label="Back to top"
      >
        Sam <span className={styles.logoAccent}>El Saati</span>
      </button>
      <ul className={styles.links}>
        {sections.map((s) => (
          <li key={s}>
            <a
              href={`#${s}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(s);
              }}
            >
              {s}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
