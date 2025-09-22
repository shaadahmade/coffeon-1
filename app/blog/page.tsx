import Image from "next/image";
import Link from "next/link";
import { getWordPressPosts } from "@/lib/wordpress";
import Footer from "@/components/Footer";
import FloatingImage from "@/components/FloatingImage";

export default async function BlogSection() {
  const posts = await getWordPressPosts();

  return (
    <section className="bg-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <div className="min-h-[50vh] md:min-h-[70vh] flex flex-col justify-center relative">
          <FloatingImage
            src="/cup.png"
            width={200}
            height={200}
            className=" bottom-50 right-5  md:bottom-22 md:right-10 sm:bottom-10 sm:right-10"
            rotate={15}
          />
          <h2 className="text-5xl sm:text-7xl md:text-[16vw] font-extrabold tracking-tight mb-6 mt-16 ">
            BLOG
          </h2>
          <FloatingImage
            src="/cup.png"
            width={200}
            height={200}
            className=" top-5 left-5 sm:top-10 sm:left-10"
            rotate={-15}
          />
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300 max-w-2xl mx-auto mt-6 sm:mt-10 md:mt-20 px-4">
            Go behind the scenes of our brand, ingredients, and the values that
            guide everything we do.
          </p>
        </div>

        {/* Blog grid */}
        <div className="mt-12 mb-12 sm:mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => {
            const image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/next.svg";

            return (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className="rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-xl transition flex flex-col"
              >
                <div className="w-full h-48 sm:h-56 lg:h-64 relative">
                  <Image
                    src={image}
                    alt={post.title.rendered}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 text-left flex-1 flex flex-col">
                  <h3
                    className="text-lg sm:text-xl font-bold mb-2 text-black leading-snug"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <p
                    className="text-gray-600 text-sm sm:text-base flex-1"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
}
