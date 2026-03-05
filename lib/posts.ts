import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const postsDir = path.join(process.cwd(), 'content/posts')

export interface PostMeta {
  slug:    string
  title:   string
  date:    string        // e.g. "2025-06-12"
  tag:     string        // single tag label
  excerpt: string
}

export interface Post extends PostMeta {
  contentHtml: string
  subtitle?:   string
}

// ── Read all posts, sorted newest-first ──────────────────────────────────────
export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))

  const posts = files.map(filename => {
    const slug = filename.replace(/\.md$/, '')
    const raw  = fs.readFileSync(path.join(postsDir, filename), 'utf8')
    const { data } = matter(raw)

    return {
      slug,
      title:   data.title   ?? 'Untitled',
      date:    data.date    ?? '',
      tag:     data.tag     ?? '',
      excerpt: data.excerpt ?? '',
    } as PostMeta
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

// ── Read a single post by slug ───────────────────────────────────────────────
export async function getPost(slug: string): Promise<Post> {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), 'utf8')
  const { data, content } = matter(raw)

  const processed = await remark().use(remarkHtml).process(content)
  const contentHtml = processed.toString()

  return {
    slug,
    title:       data.title    ?? 'Untitled',
    date:        data.date     ?? '',
    tag:         data.tag      ?? '',
    excerpt:     data.excerpt  ?? '',
    subtitle:    data.subtitle ?? '',
    contentHtml,
  }
}

// ── Format date for display ──────────────────────────────────────────────────
export function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr + 'T12:00:00Z')   // noon UTC avoids timezone shifts
  return d.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}
