import type { Metadata } from 'next'
import './globals.css'

// ✏️ Change this to your site name and description
export const metadata: Metadata = {
  title: {
    default: 'Your Name',
    template: '%s · Your Name',
  },
  description: 'Writing about things that matter to me.',
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
