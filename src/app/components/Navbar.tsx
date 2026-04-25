"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

const sections = ["about", "projects", "skills", "experience", "contact"];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const isPinnedRef = useRef(false);
  const lastScrollY = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // headroom
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

  // click-outside closes the mobile menu
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [menuOpen]);

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
        onClick={() => { setMenuOpen(false); handleNavClick("home"); }}
        aria-label="Back to top"
      >
        Sam <span className={styles.logoAccent}>El Saati</span>
      </button>

      {/* desktop links */}
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

      {/* hamburger (mobile only) */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* mobile dropdown */}
      {menuOpen && (
        <div className={styles.dropdown}>
          <ul className={styles.dropdownList}>
            {sections.map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    handleNavClick(s);
                  }}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
