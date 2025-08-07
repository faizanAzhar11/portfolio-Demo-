# Copilot Instructions for Portfolio Website

## Project Overview

This is a modern, professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, designed for deployment on Azure Static Web Apps. The project follows modern React patterns with App Router architecture and comprehensive SEO optimization.

## Architecture Principles

### Core Technology Stack
- **Framework**: Next.js 14 with App Router (static export for Azure SWA)
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Theme**: next-themes for dark/light mode switching
- **Deployment**: Azure Static Web Apps with GitHub Actions CI/CD

### Project Structure Conventions
```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO meta tags
│   ├── page.tsx           # Home page composition
│   └── globals.css        # Global Tailwind styles
├── components/            # Reusable React components
│   ├── sections/         # Page section components
│   ├── Navbar.tsx        # Navigation with theme toggle
│   ├── Footer.tsx        # Footer with contact links
│   └── ThemeToggle.tsx   # Dark/light mode switcher
├── lib/                  # Utilities and data management
│   ├── data.ts          # Centralized portfolio data with TypeScript interfaces
│   └── utils.ts         # Helper functions and utilities
├── public/              # Static assets (images, resume, favicon)
└── .github/workflows/   # CI/CD automation for Azure deployment
```

## Development Guidelines

### Component Architecture
- **Sections-based approach**: Each page section is a separate component in `components/sections/`
- **Client components**: Use `"use client"` directive for interactive components with animations
- **Motion integration**: Implement Framer Motion for smooth scroll animations and transitions
- **Responsive design**: Follow mobile-first approach with Tailwind responsive utilities

### Data Management
- **Centralized data**: All portfolio content lives in `lib/data.ts` with TypeScript interfaces
- **Type safety**: Define interfaces for PersonalInfo, Experience, Project, Certification, etc.
- **Data structure**: Use arrays for experiences, projects, certifications with unique IDs
- **Content separation**: Keep all personal/professional data separate from components

### Styling Standards
- **Tailwind-first**: Use Tailwind CSS utilities for all styling
- **Custom color scheme**: Primary colors (50-950 scale) defined in tailwind.config.js
- **Dark mode support**: All components must support both light and dark themes
- **Container pattern**: Use `container-custom` class for consistent page width and padding
- **Typography scale**: Consistent heading hierarchy (h1-h6) with responsive sizing

### SEO and Performance
- **Meta optimization**: Comprehensive metadata in layout.tsx including Open Graph and Twitter Cards
- **Static generation**: Use Next.js static export for optimal Azure SWA performance
- **Image optimization**: Use Next.js Image component when possible
- **Structured data**: Implement JSON-LD for rich snippets
- **Core Web Vitals**: Prioritize loading performance and accessibility

## Component Patterns

### Section Component Template
```tsx
"use client"

import { motion } from 'framer-motion'
import { SomeIcon } from 'lucide-react'
import { dataFromLib } from '@/lib/data'

export default function SectionName() {
  return (
    <section id="section-name" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section content */}
        </motion.div>
      </div>
    </section>
  )
}
```

### Animation Standards
- **Initial state**: `opacity: 0, y: 30` for enter animations
- **Viewport once**: Use `viewport={{ once: true }}` to prevent re-triggering
- **Stagger animations**: Use `transition={{ delay: index * 0.1 }}` for lists
- **Duration consistency**: Standard 0.6s duration for most animations

