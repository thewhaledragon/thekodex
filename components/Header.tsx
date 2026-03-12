import Link from 'next/link'

export default function Header() {
  return (
    <header style={{
      borderBottom: '1px solid var(--border)',
      padding: '2.2rem 1.5rem 1.8rem',
      textAlign: 'center',
    }}>
      {/* ✏️ Change "Your Name" and the tagline */}
      <Link href="/" style={{
        fontFamily: "'Lora', serif",
        fontSize: '2rem',
        fontWeight: 600,
        color: 'var(--accent)',
        letterSpacing: '-0.5px',
        textDecoration: 'none',
      }}>
        TheWhaleDragonKodex
      </Link>

      <p style={{
        marginTop: '0.4rem',
        fontSize: '0.95rem',
        color: 'var(--muted)',
        fontStyle: 'italic',
      }}>
        Writing about AI x Music.
      </p>

      <nav style={{
        marginTop: '1.1rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1.6rem',
      }}>
        {[
          { label: 'Home',  href: '/'      },
          { label: 'About', href: '/about' },
        ].map(({ label, href }) => (
          <Link key={href} href={href} style={{
            textDecoration: 'none',
            color: 'var(--muted)',
            fontSize: '0.9rem',
            fontWeight: 400,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
