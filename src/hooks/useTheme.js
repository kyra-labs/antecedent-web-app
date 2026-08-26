import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export const useTheme = () => {
  var themeContext = useContext(ThemeContext);

  return [themeContext.theme, themeContext.toggleTheme];
};
