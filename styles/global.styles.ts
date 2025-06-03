// /styles/globalStyles.js
import { StyleSheet } from "react-native";
import { darkTheme } from "../constants/theme";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.background,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: darkTheme.text,
  },
});
