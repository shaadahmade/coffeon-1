"use client";

import { useEffect, useState } from "react";

export default function BlogPostClient({ slug }: { slug: string }) {
  const [post, setPost] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(
          `https://wordpress-fzdqo.wasmer.app/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        if (!res.ok) {
          setError(true);
          return;
        }
        const posts = await res.json();
        if (posts.length === 0) {
          setError(true);
          return;
        }
        setPost(posts[0]);
      } catch {
        setError(true);
      }
    }
    fetchPost();
  }, [slug]);

  if (error) return <div>Post not found</div>;
  if (!post) return <div>Loading...</div>;

  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg";

  return (
    <article className="max-w-3xl mx-auto py-16 px-4">
      <h1
        className="text-4xl font-bold mb-6"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <img src={image} alt={post.title.rendered} className="w-full mb-6 rounded-lg" />
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}