### Responsive Design Patterns
- **Mobile-first**: Start with mobile layout, enhance for larger screens
- **Breakpoint usage**: `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- **Grid layouts**: Use CSS Grid with Tailwind for complex layouts
- **Flexible spacing**: Use responsive padding/margin classes

## Data Structure Guidelines

### Personal Information Schema
```typescript
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  github?: string;
  linkedin?: string;
  website?: string;
}
```

### Experience/Project Structure
- **Unique IDs**: Use format like "company-year" or "project-name"
- **Technology arrays**: List technologies as string arrays for filtering
- **Achievement lists**: Use bullet-point arrays for accomplishments
- **Optional fields**: Mark URLs and images as optional with `?`

### Content Management
- **Real data**: All content in `lib/data.ts` reflects actual professional experience
- **Professional tone**: Maintain formal, achievement-focused language
- **Quantifiable results**: Include metrics and specific accomplishments
- **Current information**: Keep contact details and experience up-to-date

## Azure Deployment Standards

### Static Web App Configuration
- **Output directory**: Use `out/` for Next.js static export
- **Routing**: Configure routes in `staticwebapp.config.json`
- **Build process**: `npm run build` generates static site
- **Environment**: Production-ready configuration with security headers

### CI/CD Pipeline Requirements
- **Node version**: Use Node.js 18 in GitHub Actions
- **Build steps**: Install dependencies → Build → Deploy
- **Secrets management**: Store Azure deployment token in GitHub Secrets
- **Branch protection**: Deploy only from main branch

### Performance Optimization
- **Static generation**: No server-side rendering for Azure SWA compatibility
- **Asset optimization**: Compress images and optimize bundle size
- **Caching strategy**: Leverage Azure CDN for static assets
- **Loading performance**: Implement proper code splitting and lazy loading

## Development Workflow

### When Adding New Sections
1. Create component in `components/sections/`
2. Add data interface and content to `lib/data.ts`
3. Import and use section in `app/page.tsx`
4. Add navigation link to `components/Navbar.tsx`
5. Test responsiveness and dark mode compatibility

### When Updating Content
1. Modify data in `lib/data.ts` only
2. Never hardcode content in components
3. Maintain TypeScript interface compliance
4. Update README.md if structure changes

### When Adding Features
1. Maintain Next.js 14 App Router compatibility
2. Ensure Azure Static Web Apps compatibility (no server-side features)
3. Test dark/light mode functionality
4. Verify mobile responsiveness
5. Check SEO meta tag impacts

## Code Quality Standards

### TypeScript Requirements
- **Strict mode**: Enable all strict TypeScript options
- **Interface definitions**: Define interfaces for all data structures
- **Type imports**: Use `import type` for type-only imports
- **No any types**: Avoid `any`, use proper typing

### Component Standards
- **Single responsibility**: One main purpose per component
- **Props typing**: Define interfaces for all component props
- **Default exports**: Use default exports for page components
- **Named exports**: Use named exports for utility functions

### Accessibility Requirements
- **Semantic HTML**: Use proper HTML5 semantic elements
- **ARIA labels**: Add aria-labels for interactive elements
- **Keyboard navigation**: Ensure all interactive elements are keyboard accessible
- **Color contrast**: Maintain WCAG AA compliance for text contrast

## Error Handling and Debugging

### Common Issues
- **Hydration errors**: Ensure server and client rendering match
- **Theme switching**: Test theme persistence across page reloads
- **Animation conflicts**: Avoid conflicting Framer Motion animations
- **Build errors**: Check Next.js static export compatibility

### Debugging Tools
- **TypeScript**: Use VS Code TypeScript errors for type checking
- **ESLint**: Follow Next.js ESLint configuration
- **Browser DevTools**: Test responsive design and performance
- **Lighthouse**: Regular performance and SEO auditing

## Future Enhancement Guidelines

### Scalability Considerations
- **Content management**: Consider headless CMS for dynamic content
- **Internationalization**: Structure supports future i18n implementation
- **API integration**: Architecture allows for future API connections
- **Performance monitoring**: Ready for analytics integration

### Maintenance Practices
- **Dependency updates**: Regular updates to Next.js and dependencies
- **Security scanning**: Monitor for security vulnerabilities
- **Performance monitoring**: Track Core Web Vitals and user experience
- **Content freshness**: Regular updates to projects and experience

---

When working on this project, prioritize performance, accessibility, and maintainability. Always test changes across different devices and themes before deployment. Follow the established patterns and maintain consistency with the existing codebase architecture.
