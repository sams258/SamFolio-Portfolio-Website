import styles from "./Projects.module.css";

const featuredTags = [
  "Python",
  "YOLOv8",
  "OpenCV",
  "Tesseract",
  "Selenium",
  "Computer Vision",
];
const careRideTags = [
  "Software Architecture",
  "Scenario Simulation",
  "Participatory Design",
  "Autonomous Mobility",
];
const cfEcoTags = [
  "Literature Review",
  "Gap Analysis",
  "Systems Architecture",
  "IoT",
  "Energy Poverty",
];
const vardGuideTags = [
  "Semi-Structured Interviews",
  "Affinity Analysis",
  "MVE Design",
  "Bias Assessment",
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.label}>Research Projects</div>
      <div className={styles.heading}>
        Where the position<br />came from.
      </div>

      <div className={styles.grid}>
        {/* Featured — BSc Degree Project */}
        <div className={`${styles.card} ${styles.featured}`}>
          <div className={styles.type}>Featured · Degree Project</div>
          <h3>
            A Grid-Based Approach to Parsing 2D Screens for Web Interfaces:
            Enhancing UI Component Detection via Spatial Numerical
            Relationships
          </h3>
          <div className={styles.metaBlock}>
            <div>
              Degree Project · DA399E · 15 credits · Kristianstad University
              · Jan–Jun 2025 · Pass with distinction (5)
            </div>
            <div>
              Supervisor: Charlotte Sennersten · Examiner: Craig Lindley ·
              Co-author: Mohamad Alloush
            </div>
          </div>
          <p>
            Built a pipeline to test whether spatial and numerical
            relationships between UI elements, independent of high-level
            object recognition, could support automated parsing of 2D web
            screens. Python pipeline using Selenium and ChromeDriver for
            controlled capture, OpenCV preprocessing, YOLOv8 and Tesseract
            OCR for detection, and a rule-based agent layer that tested
            whether parsed elements were actually clickable, so the score
            reflected interaction feasibility rather than layout structure
            alone. Evaluated on 290 screenshots across e-commerce and media
            domains. Two of five hypotheses failed. Regressing file-based
            compression on variability times density returned R² = 0.0002,
            showing that visual compressibility is largely orthogonal to
            spatial and categorical complexity — a counter-intuitive result
            the examiner identified as the basis for continued work on
            screen perception that is not grounded in high-level objects.
            8×8 grids performed best overall, with grid consistency reaching
            96.3% on e-commerce layouts and 92.1% on media layouts.
            Composite weights were selected by testing five configurations
            against blind rankings from three reviewers, matching human
            judgement on 85% of the sample.
          </p>
          <div className={styles.meta}>
            {featuredTags.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CareRide */}
        <div className={styles.card}>
          <div className={styles.type}>Research Assistant · VIP Programme</div>
          <h3>
            CareRide: Inclusive Modular Autonomous Mobility-on-Demand
          </h3>
          <div className={styles.metaBlock}>
            <div>
              Research Assistant · Vertically Integrated Projects Programme
              · Sustainable Digitalisation Research Centre, Malmö University
              · Oct 2025–Jun 2026
            </div>
            <div>
              Supervisors: Dipak Surie, Turker Tunbis, David Cuartielles
            </div>
          </div>
          <p>
            Sole software engineer on a two-person project team designing an
            autonomous special transport service for elderly users and
            people with disabilities, addressing the cost, availability and
            stigma limitations of existing services such as Färdtjänst.
            Responsible for the software architecture and for building a
            scenario-based simulation environment used to evaluate the
            service with participants. The work was grounded in
            participatory methods run by the team: literature review,
            co-creation workshops, and interviews with users, service
            providers and caregivers. Project internals are under NDA.
          </p>
          <div className={styles.meta}>
            {careRideTags.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CF-ECO */}
        <div className={styles.card}>
          <div className={styles.type}>Course Project · Individual</div>
          <h3>Comfort-First Energy Coach and Optimizer (CF-ECO)</h3>
          <div className={styles.metaBlock}>
            <div>
              Emerging Digital Technologies · DA621E · 15 credits · Malmö
              University · Dec 2025–Feb 2026 · Grade: Excellent (A)
            </div>
            <div>Sole author and presenter · Examiner: Dipak Surie</div>
          </div>
          <p>
            Asked how AI and IoT household energy optimisation can reduce
            energy poverty risk while treating thermal comfort as a hard
            constraint rather than a variable to be traded away. Reviewed
            four literature strands: comfort-constrained optimisation of
            residential energy systems, low-burden energy management that
            minimises behavioural demand on the household, coaching-based
            energy-poverty interventions, and large-scale field evaluations
            of smart home deployment. Identified the gap that technical
            optimisation research and energy-poverty intervention research
            proceed largely in isolation, and proposed a three-layer
            architecture separating sensing and control, prediction and
            optimisation, and human coaching with preference constraints
            and manual override, so that automation operates only where
            enabling infrastructure exists and the household retains
            control where it does not. Positioned explicitly as a
            design-level synthesis from literature review and qualitative
            comparative analysis, not a validated system.
          </p>
          <div className={styles.meta}>
            {cfEcoTags.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Vård Guide */}
        <div className={styles.card}>
          <div className={styles.type}>Course Project · Team</div>
          <h3>Vård Guide: Healthcare Navigation for Newcomers to Sweden</h3>
          <div className={styles.metaBlock}>
            <div>
              Designing and Evaluating Innovation · DA629E · 15 credits ·
              Malmö University · Spring 2026 · Grade: Excellent (A)
            </div>
            <div>With Aldrean Smith · Examiner: Patrik Berander</div>
          </div>
          <p>
            Conducted two semi-structured interviews with newcomers in their
            first year in Sweden, using a behaviour-first protocol that
            excluded hypotheticals and leading questions. Bottom-up
            affinity analysis and interpretive lenses for workarounds,
            contradictions and emotional strain reframed the problem from
            digital exclusion to a first-contact gap: knowing the correct
            healthcare channel does not mean being able to use it at the
            moment of need, given e-ID, language and prerequisite barriers.
            Designed a minimum viable experiment with hypotheses and
            decision thresholds set in advance, then ran four scripted
            scenarios against the prototype, including an emergency case
            verifying that urgent routing suppressed all commercial
            prompts. The runs validated service logic and left the
            behavioural assumptions untested, which was the finding. The
            escalation hypothesis failed on measurement rather than result:
            the design had not distinguished a visible nurse-line option
            from a tapped one, making the construct unmeasurable as
            specified. Documented the fix alongside the study&apos;s biases,
            including untested classifier performance on Arabic, Somali and
            Tigrinya symptom descriptions and the tendency of fake-door
            flows to overstate willingness to pay among users under
            financial pressure.
          </p>
          <div className={styles.meta}>
            {vardGuideTags.map((t) => (
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
      </div>
    </section>
  );
}
