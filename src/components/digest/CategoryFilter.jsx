import styles from "./CategoryFilter.module.css";

export function CategoryFilter() {
  return (
    <div className={styles.filters} aria-label="Filter stories by category">
      <button className={`${styles.chip} ${styles.active}`} type="button" aria-pressed="true">All</button>
      <button className={styles.chip} type="button" aria-pressed="false">AI</button>
      <button className={styles.chip} type="button" aria-pressed="false">Hardware</button>
      <button className={styles.chip} type="button" aria-pressed="false">Startups</button>
    </div>
  );
}
