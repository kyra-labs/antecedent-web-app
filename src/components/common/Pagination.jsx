import styles from "./Pagination.module.css";

export function Pagination() {
  return (
    <nav className={styles.pagination} aria-label="Archive pages">
      <a className={styles.control} href="/archive?page=1" aria-label="Previous page">Prev</a>
      <a className={styles.page} href="/archive?page=1">1</a>
      <a className={`${styles.page} ${styles.current}`} href="/archive?page=2" aria-current="page">2</a>
      <a className={styles.page} href="/archive?page=3">3</a>
      <a className={styles.control} href="/archive?page=3" aria-label="Next page">Next</a>
    </nav>
  );
}
