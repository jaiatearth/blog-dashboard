"use client";

import { Card, CardContent, Typography, Button, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";

export const PostGrid = ({
  post,
}: {
  post: { id: number; title: string; author: string; body: string; userId: number; };
}) => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderColor: "primary.main",
        borderWidth: "0.5px",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          borderWidth: "8px",
          borderColor: "primary.main",
        },
        cursor: "pointer"
      }}
    >
      <CardContent sx={{ flexGrow: 1, overflow: "hidden", pb: 1 , p: 3}}>
        <Typography variant="h5" sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "primary.main", fontWeight: "600" }}>
          {post.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            whiteSpace: "normal",
            pb: 3
          }}
        >
          {post.body}
        </Typography>
      </CardContent>

      <Divider />

      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
        }}
      >
        <Typography variant="caption" color="text.secondary" sx={{ flexShrink: 0, fontSize: "1rem" }}>
          <b>Author:</b> {"User " + post.userId || "Unknown"}
        </Typography>
        <Button
            sx={{
              color: "secondary.main",
              fontWeight: "600",
              textTransform: "none",
              px: 2,
              "&:hover": { backgroundColor: "primary.dark", color: "white", border: "none" },
              border: `0.5px solid ${theme.palette.secondary.main}`
            }}
            onClick={() => router.push(`/posts/${post.id}`)}
          >
            Read More
        </Button>
      </CardContent>
    </Card>
  );
};
