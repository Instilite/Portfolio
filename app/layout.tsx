import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rishaan Kumar — Product Designer & Computer Engineering',
  description:
    'Portfolio of Rishaan Kumar — Computer Engineering Co-op student at the University of Alberta. Building AI products, autonomous systems, and tools people actually use.',
  openGraph: {
    title: 'Rishaan Kumar — Product Designer',
    description: 'Computer Engineering Co-op student building AI products that ship.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-page-bg text-text-primary font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-accent focus:shadow-md focus:outline-none"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
