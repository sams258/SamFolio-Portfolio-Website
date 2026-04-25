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
            Let&apos;s build<br />something real.
          </div>
          <p>
            I&apos;m open to roles, research collaborations, and conversations
            at the intersection of technology strategy and engineering —
            particularly in the Skåne/Öresund region.
          </p>
          <p>Full working rights in Sweden. No sponsorship required.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
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
            Subject
            <input
              className={styles.formInput}
              type="text"
              name="subject"
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
