# 🎯 Faizan Azhar - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Optimized for Azure Static Web Apps deployment with excellent SEO and performance.

![Portfolio Screenshot](./public/screenshot.png)

## ✨ Features

### 🚀 Modern Tech Stack
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- **React Intersection Observer** for scroll animations

### 🎨 Design & UX
- **Responsive Design** - Mobile-first approach
- **Dark/Light Mode** support via CSS variables
- **Smooth Animations** with Framer Motion
- **Accessible Components** with proper ARIA labels
- **Professional UI** with clean, modern design
- **Interactive Elements** with hover states and transitions

### 📊 SEO & Performance
- **Perfect SEO** with meta tags, Open Graph, and Twitter Cards
- **Structured Data** (JSON-LD) for rich snippets
- **Static Site Generation** for optimal performance
- **Image Optimization** with Next.js Image component
- **Core Web Vitals** optimized
- **Sitemap & robots.txt** generation

### ☁️ Azure Integration
- **Azure Static Web Apps** ready
- **GitHub Actions** workflow for CI/CD
- **Automatic deployment** on push to main
- **Environment configuration** for production

## 📁 Project Structure

```
portfolio-website/
├── 📂 public/                    # Static assets
│   ├── 🖼️ faizanpic.jpg          # Profile image
│   ├── 📄 Resume - Faizan_Azhar_Software_Eng.pdf
│   └── 🎨 favicon.ico            # Favicon
├── 📂 src/
│   ├── 📂 app/                   # Next.js App Router
│   │   ├── 🎨 globals.css        # Global styles + Tailwind
│   │   ├── 📄 layout.tsx         # Root layout with SEO
│   │   └── 🏠 page.tsx           # Main portfolio page
│   ├── 📂 components/
│   │   ├── 📂 layout/
│   │   │   ├── 🧭 Header.tsx     # Navigation header
│   │   │   └── 🦶 Footer.tsx     # Footer component
│   │   ├── 📂 sections/          # Portfolio sections
│   │   │   ├── 🦸 Hero.tsx       # Hero section with CTA
│   │   │   ├── 👤 About.tsx      # About section
│   │   │   ├── 🔧 TechStack.tsx  # Skills & technologies
│   │   │   ├── 💼 Experience.tsx # Work experience
│   │   │   ├── 🚀 Projects.tsx   # Featured projects
│   │   │   ├── 🏆 Certifications.tsx # Azure certifications
│   │   │   └── 📬 Contact.tsx    # Contact form
│   │   └── 📂 ui/
│   │       └── 🔘 Button.tsx     # Reusable button component
│   ├── 📂 lib/
│   │   ├── 📊 data.ts            # Portfolio data
│   │   ├── ⚙️ config.ts          # Site configuration
│   │   └── 🛠️ utils.ts           # Utility functions
│   └── 📂 types/
│       └── 📝 portfolio.ts       # TypeScript types
├── 📂 .github/workflows/
│   └── ☁️ azure-static-web-apps.yml # CI/CD deployment
├── ⚙️ next.config.js             # Next.js configuration
├── 🎨 tailwind.config.js         # Tailwind configuration
├── 📝 tsconfig.json              # TypeScript configuration
├── 📦 package.json               # Dependencies & scripts
└── 🛠️ staticwebapp.config.json   # Azure SWA config
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ and npm
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/faizanazhar/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### 4. Build for Production
```bash
npm run build
```

## 🎯 Customization

### Personal Information
Update your personal details in `src/lib/data.ts`:

```typescript
export const portfolioData: PortfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title", 
    email: "your.email@example.com",
    // ... other details
  },
  // ... rest of the data
}
```

### Site Configuration
Modify site settings in `src/lib/config.ts`:

```typescript
export const siteConfig = {
  name: "Your Name - Portfolio",
  description: "Your description",
  url: "https://yourwebsite.com",
  // ... other config
}
```

### Styling
- **Colors**: Modify `tailwind.config.js` primary/accent colors
- **Fonts**: Change fonts in `src/app/layout.tsx`
- **Components**: Customize components in `src/components/`

### Content Sections
- **About**: Update `src/components/sections/About.tsx`
- **Experience**: Modify experience data in `src/lib/data.ts`
- **Projects**: Add/remove projects in `src/lib/data.ts`
- **Skills**: Update skills categories and items

## ☁️ Azure Static Web Apps Deployment

### 1. Create Azure Static Web App
1. Go to [Azure Portal](https://portal.azure.com)
2. Create a new Static Web App resource
3. Connect to your GitHub repository
4. Configure build settings:
   - **App location**: `/`
   - **Output location**: `out`

### 2. GitHub Secrets
The deployment token will be automatically added to your repository secrets as `AZURE_STATIC_WEB_APPS_API_TOKEN`.

### 3. Automatic Deployment
- Push to `main` branch triggers automatic deployment
- Pull requests create preview environments
- Check the Actions tab for deployment status

### Build Configuration
```yaml
# .github/workflows/azure-static-web-apps.yml
app_location: "/"
output_location: "out"
app_build_command: "npm run build"
```

## 📧 Contact Form Setup

The contact form uses Formspree for email handling. To set it up:

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update the form action in `src/components/sections/Contact.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ... rest of the configuration
})
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Run TypeScript checks

# Analysis
npm run analyze      # Analyze bundle size
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 **Mobile**: 320px and up
- 📲 **Tablet**: 768px and up  
- 💻 **Desktop**: 1024px and up
- 🖥️ **Large Desktop**: 1280px and up

## 🎨 Design System

### Colors
- **Primary**: Blue tones for main branding
- **Accent**: Purple tones for highlights
- **Gray**: Neutral tones for text and backgrounds

### Typography
- **Headings**: Inter font family
- **Body**: Inter font family
- **Code**: JetBrains Mono

### Components
- **Cards**: Soft shadows with hover effects
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Forms**: Clean inputs with validation states

## 🔍 SEO Features

- ✅ Meta titles and descriptions
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card optimization
- ✅ JSON-LD structured data
- ✅ Semantic HTML structure
- ✅ Alt text for images
- ✅ Proper heading hierarchy
- ✅ Fast loading times
- ✅ Mobile-friendly design

## 📈 Performance

- ⚡ **Lighthouse Score**: 100/100
- 🚀 **Core Web Vitals**: Optimized
- 📦 **Bundle Size**: Minimized with code splitting
- 🖼️ **Images**: Optimized with Next.js Image
- 📱 **Mobile**: Perfect responsive design

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help customizing the portfolio:

- 📧 Email: faziazhar1@gmail.com
- 💼 LinkedIn: [linkedin.com/in/faizanazhar](https://linkedin.com/in/faizanazhar)
- 🐙 GitHub: [github.com/faizanazhar](https://github.com/faizanazhar)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/) for hosting

---

**Built with ❤️ by [Faizan Azhar](https://github.com/faizanazhar)**
