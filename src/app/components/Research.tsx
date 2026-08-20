import styles from "./Research.module.css";

const positions = [
  {
    domain: "Autonomous Transport",
    title: "CareRide",
    mechanism:
      "An autonomous transport service whose decisions escalate to a human at the boundary of what the system can safely handle.",
  },
  {
    domain: "Household Energy",
    title: "CF-ECO",
    mechanism:
      "Automation operates only where the enabling infrastructure exists, and the household retains control where it does not.",
  },
  {
    domain: "Healthcare Access",
    title: "Vård Guide",
    mechanism:
      "Non-urgent cases are routed automatically; the system defers to a nurse line or emergency services at the boundary of what it can safely handle.",
  },
];

export default function Research() {
  return (
    <section className={styles.section} id="research">
      <div className={`${styles.label} fade-up`}>Research Position</div>
      <div className={`${styles.heading} fade-up delay-1`}>
        One position,<br />three domains.
      </div>
      <p className={`${styles.lead} fade-up delay-2`}>
        The position emerged independently across three projects in three
        domains. My interest is in how such systems should be elicited,
        architected and evaluated, particularly when the intended users are
        people the default design excludes.
      </p>

      <div className={`${styles.grid} fade-up delay-3`}>
        {positions.map((p) => (
          <div key={p.title} className={styles.card}>
            <div className={styles.domain}>{p.domain}</div>
            <h3>{p.title}</h3>
            <p>{p.mechanism}</p>
          </div>
        ))}
      </div>

      <p className={`${styles.closing} fade-up delay-4`}>
        Currently completing an MSc in Computer Science at Malmö University —
        60 advanced-level credits, four A grades and one B in the first
        year, class representative for the programme. Thesis year
        2026–27. Seeking a funded PhD position.
      </p>
    </section>
  );
}
