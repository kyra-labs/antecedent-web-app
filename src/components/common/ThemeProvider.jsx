import { THEME } from "../../constants/theme";
import { useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

// Same behaviour as before: dark by default, the choice kept in localStorage, and the switch
// animated with a View Transition where supported. data-theme selects the generated scheme
// (src/styles/generated/theme.css); index.html applies it before first paint.
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || THEME.DARK;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = (prev) => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);

    if (!document.startViewTransition) {
      setTheme(next);
      return;
    }

    document.startViewTransition(() => {
      setTheme(next);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
