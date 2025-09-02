# Intake44 Marketing Site

A clean, fast marketing site for Intake44 built with Next.js 14+ and Tailwind CSS.

## Features

- **Clean Design**: Professional, minimal design with #e6e2de background
- **Responsive**: Works perfectly on all devices
- **Fast**: Static site generation with Next.js
- **TypeScript**: Full type safety
- **SEO Optimized**: Meta tags, OpenGraph, and semantic HTML

## Pages

- **Home** (`/`) - Hero, apps showcase, and company values
- **About** (`/about`) - Founder story and company philosophy
- **Projects** (`/projects`) - Grid of current and upcoming projects
- **Contact** (`/contact`) - Simple contact form with email CTA

## Tech Stack

- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS v3
- React 19

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Set the project root directory (where `package.json` lives)
4. Deploy automatically

### Custom Domain Setup

1. In Vercel dashboard, go to Project Settings → Domains
2. Add `intake44.com` and set as primary
3. Configure DNS settings as shown by Vercel

## Project Structure

```
intake44/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── projects/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Container.tsx
│   ├── AppCard.tsx
│   └── ProjectCard.tsx
├── lib/
│   └── projects.ts        # Projects data
└── public/
    └── logo.svg
```

## Content Updates

### Adding New Projects

Edit `lib/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    name: 'New Project',
    status: 'In Progress',
    description: 'Project description here...',
    href: 'https://example.com',
    external: true,
    tags: ['SaaS', 'Web App'],
  },
  // ... existing projects
]
```

### Updating Contact Email

The contact email `support@intake44.com` is used throughout the site. To update:

1. Search for `support@intake44.com` globally
2. Replace with new email address
3. Update mailto links in pages

## Brand Guidelines

- **Primary Color**: #0f172a (slate-900)
- **Background**: #e6e2de 
- **Typography**: Inter font family
- **Motto**: "Making life better for businesses, one day at a time."

## Support

For questions about the codebase or deployment, contact the development team.