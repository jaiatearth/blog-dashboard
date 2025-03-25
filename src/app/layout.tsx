"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import dynamic from "next/dynamic";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

const ThemeRegistry = dynamic(() => import("./ThemeRegistry"), { ssr: false });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeRegistry>
            <CssBaseline />
            {children}
          </ThemeRegistry>
        </Provider>
      </body>
    </html>
  );
}
