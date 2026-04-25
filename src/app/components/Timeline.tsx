import styles from "./Timeline.module.css";

const timelineItems = [
  {
    date: "2025 — Present",
    org: "Malmö University",
    role: "Research Assistant, VIP Programme",
    desc: "Research assistant on a confidential VIP Programme project focused on autonomous mobility for elderly and accessible passengers. Working across AI, robotics, and edge computing systems.",
  },
  {
    date: "2025 — 2027",
    org: "Malmö University",
    role: "MSc Computer Science",
    desc: "Innovation for Change in a Digital Society. Cohort student representative. Focus on innovation, entrepreneurship, digitalization, and social sustainability.",
  },
  {
    date: "2023 — 2024",
    org: "Kristianstad University",
    role: "Teaching Assistant, CS Department",
    desc: "Supported practical sessions for groups up to 60 students. Developed supporting materials and guided hands-on coursework.",
  },
  {
    date: "2022 — 2025",
    org: "Kristianstad University",
    role: "BSc Computer Science — Distinction",
    desc: "Thesis: 'A Grid-Based Approach to Parsing 2D Screens for Web Interfaces.' Graduated with Distinction.",
  },
  {
    date: "2016 — 2021",
    org: "Total Media Cast",
    role: "Digital Media Specialist",
    desc: "Cross-functional team across 4 countries. Grew digital presence to 1M+ followers across 165 countries. Client communication, quality, and international coordination.",
  },
  {
    date: "2012 — 2016",
    org: "LBI Radio",
    role: "Co-founder & Operations Director",
    desc: "Built and ran an online radio network from scratch over 14 years. Full responsibility for technical infrastructure, team coordination, and day-to-day operations.",
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
