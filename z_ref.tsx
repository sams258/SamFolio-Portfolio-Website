// z_ref.tsx
// Structural/content reference for the academic-profile redesign of samfolio.se.
// Not imported or built into any route — a single-file snapshot of section
// order and copy, kept in sync with src/app/page.tsx and src/app/components/*.
// Design tokens (palette, type) live in src/app/globals.css and are unchanged
// by this redesign; this file documents content and structure only.

export default function ReferencePage() {
  return (
    <>
      {/* Navbar — links: Research, Projects, Dissemination, Methods, Experience, Contact */}
      <nav className="nav">
        <span className="logo">Sam El Saati</span>
        <ul className="links">
          <li>Research</li>
          <li>Projects</li>
          <li>Dissemination</li>
          <li>Methods</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="eyebrow">
          MSc Computer Science · Malmö University · Skåne, Sweden
        </div>
        <h1>
          Systems that know the limits
          <br />
          of their own <em>competence</em>.
        </h1>
        <p>
          I work on systems that adapt within the limits of their own
          competence and hand control back to a person at the boundary of
          it — how they should be elicited, architected and evaluated,
          particularly when the intended users are people the default
          design excludes.
        </p>
        <div className="cta">
          <span>Research → #research</span>
          <span>Get in Touch → #contact</span>
        </div>
      </section>

      {/* Research — the through-line: one position, three domains */}
      <section id="research" className="research">
        <div className="label">Research Position</div>
        <h2>
          One position,
          <br />
          three domains.
        </h2>
        <p>
          The position emerged independently across three projects in three
          domains. My interest is in how such systems should be elicited,
          architected and evaluated, particularly when the intended users
          are people the default design excludes.
        </p>
        <div className="grid">
          <div className="card">
            <div className="domain">Autonomous Transport</div>
            <h3>CareRide</h3>
            <p>
              An autonomous transport service whose decisions escalate to a
              human at the boundary of what the system can safely handle.
            </p>
          </div>
          <div className="card">
            <div className="domain">Household Energy</div>
            <h3>CF-ECO</h3>
            <p>
              Automation operates only where the enabling infrastructure
              exists, and the household retains control where it does not.
            </p>
          </div>
          <div className="card">
            <div className="domain">Healthcare Access</div>
            <h3>Vård Guide</h3>
            <p>
              Non-urgent cases are routed automatically; the system defers
              to a nurse line or emergency services at the boundary of what
              it can safely handle.
            </p>
          </div>
        </div>
        <p className="closing">
          Currently completing an MSc in Computer Science at Malmö
          University — 60 advanced-level credits, four A grades and one B
          in the first year, class representative for the programme.
          Thesis year 2026–27. Seeking a funded PhD position.
        </p>
      </section>

      {/* About — why the long route matters */}
      <section id="about" className="about">
        <div className="label">About</div>
        <h2>
          Why the long
          <br />
          route matters.
        </h2>
        <p>
          BSc Computer Science, Kristianstad University (180 credits,
          degree project graded Pass with distinction); MSc, Malmö
          University; earlier, Business Marketing and Management, Lebanese
          University (approximately 180 ECTS). Before returning to academia
          in 2022, directed digital transformation across international
          markets with cross-functional teams across four countries — the
          reason the exclusion and adoption side of the research interest
          is empirical rather than theoretical.
        </p>
      </section>

      {/* Research Projects */}
      <section id="projects" className="projects">
        <div className="label">Research Projects</div>
        <h2>
          Where the position
          <br />
          came from.
        </h2>

        <article className="project featured">
          <h3>
            A Grid-Based Approach to Parsing 2D Screens for Web Interfaces:
            Enhancing UI Component Detection via Spatial Numerical
            Relationships
          </h3>
          <p className="meta">
            Degree Project · DA399E · 15 credits · Kristianstad University ·
            Jan–Jun 2025 · Pass with distinction (5)
            <br />
            Supervisor: Charlotte Sennersten · Examiner: Craig Lindley ·
            Co-author: Mohamad Alloush
          </p>
        </article>

        <article className="project">
          <h3>CareRide: Inclusive Modular Autonomous Mobility-on-Demand</h3>
          <p className="meta">
            Research Assistant · Vertically Integrated Projects Programme ·
            Sustainable Digitalisation Research Centre, Malmö University ·
            Oct 2025–Jun 2026
            <br />
            Supervisors: Dipak Surie, Turker Tunbis, David Cuartielles
          </p>
          <p className="note">
            NDA-restricted: domain, role and methods only — never internal
            architecture or system specifics.
          </p>
        </article>

        <article className="project">
          <h3>Comfort-First Energy Coach and Optimizer (CF-ECO)</h3>
          <p className="meta">
            Emerging Digital Technologies · DA621E · 15 credits · Malmö
            University · Dec 2025–Feb 2026 · Grade: Excellent (A)
            <br />
            Sole author and presenter · Examiner: Dipak Surie
          </p>
        </article>

        <article className="project">
          <h3>Vård Guide: Healthcare Navigation for Newcomers to Sweden</h3>
          <p className="meta">
            Designing and Evaluating Innovation · DA629E · 15 credits ·
            Malmö University · Spring 2026 · Grade: Excellent (A)
            <br />
            With Aldrean Smith · Examiner: Patrik Berander
          </p>
          <p className="link">Live prototype: samalsub.vercel.app</p>
        </article>
      </section>

      {/* Dissemination & Teaching */}
      <section id="dissemination" className="dissemination">
        <div className="label">Dissemination & Teaching</div>
        <h2>
          Presented and
          <br />
          taught.
        </h2>
        <div className="grid">
          <div>
            <div className="blockLabel">Poster Presentations</div>
            <ul>
              <li>
                &quot;Comfort-First Household Energy Optimization for Energy
                Poverty Mitigation.&quot; Sole-authored poster and
                supplementary report, DA621E poster session, Malmö
                University, 22 January 2026.
              </li>
              <li>
                &quot;Human-Centered AI for Inclusive, Resilient and
                Sustainable Urban Futures.&quot; CareRide contribution,
                co-presented with Nathalie Strindlund. VIP Programme poster
                session, Malmö University, 21 May 2026.
              </li>
            </ul>
          </div>
          <div>
            <div className="blockLabel">Teaching</div>
            <ul>
              <li>
                Teaching Assistant, Kristianstad University, August 2023 to
                July 2024. Mathematics Fundamentals (MA101C, 7.5 credits),
                groups of up to 60 students. Fundamental Programming
                (DA110I, 7.5 credits, Python). Introduction to Computer
                Science (DA100D, 7.5 credits).
              </li>
              <li>
                Class representative for the MSc programme at Malmö
                University, including presenting the programme to bachelor
                cohorts. Private tutoring in mathematics and English to
                adult learners.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Projects */}
      <section id="technical" className="technical">
        <div className="label">Technical Projects</div>
        <article>
          <h3>Amazon Reviews Analysis: iOS versus Android</h3>
          <p className="meta">
            Big Data Analytics · DA381A · 7.5 credits · Kristianstad
            University · Autumn 2024 · Pass with distinction (5) ·
            Co-author: Mohamad Alloush · Examiner: Ali Hassan Sodhro
          </p>
        </article>
        <article>
          <h3>Albal Radio</h3>
          <p className="meta">Founder and developer · 2022 to present</p>
        </article>
      </section>

      {/* Methods (Skills) */}
      <section id="methods" className="methods">
        <div className="label">Capabilities</div>
        <h2>
          Method and
          <br />
          machinery.
        </h2>
        <ul className="groups">
          <li>
            Research Methods — Requirements Elicitation, Stakeholder
            Interviews, Co-Creation Workshops, Semi-Structured Interviewing,
            Affinity Analysis, Experiment &amp; Hypothesis Design,
            Wizard-of-Oz Studies, Scenario-Based Simulation, Literature
            Review &amp; Gap Analysis, Bias &amp; Validity Assessment,
            Design Research Methodology, Technology Adoption Analysis
            (Davis, Rogers)
          </li>
          <li>
            Software &amp; Systems — Python, TypeScript, JavaScript,
            Node.js, SQL, Flutter, React, Next.js, MongoDB, Firebase
          </li>
          <li>
            Architecture &amp; Data — UML Modelling, Hadoop, PySpark,
            Distributed Data Processing
          </li>
          <li>Computer Vision — OpenCV, YOLOv8, Tesseract, Selenium</li>
        </ul>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="timeline">
        <div className="label">Experience & Education</div>
        <h2>
          The long way
          <br />
          around — on purpose.
        </h2>
        <ol>
          <li>2025 — 2027 · Malmö University · MSc Computer Science</li>
          <li>
            Oct 2025 — Jun 2026 · Malmö University · Research Assistant,
            CareRide
          </li>
          <li>
            2022 — 2025 · Kristianstad University · BSc Computer Science,
            Software Development
          </li>
          <li>
            Aug 2023 — Jul 2024 · Kristianstad University · Teaching
            Assistant, Department of Computer Science
          </li>
          <li>2022 — Present · Albal Radio · Founder and developer</li>
          <li>
            1998 — 2001 · Lebanese University · Business Marketing and
            Management
          </li>
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>
          Let&apos;s talk
          <br />
          research.
        </h2>
        <p>
          I&apos;m seeking a funded PhD position in self-adaptive systems,
          human-in-the-loop architectures, and the design and evaluation of
          systems for users the default design excludes. I&apos;m glad to
          hear from research groups, potential supervisors, and
          collaborators working on adjacent questions.
        </p>
        <p>
          Full working rights in Sweden — no sponsorship required. Based in
          Eslöv, Skåne; relocating to Växjö in November 2026.
        </p>
        <p className="languages">
          Arabic (native) · English (professional) · Swedish (beginner, SFI
          level C, in active study)
        </p>
      </section>

      <footer>
        <p>© 2026 Sam El Saati · Skåne, Sweden</p>
      </footer>
    </>
  );
}
