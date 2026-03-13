import { getPost, getAllPosts, formatDate } from '@/lib/posts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

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

      <article style={{ maxWidth: '700px', margin: '0 auto', padding: '3.5rem 1.5rem 6rem' }}>

        {/* ── Back link ── */}
        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
          fontSize: '0.8rem',
          fontWeight: 500,
          color: 'var(--muted)',
          textDecoration: 'none',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          marginBottom: '2.5rem',
          padding: '0.4rem 0.8rem',
          borderRadius: '6px',
          border: '1px solid var(--border)',
          background: 'var(--surface)',
          transition: 'border-color 0.18s, color 0.18s',
        }}>
          ← All posts
        </Link>

        {/* ── Post header ── */}
        <header style={{ marginBottom: '2.8rem' }}>
          {/* Meta row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--muted)', fontWeight: 400 }}>
              {formatDate(post.date)}
            </span>
            {post.tag && (
              <span style={{
                fontSize: '0.7rem',
                background: 'var(--tag-bg)',
                color: 'var(--tag-text)',
                padding: '0.2rem 0.65rem',
                borderRadius: '99px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                {post.tag}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Lexend', sans-serif",
            fontSize: 'clamp(1.75rem, 4vw, 2.4rem)',
            fontWeight: 700,
            lineHeight: 1.18,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: '0.6rem',
          }}>
            {post.title}
          </h1>

          {/* Gradient accent bar */}
          <div style={{
            height: '3px',
            width: '3.5rem',
            borderRadius: '99px',
            background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
            marginTop: '1.2rem',
          }} />

          {post.subtitle && (
            <p style={{
              marginTop: '1rem',
              fontSize: '1.1rem',
              color: 'var(--muted)',
              fontStyle: 'italic',
              lineHeight: 1.6,
            }}>
              {post.subtitle}
            </p>
          )}
        </header>

        {/* ── Post body ── */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* ── Footer note ── */}
        <div style={{
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          fontSize: '0.88rem',
          color: 'var(--muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ margin: 0 }}>
            Got thoughts? Reply by email:{' '}
            <a href="mailto:you@example.com" style={{ color: 'var(--accent)', fontWeight: 500 }}>
              you@example.com
            </a>
          </p>
          <Link href="/" style={{
            fontSize: '0.8rem',
            color: 'var(--muted)',
            textDecoration: 'none',
            fontWeight: 500,
          }}>
            ← Back to all posts
          </Link>
        </div>

      </article>

      <Footer />
    </>
  )
}
