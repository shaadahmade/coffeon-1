const baseUrl = process.env.WORDPRESS_API_URL;

export async function getWordPressPosts() {
  if (!baseUrl) {
    console.warn("⚠️ WORDPRESS_API_URL is not defined, returning empty posts array");
    return [];
  }

  try {
    const res = await fetch(
      `${baseUrl}/wp-json/wp/v2/posts?_embed`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      console.warn("Failed to fetch posts from WordPress, returning empty array");
      return [];
    }

    return res.json();
  } catch (error) {
    console.warn("Error fetching WordPress posts:", error);
    return [];
  }
}
