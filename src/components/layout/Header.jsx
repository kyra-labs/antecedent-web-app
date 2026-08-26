import styles from "./Header.module.css";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.issueLine}>
          <span>Daily edition</span>
          <time dateTime="2026-08-26">Wednesday, August 26, 2026</time>
        </div>

        <div className={styles.mastheadRow}>
          <a
            href="/"
            className={styles.wordmark}
            aria-label="Tech Context Digest home"
          >
            Antecedent
          </a>
          <ThemeToggle />
        </div>

        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="/" className={styles.navLink} aria-current="page">
            Home
          </a>
          <a href="/archive" className={styles.navLink}>
            Archive
          </a>
        </nav>
      </div>
    </header>
  );
}
