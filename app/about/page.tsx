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
          `Hi, I'm Your Name. I write about [your topics here — e.g. learning, productivity, creativity, technology].`,
          `A bit about me: [a sentence or two about who you are, what you do, where you're based. Keep it human and direct.]`,
          `I started this blog because [your reason — e.g. "I wanted a place to think in public"].`,
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
          If something resonates, I&apos;d love to hear from you:{' '}
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
