import { createContext, useEffect, useReducer } from "react";
import {
  themeReducer,
  ThemeState,
  lightTheme,
  darkTheme,
} from "./ThemeReducer";
import { AppState, Appearance } from "react-native";

interface ThemeProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLigTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeProps);

export const ThemeProvider = ({ children }: any) => {
  const [theme, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === "dark" ? darkTheme : lightTheme
  );

  useEffect(() => {
    AppState.addEventListener("change", (status) => {
      if (status === "active") {
        Appearance.getColorScheme() === "light"
          ? setLigthheme()
          : setDarkTheme();
      }
    });
  }, []);

  const setDarkTheme = () => dispatch({ type: "dark_theme" });
  const setLigthheme = () => dispatch({ type: "light_theme" });

  return (
    <ThemeContext.Provider
      value={{ setDarkTheme, setLigTheme: setLigthheme, theme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
