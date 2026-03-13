'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header style={{
      borderBottom: '1px solid var(--border)',
      padding: '1.6rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backdropFilter: 'blur(4px)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(242,248,244,0.92)',
    }}>
      <Link href="/" style={{
        fontFamily: "'Lexend', sans-serif",
        fontSize: '1.25rem',
        fontWeight: 700,
        color: 'var(--accent)',
        letterSpacing: '-0.02em',
        textDecoration: 'none',
      }}>
        TheWhaleDragonKodex
      </Link>

      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
      }}>
        {[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ].map(({ label, href }) => (
          <Link key={href} href={href} style={{
            textDecoration: 'none',
            color: 'var(--muted)',
            fontSize: '0.82rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '0.4rem 0.9rem',
            borderRadius: '6px',
            transition: 'background 0.18s, color 0.18s',
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'var(--surface)'
                ; (e.currentTarget as HTMLElement).style.color = 'var(--accent)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent'
                ; (e.currentTarget as HTMLElement).style.color = 'var(--muted)'
            }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
