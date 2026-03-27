import fs from 'fs'
import path from 'path'
import { cache } from 'react'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'
import { BASE_PATH } from './site'

const postsDir = path.join(process.cwd(), 'content/posts')
const publicPostsDir = path.join(process.cwd(), 'public/post-assets')

type Frontmatter = {
  title?: string
  date?: string
  tag?: string
  excerpt?: string
  subtitle?: string
  coverImage?: string
}

export interface PostMeta {
  slug: string
  title: string
  date: string
  tag: string
  excerpt: string
  coverImage?: string
}

export interface Post extends PostMeta {
  contentHtml: string
  subtitle?: string
}

function isExternalUrl(url: string) {
  return /^(https?:)?\/\//.test(url) || url.startsWith('data:') || url.startsWith('#') || url.startsWith('/')
}

function toSourceAssetPath(assetPath: string) {
  if (assetPath.startsWith('content/posts/')) {
    return path.join(process.cwd(), assetPath)
  }

  return path.join(postsDir, assetPath.replace(/^\.?\//, ''))
}

function copyPostAsset(assetPath: string) {
  if (!assetPath || isExternalUrl(assetPath)) {
    return assetPath
  }

  const normalizedRelativePath = assetPath
    .replace(/^content\/posts\//, '')
    .replace(/^\.?\//, '')

  const sourcePath = toSourceAssetPath(assetPath)
  const targetPath = path.join(publicPostsDir, normalizedRelativePath)

  if (!fs.existsSync(sourcePath)) {
    return assetPath
  }

  fs.mkdirSync(path.dirname(targetPath), { recursive: true })
  fs.copyFileSync(sourcePath, targetPath)

  return `${BASE_PATH}/post-assets/${normalizedRelativePath}`.replace(/\/{2,}/g, '/')
}

function normalizeMarkdownAssetUrls(content: string) {
  return content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, assetPath) => {
    const normalizedAssetPath = copyPostAsset(assetPath.trim())
    return `![${alt}](${normalizedAssetPath})`
  })
}

function buildPostMeta(slug: string, data: Frontmatter): PostMeta {
  return {
    slug,
    title: data.title ?? 'Untitled',
    date: data.date ?? '',
    tag: data.tag ?? '',
    excerpt: data.excerpt ?? '',
    coverImage: data.coverImage ? copyPostAsset(data.coverImage) : undefined,
  }
}

function remarkAssetPlugin() {
  return (tree: any) => {
    visit(tree, 'image', (node: { url?: string }) => {
      if (node.url) {
        node.url = copyPostAsset(node.url)
      }
    })
  }
}

const getAllPostsCached = cache((): PostMeta[] => {
  const files = fs.readdirSync(postsDir).filter(filename => filename.endsWith('.md'))

  const posts = files.map(filename => {
    const slug = filename.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
    const { data } = matter(raw)

    return buildPostMeta(slug, data as Frontmatter)
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
})

const getPostCached = cache(async (slug: string): Promise<Post> => {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), 'utf8')
  const { data, content } = matter(raw)
  const normalizedContent = normalizeMarkdownAssetUrls(content)

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkAssetPlugin)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(normalizedContent)
  const contentHtml = processed.toString()

  return {
    ...buildPostMeta(slug, data as Frontmatter),
    subtitle: (data as Frontmatter).subtitle ?? '',
    contentHtml,
  }
})

export function getAllPosts(): PostMeta[] {
  return getAllPostsCached()
}

export async function getPost(slug: string): Promise<Post> {
  return getPostCached(slug)
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(`${dateStr}T12:00:00Z`)
  return d.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}
