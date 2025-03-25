import { notFound } from "next/navigation";
import PostDetail from "@/app/components/PostDetail";

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id?: string }>;
}) {
  const { id } = await params;

  if (!id) return notFound();

  return <PostDetail id={id} />;
}
