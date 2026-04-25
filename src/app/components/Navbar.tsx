"use client";

import { useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

const sections = ["about", "projects", "skills", "experience", "contact"];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const isPinnedRef = useRef(false);
  const pinTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function show() {
    if (navRef.current) navRef.current.style.transform = "translateY(0)";
  }

  function hide() {
    if (navRef.current) navRef.current.style.transform = "translateY(-100%)";
  }

  function pin() {
    if (pinTimerRef.current) clearTimeout(pinTimerRef.current);
    isPinnedRef.current = true;
    show();
    pinTimerRef.current = setTimeout(() => {
      isPinnedRef.current = false;
      lastY.current = window.scrollY;
    }, 800);
  }

  useEffect(() => {
    function onScroll() {
      if (isPinnedRef.current) return;
      const current = window.scrollY;
      if (current > lastY.current && current > 80) {
        hide();
      } else {
        show();
      }
      lastY.current = current;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (pinTimerRef.current) clearTimeout(pinTimerRef.current);
    };
  }, []);

  return (
    <nav ref={navRef} className={styles.nav}>
      <button
        className={styles.logo}
        onClick={() => { pin(); scrollTo("home"); }}
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
                pin();
                scrollTo(s);
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
