import { THEME } from "../../constants/theme";
import { useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || THEME.DARK;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // Check if the browser supports View Transitions
    if (!document.startViewTransition) {
      setTheme((prev) => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
      return;
    }

    // Smoothly animate the React state change!
    document.startViewTransition(() => {
      setTheme((prev) => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
