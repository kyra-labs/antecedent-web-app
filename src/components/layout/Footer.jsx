import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <hr className="m3e-divider" />
      <div className={styles.inner}>
        <p className={styles.tagline}>
          Today&apos;s tech news, with the history behind it.
        </p>
        <nav className={styles.links} aria-label="Footer navigation">
          <a
            href="https://github.com/kyra-labs/antecedent-web-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="https://kyralabs.dev/" target="_blank" rel="noreferrer">
            Kyra Labs
          </a>
        </nav>
      </div>
    </footer>
  );
}
