"use client";

import { useGetPostsQuery } from "@/redux/apiDetail";
import { PostGrid } from "./PostGrid";
import { CircularProgress, Grid } from "@mui/material";

export const AllPosts = () => {
    const { data: posts, error, isLoading } = useGetPostsQuery();

    if (isLoading) return <CircularProgress />;
    if (error) return <p>Error loading posts</p>;

    return (
        <Grid container spacing={2}>
            {posts?.map((post: { id: number; title: string; author: string; body: string }) => (
                <Grid item key={post.id} xs={12} sm={6} md={4}>
                    <PostGrid post={post} />
                </Grid>
            ))}
        </Grid>

    );
};
