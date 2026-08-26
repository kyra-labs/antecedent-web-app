import styles from "./LoadingSpinner.module.css";

export function LoadingSpinner() {
  return (
    <div className={styles.state} role="status" aria-label="Loading content">
      <span className={styles.spinner} aria-hidden="true" />
    </div>
  );
}
