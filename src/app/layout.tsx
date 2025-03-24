"use client";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <CssBaseline />
          {children}
        </Provider>
      </body>
    </html>
  );
}