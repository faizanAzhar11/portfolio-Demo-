# Faizan Azhar - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Optimized for Azure Static Web Apps deployment with excellent SEO and performance.

## 🚀 Live Demo

Visit the live website: [https://faizanazhar.dev](https://faizanazhar.dev)

## 🛠️ Built With

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather)
- **Forms**: Formspree
- **Theme**: Next Themes (Dark/Light mode)
- **Deployment**: Azure Static Web Apps

## ✨ Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode**: System preference detection with manual toggle
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Performance**: Static Site Generation (SSG) with optimized images
- **Accessibility**: WCAG compliant with proper ARIA attributes
- **Smooth Animations**: Framer Motion for elegant transitions
- **Contact Form**: Integrated with Formspree for form handling
- **Modern UI/UX**: Clean, professional design with hover effects

## 📂 Project Structure

```
portfolio-Demo-/
├── public/
│   ├── faizanpic.jpg
│   ├── Resume - Faizan_Azhar_Software_Eng.pdf
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── sections/
│       │   ├── hero.tsx
│       │   ├── about.tsx
│       │   ├── tech-stack.tsx
│       │   ├── projects.tsx
│       │   ├── certifications.tsx
│       │   └── contact.tsx
│       ├── navbar.tsx
│       ├── footer.tsx
│       ├── theme-provider.tsx
│       └── json-ld.tsx
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml
├── next.config.js
├── tailwind.config.js
├── package.json
├── tsconfig.json
└── staticwebapp.config.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Azure account (for deployment)
- GitHub account (for CI/CD)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/faizanAzhar11/portfolio-Demo-.git
   cd portfolio-Demo-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Building for Production

```bash
npm run build
```

This generates a static export in the `out/` directory, ready for Azure Static Web Apps deployment.

## 🌐 Deployment

### Azure Static Web Apps

1. **Create Azure Static Web App**
   - Log in to Azure Portal
   - Create new Static Web App resource
   - Connect to your GitHub repository

2. **Configure GitHub Actions**
   - The workflow file is already included in `.github/workflows/azure-static-web-apps.yml`
   - Azure will automatically configure the deployment token

3. **Environment Variables**
   - Add `AZURE_STATIC_WEB_APPS_API_TOKEN` to GitHub secrets
   - Configure any additional environment variables in Azure portal

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy using Azure CLI (optional)
az staticwebapp deploy --name your-app-name --resource-group your-rg --source ./out
```

## 🔧 Configuration

### Customization

1. **Personal Information**
   - Update content in `src/app/layout.tsx` (metadata)
   - Modify sections in `src/components/sections/`
   - Replace `public/faizanpic.jpg` with your photo
   - Update `public/Resume - Faizan_Azhar_Software_Eng.pdf`

2. **Contact Form**
   - Replace Formspree endpoint in `src/components/sections/contact.tsx`
   - Sign up at [Formspree](https://formspree.io/) for form handling

3. **Social Links**
   - Update GitHub, LinkedIn, and other social links throughout components

4. **Theme Colors**
   - Modify primary colors in `tailwind.config.js`
   - Update gradient colors in component files

### SEO Configuration

- Update meta tags in `src/app/layout.tsx`
- Modify structured data in `src/components/json-ld.tsx`
- Add Google Analytics or other tracking (optional)

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All metrics in green
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Image Optimization**: Next.js Image component with lazy loading

## 🔒 Security

- Content Security Policy configured in `staticwebapp.config.json`
- No sensitive data in client-side code
- HTTPS enforced by Azure Static Web Apps

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Faizan Azhar**
- Email: faziazhar1@gmail.com
- LinkedIn: [linkedin.com/in/faizanazhar](https://linkedin.com/in/faizanazhar)
- GitHub: [github.com/faizanAzhar11](https://github.com/faizanAzhar11)

---

⭐ If you found this project helpful, please give it a star!
