import { getAllPosts, formatDate } from '@/lib/posts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageIntro from '@/components/PageIntro'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Kodex',
  description: 'Notes on AI.',
}

export const dynamic = 'force-static'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <>
      <Header />

      <main className="page-main">
        <PageIntro
          eyebrow="Writing"
          title="All Posts"
          description="Notes on AI."
        />

        {posts.length === 0 ? (
          <p style={{ color: 'var(--muted)' }}>No posts yet. Add a .md file to content/posts/</p>
        ) : (
          <ul className="post-list">
            {posts.map((post, i) => (
              <li key={post.slug} className="post-list__item">
                {post.coverImage ? (
                  <Link href={`/blog/${post.slug}`} className="post-cover-link" aria-label={`Read ${post.title}`}>
                    <img src={post.coverImage} alt="" className="post-cover-image" />
                  </Link>
                ) : null}

                <div className="post-meta-row">
                  <span className="post-date">
                    {formatDate(post.date)}
                  </span>
                  {post.tag && (
                    <span className="tag-pill">
                      {post.tag}
                    </span>
                  )}
                </div>

                <h2 className="post-list__title">
                  <Link href={`/blog/${post.slug}`} className="post-title-link">
                    {post.title}
                  </Link>
                </h2>

                {post.excerpt && (
                  <p className="post-list__excerpt">
                    {post.excerpt}
                  </p>
                )}

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
