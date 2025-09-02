import Container from '@/components/Container'
import Image from 'next/image'

export const metadata = {
  title: 'About — Intake44',
  description: 'Learn about Alan James and the philosophy behind Intake44: building practical, philanthropic products for better customer experiences.',
}

export default function AboutPage() {
  return (
    <Container>
      <section className="py-10 md:py-14 max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="inline-block text-xs uppercase tracking-widest text-slate-700/80 mb-2">
            About us
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Building better business tools
          </h1>
        </div>

        <div className="prose max-w-none text-slate-700 space-y-6">
          {/* Founder Section */}
          <div className="bg-white/50 border border-slate-200/50 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <Image
                  src="/AlanJames.jpeg"
                  alt="Alan James, Founder of Intake44"
                  width={80}
                  height={80}
                  className="rounded-full ring-2 ring-slate-200 shadow-sm"
                />
              </div>
              
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Alan James — Founder</h2>
                
                <blockquote className="text-sm italic text-slate-600 mb-4 border-l-2 border-slate-300 pl-4">
                  &ldquo;Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life.&rdquo; — James 1:12
                </blockquote>

                <div className="space-y-4">
                  <p>
                    Alan James has spent 10+ years in sales, partnerships, and customer-facing roles, 
                    seeing firsthand where teams struggle: follow-ups slip, tools feel complex, and 
                    customers don&rsquo;t get the experience they deserve. He builds apps that remove friction 
                    and lift outcomes—for businesses, for customers, and for the wider world.
                  </p>
                  
                  <p>
                    Intake44 is his studio for practical, philanthropic product design: small tools 
                    that do one thing beautifully and compound into better days for everyone who uses them.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Our Philosophy</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white/40 border border-slate-200/50 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-2">Useful &gt; Flashy</h3>
                <p className="text-sm text-slate-600">
                  Ship practical value first. Every feature should solve a real problem people face every day.
                </p>
              </div>
              
              <div className="bg-white/40 border border-slate-200/50 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-2">Kind by Design</h3>
                <p className="text-sm text-slate-600">
                  Products that respect time, attention, and privacy. Technology should serve humanity, not the other way around.
                </p>
              </div>
              
              <div className="bg-white/40 border border-slate-200/50 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-2">Compounding Good</h3>
                <p className="text-sm text-slate-600">
                  Better customer experiences make a better market. Small improvements create lasting positive change.
                </p>
              </div>
            </div>
          </div>

          {/* Why Intake44 Exists */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Why Intake44 Exists</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span>Too many business tools are complex, expensive, and built for the tool maker, not the user.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span>Customer experience suffers when teams use friction-heavy processes and disconnected systems.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span>Small, focused tools that do one thing excellently often beat large, all-in-one platforms.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.paywoll.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition"
            >
              Explore Paywoll →
            </a>
            <a
              href="mailto:support@intake44.com?subject=Waitlist%20Request%20-%20Next%20App"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/70 text-slate-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </section>
    </Container>
  )
}