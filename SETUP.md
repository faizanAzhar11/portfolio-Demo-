# Portfolio Setup Guide

## Quick Start (Windows PowerShell)

```powershell
# Navigate to the project directory
cd portfolio-Demo-

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 to view your portfolio!

## Environment Setup

### 1. Install Node.js
- Download and install Node.js 18+ from https://nodejs.org
- Verify installation: `node --version` and `npm --version`

### 2. Install Dependencies
```bash
npm install
```

### 3. Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run start        # Start production server
npm run lint         # Run linting
npm run type-check   # Check TypeScript
```

## Customization Steps

### 1. Update Personal Information
Edit `src/lib/data.ts` with your details:
- Personal info (name, email, bio)
- Experience and projects
- Skills and certifications
- Social media links

### 2. Replace Profile Image
- Add your profile image as `public/faizanpic.jpg`
- Add your resume as `public/Resume - Your_Name.pdf`

### 3. Configure Site Settings
Update `src/lib/config.ts`:
- Site name and description
- URLs and metadata
- SEO configuration

### 4. Setup Contact Form
1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update the form URL in `src/components/sections/Contact.tsx`

## Deployment to Azure

### 1. Create Azure Static Web App
1. Go to Azure Portal
2. Create new Static Web App
3. Connect GitHub repository
4. Set build configuration:
   - App location: `/`
   - Output location: `out`

### 2. Automatic Deployment
- Push to main branch deploys automatically
- GitHub Actions workflow handles the build
- Check deployment status in Actions tab

## Troubleshooting

### Common Issues
1. **Node.js version**: Ensure you're using Node.js 18+
2. **Dependencies**: Run `npm install` if you get module errors
3. **Build errors**: Run `npm run type-check` to check for TypeScript issues

### Build Errors
- Check that all required environment variables are set
- Ensure images exist in the public folder
- Verify all imports are correct

### Performance Tips
- Optimize images before adding to public folder
- Keep bundle size small by importing only needed components
- Use dynamic imports for heavy components

## Next Steps

1. **Customize**: Update all content with your information
2. **Test**: Run the development server and test all features
3. **Build**: Create production build with `npm run build`
4. **Deploy**: Push to GitHub to trigger Azure deployment
5. **Monitor**: Check Azure portal for deployment status

For detailed instructions, see the main README.md file.
