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
        Technology Strategy & Advisory · Skåne, Sweden
      </div>
      <h1 className={`${styles.heading} fade-up delay-1`}>
        Building things that <em>matter</em>,<br />
        at the edge of strategy<br />
        and engineering.
      </h1>
      <p className={`${styles.sub} fade-up delay-2`}>
        Research assistant, full-stack engineer, and MSc candidate at Malmö
        University. I work where hard technical problems meet real human needs.
      </p>
      <div className={`${styles.cta} fade-up delay-3`}>
        <a
          className={styles.btnPrimary}
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("projects");
          }}
        >
          View Work
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
