# Mr SEO Website

Professional SEO agency website built with Next.js 15, featuring 6 enterprise portfolio case studies and 10 comprehensive SEO blog posts.

## 🚀 Features

- **Next.js 15** with App Router, TypeScript, and Turbopack
- **Responsive Design** with Tailwind CSS
- **Animated UI** using Framer Motion
- **MDX Content Management** for portfolio case studies and blog posts
- **Form Handling** with React Hook Form + Zod validation
- **Email Integration** via Resend API
- **SEO Optimized** with next-seo, JSON-LD structured data, and automated sitemap generation
- **Production Ready** with successful build and deployment configuration

## 📦 Tech Stack

- **Framework:** Next.js 15.1.1
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.x
- **Animations:** Framer Motion
- **Content:** MDX with gray-matter
- **Forms:** React Hook Form + Zod + @hookform/resolvers
- **Email:** Resend
- **Icons:** React Icons
- **SEO:** next-seo + next-sitemap

## 📁 Project Structure

```
seo-business-site/
├── app/                          # Next.js App Router
│   ├── api/contact/             # Contact form API endpoint
│   ├── blog/                    # Blog pages
│   ├── portfolio/               # Portfolio pages
│   ├── contact/                 # Contact page
│   ├── services/                # Services page
│   └── page.tsx                 # Homepage
├── components/
│   ├── forms/ContactForm.tsx    # Contact form
│   ├── layout/                  # Header & Footer
│   ├── sections/Hero.tsx        # Hero with animations
│   └── ui/                      # Reusable UI components
├── content/
│   ├── portfolio/               # 6 MDX case studies
│   └── blog/                    # 10 MDX blog posts
└── lib/
    ├── mdx.ts                   # MDX utilities
    └── seo.ts                   # SEO schemas
```

## 🛠️ Installation

```bash
npm install
cp .env.example .env.local
# Add your RESEND_API_KEY to .env.local
```

## 🚀 Development

```bash
npm run dev
# Open http://localhost:3000
```

## 📦 Build & Deploy

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables: `RESEND_API_KEY`, `SITE_URL`
4. Deploy

## 📧 Email Configuration

1. Sign up for [Resend](https://resend.com) (free: 100 emails/day)
2. Add API key to `.env.local`
3. Update addresses in `/app/api/contact/route.ts`

## 📝 Content Management

### Adding Blog Posts

Create `.mdx` in `/content/blog/`:

```mdx
---
title: "Post Title"
date: "2026-01-06"
description: "Description"
author: "Author"
category: "SEO"
image: "/images/blog/post.jpg"
readTime: "10 min read"
---

Content here...
```

### Adding Portfolio Items

Create `.mdx` in `/content/portfolio/`:

```mdx
---
title: "Project"
client: "Client"
industry: "Industry"
services: ["Service 1", "Service 2"]
date: "2026-01-01"
description: "Description"
metrics:
  - label: "Traffic"
    value: "+187%"
---

Details...
```

## 💰 Total Cost

- **Domain:** $9/year (Cloudflare)
- **Hosting:** $0 (Vercel free)
- **Email:** $0 (Zoho + Resend free)
- **Total:** $9/year

---

Built with Next.js 15
