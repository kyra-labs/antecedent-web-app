import styles from "./ThemeToggle.module.css";
import { THEME } from "../../constants/theme";

import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <button
      className={styles.toggle}
      type="button"
      aria-label="Switch color theme"
      onClick={() => setTheme()}
    >
      <span
        className={styles.icon}
        aria-hidden="true"
        title={`Switch to ${theme == THEME.DARK ? "Light Theme" : "Dark Theme"}`}
      >
        ◐
      </span>
    </button>
  );
}
