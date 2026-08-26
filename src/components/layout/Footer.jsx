import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.tagline}>Today’s tech news, with the history behind it.</p>
        <nav className={styles.links} aria-label="Footer navigation">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="/about">About</a>
        </nav>
        <p className={styles.credit}>Open source · 2026</p>
      </div>
    </footer>
  );
}
