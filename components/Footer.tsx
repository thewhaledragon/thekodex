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
        © {new Date().getFullYear()} Your Name ·{' '}
        <a
          href="https://pages.github.com"
          style={{ color: 'var(--accent)', textDecoration: 'none' }}
        >
          Hosted on GitHub Pages
        </a>
      </p>
    </footer>
  )
}
