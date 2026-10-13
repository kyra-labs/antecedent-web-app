import { Icon, IconToggleButton } from "@kyralabs/m3e-react";
import { THEME } from "../../constants/theme";
import { useTheme } from "../../hooks/useTheme";

/** M3 icon toggle button: pressed while the dark theme is on. */
export function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();
  const isDark = theme === THEME.DARK;

  return (
    <IconToggleButton
      aria-label="Dark theme"
      title={`Switch to ${isDark ? "Light Theme" : "Dark Theme"}`}
      isSelected={isDark}
      onChange={() => toggleTheme()}
    >
      <Icon name={isDark ? "dark_mode" : "light_mode"} />
    </IconToggleButton>
  );
}
