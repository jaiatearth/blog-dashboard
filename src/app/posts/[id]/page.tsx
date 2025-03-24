interface Post {
    id: number;
    title: string;
    body: string;
}

async function getPost(id: string): Promise<Post | null> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) return null;
    return res.json();
}

export default async function PostDetail({
    params,
}: {
    params: { id: string };
}) {
    const post = await getPost(params.id);

    if (!post) {
        return <h1>Post Not Found</h1>;
    }

    return (
        <main style={{ padding: "2rem" }}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </main>
    );
}
