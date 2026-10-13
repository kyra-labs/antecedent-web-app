import styles from "./Header.module.css";
import { ThemeToggle } from "./ThemeToggle";
import { Link, NavLink } from "react-router";

import logo from "../../assets/logo_long_100px.svg";

const today = new Date();

// Small top app bar (m3e-css contract). The masthead keeps its issue line; the destinations are
// text buttons from medium width up, the navigation bar (MobileActionBar) below that.
export function Header() {
  const navClass = ({ isActive }) =>
    `m3e-button m3e-button--size-s ${isActive ? "m3e-button--tonal" : "m3e-button--text"}`;

  return (
    <header className={`m3e-top-app-bar ${styles.header}`}>
      <div className={`m3e-top-app-bar__headline ${styles.headline}`}>
        <Link to="/" className={styles.home} aria-label="Antecedent home">
          <img
            className={styles.wordmark}
            src={logo}
            alt="Antecedent"
            width="400"
            height="48"
          />
        </Link>
        <p className={`m3e-top-app-bar__subtitle ${styles.issueLine}`}>
          <span>Daily edition</span>
          <time dateTime={today.toISOString().slice(0, 10)}>
            {today.toLocaleDateString("en-us", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </p>
      </div>

      <div className={`m3e-top-app-bar__actions ${styles.actions}`}>
        <nav className={styles.nav} aria-label="Primary navigation">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/archive" className={navClass}>
            Archive
          </NavLink>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
