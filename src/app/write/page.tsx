"use client";

import { NewPostForm } from "./form";
import { Box, Typography } from "@mui/material";

export default function WritePage() {
  return (
    <Box sx={{ p: 4, maxWidth: "600px", mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Add a New Post
      </Typography>
      <NewPostForm />
    </Box>
  );
}
