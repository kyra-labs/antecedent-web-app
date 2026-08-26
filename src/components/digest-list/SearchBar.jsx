import styles from "./SearchBar.module.css";

export function SearchBar() {
  return (
    <label className={styles.field}>
      <span className={styles.label}>Search archive</span>
      <span className={styles.inputWrap}>
        <span className={styles.icon} aria-hidden="true">⌕</span>
        <input className={styles.input} type="search" placeholder="Search past digests…" />
      </span>
      <span className={styles.helper}>Search by headline or date.</span>
    </label>
  );
}
