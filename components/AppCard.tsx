import Link from 'next/link'

type AppCardProps = {
  name: string
  status: string
  description: string
  href: string
  external?: boolean
}

export default function AppCard({ name, status, description, href, external = false }: AppCardProps) {
  const Wrapper = external ? 'a' : Link

  return (
    <div className="rounded-2xl border border-slate-300/60 bg-white/70 shadow-sm p-6 hover:shadow-md transition">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
        <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700">
          {status}
        </span>
      </div>
      
      <p className="text-slate-700 mb-4">{description}</p>

      <div>
        {external ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition"
          >
            Explore →
          </a>
        ) : (
          <Link
            href={href}
            className="inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition"
          >
            Learn More →
          </Link>
        )}
      </div>
    </div>
  )
}