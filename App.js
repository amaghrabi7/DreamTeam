import React from "react";
import { StyleSheet } from "react-native";

// Styling
import { ThemeProvider } from "styled-components";

// Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Components
import RootNavigator from "./components/Navigation/index";

// Theme Object
const theme = {
  light: {
    mainColor: "#00BFFF",
    backgroundColor: "white",
    blue: "#191970",
    itemBorder: "#00BFFF",
  },

  dark: {
    mainColor: "white",
    backgroundColor: "#191970",
    blue: "#F5FFFA",
    itemBorder: "#00BFFF",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
