"use client";

import { Card, CardContent, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export const PostGrid = ( { post }: { post: { id: number; title: string; author: string; body: string } } ) => {
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2">{post.body.substring(0, 100)}...</Typography>
        <Button onClick={() => router.push(`/posts/${post.id}`)}>Read More</Button>
      </CardContent>
    </Card>
  );
};