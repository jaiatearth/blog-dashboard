"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Nunito } from "next/font/google";
import { ReactNode } from "react";

const nunito = Nunito({ subsets: ["latin"], weight: ["300", "400", "700"] });

const theme = createTheme({
  palette: {
    primary: {
      main: "#0c215e",
    },
    secondary: {
      main: "#fe5000",
    },
    text: {
      primary: "#6c757d",
    },
  },
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
});

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
