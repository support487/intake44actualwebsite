export type Project = {
  name: string
  status: 'Live' | 'In Progress' | 'Exploring'
  description: string
  href: string
  external?: boolean
  tags?: string[]
}

export const projects: Project[] = [
  {
    name: 'Paywoll',
    status: 'Live',
    description:
      'Create simple, reliable paywalls in minutes. Start free, scale as you grow.',
    href: 'https://www.paywoll.com',
    external: true,
    tags: ['SaaS', 'Payments', 'No-code friendly'],
  },
  {
    name: 'Sales Follow-Ups',
    status: 'In Progress',
    description:
      'An opinionated follow-up assistant so reps never drop the ball. Sequencing that\'s humane, effective, and simple.',
    href: 'mailto:support@intake44.com?subject=Waitlist%20Request%20-%20Sales%20Follow-Ups',
    external: true,
    tags: ['Sales Ops', 'Email', 'Productivity'],
  },
]