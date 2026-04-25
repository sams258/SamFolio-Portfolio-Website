import styles from "./Projects.module.css";

const featuredTags = [
  "WhatsApp API",
  "Next.js",
  "Freemium",
  "MVE Validated",
  "Service Design",
];
const project2Tags = [
  "ROS2",
  "Edge AI",
  "Computer Vision",
  "Python",
  "Multi-Agent Systems",
];
const project3Tags = ["Computer Vision", "Python", "UI Analysis", "Research"];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.label}>Selected Work</div>
      <div className={styles.heading}>
        Projects that<br />left a mark.
      </div>

      <div className={styles.grid}>
        {/* Featured */}
        <div className={`${styles.card} ${styles.featured}`}>
          <div className={styles.type}>Featured · Healthcare Innovation</div>
          <h3>Vård Guide</h3>
          <p>
            A project I created with my innovation partner AL. Vård Guide is a WhatsApp-based healthcare navigation tool for newcomers in Sweden
            — no e-ID, no app download, no login required. Built on the insight
            that the crossing point should move to where people already are, not
            the other way around. Validated through fake-door testing and
            Experience Theater. Freemium model with premium unlocking at
            high-stakes moments like prescriptions and official documents.
          </p>
          <div className={styles.meta}>
            {featuredTags.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
          <a
            className={styles.projectLink}
            href="https://samalsub.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            View live prototype →
          </a>
        </div>

        {/* Project 2 */}
        <div className={styles.card}>
          <div className={styles.type}>
            Research · Autonomous Mobility · VIP Programme
          </div>
          <h3>AI Systems for Accessible Transport</h3>
          <p>
            Research assistant on a confidential VIP Programme project at Malmö
            University, applying AI and edge computing to autonomous mobility for
            elderly and accessible passengers. Working across robotics, computer
            vision, and multi-agent system design.
          </p>
          <div className={styles.meta}>
            {project2Tags.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Project 3 */}
        <div className={styles.card}>
          <div className={styles.type}>BSc Thesis · Distinction</div>
          <h3>Grid-Based Screen Parsing for Web Interfaces</h3>
          <p>
            A novel grid-based approach to parsing 2D screen layouts for
            automated web interface analysis. Graduated with Distinction from
            Kristianstad University.
          </p>
          <div className={styles.meta}>
            {project3Tags.map((t) => (
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
