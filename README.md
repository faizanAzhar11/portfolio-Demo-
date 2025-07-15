# Faizan Azhar - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, optimized for Azure Static Web Apps deployment.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with elegant animations
- **SEO Optimized**: Dynamic meta tags, Open Graph, Twitter Cards, JSON-LD schema
- **Performance**: Static site generation with optimal loading speeds
- **Azure Ready**: Configured for Azure Static Web Apps deployment
- **Accessibility**: WCAG compliant with semantic HTML
- **Dark Mode**: Built-in dark/light theme support

## 📋 Sections

- **Hero**: Profile image, introduction, and call-to-action
- **About**: Professional background and bio
- **Tech Stack**: Skills and technologies with visual badges
- **Experience**: Professional work history and achievements
- **Projects**: Featured projects and contributions
- **Certifications**: Microsoft Azure certifications
- **Contact**: Contact form and information
- **Resume**: Downloadable PDF resume

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Azure Static Web Apps
- **CI/CD**: GitHub Actions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/faizanAzhar11/portfolio-Demo-.git
   cd portfolio-Demo-
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `out` directory.

## ☁️ Azure Deployment

### Using Azure Static Web Apps CLI

1. **Install Azure Static Web Apps CLI**
   ```bash
   npm install -g @azure/static-web-apps-cli
   ```

2. **Build the project**
   ```bash
   npx swa build
   ```

3. **Deploy to Azure**
   ```bash
   npx swa deploy --env production
   ```

### Using GitHub Actions (Recommended)

1. **Fork this repository**
2. **Create an Azure Static Web App** in the Azure Portal
3. **Connect your GitHub repository** during creation
4. **Add the deployment token** as `AZURE_STATIC_WEB_APPS_API_TOKEN` in GitHub secrets
5. **Push to main branch** - deployment happens automatically

## 📁 Project Structure

```
portfolio-Demo-/
├── public/                     # Static assets
│   ├── faizanpic.jpg          # Profile image
│   └── Resume - Faizan_Azhar_Software_Eng.pdf
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/         # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── TechStack.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Certifications.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/               # Reusable UI components
│   │       └── Button.tsx
│   └── lib/
│       ├── data.ts           # Portfolio data
│       └── utils.ts          # Utility functions
├── .github/workflows/
│   └── azure-static-web-apps.yml  # CI/CD workflow
├── swa-cli.config.json        # Azure SWA configuration
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

## 🎨 Customization

### Personal Information
Update your personal information in `src/lib/data.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other fields
}
```

### Resume and Image
- Replace `public/faizanpic.jpg` with your profile image
- Replace `public/Resume - Faizan_Azhar_Software_Eng.pdf` with your resume

### Styling
- Modify colors in `tailwind.config.js`
- Update global styles in `src/app/globals.css`
- Customize components in respective files

## 📈 SEO Features

- **Dynamic Meta Tags**: Optimized for search engines
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **JSON-LD Schema**: Structured data for rich snippets
- **Semantic HTML**: Proper heading structure and landmarks
- **Fast Loading**: Optimized images and code splitting

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: faziazhar1@gmail.com
- **GitHub**: [faizanAzhar11](https://github.com/faizanAzhar11)
- **LinkedIn**: [faizan-azhar](https://linkedin.com/in/faizan-azhar)

---

Built with ❤️ using Next.js and deployed on Azure Static Web Apps