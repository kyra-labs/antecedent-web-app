import styles from "./DateFilter.module.css";

export function DateFilter() {
  return (
    <div className={styles.filters} aria-label="Filter archive by date">
      <button className={`${styles.chip} ${styles.active}`} type="button" aria-pressed="true">This week</button>
      <button className={styles.chip} type="button" aria-pressed="false">This month</button>
      <button className={styles.chip} type="button" aria-pressed="false">All time</button>
    </div>
  );
}
