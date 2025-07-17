# Faizan Azhar - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Designed for deployment on Azure Static Web Apps.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with dark/light mode toggle
- **SEO Optimized**: Meta tags, OpenGraph, Twitter Cards, JSON-LD structured data
- **Performance**: Static Site Generation (SSG) for optimal loading speeds
- **Contact Form**: Integrated with Formspree for seamless contact handling
- **Accessibility**: ARIA attributes and semantic HTML5

## 📁 Project Structure

```
portfolio-Demo-/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with SEO
│   └── page.tsx                 # Home page
├── components/
│   ├── layout/                  # Layout components
│   │   ├── navbar.tsx          # Navigation with theme toggle
│   │   └── footer.tsx          # Footer with links
│   ├── sections/               # Page sections
│   │   ├── hero.tsx           # Hero/landing section
│   │   ├── about.tsx          # About me section
│   │   ├── tech-stack.tsx     # Technology stack
│   │   ├── projects.tsx       # Projects showcase
│   │   ├── certifications.tsx # Certifications display
│   │   └── contact.tsx        # Contact form
│   ├── seo/                    # SEO components
│   │   └── json-ld.tsx        # Structured data
│   └── theme-provider.tsx      # Theme context
├── public/                     # Static assets
│   ├── resume.pdf             # Downloadable resume
│   └── favicon.ico            # Site favicon
├── .github/workflows/          # GitHub Actions
│   └── azure-static-web-apps-deployment.yml
├── staticwebapp.config.json    # Azure Static Web Apps config
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json               # Dependencies
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form + Formspree
- **Theme**: next-themes for dark/light mode
- **Deployment**: Azure Static Web Apps

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/faizanAzhar11/portfolio-Demo-.git
   cd portfolio-Demo-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```
   NEXT_PUBLIC_FORMSPREE_KEY=your_formspree_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### Azure Static Web Apps

1. **Prerequisites**
   - Azure account
   - GitHub repository
   - Azure Static Web Apps resource

2. **Deployment Steps**
   - Push code to GitHub
   - Configure Azure Static Web Apps with your repository
   - Set up the GitHub Action workflow (included)
   - Configure environment variables in Azure portal

3. **Environment Variables**
   Set these in your Azure Static Web Apps configuration:
   - `NEXT_PUBLIC_FORMSPREE_KEY`: Your Formspree endpoint key

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🎨 Customization

### Colors
Modify the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  }
}
```

### Content
Update personal information in:
- `components/sections/` - All section components
- `app/layout.tsx` - Meta tags and SEO
- `components/seo/json-ld.tsx` - Structured data

### Resume
Replace `public/resume.pdf` with your own resume file.

## 🔧 Configuration

### Next.js Configuration
The `next.config.js` is optimized for Azure Static Web Apps:
- Static export enabled
- Image optimization disabled for static hosting
- Trailing slashes enabled

### Tailwind CSS
Custom utility classes are defined in `app/globals.css` for:
- Buttons
- Cards
- Section headings
- Tech badges

## 📊 SEO Features

- **Meta Tags**: Dynamic titles and descriptions
- **OpenGraph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **JSON-LD**: Structured data for search engines
- **Sitemap**: Auto-generated (can be added with next-sitemap)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: faziazhar1@gmail.com
- **GitHub**: [faizanAzhar11](https://github.com/faizanAzhar11)
- **LinkedIn**: [faizanazhar11](https://linkedin.com/in/faizanazhar11)

---

Built with ❤️ by Faizan Azhar
