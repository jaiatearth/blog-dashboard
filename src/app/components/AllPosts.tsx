"use client";

import { useGetPostsQuery } from "@/redux/apiDetail";
import { PostGrid } from "./PostGrid";
import { CircularProgress, Grid } from "@mui/material";

interface Post {
  id: number;
  title: string;
  author: string;
  body: string;
}

export const AllPosts = () => {
    const { data, error, isLoading } = useGetPostsQuery();

    if (isLoading) return <CircularProgress />;
    if (error) return <p>Error loading posts</p>;

    const posts: Post[] = Array.isArray(data) ? data : [];

    return (
        <Grid container spacing={2}>
            {posts.map((post) => (
                <Grid item key={post.id} xs={12} sm={6} md={4}>
                    <PostGrid post={post} />
                </Grid>
            ))}
        </Grid>
    );
};
