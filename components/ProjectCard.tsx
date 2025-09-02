'use client'

import Link from 'next/link'

type Project = {
  name: string
  status: 'Live' | 'In Progress' | 'Exploring'
  description: string
  href: string
  external?: boolean
  tags?: string[]
}

export default function ProjectCard({
  name,
  status,
  description,
  href,
  external = false,
  tags = [],
}: Project) {
  const badgeClasses =
    status === 'Live'
      ? 'bg-green-600 text-white'
      : status === 'In Progress'
      ? 'bg-amber-600 text-white'
      : 'bg-slate-700 text-white'

  const Wrapper = external ? 'a' : Link

  return (
    <div className="rounded-2xl border border-slate-300/60 bg-white/70 shadow-sm p-5 hover:shadow-md transition">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${badgeClasses}`}>
          {status}
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-700">{description}</p>

      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs rounded-full border border-slate-300 bg-white/60 px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4">
        {external ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg border border-slate-900/10 bg-slate-900 text-white px-3 py-2 text-sm hover:opacity-90"
          >
            Visit
          </a>
        ) : (
          <Link
            href={href}
            className="inline-flex items-center rounded-lg border border-slate-900/10 bg-slate-900 text-white px-3 py-2 text-sm hover:opacity-90"
          >
            Open
          </Link>
        )}
      </div>
    </div>
  )
}