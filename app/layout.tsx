import type { Metadata } from 'next'
import './globals.css'

// ✏️ Change this to your site name and description
export const metadata: Metadata = {
  title: {
    default: 'TheWhaleDragonKodex',
    template: '%s · TheWhaleDragonKodex',
  },
  description: 'Writing about AI x Music.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
