"use client";

import { useGetPostsQuery } from "@/redux/apiDetail";
import { PostGrid } from "./PostGrid";
import { LinearProgress, Grid, Box } from "@mui/material";

interface Post {
  id: number;
  title: string;
  author: string;
  body: string;
  userId: number;
}

export const AllPosts = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery({});

  if (isLoading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100%"
        flexDirection="column"
      >
        <LinearProgress sx={{ width: "50%" }} />
      </Box>
    );
  if (error) return <p>Error loading posts</p>;

  const totalPosts: Post[] = Array.isArray(posts) ? posts : [];

  return (
    <Box sx={{ p: 4, pt: 1 }}>
      <Grid container spacing={3}>
        {totalPosts?.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <PostGrid post={post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
