// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
        <meta name="description" content="Welcome to my portfolio website!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="header">
        <div className="container">
          <h1 className="logo">[Your Name]</h1>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <motion.section
          className="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I&apos;m <span className="highlight">[Your Name]</span>,
              <br />a passionate <span className="highlight">developer</span>.
            </h1>
            <p className="hero-description">
              Creating modern and innovative digital experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/hero-image.png"
              alt="Hero Image"
              width={600}
              height={600}
              priority
            />
          </div>
        </motion.section>

        {/* About Preview Section */}
        <section id="about" className="about">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>About Me</h2>
            <p>
              I’m a software developer specializing in modern web applications,
              with a passion for building user-friendly and accessible designs.
            </p>
          </motion.div>
        </section>

        {/* Projects Highlights */}
        <section id="projects" className="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <motion.div whileHover={{ scale: 1.05 }} className="project-card">
              <Image
                src="/project1.png"
                alt="Project 1"
                width={300}
                height={200}
              />
              <h3>Project Name</h3>
              <p>Short description of the project.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="project-card">
              <Image
                src="/project2.png"
                alt="Project 2"
                width={300}
                height={200}
              />
              <h3>Project Name</h3>
              <p>Short description of the project.</p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 [Your Name]. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com">GitHub</a>
          <a href="https://linkedin.com">LinkedIn</a>
          <a href="mailto:youremail@example.com">Email</a>
        </div>
      </footer>

      <style jsx>{`
        /* Global Styles */
        body {
          margin: 0;
          font-family: "Roboto Flex", sans-serif;
          background-color: #f8f9fa;
          color: #212529;
        }

        .header {
          background-color: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
        }

        .hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #008080, #ffa500);
          color: #fff;
        }

        .highlight {
          color: #ffa500;
        }

        .hero-buttons .btn {
          display: inline-block;
          margin: 0.5rem;
          padding: 0.8rem 1.5rem;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
        }

        .btn-primary {
          background-color: #ffa500;
          color: #fff;
        }

        .btn-secondary {
          background-color: transparent;
          border: 2px solid #ffa500;
          color: #ffa500;
        }
      `}</style>
    </>
  );
}
