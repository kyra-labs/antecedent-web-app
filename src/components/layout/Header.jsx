import styles from "./Header.module.css";
import { ThemeToggle } from "./ThemeToggle";
import { NavLink } from "react-router";

import logo from "../../assets/logo_long_100px.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.issueLine}>
          <span>Daily edition</span>
          <time dateTime="2026-08-26">Wednesday, August 26, 2026</time>
        </div>

        <div className={styles.mastheadRow}>
          <img className={styles.wordmark} src={logo} />

          {/* <a
            href="/"
            className={styles.wordmark}
            aria-label="Tech Context Digest home"
          >
            Antecedent
          </a> */}
          <ThemeToggle />
        </div>

        <nav className={styles.nav} aria-label="Primary navigation">
          <NavLink to="/" className={styles.navLink} aria-current="page">
            Home
          </NavLink>
          <NavLink to="/archive" className={styles.navLink}>
            Archive
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
