import { AllPosts } from "@/app/components/AllPosts";
import { Box } from "@mui/material";

export default function PostsPage() {
  return (
    <main style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "white",
          zIndex: 1000,
          borderBottom: "5px solid",
          borderColor: "secondary.main",
          pt: 3,
          pl: 6,
          pb: 2,
        }}
      >
        <h1 style={{ marginBottom: 0 }}>All Blog Posts</h1>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          mt: "80px",
          p: 6,
        }}
      >
        <AllPosts />
      </Box>
    </main>

  );
}
