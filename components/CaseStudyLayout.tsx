import Link from 'next/link'
import type { ReactNode } from 'react'
import Footer from './Footer'

interface CaseStudyLayoutProps {
  children: ReactNode
}

function BackLink() {
  return (
    <Link
      href="/#work"
      className="inline-flex items-center gap-2 text-14 font-bold text-text-primary border-2 border-offset-shadow rounded-lg px-4 py-2 bg-white min-h-[44px] hover:bg-accent hover:border-accent transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      style={{ boxShadow: '3px 3px 0px #0A0A0A' }}
    >
      ← Back to work
    </Link>
  )
}

export { BackLink }

export default function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return (
    <>
      <div className="max-w-5xl mx-auto px-8 pt-10 pb-4">
        <BackLink />
      </div>
      <article className="max-w-5xl mx-auto px-8 pb-24">
        {children}
      </article>
      <div className="max-w-5xl mx-auto px-8 pb-16">
        <BackLink />
      </div>
      <Footer />
    </>
  )
}
