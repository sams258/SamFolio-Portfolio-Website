import styles from "./IndependentWork.module.css";

const albalTags = [
  "Flutter",
  "iOS",
  "Android",
  "Streaming Infrastructure",
  "Audio Production",
  "Music Curation",
  "Audience Analytics",
];

const amazonTags = [
  "Hadoop",
  "PySpark",
  "Distributed Processing",
  "Feature Engineering",
];

const metrics = [
  { value: "81,600+", label: "Monthly Listeners" },
  { value: "169", label: "Countries" },
  { value: "46K", label: "Hours Streamed" },
  { value: "33.7 min", label: "Average Session" },
];

export default function IndependentWork() {
  return (
    <section className={styles.section} id="independent-work">
      <div className={`${styles.label} fade-up`}>Independent Work</div>
      <div className={`${styles.heading} fade-up delay-1`}>
        Built and run<br />end to end.
      </div>

      <div className={`${styles.grid} fade-up delay-2`}>
        {/* Featured — Albal Radio */}
        <div className={`${styles.card} ${styles.featured}`}>
          <div className={styles.type}>Featured · Independent Product</div>
          <h3>Albal Radio (عالبال)</h3>
          <div className={styles.metaBlock}>
            <div>
              Founder, developer and operator · 2022 to present · Timeless
              Arabic Music
            </div>
          </div>
          <p>
            A global Arabic oldies radio network built, launched and
            operated single-handedly — streaming infrastructure, four
            independent feeds, native Android and iOS applications in
            Flutter, music curation across the 1980s, 1990s and 2000s, and
            station jingle production. Every layer of the product is my own
            work, from server configuration and app development through to
            programming decisions and audio production. In continuous
            operation since launch, with an audience concentrated across
            diaspora communities and Arabic-speaking home markets.
          </p>

          <div className={styles.metrics}>
            {metrics.map((m) => (
              <div key={m.label} className={styles.stat}>
                <div className={styles.statNumber}>{m.value}</div>
                <div className={styles.statLabel}>{m.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.caption}>
            April 2026 · four feeds combined · 99.92% verified human traffic
            after bot filtering
          </div>

          <p>
            Four feeds serve distinct listener profiles, from loyal daily
            tuners to broad discovery audiences. The fastest-growing feed
            reached 153 countries with 85% growth over a thirty-day window,
            and the engagement-focused feed sustains an average session
            length well beyond typical digital media interaction.
          </p>

          <div className={styles.meta}>
            {albalTags.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Amazon Reviews Analysis */}
        <div className={styles.card}>
          <div className={styles.type}>Course Project · Team</div>
          <h3>Amazon Reviews Analysis: iOS versus Android</h3>
          <div className={styles.metaBlock}>
            <div>
              Big Data Analytics · DA381A · 7.5 credits · Kristianstad
              University · Autumn 2024 · Pass with distinction (5)
            </div>
            <div>
              Co-author: Mohamad Alloush · Examiner: Ali Hassan Sodhro
            </div>
          </div>
          <p>
            Distributed pipeline over a 9GB Amazon review corpus, roughly
            20.8 million rows after cleaning, using Hadoop HDFS and
            PySpark. Owned the feature engineering stage: rating-derived
            sentiment labelling and keyword-based platform categorisation.
            The dataset exceeded available memory, so completing the
            pipeline required tuning Spark driver and executor allocation,
            memory overhead and network timeout after repeated crashes.
            Descriptive analysis without inferential testing; sentiment is
            derived from ratings and platform is inferred from product
            keywords, so results describe review populations rather than
            users.
          </p>
          <div className={styles.meta}>
            {amazonTags.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
