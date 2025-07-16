# COPILOT_INSTRUCTIONS.md

## 1. Project Overview

Provide context so Copilot can tailor suggestions:

**Project Name:** Faizan Azhar's Portfolio

**Tech Stack:** Next.js, React, Tailwind CSS, TypeScript

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
