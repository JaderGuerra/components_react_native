import "react-native-gesture-handler";
import React from "react";
import { StackNavigator } from "./src/navigator/StackNavigator";
import { ThemeProvider } from "./src/context/theme/ThemeContext";

export default function App() {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
}

const AppState = ({ children }: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
