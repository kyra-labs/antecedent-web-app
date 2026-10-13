import styles from "./DateFilter.module.css";
import { ToggleButton } from "@kyralabs/m3e-react";
import { DATE_FILTERS } from "../../constants/dateFilters";

const OPTIONS = [
  { value: DATE_FILTERS.THIS_WEEK, label: "This week" },
  { value: DATE_FILTERS.THIS_MONTH, label: "This month" },
  { value: DATE_FILTERS.ALL_TIME, label: "All time" },
];

/**
 * Single-choice date filter as M3 toggle buttons. aria-pressed now follows the selection (it was
 * hard-coded to "This week"). Pressing the selected one keeps it selected.
 */
export function DateFilter({ dateFilter, handleDateFilterChange }) {
  return (
    <div className={styles.filters} role="group" aria-label="Filter archive by date">
      {OPTIONS.map((option) => (
        <ToggleButton
          key={option.value}
          variant="outlined"
          size="s"
          isSelected={dateFilter === option.value}
          onChange={() => handleDateFilterChange(option.value)}
        >
          {option.label}
        </ToggleButton>
      ))}
    </div>
  );
}
