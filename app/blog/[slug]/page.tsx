// File: /app/blog/[slug]/page.tsx

import { getAllPosts, getPostBySlug } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"


export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.frontMatter.title} | Guess My College Blog`,
    description: post.frontMatter.description,
    alternates: {
      canonical: `https://www.guessmycollege.in/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug?: string } }) {
  if (!params?.slug || typeof params.slug !== "string") return notFound()
  const post = await getPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <>
    <Navbar/>
    <article className="prose prose-teal dark:prose-invert mx-auto max-w-3xl px-4 py-16 mt-10">
      <h1 className="text-4xl font-bold">{post.frontMatter.title}</h1>
      <p className="text-gray-500 text-sm mb-8">
        {format(new Date(post.frontMatter.date), "MMMM dd, yyyy")}
      </p>
      {post.content}
    </article>
    </>
  )
}