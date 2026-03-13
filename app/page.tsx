import { getAllPosts, formatDate } from '@/lib/posts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TheWhaleDragonKodex',
  description: 'Writing about AI × Music.',
}

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <>
      <Header />

      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '3.5rem 1.5rem 6rem' }}>

        {/* ── Blog header ── */}
        <div style={{ marginBottom: '3rem' }}>
          <p style={{
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            fontWeight: 600,
            marginBottom: '0.5rem',
          }}>
            Writing
          </p>
          <h1 style={{
            fontFamily: "'Lexend', sans-serif",
            fontSize: '2.6rem',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            lineHeight: 1.1,
            marginBottom: '0.75rem',
          }}>
            All Posts
          </h1>
          <div style={{
            height: '3px',
            width: '3rem',
            borderRadius: '99px',
            background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
          }} />
        </div>

        {/* ── Post list ── */}
        {posts.length === 0 ? (
          <p style={{ color: 'var(--muted)' }}>No posts yet. Add a .md file to content/posts/</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {posts.map((post, i) => (
              <li key={post.slug} style={{
                padding: '2rem 0',
                borderBottom: '1px solid var(--border)',
                borderTop: i === 0 ? '1px solid var(--border)' : undefined,
              }}>
                {/* Meta row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 400 }}>
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
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}>
                      {post.tag}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 style={{
                  fontFamily: "'Lexend', sans-serif",
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  letterSpacing: '-0.01em',
                  marginBottom: '0.5rem',
                }}>
                  <Link href={`/blog/${post.slug}`} className="post-title-link">
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                {post.excerpt && (
                  <p style={{ fontSize: '0.97rem', color: 'var(--muted)', lineHeight: 1.68, margin: 0 }}>
                    {post.excerpt}
                  </p>
                )}

                {/* Read more */}
                <Link href={`/blog/${post.slug}`} className="read-more-link">
                  Read more →
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>

      <Footer />
    </>
  )
}
