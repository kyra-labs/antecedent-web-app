import styles from "./DateFilter.module.css";
import { DATE_FILTERS } from "../../constants/dateFilters";

export function DateFilter({ dateFilter, handleDateFilterChange }) {
  const isCurrentDateFilter = (filter, value) => filter === value;

  return (
    <div className={styles.filters} aria-label="Filter archive by date">
      <button
        onClick={() => handleDateFilterChange(DATE_FILTERS.THIS_WEEK)}
        className={`${styles.chip} ${isCurrentDateFilter(dateFilter, DATE_FILTERS.THIS_WEEK) ? styles.active : ""}`}
        type="button"
        aria-pressed="true"
      >
        This week
      </button>
      <button
        onClick={() => handleDateFilterChange(DATE_FILTERS.THIS_MONTH)}
        className={`${styles.chip} ${isCurrentDateFilter(dateFilter, DATE_FILTERS.THIS_MONTH) ? styles.active : ""}`}
        type="button"
        aria-pressed="false"
      >
        This month
      </button>
      <button
        onClick={() => handleDateFilterChange(DATE_FILTERS.ALL_TIME)}
        className={`${styles.chip} ${isCurrentDateFilter(dateFilter, DATE_FILTERS.ALL_TIME) ? styles.active : ""}`}
        type="button"
        aria-pressed="false"
      >
        All time
      </button>
    </div>
  );
}
