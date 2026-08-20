"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mdaybjdz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.label}>Contact</div>
      <div className={styles.layout}>
        <div className={styles.copy}>
          <div className={styles.heading}>
            Let&apos;s talk<br />research.
          </div>
          <p>
            I&apos;m seeking a funded PhD position in self-adaptive systems,
            human-in-the-loop architectures, and the design and evaluation
            of systems for users the default design excludes. I&apos;m glad
            to hear from research groups, potential supervisors, and
            collaborators working on adjacent questions.
          </p>
          <p>
            Full working rights in Sweden — no sponsorship required. Based
            in Eslöv, Skåne; relocating to Växjö in November 2026.
          </p>
          <p className={styles.languages}>
            Arabic (native) · English (professional) · Swedish (beginner,
            SFI level C, in active study)
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New message from samfolio.se" />
          <label className={styles.formLabel}>
            Name
            <input
              className={styles.formInput}
              type="text"
              name="name"
              required
              placeholder="Your name"
            />
          </label>
          <label className={styles.formLabel}>
            Email
            <input
              className={styles.formInput}
              type="email"
              name="email"
              required
              placeholder="your@email.com"
            />
          </label>
          <label className={styles.formLabel}>
            Topic
            <input
              className={styles.formInput}
              type="text"
              name="topic"
              required
              placeholder="What's this about?"
            />
          </label>
          <label className={styles.formLabel}>
            Message
            <textarea
              className={styles.formTextarea}
              name="message"
              required
              placeholder="Tell me more..."
            />
          </label>
          <button
            type="submit"
            className={styles.submit}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <div className={`${styles.status} ${styles.success}`}>
              Message sent — I&apos;ll be in touch.
            </div>
          )}
          {status === "error" && (
            <div className={`${styles.status} ${styles.error}`}>
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
