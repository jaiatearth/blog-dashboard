"use client";

import { Card, CardContent, Typography, Button, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";

export const PostGrid = ({
  post,
}: {
  post: { id: number; title: string; author: string; body: string; userId: number };
}) => {
  const router = useRouter();
  const theme = useTheme();
  const getRandomColor = () => {
    return `hsl(${Math.floor(Math.random() * 360)}, 75%, 90%)`;
  };

  return (
    <Card
      sx={{
        height: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-out",
        cursor: "pointer",
        borderRadius: "12px",
        backgroundColor: getRandomColor(),
        "&:hover": {
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
          transform: "scale(1.03)",
          backgroundColor: theme.palette.grey[50],
          border: "5px solid ${theme.palette.secondary.main}",
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, overflow: "hidden", pb: 1, p: 3 }}>

        <Typography
          variant="h5"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "primary.main",
            fontWeight: "600",
          }}
        >
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
            pb: 3,
            pt: 2,
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

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ flexShrink: 0, fontSize: "1rem" }}
        >
          <b>Author:</b> {"User " + post.userId || "Unknown"}
        </Typography>

        <Button
          sx={{
            color: "white",
            fontWeight: "600",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "primary.dark",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
            },
            fontSize: { xs: "10px", sm: "10px", md: "14px" },
            padding: { xs: "1px" },
            px: { xs: 1, sm: 1, md: 1 },
            backgroundColor: "secondary.main",
            borderRadius: "2"
          }}
          onClick={() => router.push(`/posts/${post.id}`)}
        >
          Read More
        </Button>

      </CardContent>
    </Card>
  );
};
