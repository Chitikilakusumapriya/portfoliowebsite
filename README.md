# Kusumapriya Chitikila — Portfolio Website

A premium, modern personal portfolio built with React, Tailwind CSS, Framer Motion, and Lucide Icons.

## Features

- Dark theme with vibrant red accents and glassmorphism design
- Animated hero with typing effect and interactive AI-style avatar
- Floating navbar with active section highlighting
- Particle background, custom cursor, scroll progress indicator
- Page loading animation and smooth scroll transitions
- Fully responsive (desktop, tablet, mobile)
- SEO-optimized structure

## Tech Stack

- **React 19** + TypeScript
- **Vite** — fast build tooling
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — animations and transitions
- **Lucide React** — icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── LoadingScreen.tsx    # Page load animation
│   ├── CustomCursor.tsx     # Custom cursor effects
│   ├── ScrollProgress.tsx   # Top scroll progress bar
│   ├── ParticleBackground.tsx
│   ├── Navbar.tsx           # Floating navigation
│   ├── Hero.tsx             # Hero section with typing
│   ├── Avatar.tsx           # Animated avatar + speech bubble
│   ├── About.tsx
│   ├── Education.tsx        # Timeline design
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.ts         # All portfolio content
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

- **Content**: Edit `src/data/portfolio.ts` for all text, skills, projects, and contact info
- **Resume**: Replace `public/resume.txt` with your actual `resume.pdf` and update the link in `Hero.tsx`
- **Social links**: Update GitHub and LinkedIn URLs in `portfolio.ts`
- **Colors**: Adjust CSS variables in `src/index.css`

## Deployment

Build the project with `npm run build` and deploy the `dist/` folder to:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)

---

Built for internships, placements, and software engineering opportunities.
