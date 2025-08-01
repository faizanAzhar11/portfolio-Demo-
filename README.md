# Faizan Azhar - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, deployed on Azure Static Web Apps.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Performance**: Static site generation with excellent Core Web Vitals
- **Accessible**: ARIA attributes and semantic HTML
- **Azure Ready**: Configured for Azure Static Web Apps deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Azure Static Web Apps
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/         # Page sections
│   ├── Navbar.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   └── ThemeToggle.tsx   # Dark/light mode toggle
├── lib/                  # Utilities and data
│   ├── data.ts          # Portfolio data
│   └── utils.ts         # Helper functions
├── public/              # Static assets
│   ├── resume.pdf       # Downloadable resume
│   └── favicon.ico      # Favicon
├── .github/workflows/   # GitHub Actions
└── staticwebapp.config.json # Azure SWA config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/faizanAzhar11/portfolio-Demo-.git
cd portfolio-Demo-
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

### Building for Production

```bash
npm run build
```

This generates a static export in the `out/` directory, ready for deployment.

## 🌐 Deployment to Azure Static Web Apps

### Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/azure-swa-deploy.yml`) that automatically deploys to Azure Static Web Apps when you push to the main branch.

### Setup Steps

1. Create an Azure Static Web App resource
2. Get your deployment token from the Azure portal
3. Add the token as `AZURE_STATIC_WEB_APPS_API_TOKEN` in your GitHub repository secrets
4. Push to the main branch to trigger deployment

### Manual Deployment

You can also deploy manually using the Azure CLI:

```bash
# Install Azure Static Web Apps CLI
npm install -g @azure/static-web-apps-cli

# Deploy
swa deploy ./out --deployment-token <your-token>
```

## 📝 Customization

### Personal Information

Update your personal information in `lib/data.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
}
```

### Adding Projects

Add new projects to the `projects` array in `lib/data.ts`:

```typescript
export const projects = [
  {
    id: "project-id",
    title: "Project Title",
    description: "Project description",
    technologies: ["React", "TypeScript"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
    featured: true
  },
  // ... more projects
]
```

### Styling

The project uses Tailwind CSS with a custom color palette. You can customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

## 📱 Contact Form

The contact form uses a mailto link by default. For a more robust solution, integrate with:

- **Formspree**: Add your Formspree endpoint
- **EmailJS**: Configure EmailJS service
- **Azure Functions**: Create a serverless contact API

## 🔧 Environment Variables

Create a `.env.local` file for development:

```bash
# Add any environment variables you need
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📊 SEO Features

- Meta tags for all pages
- Open Graph and Twitter Card support
- JSON-LD structured data for rich snippets
- Semantic HTML5 structure
- Sitemap generation
- Robot.txt configuration

## 🎯 Performance

- Static site generation for optimal performance
- Image optimization with Next.js Image component
- Bundle analysis and optimization
- Lighthouse score: 95+ across all metrics

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

**Faizan Azhar**
- Email: faziazhar1@gmail.com
- LinkedIn: [linkedin.com/in/faizan-azhar](https://linkedin.com/in/faizan-azhar)
- GitHub: [github.com/faizanAzhar11](https://github.com/faizanAzhar11)

---

Built with ❤️ using Next.js and deployed on Azure Static Web Apps
