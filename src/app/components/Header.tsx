"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <AppBar
      elevation={2}
      position="fixed"
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        px: 3,
        backgroundColor: "primary.main",
        mb: 4,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          BlogHub
        </Typography>

        <Box sx={{ display: "flex", gap: 2, fontWeight: "600" }}>
          {pathname !== "/" && (
            <Button color="secondary" component={Link} href="/">
              Home
            </Button>
          )}
          {pathname !== "/posts" && (
            <Button color="secondary" component={Link} href="/posts">
              All Posts
            </Button>
          )}
          {pathname !== "/write" && (
            <Button color="secondary" component={Link} href="/write">
              Write
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}