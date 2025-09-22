const baseUrl = process.env.WORDPRESS_API_URL;

if (!baseUrl) {
  throw new Error("❌ WORDPRESS_API_URL is not defined in .env.local");
}

export async function getWordPressPosts() {
  const res = await fetch(
    `${baseUrl}/wp-json/wp/v2/posts?_embed`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}
