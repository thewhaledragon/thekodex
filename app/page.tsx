import { getAllPosts, formatDate } from '@/lib/posts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Name',
}

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <>
      <Header />

      <main style={{
        maxWidth: '680px',
        margin: '0 auto',
        padding: '3rem 1.5rem 5rem',
      }}>
        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: '2rem',
          fontWeight: 600,
        }}>
          All Posts
        </p>

        {posts.length === 0 ? (
          <p style={{ color: 'var(--muted)' }}>No posts yet. Add a .md file to content/posts/</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {posts.map((post, i) => (
              <li key={post.slug} style={{
                padding: '1.8rem 0',
                borderBottom: '1px solid var(--border)',
                borderTop: i === 0 ? '1px solid var(--border)' : undefined,
              }}>
                {/* Meta row */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  marginBottom: '0.5rem',
                  flexWrap: 'wrap',
                }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
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

                {/* Title */}
                <h2 style={{
                  fontFamily: "'Lora', serif",
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  lineHeight: 1.35,
                  marginBottom: '0.5rem',
                }}>
                  <Link href={`/blog/${post.slug}`} style={{
                    textDecoration: 'none',
                    color: 'var(--text)',
                  }}>
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                {post.excerpt && (
                  <p style={{
                    fontSize: '0.97rem',
                    color: 'var(--muted)',
                    lineHeight: 1.65,
                    margin: 0,
                  }}>
                    {post.excerpt}
                  </p>
                )}

                {/* Read more */}
                <Link href={`/blog/${post.slug}`} style={{
                  display: 'inline-block',
                  marginTop: '0.75rem',
                  fontSize: '0.85rem',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                }}>
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
