import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Intake44 — Making life better for businesses, one day at a time.',
  description: 'A philanthropic product studio building small, high-leverage apps that improve customer experience and business outcomes—without the bloat.',
  openGraph: {
    title: 'Intake44 — Making life better for businesses, one day at a time.',
    description: 'A philanthropic product studio building small, high-leverage apps that improve customer experience and business outcomes—without the bloat.',
    url: 'https://intake44.com',
    siteName: 'Intake44',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intake44 — Making life better for businesses, one day at a time.',
    description: 'A philanthropic product studio building small, high-leverage apps that improve customer experience and business outcomes—without the bloat.',
  },
  metadataBase: new URL('https://intake44.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-[calc(100vh-180px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}