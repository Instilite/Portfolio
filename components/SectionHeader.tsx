interface SectionHeaderProps {
  id: string
  title: string
  badge?: string
}

export default function SectionHeader({ id, title, badge }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b-2 border-offset-shadow pb-4 mb-12">
      <h2
        id={id}
        className="text-28 font-bold text-text-primary uppercase tracking-tight"
      >
        {title}
      </h2>
      {badge && (
        <span className="bg-accent text-text-primary rounded-md px-3 py-1 text-12 font-bold border border-offset-shadow">
          {badge}
        </span>
      )}
    </div>
  )
}
