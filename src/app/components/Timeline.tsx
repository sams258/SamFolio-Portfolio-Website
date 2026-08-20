import styles from "./Timeline.module.css";

const timelineItems = [
  {
    date: "2025 — 2027",
    org: "Malmö University",
    role: "MSc Computer Science",
    desc: "Innovation for Change in a Digital Society. 60 advanced-level credits completed. Four A grades and one B in the first year. Class representative for the programme. Thesis year 2026–27.",
  },
  {
    date: "Oct 2025 — Jun 2026",
    org: "Malmö University",
    role: "Research Assistant, CareRide",
    desc: "Vertically Integrated Projects Programme · Sustainable Digitalisation Research Centre.",
  },
  {
    date: "2022 — 2025",
    org: "Kristianstad University",
    role: "BSc Computer Science, Software Development",
    desc: "180 credits, degree completed. Degree project graded Pass with distinction (5).",
  },
  {
    date: "Aug 2023 — Jul 2024",
    org: "Kristianstad University",
    role: "Teaching Assistant, Department of Computer Science",
    desc: "Mathematics Fundamentals (MA101C), Fundamental Programming (DA110I), Introduction to Computer Science (DA100D).",
  },
  {
    date: "2022 — Present",
    org: "Albal Radio",
    role: "Founder, developer and operator",
    desc: "Global Arabic oldies radio network: streaming infrastructure, four feeds, Flutter applications for Android and iOS, music curation and jingle production. 81,600+ monthly listeners across 169 countries.",
  },
  {
    date: "1998 — 2001",
    org: "Lebanese University",
    role: "Business Marketing and Management",
    desc: "Approximately 180 ECTS.",
  },
];

export default function Timeline() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.label}>Experience & Education</div>
      <div className={styles.heading}>
        The long way<br />around — on purpose.
      </div>
      <div className={styles.timeline}>
        {timelineItems.map((item, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.date}>
              <strong>{item.date}</strong>
              {item.org}
            </div>
            <div className={styles.content}>
              <h4>{item.role}</h4>
              <div className={styles.where}>{item.org}</div>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
