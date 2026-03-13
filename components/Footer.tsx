export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      textAlign: 'center',
      padding: '2.2rem 1.5rem',
      fontSize: '0.82rem',
      color: 'var(--muted)',
      fontFamily: "'Lexend', sans-serif",
      letterSpacing: '0.01em',
    }}>
      <p>
        © {new Date().getFullYear()} TheWhaleDragonKodex ·{' '}
        <a
          href="https://github.com/thewhaledragon"
          style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}
        >
          TheWhaleDragon
        </a>
      </p>
    </footer>
  )
}
