import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from "./themeReducer";

export const ThemeContext = createContext();

const initialThemeState = { primary: "color-1", background: "bg-1" };

export const ThemeProvide = ({ Children }) => {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    initialThemeState
  );

  const themeHandler = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName });
  };

  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {Children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to use our theme context

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
