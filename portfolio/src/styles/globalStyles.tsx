import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    green_light: "#00DF5E",
    green_light_300: "#2bcf0a",
    gray_50: "#828282",
    gray_100: "#333333",
    gray_150: "#212121",
    gray_200: "#171717",

    white_200: "#F9F9F9",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
