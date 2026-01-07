import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// Configure marked for better formatting
marked.setOptions({
  breaks: false, // Don't convert single \n to <br>, only double \n\n creates new paragraphs
  gfm: true, // GitHub Flavored Markdown
});

const contentDirectory = path.join(process.cwd(), "content");

export interface PortfolioFrontmatter {
  title: string;
  client: string;
  industry: string;
  services: string[];
  date: string;
  description: string;
  image: string;
  logo?: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  description: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

export function getPortfolioItems() {
  const portfolioDir = path.join(contentDirectory, "portfolio");
  const files = fs.readdirSync(portfolioDir);

  const items = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(portfolioDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        frontmatter: data as PortfolioFrontmatter,
      };
    })
    .sort((a, b) => {
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
    });

  return items;
}

export function getPortfolioItem(slug: string) {
  if (!slug) {
    throw new Error("Slug is required");
  }
  const fullPath = path.join(contentDirectory, "portfolio", `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as PortfolioFrontmatter,
    content: marked(content),
  };
}

export function getBlogPosts() {
  const blogDir = path.join(contentDirectory, "blog");
  const files = fs.readdirSync(blogDir);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(blogDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        frontmatter: data as BlogFrontmatter,
      };
    })
    .sort((a, b) => {
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
    });

  return posts;
}

export function getBlogPost(slug: string) {
  if (!slug) {
    throw new Error("Slug is required");
  }
  const fullPath = path.join(contentDirectory, "blog", `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content: marked(content),
  };
}
