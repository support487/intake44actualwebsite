import Link from 'next/link'
import Container from './Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-300/20 bg-[#e6e2de]">
      <Container>
        <div className="flex flex-col items-center gap-4 py-8 text-center">
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">
              Home
            </Link>
            <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900">
              About
            </Link>
            <Link href="/projects" className="text-sm text-slate-600 hover:text-slate-900">
              Projects
            </Link>
            <Link href="/contact" className="text-sm text-slate-600 hover:text-slate-900">
              Contact
            </Link>
          </nav>
          <p className="text-sm text-slate-600">
            © {currentYear} Intake44. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}