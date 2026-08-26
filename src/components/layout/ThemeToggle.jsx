import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  return (
    <button className={styles.toggle} type="button" aria-label="Switch color theme">
      <span className={styles.icon} aria-hidden="true">◐</span>
    </button>
  );
}
