import { useState } from "react";
import { useAddPostMutation, useGetPostsQuery } from "@/redux/apiDetail";
import {
  Box,
  TextField,
  Button,
  Snackbar,
  Alert,
  AlertColor,
  CircularProgress,
} from "@mui/material";

export const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: "",
    severity: "info",
  });
  const [addPost, { isLoading }] = useAddPostMutation();
  const { data: posts } = useGetPostsQuery({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !body || !author) {
      setSnackbar({ open: true, message: "Please fill in all fields!", severity: "error" });
      return;
    }

    try {
      const newPost = {
        id: posts.length + 1,
        title,
        body,
        author,
        userId: Math.floor(Math.random() * 10),
      };

      await addPost(newPost).unwrap();

      setSnackbar({ open: true, message: "Post added successfully!", severity: "success" });

      setTitle("");
      setBody("");
      setAuthor("");
    } catch (error) {
      setSnackbar({ open: true, message: "Failed to add post", severity: "error" });
      console.error(error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        fullWidth
        required
        multiline
        rows={4}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoading}
        sx={{ height: "50px", fontWeight: "600" }}
      >
        {isLoading ? <CircularProgress size={24} /> : "Add Post"}
      </Button>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
