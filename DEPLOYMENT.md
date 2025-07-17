# Deployment Guide

## Azure Static Web Apps Deployment

### Prerequisites
- Azure account
- GitHub repository
- Node.js 18+ installed locally

### Step 1: Prepare the Application

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Test the build**
   ```bash
   npm run build
   ```

3. **Test locally**
   ```bash
   npm run dev
   ```

### Step 2: Create Azure Static Web App

1. **Login to Azure Portal**
   - Go to [portal.azure.com](https://portal.azure.com)
   - Sign in with your Azure account

2. **Create Static Web App**
   - Click "Create a resource"
   - Search for "Static Web Apps"
   - Click "Create"

3. **Configure the resource**
   - **Subscription**: Choose your subscription
   - **Resource Group**: Create new or select existing
   - **Name**: `faizan-azhar-portfolio` (or your preferred name)
   - **Plan type**: Free (for development)
   - **Region**: Choose closest to your users
   - **Deployment source**: GitHub

4. **GitHub Integration**
   - Sign in to GitHub
   - Select your repository: `portfolio-Demo-`
   - **Branch**: `main`
   - **Build presets**: Next.js
   - **App location**: `/`
   - **Api location**: `` (leave empty)
   - **Output location**: `out`

5. **Review and Create**
   - Review your settings
   - Click "Create"

### Step 3: Configure GitHub Actions

The Azure portal will automatically:
- Create a GitHub Actions workflow file
- Add the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret to your repository

### Step 4: Monitor Deployment

1. **Check GitHub Actions**
   - Go to your repository on GitHub
   - Click on "Actions" tab
   - Monitor the deployment workflow

2. **Check Azure Portal**
   - Go to your Static Web App resource
   - Check the "Overview" for deployment status
   - Note the URL once deployment is complete

### Step 5: Custom Domain (Optional)

1. **Add Custom Domain**
   - In Azure Portal, go to your Static Web App
   - Click "Custom domains"
   - Add your domain name
   - Follow DNS configuration instructions

2. **Configure DNS**
   - Add CNAME record pointing to your Azure Static Web App URL
   - Wait for DNS propagation (can take up to 24 hours)

### Step 6: Environment Variables

1. **Add Environment Variables**
   - In Azure Portal, go to your Static Web App
   - Click "Configuration"
   - Add application settings:
     - `FORMSPREE_ENDPOINT`: Your Formspree form ID
     - `GOOGLE_ANALYTICS_ID`: Your GA tracking ID (optional)

### Step 7: Form Configuration

1. **Set up Formspree**
   - Go to [formspree.io](https://formspree.io)
   - Create an account
   - Create a new form
   - Copy the form ID (e.g., `xeoqqwvz`)

2. **Update Contact Form**
   - Replace the form ID in `src/components/sections/contact.tsx`
   - Line 8: `const [state, handleSubmit] = useForm("your-form-id")`

### Troubleshooting

#### Build Failures
```bash
# Check for TypeScript errors
npm run build

# Check for linting issues
npm run lint

# Install missing dependencies
npm install
```

#### Deployment Issues
1. Check GitHub Actions logs
2. Verify build configuration in Azure
3. Ensure all environment variables are set
4. Check Node.js version compatibility

#### Runtime Issues
1. Check browser console for errors
2. Verify all assets are loading correctly
3. Test form submission
4. Check responsive design on different devices

### Performance Optimization

1. **Image Optimization**
   - Use WebP format for images
   - Optimize image sizes
   - Use Next.js Image component

2. **Bundle Analysis**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```

3. **Lighthouse Testing**
   - Test with Chrome DevTools
   - Aim for 90+ scores in all categories

### Security Considerations

1. **Content Security Policy**
   - Configured in `staticwebapp.config.json`
   - Adjust as needed for your requirements

2. **HTTPS**
   - Automatically enforced by Azure Static Web Apps
   - Custom domains get free SSL certificates

### Monitoring

1. **Azure Application Insights**
   - Add to your Static Web App for monitoring
   - Track user interactions and performance

2. **Google Analytics**
   - Add GA4 tracking code
   - Monitor website traffic and user behavior

### Maintenance

1. **Regular Updates**
   - Keep dependencies updated
   - Monitor security vulnerabilities
   - Update content regularly

2. **Backup Strategy**
   - Repository is backed up on GitHub
   - Export analytics data periodically
   - Keep documentation updated

### Cost Optimization

1. **Free Tier Limits**
   - 100 GB bandwidth per month
   - 0.5 GB storage
   - Custom domains included

2. **Monitoring Usage**
   - Check Azure portal for usage metrics
   - Set up billing alerts

### Support

- **Azure Support**: [Azure Support Portal](https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade)
- **GitHub Issues**: Create issues in your repository
- **Documentation**: [Azure Static Web Apps Docs](https://docs.microsoft.com/en-us/azure/static-web-apps/)

---

**Note**: This deployment guide assumes you're using the provided GitHub Actions workflow. For manual deployment or other CI/CD tools, adjust the steps accordingly.
