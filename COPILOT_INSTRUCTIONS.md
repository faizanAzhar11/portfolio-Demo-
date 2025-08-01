# Faizan Azhar Portfolio Website

This is a modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, designed for deployment on Azure Static Web Apps.

## 🏗️ Architecture

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Deployment**: Azure Static Web Apps with GitHub Actions CI/CD
- **SEO**: Complete meta tags, Open Graph, Twitter Cards, JSON-LD

## 📁 Project Structure

```
portfolio/
├── app/                     # Next.js App Router
│   ├── layout.tsx          # Root layout with SEO & theme
│   ├── page.tsx            # Homepage with all sections
│   ├── not-found.tsx       # 404 error page
│   └── globals.css         # Global styles & Tailwind
├── components/             # React components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Hero section with intro
│   │   ├── About.tsx      # About me section
│   │   ├── TechStack.tsx  # Skills and technologies
│   │   ├── Projects.tsx   # Featured projects
│   │   ├── Certifications.tsx # Professional certifications
│   │   └── Contact.tsx    # Contact form & info
│   ├── Navbar.tsx         # Navigation with mobile menu
│   ├── Footer.tsx         # Footer with links
│   ├── ThemeToggle.tsx    # Dark/light mode toggle
│   ├── JsonLd.tsx         # Structured data for SEO
│   └── theme-provider.tsx # Theme context provider
├── lib/                   # Utilities and data
│   ├── data.ts           # All portfolio data (resume info)
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   ├── robots.txt        # SEO robots file
│   ├── manifest.json     # PWA manifest
│   └── resume.pdf        # Downloadable resume
├── .github/workflows/    # GitHub Actions
│   └── azure-swa-deploy.yml # Azure Static Web Apps deployment
└── staticwebapp.config.json # Azure SWA configuration
```

## Content Management

### Personal Information
Edit `lib/data.ts` to update contact details, professional summary, and social media links.

### Experience & Projects
Update the data arrays in `lib/data.ts` for work experience, projects, and certifications.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

Configured for Azure Static Web Apps with automatic GitHub Actions deployment.

---

**Built with ❤️ by Faizan Azhar**

**Purpose:** Showcase skills, projects, certifications, and contact details

**Key Requirements:**
- SEO optimization (meta tags, Open Graph, structured data)
- Responsive, mobile-first design
- Dark/light mode toggle
- Accessibility compliance (ARIA labels, semantic HTML)
- Modular, maintainable code structure

## 2. Custom Instruction Sections

Segment instructions to guide Copilot's code generation.

### 2.1 UI/UX Components
- Create reusable, stateless React components
- Apply Tailwind Utility classes exclusively for styling
- Use BEM-like naming when additional CSS is needed

### 2.2 SEO & Metadata
- Insert appropriate `<meta>` tags in `<Head>` for each page
- Add Open Graph (og:) and Twitter Card tags
- Ensure semantic HTML (`<main>`, `<article>`, `<section>`, etc.)

### 2.3 Performance Optimization
- Lazy-load images and non-critical components using dynamic imports
- Optimize asset delivery (e.g., SVG icons, compressed images)
- Implement code-splitting and route-based chunking

### 2.4 Accessibility (A11y)
- Add aria-label or aria-labelledby to interactive elements
- Ensure color contrast meets WCAG AA standards
- Make all components keyboard-navigable (tabIndex, role)

### 2.5 Code Quality & Best Practices
- Use TypeScript for type safety on props and state
- Keep functions pure and leverage React hooks (useState, useEffect)
- Document complex logic with JSDoc comments
- Write unit tests (e.g., Jest/React Testing Library) before implementation (TDD)

## 3. Prompt Templates

Use inline comment prompts to trigger specific scaffolding:

```typescript
// Copilot: Generate a responsive Navbar component with dark/light mode toggle
const Navbar: React.FC = () => {
  // ...implementation...
};

// Copilot: Add SEO metadata and Open Graph tags for the homepage
<Head>
  {/* Your meta tags here */}
</Head>
```

## 4. Boosting Suggestion Accuracy

Follow these practices based on Ortinau's recommendations:
- Start each feature branch with a detailed issue describing scope and requirements
- Keep naming conventions consistent across components, files, and CSS classes
- Write clear, concise comments outlining expected behavior before coding
- Regularly update README.md and documentation alongside code changes

End of instructions. Ensure to revisit and update this file as project evolves.
