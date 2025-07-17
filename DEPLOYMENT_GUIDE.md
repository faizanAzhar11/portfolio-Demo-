# Deployment Guide - Azure Static Web Apps

This guide will help you deploy your portfolio website to Azure Static Web Apps.

## Prerequisites

1. **Azure Account**: Create a free Azure account at [azure.microsoft.com](https://azure.microsoft.com)
2. **GitHub Account**: Your code should be in a GitHub repository
3. **Azure CLI** (Optional): For command-line deployment

## Step 1: Prepare Your Repository

1. **Push to GitHub**: Ensure your code is pushed to a GitHub repository
2. **Environment Variables**: Set up your Formspree key:
   ```bash
   # In your local .env.local file
   NEXT_PUBLIC_FORMSPREE_KEY=your_formspree_key_here
   ```

## Step 2: Create Azure Static Web App

### Option A: Using Azure Portal (Recommended)

1. **Navigate to Azure Portal**: Go to [portal.azure.com](https://portal.azure.com)
2. **Create Resource**: Click "Create a resource" → Search for "Static Web App"
3. **Configure**:
   - **Subscription**: Select your Azure subscription
   - **Resource Group**: Create new or select existing
   - **Name**: Choose a unique name (e.g., `faizan-portfolio`)
   - **Plan Type**: Free (sufficient for portfolio)
   - **Region**: Select closest region
   - **Source**: GitHub
   - **GitHub Details**:
     - Organization: Your GitHub username
     - Repository: portfolio-Demo-
     - Branch: main
   - **Build Details**:
     - Build Presets: Next.js
     - App location: `/`
     - Api location: `` (leave empty)
     - Output location: `out`

4. **Deploy**: Click "Review + Create" → "Create"

### Option B: Using Azure CLI

```bash
# Login to Azure
az login

# Create resource group
az group create --name portfolio-rg --location eastus

# Create static web app
az staticwebapp create \
  --name faizan-portfolio \
  --resource-group portfolio-rg \
  --source https://github.com/YOUR_USERNAME/portfolio-Demo- \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "out" \
  --login-with-github
```

## Step 3: Configure Build Settings

The deployment is configured through:

1. **GitHub Actions Workflow**: `.github/workflows/azure-static-web-apps-deployment.yml`
2. **Static Web App Config**: `staticwebapp.config.json`
3. **Next.js Config**: `next.config.js`

These files are already configured for optimal deployment.

## Step 4: Set Environment Variables

1. **Navigate to Static Web App** in Azure Portal
2. **Go to Configuration** → **Application Settings**
3. **Add New Setting**:
   - **Name**: `NEXT_PUBLIC_FORMSPREE_KEY`
   - **Value**: Your Formspree key
4. **Save**

## Step 5: Custom Domain (Optional)

1. **Navigate to Custom Domains** in your Static Web App
2. **Add Custom Domain**:
   - Domain: `yourdomain.com`
   - Domain Type: Custom domain with certificate
3. **Configure DNS**:
   - Add CNAME record pointing to your Static Web App URL
   - Verify domain ownership

## Step 6: Verify Deployment

1. **Check Build Status**: Monitor the GitHub Actions workflow
2. **Test Website**: Visit your Static Web App URL
3. **Test Features**:
   - ✅ Responsive design
   - ✅ Dark/light mode toggle
   - ✅ Contact form submission
   - ✅ Resume download
   - ✅ All navigation links

## Common Issues & Solutions

### Build Failures

**Issue**: Build fails with TypeScript errors
**Solution**: Run `npm run build` locally first to fix errors

**Issue**: Missing dependencies
**Solution**: Ensure all dependencies are in `package.json`

### Runtime Issues

**Issue**: Contact form not working
**Solution**: Verify `NEXT_PUBLIC_FORMSPREE_KEY` is set correctly

**Issue**: Images not loading
**Solution**: Check image paths and ensure they're in the `public` folder

**Issue**: Theme toggle not working
**Solution**: Verify `next-themes` is properly configured

### Performance Issues

**Issue**: Slow loading times
**Solution**: 
- Optimize images (use Next.js Image component)
- Enable compression in Azure
- Use CDN for static assets

## Monitoring & Analytics

### Azure Application Insights

1. **Create Application Insights** resource
2. **Add connection string** to Static Web App configuration
3. **Monitor performance** and user interactions

### Google Analytics

1. **Add GA4 tracking ID** to environment variables
2. **Update layout.tsx** with GA script
3. **Monitor traffic** and user behavior

## Backup & Recovery

1. **Repository Backup**: GitHub provides automatic backups
2. **Database Backup**: Not applicable for static site
3. **Configuration Backup**: Export Static Web App configuration

## Security Best Practices

1. **HTTPS**: Automatically enabled by Azure Static Web Apps
2. **CSP Headers**: Configure in `staticwebapp.config.json`
3. **Environment Variables**: Never commit sensitive data
4. **Access Control**: Use Azure AD if needed

## Cost Optimization

1. **Free Tier**: Static Web Apps free tier includes:
   - 100 GB bandwidth
   - 0.5 GB storage
   - Custom domains
   - SSL certificates

2. **Monitoring**: Use Azure Cost Management to monitor expenses

## Troubleshooting

### Check Logs
```bash
# View deployment logs
az staticwebapp show-deployment-logs --name faizan-portfolio --resource-group portfolio-rg
```

### Test Locally
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

## Support

For issues and questions:
- **Azure Support**: [Azure Support Portal](https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade)
- **GitHub Issues**: Create issues in your repository
- **Documentation**: [Azure Static Web Apps Docs](https://docs.microsoft.com/azure/static-web-apps/)

---

🚀 Your portfolio website is now live on Azure Static Web Apps!
- ✅ Azure SWA CLI configured

## 🌐 Deployment Options

### Option 1: Deploy via Azure Portal (Recommended)

1. **Open Azure Portal**: Go to [portal.azure.com](https://portal.azure.com)

2. **Create Static Web App**:
   - Search for "Static Web Apps"
   - Click "Create"
   - Fill in the details:
     - **Subscription**: Select your Azure subscription
     - **Resource Group**: Create new or use existing
     - **Name**: `faizan-portfolio`
     - **Region**: Choose closest to your users
     - **Source**: GitHub
     - **GitHub Account**: Connect your GitHub account
     - **Repository**: `portfolio-Demo-`
     - **Branch**: `main`
     - **Build Presets**: Custom
     - **App location**: `/`
     - **API location**: (leave empty)
     - **Output location**: `out`

3. **Complete Setup**: Click "Review + Create" then "Create"

4. **Automatic Deployment**: Azure will automatically configure GitHub Actions and deploy your site

### Option 2: Deploy via Azure CLI

```bash
# Login to Azure (if not already)
az login

# Create resource group
az group create --name portfolio-rg --location eastus

# Create static web app
az staticwebapp create \
  --name faizan-portfolio \
  --resource-group portfolio-rg \
  --source https://github.com/faizanAzhar11/portfolio-Demo- \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "out" \
  --login-with-github
```

### Option 3: Deploy via SWA CLI (If you have deployment token)

```bash
# Get deployment token from Azure Portal (Static Web App > Manage deployment token)
npx swa deploy ./out --deployment-token YOUR_DEPLOYMENT_TOKEN
```

## 📁 Your Built Files

Your portfolio has been built and the static files are in the `out` directory:

```
out/
├── index.html          # Main portfolio page
├── blog/              # Blog section
├── _next/             # Next.js assets
├── faizanpic.jpg      # Your profile image
├── Resume - Faizan_Azhar_Software_Eng.pdf  # Your resume
└── favicon.svg        # Site favicon
```

## 🔧 Build Configuration

- **Framework**: Next.js 15.4.1 with static export
- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Dependencies**: All installed and up-to-date

## 🌟 What's Included

Your portfolio includes:

- ✅ **Hero Section**: Professional introduction with your photo
- ✅ **About**: Your background and experience  
- ✅ **Tech Stack**: Skills organized by category
- ✅ **Experience**: 3 professional positions detailed
- ✅ **Projects**: 4 featured projects with technologies
- ✅ **Certifications**: 5 Azure certifications displayed
- ✅ **Contact Form**: Ready for integration with form services
- ✅ **SEO Optimized**: Meta tags, Open Graph, structured data
- ✅ **Responsive**: Works perfectly on all devices
- ✅ **Fast Loading**: Static site generation for optimal performance

## 🚀 Post-Deployment Steps

1. **Verify Deployment**: Check your site is live at the Azure-provided URL
2. **Custom Domain** (Optional): Configure your own domain in Azure Portal
3. **SSL Certificate**: Azure provides free SSL automatically
4. **Analytics**: Add Google Analytics or Azure Application Insights
5. **Form Integration**: Connect contact form to Formspree or Azure Functions

## 📈 GitHub Actions Workflow

Your repository includes a GitHub Actions workflow at `.github/workflows/azure-static-web-apps.yml` that will:

- ✅ Automatically deploy on every push to `main` branch
- ✅ Build your Next.js application  
- ✅ Deploy static files to Azure
- ✅ Provide preview deployments for pull requests

## 🎯 Next Steps

1. **Deploy using one of the methods above**
2. **Customize content** in `src/lib/data.ts` if needed
3. **Add more projects** or blog posts
4. **Share your portfolio** with potential employers!

## 📞 Support

If you encounter any issues:

1. Check the build logs in GitHub Actions
2. Verify all files are in the `out` directory
3. Ensure your Azure subscription has permissions
4. Contact Azure support if needed

---

🎉 **Congratulations! Your portfolio is ready to go live!** 🎉

Your professional portfolio showcasing your Azure expertise and software engineering skills is now ready to impress potential employers and clients.
