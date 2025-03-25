"use client";

import { useRouter } from "next/navigation";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          top: 0,
          backgroundColor: "transparent",
          borderBottom: `0.5px solid ${theme.palette.text.primary}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          px: 3,
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "2.5rem", fontWeight: "bold", color: theme.palette.secondary.main }}
            >
              -- BlogHub --
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: "1rem",
              fontWeight: "600",
              width: "200px",
              textTransform: "none",
              letterSpacing: "2px",
              display: "flex",
              alignItems: "center",
              gap: "8px", // Space between icon and text
            }}
            onClick={() => router.push("/write")}
          >
            <EditIcon fontSize="small" /> Write
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          bgcolor: "transparent",
          p: 4,
          borderRadius: 2,
          textAlign: "center",
          maxWidth: "100%",
        }}
      >
        <Typography
          variant="h3"
          color="primary"
          gutterBottom
          sx={{ fontSize: "3.5rem", fontWeight: "400" }}
        >
          Explore Amazing Blog Posts
        </Typography>
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={() => router.push("/posts")}
          sx={{
            mt: 2,
            bgcolor: theme.palette.secondary.main,
            "&:hover": { bgcolor: theme.palette.primary.dark },
          }}
        >
          View Posts
        </Button>
      </Box>
    </Box>
  );
}
