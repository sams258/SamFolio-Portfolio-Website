import styles from "./About.module.css";

const pillar1Tags = [
  "Software Development",
  "Degree Project — Pass with Distinction",
  "Business Marketing & Management",
];

const pillar2Tags = [
  "Digital Transformation",
  "Cross-Functional Leadership",
  "International Markets",
  "Technology Adoption",
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.label}>About</div>
      <div className={styles.heading}>
        Why the long<br />route matters.
      </div>
      <div className={styles.grid}>
        <div className={styles.intro}>
          <p>
            My path to computer science research runs through two other
            degrees and fourteen years outside a university. I studied{" "}
            <strong>Business Marketing and Management</strong> at Lebanese
            University before spending over a decade directing digital
            transformation work across international markets, then returned
            to formal study in 2022 — first for a{" "}
            <strong>BSc in Computer Science</strong>, now an{" "}
            <strong>MSc at Malmö University</strong> focused on the systems
            research below. The route was long, but it is why the exclusion
            and adoption side of the work is empirical rather than
            theoretical.
          </p>
        </div>

        <div className={styles.pillar}>
          <div className={styles.pillarNumber}>01</div>
          <h3>Academic Foundations</h3>
          <div className={styles.pillarSubtitle}>
            BSc Computer Science · Kristianstad University
          </div>
          <p>
            180 credits over three years on the Software Development track,
            degree completed in 2025. The degree project — a grid-based
            approach to parsing 2D web interfaces — was graded Pass with
            distinction (5). It followed an earlier degree in Business
            Marketing and Management at Lebanese University, roughly 180
            ECTS, which is where the business and organisational half of the
            research interest started.
          </p>
          <div className={styles.tags}>
            {pillar1Tags.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.pillar}>
          <div className={styles.pillarNumber}>02</div>
          <h3>Returning by Design</h3>
          <div className={styles.pillarSubtitle}>
            14 Years · Four Countries
          </div>
          <p>
            Before returning to university, I spent over a decade directing
            digital transformation for international media brands — leading
            cross-functional teams across four countries, and seeing
            first-hand which systems people actually adopted and which ones
            they quietly worked around. That gap, between what a system is
            designed to do and what excluded users actually do with it, is
            the empirical starting point for the research position above.
          </p>
          <div className={styles.tags}>
            {pillar2Tags.map((t) => (
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
