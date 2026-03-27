'use client'
import Link from 'next/link'
import { PAGE_CONTENT_WIDTH } from '@/lib/site'

export default function Header() {
  return (
    <header className="site-header">
      <div
        className="site-header__inner"
        style={{ maxWidth: PAGE_CONTENT_WIDTH }}
      >
        <Link href="/" className="site-logo">
          The Kodex
        </Link>

        <nav className="site-nav">
        {[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ].map(({ label, href }) => (
          <Link key={href} href={href} className="nav-link">
            {label}
          </Link>
        ))}
        </nav>
      </div>
    </header>
  )
}
