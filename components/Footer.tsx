export default function Footer() {
  return (
    <footer className="py-6 px-8 border-t-2 border-offset-shadow bg-page-bg">
      <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-4">
        <p className="text-13 font-medium text-text-primary">
          © 2025 Rishaan Kumar. Built with Next.js.
        </p>
        <p className="text-13 text-text-tertiary">
          This site meets WCAG 2.2 AA standards.
        </p>
      </div>
    </footer>
  )
}
