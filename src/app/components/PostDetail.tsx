"use client";

import { useGetPostByIdQuery } from "@/redux/apiDetail";
import { useParams, useRouter } from "next/navigation";
import { Box, Typography, CircularProgress, Container, Paper, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Header from "@/app/components/Header";

export default function PostDetail() {
  const { id } = useParams();
  const { data: post, error, isLoading } = useGetPostByIdQuery(id);
  const router = useRouter();

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );

  if (error) return <Typography color="error">Error loading post</Typography>;
  if (!post) return <Typography>No post found.</Typography>;

  return (
    <>
      <Header />
      <Box sx={{ display: "flex", alignItems: "center", mb: 2, pl: 3 }}>
        <IconButton onClick={() => router.back()} sx={{ mr: 1, color: "primary.main" }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          Back
        </Typography>
      </Box>
      <Container maxWidth="md" sx={{ mt: 4, pt: 5, pb: 3 }}>
        <Paper elevation={3} sx={{ padding: "2rem", borderRadius: "12px" }}>
          <Typography variant="h3" gutterBottom sx={{ color: "primary.main", fontWeight: "700" }}>
            {post.title}
          </Typography>

          <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 2 }}>
            <b>Author:</b> User {post.userId || "Unknown"}
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, color: "black" }}>
            {post.body}
          </Typography>
        </Paper>
      </Container>
    </>
  );
}
