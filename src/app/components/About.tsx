import styles from "./About.module.css";

const pillar1Tags = [
  "Innovation",
  "Entrepreneurship",
  "Digitalization",
  "Social Sustainability",
  "Ethics",
  "Human-Centred Design",
];

const pillar2Tags = [
  "ROS2",
  "Edge AI",
  "Computer Vision",
  "Multi-Agent Systems",
  "Robotics",
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.label}>About</div>
      <div className={styles.heading}>
        Two tracks.<br />One direction.
      </div>
      <div className={styles.grid}>
        <div className={styles.intro}>
          <p>
            I came to technology from a dual background in{" "}
            <strong>business and self-directed engineering</strong>, spending 14
            years building and running digital platforms before returning to
            university in 2022 to formalise and deepen my expertise. Based in
            Skåne, I now work across two parallel tracks — both grounded in the
            same belief that{" "}
            <strong>
              technology only creates value when it fits the human and
              organisational context it lives in.
            </strong>
          </p>
        </div>

        <div className={styles.pillar}>
          <div className={styles.pillarNumber}>01</div>
          <h3>The Strategic Framework</h3>
          <div className={styles.pillarSubtitle}>
            MSc · Innovation for Change in a Digital Society
          </div>
          <p>
            My Master&apos;s at Malmö University builds the <em>why</em> behind
            technology decisions — innovation, entrepreneurship, digitalization,
            and social sustainability. I apply this framework to understand where
            technology creates lasting value and where it falls short.
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
          <h3>The Technical Application</h3>
          <div className={styles.pillarSubtitle}>
            VIP Research Programme · Autonomous Mobility
          </div>
          <p>
            Through the VIP Research Programme, I work on the <em>how</em> —
            applying AI, robotics, and edge computing to real autonomous mobility
            challenges, with a focus on accessibility and social inclusion. The
            work is confidential but the direction is clear: technology that
            adapts to people, not the other way around.
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
