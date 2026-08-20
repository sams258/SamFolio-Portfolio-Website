import styles from "./TechnicalProjects.module.css";

export default function TechnicalProjects() {
  return (
    <section className={styles.section} id="technical">
      <div className={`${styles.label} fade-up`}>Technical Projects</div>

      <div className={`${styles.grid} fade-up delay-1`}>
        <div className={styles.card}>
          <h3>Amazon Reviews Analysis: iOS versus Android</h3>
          <div className={styles.metaLine}>
            Big Data Analytics · DA381A · 7.5 credits · Kristianstad
            University · Autumn 2024 · Pass with distinction (5) ·
            Co-author: Mohamad Alloush · Examiner: Ali Hassan Sodhro
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
        </div>

        <div className={styles.card}>
          <h3>Albal Radio</h3>
          <div className={styles.metaLine}>
            Founder and developer · 2022 to present
          </div>
          <p>
            Live radio application for Android and iOS built in Flutter, in
            continuous operation since launch.
          </p>
        </div>
      </div>
    </section>
  );
}
