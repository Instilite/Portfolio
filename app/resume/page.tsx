import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume — Rishaan Kumar',
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-page-bg flex flex-col items-center justify-start py-16 px-8">
      <div
        className="w-full max-w-3xl rounded-xl overflow-hidden border-2 border-offset-shadow"
        style={{ boxShadow: '6px 6px 0px #0A0A0A' }}
      >
        <Image
          src="/images/Resume.jpeg"
          alt="Rishaan Kumar resume"
          width={1388}
          height={1740}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  )
}
