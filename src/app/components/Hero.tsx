"use client";

import styles from "./Hero.module.css";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroNumber}>S</div>
      <div className={`${styles.eyebrow} fade-up`}>
        MSc Computer Science · Malmö University · Skåne, Sweden
      </div>
      <h1 className={`${styles.heading} fade-up delay-1`}>
        Systems that know the limits<br />
        of their own <em>competence</em>.
      </h1>
      <p className={`${styles.sub} fade-up delay-2`}>
        I work on systems that adapt within the limits of their own
        competence and hand control back to a person at the boundary of it
        — how they should be elicited, architected and evaluated,
        particularly when the intended users are people the default design
        excludes.
      </p>
      <div className={`${styles.cta} fade-up delay-3`}>
        <a
          className={styles.btnPrimary}
          href="#research"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("research");
          }}
        >
          Research
        </a>
        <a
          className={styles.btnGhost}
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("contact");
          }}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
