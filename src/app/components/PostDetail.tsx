"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { Post } from "../../types/types";

interface PostDetailProps {
  post: Post;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  if (!post) {
    return <Typography variant="h6">Post not found</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 800, margin: "auto", mt: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          By {post.author}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostDetail;
