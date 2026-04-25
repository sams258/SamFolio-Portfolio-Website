import styles from "./Skills.module.css";

const skillGroups = [
  {
    label: "AI & Research",
    skills: [
      "Multi-Agent AI",
      "LLM Integration",
      "Anthropic API",
      "ROS2",
      "YOLOv8",
      "TinyML",
      "Edge AI",
      "Autoware",
    ],
  },
  {
    label: "Engineering",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Flutter",
      "C#",
      "SQL",
    ],
  },
  {
    label: "Data & Infrastructure",
    skills: [
      "MongoDB",
      "Firebase",
      "PostgreSQL",
      "PySpark",
      "Hadoop",
      "Vercel",
      "Linux/Ubuntu",
      "CI/CD",
    ],
  },
  {
    label: "Innovation Methods",
    skills: [
      "Assumption Mapping",
      "Service Blueprints",
      "Journey Maps",
      "HMW Ideation",
      "MVE / Pretotyping",
      "BMC",
      "NABC",
      "PESTLE",
    ],
  },
];

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.label}>Capabilities</div>
      <div className={styles.layout}>
        <div className={styles.intro}>
          <div className={styles.heading}>
            Deep stack.<br />Wider lens.
          </div>
          <p>
            My technical foundation spans the full stack from embedded edge
            systems to cloud-deployed LLM pipelines. What makes it useful is the
            layer above it — knowing which tool to reach for, and why.
          </p>
        </div>
        <div className={styles.groups}>
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div className={styles.groupLabel}>{group.label}</div>
              <div className={styles.pills}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.pill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
