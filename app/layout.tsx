import type { Metadata } from 'next'
import './globals.css'

const basePath = process.env.NODE_ENV === 'production' ? '/TheWhaleDragonKodex' : ''

export const metadata: Metadata = {
  title: {
    default: 'The Kodex',
    template: '%s · The Kodex',
  },
  description: 'My Study Notes on AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={`${basePath}/katex/katex.min.css`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
