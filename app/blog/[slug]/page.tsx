import { getPost, getAllPosts, formatDate } from '@/lib/posts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

// Tell Next.js which slugs to pre-render at build time
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

// Dynamic page title from frontmatter
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)
  return { title: post.title }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug)

  return (
    <>
      <Header />

      <article style={{
        maxWidth: '680px',
        margin: '0 auto',
        padding: '3.5rem 1.5rem 6rem',
      }}>

        {/* ── Post header ── */}
        <div style={{ marginBottom: '2.8rem' }}>
          <Link href="/" style={{
            display: 'inline-block',
            fontSize: '0.85rem',
            color: 'var(--muted)',
            textDecoration: 'none',
            marginBottom: '1.5rem',
          }}>
            ← All posts
          </Link>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            marginBottom: '0.9rem',
            flexWrap: 'wrap',
          }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
              {formatDate(post.date)}
            </span>
            {post.tag && (
              <span style={{
                fontSize: '0.75rem',
                background: 'var(--tag-bg)',
                color: 'var(--tag-text)',
                padding: '0.15rem 0.6rem',
                borderRadius: '20px',
                fontWeight: 600,
              }}>
                {post.tag}
              </span>
            )}
          </div>

          <h1 style={{
            fontFamily: "'Lora', serif",
            fontSize: '2.1rem',
            fontWeight: 600,
            lineHeight: 1.25,
            letterSpacing: '-0.3px',
            color: 'var(--text)',
          }}>
            {post.title}
          </h1>

          {post.subtitle && (
            <p style={{
              marginTop: '0.75rem',
              fontSize: '1.1rem',
              color: 'var(--muted)',
              fontStyle: 'italic',
            }}>
              {post.subtitle}
            </p>
          )}
        </div>

        {/* ── Divider ── */}
        <hr style={{
          border: 'none',
          borderTop: '1px solid var(--border)',
          margin: '2.5rem 0',
        }} />

        {/* ── Post body ── */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* ── Footer note ── */}
        <div style={{
          marginTop: '3.5rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          fontSize: '0.9rem',
          color: 'var(--muted)',
        }}>
          {/* ✏️ Change your email address here */}
          <p>
            Got thoughts? Reply by email:{' '}
            <a href="mailto:you@example.com" style={{ color: 'var(--accent)' }}>
              you@example.com
            </a>
          </p>
        </div>

      </article>

      <Footer />
    </>
  )
}
