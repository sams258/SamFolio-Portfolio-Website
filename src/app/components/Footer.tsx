import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2026 <span className={styles.accent}>Sam El Saati</span> · Skåne,
        Sweden
      </p>
      <p>
        Built with <span className={styles.accent}>Next.js</span> · Deployed on
        Vercel
      </p>
    </footer>
  );
}
