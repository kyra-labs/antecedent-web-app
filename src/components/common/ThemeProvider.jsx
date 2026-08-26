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
    setTheme((prevState) => {
      return prevState == THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
