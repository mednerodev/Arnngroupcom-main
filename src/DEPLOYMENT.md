# ARNN Group Website - Vercel Deployment Guide

## ✅ **Required Files (All Included)**

This project now includes all necessary configuration files:
- ✅ `package.json` - Dependencies and build scripts
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `tsconfig.node.json` - Vite TypeScript config
- ✅ `vite.config.ts` - Vite build configuration
- ✅ `vercel.json` - Vercel deployment settings
- ✅ `.vercelignore` - Files to exclude from deployment

## 🚀 Quick Deployment Steps

### 1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository (GitHub, GitLab, or Bitbucket)

### 2. **Configure Build Settings**
   Vercel should automatically detect your Vite project. If not, use these settings:
   
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 3. **Environment Variables (Optional)**
   If you're using the contact form with Web3Forms:
   
   1. Go to your Vercel project dashboard
   2. Navigate to **Settings → Environment Variables**
   3. Add the following variable:
      - **Key**: `VITE_WEB3FORMS_ACCESS_KEY`
      - **Value**: Your Web3Forms access key
      - **Environment**: Production, Preview, Development (select all)

### 4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a live URL when deployment completes

## 🔧 Troubleshooting Common Issues

### Build Failures

1. **Module Not Found Errors**
   - Ensure all dependencies are in `package.json`
   - Run `npm install` locally to verify

2. **TypeScript Errors**
   - Check for any type errors in your code
   - Run `npm run build` locally to catch errors before deploying

3. **Memory Issues**
   - Large builds may need increased memory
   - Contact Vercel support to increase build memory limits

### Routing Issues

- The project includes a `vercel.json` file that handles SPA routing
- All routes will correctly redirect to `index.html` for client-side routing

### Environment Variables

- Remember: Environment variables must be prefixed with `VITE_` to be accessible in the frontend
- After adding environment variables, redeploy your project

## 📝 Important Files

- **`vercel.json`**: Vercel configuration for routing and build settings
- **`vite.config.ts`**: Vite build configuration
- **`.vercelignore`**: Files to exclude from deployment

## 🌐 Custom Domain (Optional)

1. Go to your project in Vercel dashboard
2. Click **Settings → Domains**
3. Add your custom domain
4. Follow Vercel's instructions to update DNS records

## 📞 Need Help?

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vite Documentation: [vitejs.dev](https://vitejs.dev)

## ✅ Deployment Checklist

- [ ] All dependencies installed
- [ ] Code builds successfully locally (`npm run build`)
- [ ] Environment variables configured (if needed)
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (automatic with Vercel)
- [ ] Test all routes after deployment

---

**Last Updated**: January 2025