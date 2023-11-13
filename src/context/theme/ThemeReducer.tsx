import { Theme } from "@react-navigation/native";

type ThemeAction = { type: "dark_theme" } | { type: "light_theme" };

export interface ThemeState extends Theme {
  currentTheme: "light" | "dark";
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: "light",
  dark: false,
  dividerColor: "rgba(0,0,0,0.6)",
  colors: {
    primary: "blue",
    background: "white",
    card: "green",
    text: "black",
    border: "black",
    notification: "orange",
  },
};

export const darkTheme: ThemeState = {
  currentTheme: "dark",
  dark: true,
  dividerColor: "rgba(255,255,255,0.6)",
  colors: {
    primary: "white",
    background: "black",
    card: "green",
    text: "white",
    border: "white",
    notification: "orange",
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case "light_theme":
      return { ...lightTheme };
    case "dark_theme":
      return { ...darkTheme };

    default:
      return state;
  }
};
