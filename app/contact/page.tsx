import Container from '@/components/Container'

export const metadata = {
  title: 'Contact — Intake44',
  description: 'Get in touch with Intake44. We\'d love to hear from you about partnerships, early access, or general inquiries.',
}

export default function ContactPage() {
  return (
    <Container>
      <section className="py-10 md:py-14 max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <span className="inline-block text-xs uppercase tracking-widest text-slate-700/80 mb-2">
            Get in touch
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Contact Us
          </h1>
        </div>

        <div className="bg-white/50 border border-slate-200/50 rounded-2xl p-8 md:p-10">
          <p className="text-slate-700 mb-6 text-lg leading-relaxed">
            We&rsquo;d love to hear from you. Whether you&rsquo;re interested in early access to our upcoming tools, 
            have feedback on existing products, or want to explore partnership opportunities, 
            we&rsquo;re here to help.
          </p>

          <div className="mb-6">
            <a
              href="mailto:support@intake44.com"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-6 py-3 text-lg font-medium hover:bg-slate-800 transition"
            >
              Email us at support@intake44.com
            </a>
          </div>

          <div className="text-sm text-slate-600 space-y-2">
            <p>Response time: Usually within 24 hours</p>
            <p>For Paywoll support, please email directly from your dashboard</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-300/20">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.paywoll.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/70 text-slate-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
            >
              Visit Paywoll →
            </a>
            <a
              href="mailto:support@intake44.com?subject=Waitlist%20Request%20-%20Sales%20Follow-Ups"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/70 text-slate-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
            >
              Join Sales Follow-Ups Waitlist
            </a>
          </div>
        </div>
      </section>
    </Container>
  )
}