// File: /app/blog/page.tsx

import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { format } from "date-fns";
import Head from "next/head";
import Navbar from "@/components/Navbar";

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Head>
        <title>Blog | Guess My College</title>
        <meta
          name="description"
          content="Latest blog posts about college insights, tips, and experiences."
        />
        <link rel="canonical" href="https://www.guessmycollege.in/blog" />
        <script type='text/javascript' src='//pl27070925.profitableratecpm.com/62/08/d9/6208d9d2b2ead70c886b98171c7d98b1.js'></script>
      </Head>

      <Navbar />

      <section className="max-w-5xl mx-auto px-4 py-20 mt-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12">
          From Our Blog
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="group rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold text-teal-700 group-hover:underline">
                  {post.frontMatter.title}
                </h2>
              </Link>

              <p className="text-sm text-gray-500 mt-2 mb-3">
                {format(new Date(post.frontMatter.date), "MMMM dd, yyyy")}
              </p>

              <p className="text-gray-600 line-clamp-3 mb-4">
                {post.frontMatter.description}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-teal-600 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
