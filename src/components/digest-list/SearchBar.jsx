import styles from "./SearchBar.module.css";
import { Icon } from "@kyralabs/m3e-react";

/** Outlined text field built from the library's tokens (m3e-css has no text field yet). */
export function SearchBar({ searchText, handleSearchTextChange }) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>Search archive</span>
      <span className={styles.inputWrap}>
        <Icon name="search" className={styles.icon} />
        <input
          value={searchText}
          onChange={(event) =>
            handleSearchTextChange(event.currentTarget.value)
          }
          className={styles.input}
          type="search"
          placeholder="Search past digests…"
        />
      </span>
      <span className={styles.helper}>Search by headline or date.</span>
    </label>
  );
}
