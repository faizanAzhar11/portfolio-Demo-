# Deployment Setup Guide

## GitHub Actions Deployment to Azure Static Web Apps

### Prerequisites
- GitHub repository: https://github.com/faizanAzhar11/portfolio-Demo-
- Azure Static Web App: `swa-portfolio-demo` (already created)
- Resource Group: `rg-portfolio-demo`
- Default URL: https://delightful-river-0c663480f.2.azurestaticapps.net

### Setup Steps

1. **Configure GitHub Secret:**
   - Go to your GitHub repository: https://github.com/faizanAzhar11/portfolio-Demo-
   - Navigate to **Settings** > **Secrets and variables** > **Actions**
   - Click **New repository secret**
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: `f6498c6ec9e09dae121a77ef165fa9e6345c70a7fcee9305847c28e7fddde9fe102-6dbfb3b8-c8c9-40e6-9c8d-64893f35964600f18220c663480f`

2. **Automatic Deployment:**
   - The GitHub Actions workflow is already configured
   - Any push to the `main` branch will trigger automatic deployment
   - The workflow will:
     - Install Node.js dependencies
     - Build the Next.js application
     - Deploy to Azure Static Web Apps

3. **Manual Deployment:**
   - Go to your GitHub repository
   - Navigate to **Actions** tab
   - Click **Run workflow** on the "Azure Static Web Apps CI/CD" workflow

### Deployment Status
- **Azure Static Web App URL:** https://delightful-river-0c663480f.2.azurestaticapps.net
- **Build Status:** Check GitHub Actions tab for deployment status
- **Deployment Environment:** Production

### Troubleshooting
- Check the GitHub Actions logs for any build errors
- Ensure the secret `AZURE_STATIC_WEB_APPS_API_TOKEN` is properly set
- Verify that the Node.js version matches the one in package.json (≥18.0.0)

### Local Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

The built files will be in the `out/` directory, ready for deployment.
