import styles from "./EmptyState.module.css";

export function EmptyState() {
  return (
    <section className={styles.state}>
      <span className={styles.icon} aria-hidden="true">○</span>
      <div>
        <h2>Nothing here yet</h2>
        <p>Stories will appear here when a digest is published.</p>
      </div>
      <a className={styles.link} href="/archive">Browse the archive</a>
    </section>
  );
}
