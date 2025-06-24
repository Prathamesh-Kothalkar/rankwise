import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc";
import  EzoicAd  from "@/components/EzoicAd"

export interface FrontMatter {
  title: string
  description: string
  date: string
  slug: string
  [key: string]: any
}

import type { ReactNode } from "react"

export interface BlogPost {
  frontMatter: FrontMatter
  content: ReactNode
  slug: string
}

const POSTS_PATH = path.join(process.cwd(), "blog/posts")

// Get all slugs (filenames without .mdx)
export function getPostSlugs(): string[] {
    console.log("Fetching post slugs from:", POSTS_PATH)
  return fs.readdirSync(POSTS_PATH).filter((file) => file.endsWith(".mdx"))
}

// Get a single post by slug
export async function getPostBySlug(slug: string | undefined): Promise<BlogPost | null> {
  if (!slug || typeof slug !== "string") return null;

  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(POSTS_PATH, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const compiled = await compileMDX({
  source: content,
  components: { EzoicAd },
  options: {
    parseFrontmatter: false,
  },
});



  return {
    frontMatter: {
      ...(data as FrontMatter),
      slug: realSlug,
    },
    content: compiled.content, 
    slug: realSlug,
  };
}

// Get all posts (for blog list)
export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = getPostSlugs()

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug.replace(/\.mdx$/, ""))
      return post
    })
  )

  return posts
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime())
}