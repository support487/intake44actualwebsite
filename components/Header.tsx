'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Container from './Container'

export default function Header() {
  const pathname = usePathname()

  const linkClass = (href: string) => {
    const isActive = pathname === href
    return `text-sm font-medium transition-colors hover:text-slate-900 ${
      isActive ? 'text-slate-900' : 'text-slate-600'
    }`
  }

  return (
    <header className="sticky top-0 z-50 bg-[#e6e2de]/95 backdrop-blur border-b border-slate-300/20">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/intake44_logo.png"
              alt="Intake44 Logo"
              width={120}
              height={120}
              className="rounded-md"
            />
            <span className="text-lg font-semibold text-slate-900">Intake44</span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/" className={linkClass('/')}>
              Home
            </Link>
            <Link href="/about" className={linkClass('/about')}>
              About
            </Link>
            <Link href="/projects" className={linkClass('/projects')}>
              Projects
            </Link>
            <Link href="/contact" className={linkClass('/contact')}>
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}