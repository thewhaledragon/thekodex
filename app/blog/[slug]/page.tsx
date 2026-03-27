import { getPost, getAllPosts, formatDate } from '@/lib/posts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-static'
export const dynamicParams = false

// Tell Next.js which slugs to pre-render at build time
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

// Dynamic page title from frontmatter
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  return { title: post.title }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  return (
    <>
      <Header />

      <article className="page-main page-main--article">
        <Link href="/" className="back-link">
          ← All posts
        </Link>

        <header className="blog-post-header">
          <div className="post-meta-row post-meta-row--spacious">
            <span className="post-date">
              {formatDate(post.date)}
            </span>
            {post.tag && (
              <span className="tag-pill">
                {post.tag}
              </span>
            )}
          </div>

          <h1 className="blog-post-title">{post.title}</h1>
          <div className="page-intro__accent" aria-hidden />

          {post.subtitle && (
            <p className="blog-post-subtitle">
              {post.subtitle}
            </p>
          )}
        </header>

        {post.coverImage ? (
          <div className="blog-cover-frame">
            <img src={post.coverImage} alt="" className="blog-cover-image" />
          </div>
        ) : null}

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="blog-post-footer">
          <p className="blog-post-footer__note">
            Found some mistakes? Contact me:{' '}
            <a href="mailto:thewhaledragon@gmail.com" className="blog-post-footer__link">
              thewhaledragon@gmail.com
            </a>
          </p>
          <Link href="/" className="blog-post-footer__backlink">
            ← Back to all posts
          </Link>
        </div>
      </article>

      <Footer />
    </>
  )
}
