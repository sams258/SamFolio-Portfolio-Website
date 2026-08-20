import styles from "./Skills.module.css";

const skillGroups = [
  {
    label: "Research Methods",
    skills: [
      "Requirements Elicitation",
      "Stakeholder Interviews",
      "Co-Creation Workshops",
      "Semi-Structured Interviewing",
      "Affinity Analysis",
      "Experiment & Hypothesis Design",
      "Wizard-of-Oz Studies",
      "Scenario-Based Simulation",
      "Literature Review & Gap Analysis",
      "Bias & Validity Assessment",
      "Design Research Methodology",
      "Technology Adoption Analysis (Davis, Rogers)",
    ],
  },
  {
    label: "Software & Systems",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "SQL",
      "Flutter",
      "React",
      "Next.js",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    label: "Architecture & Data",
    skills: ["UML Modelling", "Hadoop", "PySpark", "Distributed Data Processing"],
  },
  {
    label: "Computer Vision",
    skills: ["OpenCV", "YOLOv8", "Tesseract", "Selenium"],
  },
];

export default function Skills() {
  return (
    <section className={styles.section} id="methods">
      <div className={styles.label}>Capabilities</div>
      <div className={styles.layout}>
        <div className={styles.intro}>
          <div className={styles.heading}>
            Method and<br />machinery.
          </div>
          <p>
            The research position depends on being able to build the systems
            it studies, not just describe them. I pair the methods below
            with the engineering to prototype, instrument and evaluate
            systems directly — including AI-assisted development as an
            established part of the workflow, from pipeline scaffolding to
            literature synthesis.
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
