import styles from "./Dissemination.module.css";

export default function Dissemination() {
  return (
    <section className={styles.section} id="dissemination">
      <div className={`${styles.label} fade-up`}>Dissemination & Teaching</div>
      <div className={`${styles.heading} fade-up delay-1`}>
        Presented and<br />taught.
      </div>

      <div className={`${styles.grid} fade-up delay-2`}>
        <div>
          <div className={styles.blockLabel}>Poster Presentations</div>
          <ul className={styles.list}>
            <li>
              <strong>
                &quot;Comfort-First Household Energy Optimization for Energy
                Poverty Mitigation.&quot;
              </strong>{" "}
              Sole-authored poster and supplementary report, DA621E poster
              session, Malmö University, 22 January 2026.
            </li>
            <li>
              <strong>
                &quot;Human-Centered AI for Inclusive, Resilient and
                Sustainable Urban Futures.&quot;
              </strong>{" "}
              CareRide contribution, co-presented with Nathalie Strindlund.
              VIP Programme poster session, Malmö University, 21 May 2026.
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.blockLabel}>Teaching</div>
          <ul className={styles.list}>
            <li>
              <strong>Teaching Assistant</strong>, Kristianstad University,
              August 2023 to July 2024. Mathematics Fundamentals (MA101C,
              7.5 credits), groups of up to 60 students. Fundamental
              Programming (DA110I, 7.5 credits, Python). Introduction to
              Computer Science (DA100D, 7.5 credits).
            </li>
            <li>
              <strong>Class representative</strong> for the MSc programme at
              Malmö University, including presenting the programme to
              bachelor cohorts. Private tutoring in mathematics and English
              to adult learners.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
