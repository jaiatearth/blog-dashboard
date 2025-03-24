import { notFound } from "next/navigation";
interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  interface PostPageProps {
    params: { id: string };
  }
  
  async function getPost(id: string): Promise<Post | null> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) return null;
    return res.json();
  }
  
  export default async function PostDetail({ params }: PostPageProps) {
    const post = await getPost(params.id);
  
    if (!post) return notFound();
  
    return (
      <main style={{ padding: "2rem" }}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    );
  }
  