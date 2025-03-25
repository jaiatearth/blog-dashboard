"use client";

import { useEffect, useState, useRef } from "react";
import { useGetPostsQuery } from "@/redux/apiDetail";
import { PostGrid } from "./PostGrid";
import { LinearProgress, Grid, Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { Post } from "@/types/types";

export const AllPosts = () => {
  const [page, setPage] = useState(1);
  const [postList, setPostList] = useState<Post[]>([]);
  const loaderRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Fetch posts with lazyloading...
  const { data: posts = [], error, isLoading } = useGetPostsQuery({ page }, { refetchOnMountOrArgChange: true });

  useEffect(() => {
    setPage(1);
    setPostList([]);
  }, [pathname]);

  useEffect(() => {
    if (posts?.length) {
      setPostList((prevPosts) => {
        const newPosts = posts.filter((newPost: Post) => !prevPosts.some((p) => p.id === newPost.id));
        return [...prevPosts, ...newPosts];
      });
    }
  }, [posts]);

  const hasMore = postList.length < 100;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "100px", threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, isLoading]);

  if (error) return <Typography color="error">Error loading posts</Typography>;

  return (
    <Box sx={{ p: 4, pt: 1 }}>
      <Grid container spacing={3}>
        {postList.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <PostGrid post={post} />
          </Grid>
        ))}
      </Grid>

      {/* Show loading for more posts */}
      {hasMore ? (
        <Box ref={loaderRef} textAlign="center" sx={{ mt: 3, p: 2, pb: 2, bgcolor: "#f0f0f0", borderRadius: "8px" }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", color: "primary.main" }}>
            Loading more posts...
          </Typography>
          <LinearProgress sx={{ mt: 1, width: "100px", margin: "0 auto" }} />
        </Box>
      ) : (
          <Box textAlign="center" sx={{ mt: 3, p: 2, pb: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: "bold", color: "secondary.main" }}>
              No more posts to load.
          </Typography>
          </Box>
        )}
    </Box>
  );
};
