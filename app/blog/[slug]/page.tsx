// File: /app/blog/[slug]/page.tsx

import { getPostBySlug } from "@/lib/mdx";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";


// Replace with your actual site constants
const SITE_URL = "https://www.guessmycollege.in";
const AUTHOR_NAME = "Guess My College";

export async function generateStaticParams() {
  const posts = await import("@/lib/mdx").then(mod => mod.getAllPosts());
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = await getPostBySlug(params.slug);
  if (!post) return;

  const { title, description, date, slug } = post.frontMatter;
  const ogImage = `${SITE_URL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: `${SITE_URL}/blog/${slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <>
      <Navbar />

      <section id="blog" className="px-4 py-12 max-w-3xl mx-auto mt-10">
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.frontMatter.title,
              datePublished: post.frontMatter.date,
              dateModified: post.frontMatter.date,
              description: post.frontMatter.description,
              url: `${SITE_URL}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: AUTHOR_NAME,
              },
            }),
          }}
        />

        {/* Post Title & Date */}
        <h1 className="text-4xl font-bold mb-2">{post.frontMatter.title}</h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-8">
          {format(new Date(post.frontMatter.date), "MMMM dd, yyyy")}
        </p>

        {/* Back Button */}

        <div className="">
           <div className="back-button">
             <a href="/blog" className="text-blue-500 hover:text-blue-700">
               ← Back to Blog
             </a>
           </div>
        </div>


        {/* MDX Content */}
        <article className="prose dark:prose-invert">
          {post.content}
          <div className="cta-banner mt-12 p-8 bg-blue-900 text-white rounded-lg text-center shadow-lg border border-blue-800 color-black">
  <h3 className="text-2xl font-bold mb-3">Not sure where you stand?</h3>
        <p className="text-lg mb-6">Want to know exactly which college you can get with your specific score?</p>
        <a
          href="https://guessmycollege.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300"
        >
          Try our free AI-powered Guess My College predictor tool 🚀
        </a>
      </div>
    </article >

      
      </section >
    </>
  );
}
