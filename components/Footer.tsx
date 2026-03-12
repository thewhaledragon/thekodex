export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      textAlign: 'center',
      padding: '2rem 1.5rem',
      fontSize: '0.85rem',
      color: 'var(--muted)',
    }}>
      {/* ✏️ Change "Your Name" and year */}
      <p>
        © {new Date().getFullYear()} TheWhaleDragonKodex ·{' '}
        <a
          href="https://github.com/thewhaledragon"
          style={{ color: 'var(--accent)', textDecoration: 'none' }}
        >
          TheWhaleDragon
        </a>
      </p>
    </footer>
  )
}
