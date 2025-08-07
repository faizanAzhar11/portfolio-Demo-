# Azure Static Web Apps Deployment Guide

This guide provides step-by-step instructions for deploying your Next.js portfolio to Azure Static Web Apps.

## Prerequisites

- Azure subscription
- GitHub account
- Node.js 18+ installed locally
- Azure CLI (optional, for manual deployment)

## Option 1: Automatic Deployment via GitHub Actions (Recommended)

### Step 1: Prepare Your Repository

1. **Fork or Clone the Repository**
   ```bash
   git clone https://github.com/faizanAzhar11/portfolio-Demo-.git
   cd portfolio-Demo-
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Test Local Build**
   ```bash
   npm run build
   ```

### Step 2: Create Azure Static Web App

1. **Go to Azure Portal**
   - Navigate to [portal.azure.com](https://portal.azure.com)
   - Click "Create a resource"
   - Search for "Static Web App"

2. **Configure Static Web App**
   - **Subscription**: Select your subscription
   - **Resource Group**: Create new or select existing
   - **Name**: Choose a unique name (e.g., `faizan-portfolio`)
   - **Plan Type**: Free (for personal use)
   - **Region**: Select closest region
   - **Source**: GitHub
   - **Organization**: Your GitHub username
   - **Repository**: portfolio-Demo-
   - **Branch**: main

3. **Build Configuration**
   - **Build Presets**: Next.js
   - **App location**: `/`
   - **Api location**: (leave empty)
   - **Output location**: `out`

4. **Review and Create**
   - Click "Review + create"
   - Click "Create"

### Step 3: GitHub Actions Setup

Azure will automatically create a GitHub Actions workflow file in your repository at `.github/workflows/azure-static-web-apps-{random-name}.yml`. This file is already configured for Next.js deployment.

The workflow will:
- Trigger on push to main branch
- Install dependencies
- Build the Next.js app
- Deploy to Azure Static Web Apps

### Step 4: Configure Environment Variables (Optional)

If you need environment variables:

1. Go to your Static Web App in Azure Portal
2. Navigate to "Configuration" in the left menu
3. Add environment variables as needed
4. Save changes

### Step 5: Verify Deployment

1. **Check GitHub Actions**
   - Go to your repository on GitHub
   - Click on "Actions" tab
   - Verify the deployment workflow completed successfully

2. **Access Your Site**
   - In Azure Portal, go to your Static Web App
   - Copy the URL from the "Overview" section
   - Open the URL in your browser

## Option 2: Manual Deployment via Azure CLI

### Step 1: Install Azure CLI

```bash
# Windows (via winget)
winget install Microsoft.AzureCLI

# macOS (via Homebrew)
brew install azure-cli

# Linux (via curl)
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

### Step 2: Login to Azure

```bash
az login
```

### Step 3: Build the Application

```bash
npm run build
```

### Step 4: Deploy to Static Web Apps

```bash
# Install Static Web Apps CLI
npm install -g @azure/static-web-apps-cli

# Deploy (replace with your app name and resource group)
az staticwebapp deploy \
  --name your-app-name \
  --resource-group your-resource-group \
  --source-path ./out
```

## Option 3: Azure Static Web Apps CLI

### Step 1: Install SWA CLI

```bash
npm install -g @azure/static-web-apps-cli
```

### Step 2: Login and Deploy

```bash
# Login to Azure
swa login

# Build the app
npm run build

# Deploy (you'll be prompted to select/create a Static Web App)
swa deploy ./out
```

## Customization

### Update Content

1. **Personal Information**
   - Update contact details in `components/sections/Contact.tsx`
   - Replace profile image in `public/faizanpic.jpg`
   - Replace resume in `public/Resume - Faizan_Azhar_Software_Eng.pdf`

2. **SEO Metadata**
   - Update metadata in `app/layout.tsx`
   - Modify structured data for your information

3. **Projects and Experience**
   - Update projects in `components/sections/Projects.tsx`
   - Modify experience in `components/sections/About.tsx`
   - Update tech stack in `components/sections/TechStack.tsx`
   - Update certifications in `components/sections/Certifications.tsx`

### Custom Domain (Optional)

1. **Purchase Domain**: Buy a domain from any domain registrar
2. **Configure DNS**: Point your domain to Azure Static Web Apps
3. **Add Custom Domain**: In Azure Portal, go to "Custom domains" and add your domain
4. **SSL Certificate**: Azure will automatically provision SSL certificate

### Environment Variables

For production environment variables:

1. Go to Azure Portal
2. Navigate to your Static Web App
3. Go to "Configuration"
4. Add application settings as needed

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (should be 18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Images Not Loading**
   - Ensure images are in the `public` folder
   - Check image paths in components
   - Verify `next.config.js` has `images: { unoptimized: true }`

3. **Routing Issues**
   - Ensure `staticwebapp.config.json` is configured correctly
   - Check that `trailingSlash: true` is set in `next.config.js`

4. **Form Not Working**
   - The contact form uses `mailto:` links
   - For actual form submission, integrate with Formspree or similar service

### Logs and Monitoring

1. **GitHub Actions Logs**
   - Go to your repository → Actions tab
   - Click on the latest workflow run
   - Check logs for any errors

2. **Azure Portal Logs**
   - Navigate to your Static Web App
   - Go to "Functions" or "Log stream" for runtime logs

### Performance Optimization

1. **Lighthouse Audit**
   - Run Lighthouse on your deployed site
   - Address any performance recommendations

2. **Bundle Analysis**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   npm run build
   npm run analyze
   ```

## Cost Considerations

- **Free Tier**: 100 GB bandwidth, 0.5 GB storage
- **Standard Tier**: $9/month, 100 GB bandwidth included
- **Custom domains**: Free
- **SSL certificates**: Free

## Security

Azure Static Web Apps automatically provides:
- SSL/TLS certificates
- Global CDN
- DDoS protection
- Security headers (configured in `staticwebapp.config.json`)

## Support

- **Azure Documentation**: [docs.microsoft.com/azure/static-web-apps](https://docs.microsoft.com/azure/static-web-apps)
- **GitHub Issues**: Report issues in your repository
- **Azure Support**: Available through Azure Portal

---

## Quick Deployment Checklist

- [ ] Azure subscription active
- [ ] Repository forked/cloned
- [ ] Local build successful (`npm run build`)
- [ ] Azure Static Web App created
- [ ] GitHub Actions workflow configured
- [ ] Custom domain configured (optional)
- [ ] Environment variables set (if needed)
- [ ] SSL certificate provisioned
- [ ] Site accessible and functional

**Estimated Deployment Time**: 10-15 minutes for automatic deployment, 5 minutes for manual deployment.
