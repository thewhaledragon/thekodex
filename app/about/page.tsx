import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <>
      <Header />

      <main style={{
        maxWidth: '680px',
        margin: '0 auto',
        padding: '3.5rem 1.5rem 6rem',
      }}>
        {/* ✏️ Edit this section to introduce yourself */}
        <h1 style={{
          fontFamily: "'Lora', serif",
          fontSize: '2rem',
          fontWeight: 600,
          marginBottom: '1.8rem',
          color: 'var(--text)',
        }}>
          About
        </h1>

        {[
          `Hi, I'm TheWhaleDragon.`,
          `I write about AI x Music`
        ].map((text, i) => (
          <p key={i} style={{
            marginBottom: '1.4rem',
            fontSize: '1.05rem',
            lineHeight: 1.78,
          }}>
            {text}
          </p>
        ))}

        <p style={{ marginBottom: '1.4rem', fontSize: '1.05rem', lineHeight: 1.78 }}>
          If you love AI x Music, contact me:{' '}
          {/* ✏️ Change your email */}
          <a href="mailto:you@example.com" style={{ color: 'var(--accent)' }}>
            you@example.com
          </a>
        </p>
      </main>

      <Footer />
    </>
  )
}
