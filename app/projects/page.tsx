import Container from '@/components/Container'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'Projects — Intake44',
  description:
    'A running list of what we&rsquo;re building at Intake44: pragmatic, philanthropic products for better customer experiences.',
}

export default function ProjectsPage() {
  return (
    <Container>
      <section className="py-10 md:py-14">
        <div className="mb-6">
          <span className="inline-block text-xs uppercase tracking-widest text-slate-700/80">
            What we&rsquo;re building
          </span>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Projects</h1>
          <p className="mt-3 max-w-2xl text-slate-700">
            Intake44 is a product studio focused on small, high-leverage tools that
            make work kinder and more effective. Here&rsquo;s what&rsquo;s live and what&rsquo;s next.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-700">
          Want early access or to suggest a build?{' '}
          <a
            className="underline decoration-slate-700/40 underline-offset-2 hover:decoration-slate-700"
            href="mailto:support@intake44.com?subject=Project%20Idea%20or%20Early%20Access"
          >
            support@intake44.com
          </a>
        </p>
      </section>
    </Container>
  )
}