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

        <Link href="/" style={{ textDecoration: "none" }}>
          <Typography variant="h6" component="div" color="secondary.main" sx={{ cursor: "pointer", fontWeight:"600" }}>
            BlogHub
          </Typography>
        </Link>

        <Box sx={{ display: "flex", gap: 2, fontWeight: "600" }}>
          {pathname !== "/" && (
            <Button color="secondary" component={Link} href="/" 
            sx={{
              textDecoration: "none",
              color: "secondary.main",
              fontWeight: "600",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "white",
              },
            }}>
              Home
            </Button>
          )}

          {pathname !== "/posts" && (
            <Button color="secondary" component={Link} href="/posts"
            sx={{
              textDecoration: "none",
              color: "secondary.main",
              fontWeight: "600",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "white",
              },
            }}>
              All Posts
            </Button>
          )}

          {pathname !== "/write" && (
            <Button color="secondary" component={Link} href="/write"
            sx={{
              textDecoration: "none",
              color: "secondary.main",
              fontWeight: "600",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "white",
              },
            }}>
              Write
            </Button>
          )}
        </Box>

      </Toolbar>
    </AppBar>
  );
}