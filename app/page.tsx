import Container from '@/components/Container'
import AppCard from '@/components/AppCard'

export default function HomePage() {
  return (
    <Container>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              Product studio
            </span>
          </div>
          <h1 className="mb-6 text-4xl md:text-6xl font-bold text-slate-900">
            Making life better for businesses, one day at a time.
          </h1>
          <p className="mb-8 max-w-2xl mx-auto text-slate-600">
            A philanthropic product studio building small, high-leverage apps that improve 
            customer experience and business outcomes—without the bloat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.paywoll.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-800 transition"
            >
              Explore Paywoll →
            </a>
            <a
              href="mailto:support@intake44.com?subject=Waitlist%20Request%20-%20Next%20App"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/70 text-slate-900 px-6 py-3 font-medium hover:bg-white/90 transition"
            >
              Join the Next App Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* Our Apps Section */}
      <section className="py-12 border-t border-slate-300/20">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Apps</h2>
          <p className="text-slate-600 max-w-lg mx-auto">
            Tools designed to remove friction and improve outcomes for everyone.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <AppCard
            name="Paywoll"
            status="Live"
            description="Create simple, reliable paywalls in minutes. Start free, scale as you grow."
            href="https://www.paywoll.com"
            external={true}
          />
          <AppCard
            name="Sales Follow-Ups"
            status="Coming Soon"
            description="An opinionated follow-up assistant so reps never drop the ball."
            href="mailto:support@intake44.com?subject=Waitlist%20Request%20-%20Sales%20Follow-Ups"
            external={true}
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 border-t border-slate-300/20">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">What We Believe</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Useful &gt; Flashy</h3>
            <p className="text-slate-600">
              We ship practical value first, focusing on what actually helps your business succeed.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Kind by Design</h3>
            <p className="text-slate-600">
              Our products respect your time, attention, and privacy—built with humanity in mind.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Compounding Good</h3>
            <p className="text-slate-600">
              Better customer experiences create better markets. Small improvements compound.
            </p>
          </div>
        </div>
      </section>
    </Container>
  )
}