"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import dynamic from "next/dynamic";
import { CssBaseline, Box } from "@mui/material";
import { ReactNode } from "react";
import Header from "@/app/components/Header";
import { usePathname } from "next/navigation";

const ThemeRegistry = dynamic(() => import("./ThemeRegistry"), { ssr: false });

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showHeader = pathname === "/posts" || pathname === "/write";

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeRegistry>
            <CssBaseline />
            {showHeader && <Header />}
            <Box sx={{ mt: 10 }}>{children}</Box>
            {/* {children} */}
          </ThemeRegistry>
        </Provider>
      </body>
    </html>
  );
}
