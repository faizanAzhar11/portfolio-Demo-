# Faizan Azhar - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Optimized for Azure Static Web Apps deployment with excellent SEO and performance.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with excellent cross-device compatibility
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Dark/Light Mode**: Theme switching with system preference detection
- **Interactive Animations**: Smooth transitions using Framer Motion
- **Contact Form**: Integration with Formspree for form handling
- **Performance**: Optimized images, code splitting, and fast loading times
- **Accessibility**: ARIA attributes and semantic HTML5

## 📋 Sections

- **Hero**: Introduction with profile image and social links
- **About**: Professional background and achievements
- **Tech Stack**: Skills categorized by technology areas
- **Projects**: Featured projects with detailed descriptions
- **Certifications**: Microsoft certifications and achievements
- **Contact**: Contact form with download resume option

## 🛠️ Installation & Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/faizanAzhar11/portfolio-Demo-.git
   cd portfolio-Demo-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Contact Form** (Optional)
   - The default contact form uses `mailto:` links
   - For form submission to a backend service:
     - Sign up at [Formspree.io](https://formspree.io) or similar service
     - Install: `npm install @formspree/react`
     - Update `components/sections/Contact.tsx` with your form endpoint
     - Or integrate with EmailJS, Netlify Forms, or custom API

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Azure Static Web Apps Deployment

### Prerequisites
- Azure account
- GitHub repository
- Azure Static Web Apps resource

### Automatic Deployment

1. **Create Azure Static Web App**
   - Go to Azure Portal
   - Create a new Static Web App resource
   - Connect to your GitHub repository
   - Set build details:
     - **Source**: GitHub
     - **Build Preset**: Next.js
     - **App location**: `/`
     - **Output location**: `out`

2. **GitHub Actions Setup**
   - The workflow file is already included at `.github/workflows/azure-static-web-apps.yml`
   - GitHub Actions will automatically deploy on push to main branch

3. **Environment Variables** (If needed)
   - Configure any environment variables in Azure Static Web Apps Configuration

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy using Azure CLI**
   ```bash
   az staticwebapp deploy --name your-app-name --resource-group your-rg --source-path ./out
   ```

## 📁 Project Structure

```
portfolio-Demo-/
├── .github/workflows/          # GitHub Actions for Azure deployment
├── app/                        # Next.js 14 App Router
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout with SEO
│   └── page.tsx               # Home page
├── components/                 # React components
│   ├── layout/                # Layout components (Navbar, Footer)
│   ├── sections/              # Page sections (Hero, About, etc.)
│   └── theme-provider.tsx     # Theme context provider
├── public/                     # Static assets
│   ├── faizanpic.jpg          # Profile image
│   └── Resume - Faizan_Azhar_Software_Eng.pdf
├── staticwebapp.config.json    # Azure SWA configuration
├── next.config.js             # Next.js configuration for static export
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Customization

### Updating Content
- **Personal Information**: Update in `app/layout.tsx` for SEO metadata
- **Hero Section**: Modify `components/sections/Hero.tsx`
- **About Section**: Update `components/sections/About.tsx`
- **Projects**: Add/modify projects in `components/sections/Projects.tsx`
- **Tech Stack**: Update technologies in `components/sections/TechStack.tsx`
- **Certifications**: Modify `components/sections/Certifications.tsx`

### Styling
- **Colors**: Update theme colors in `tailwind.config.js`
- **Fonts**: Change fonts in `app/layout.tsx`
- **Components**: Modify component styles in respective files

### Images
- Replace `public/faizanpic.jpg` with your profile image
- Replace `public/Resume - Faizan_Azhar_Software_Eng.pdf` with your resume

## 🔧 Configuration Files

### next.config.js
Configured for static export to work with Azure Static Web Apps:
- `output: 'export'` for static generation
- `trailingSlash: true` for proper routing
- `images: { unoptimized: true }` for static images

### staticwebapp.config.json
Azure Static Web Apps configuration:
- SPA fallback routing
- MIME type definitions
- Security headers

### tailwind.config.js
Tailwind CSS configuration with:
- Dark mode support
- Custom colors and animations
- Responsive design utilities

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🔍 SEO Features

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **JSON-LD**: Structured data for search engines
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Sitemap**: Automatic sitemap generation
- **robots.txt**: Search engine crawler instructions

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js Image component with proper sizing
- **Code Splitting**: Automatic with Next.js App Router
- **Font Optimization**: Google Fonts optimization
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Static Generation**: Pre-rendered HTML for fast loading

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/faizanAzhar11/portfolio-Demo-/issues).

## 📞 Contact

- **Email**: faziazhar1@gmail.com
- **LinkedIn**: [faizanazhar](https://linkedin.com/in/faizanazhar)
- **GitHub**: [faizanAzhar11](https://github.com/faizanAzhar11)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
