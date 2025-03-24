import { notFound } from "next/navigation";

interface Post {
  id: number;
  title: string;
  author: string;
  body: string;
}

async function getPost(id: string): Promise<Post | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  // If ID not found..
  if (!res.ok) return null;

  return res.json();
}

export default async function PostDetail({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) return notFound();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{post.title}</h1>
      <p><strong>Author:</strong> {post.author || "Unknown"}</p>
      <p>{post.body}</p>
    </main>
  );
}
