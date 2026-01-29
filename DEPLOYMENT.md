# 🚀 Deployment Guide

Complete guide for deploying your Muhammed Sinan Portfolio to production.

## 📋 Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Deployment Options](#deployment-options)
3. [Vercel Deployment (Recommended)](#vercel-deployment-recommended)
4. [Netlify Deployment](#netlify-deployment)
5. [Self-Hosted Deployment](#self-hosted-deployment)
6. [Environment Variables](#environment-variables)
7. [Post-Deployment](#post-deployment)
8. [Troubleshooting](#troubleshooting)

---

## 🔍 Pre-Deployment Checklist

Before deploying, ensure:

- ✅ All dependencies installed: `npm install`
- ✅ Build succeeds locally: `npm run build`
- ✅ No TypeScript/ESLint errors: `npm run lint`
- ✅ All pages load correctly
- ✅ CV file exists at `public/assets/cv.pdf`
- ✅ All project images in `public/assets/work/`
- ✅ Social media links are correct
- ✅ Contact information is up to date

---

## 🌐 Deployment Options

### Option 1: Vercel (⭐ Recommended)
- **Best for:** Next.js projects (built by Vercel)
- **Features:** Zero config, automatic SSL, global CDN, preview deployments
- **Cost:** Free for personal projects
- **Time:** ~5 minutes

### Option 2: Netlify
- **Best for:** Alternative to Vercel
- **Features:** Continuous deployment, forms, serverless functions
- **Cost:** Free for personal projects
- **Time:** ~10 minutes

### Option 3: Self-Hosted
- **Best for:** Full control, custom servers
- **Features:** Complete customization
- **Cost:** Varies (VPS hosting)
- **Time:** ~30-60 minutes

---

## 🎯 Vercel Deployment (Recommended)

### Method 1: Deploy via Vercel Dashboard (Easiest)

#### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel

#### Step 2: Import Your Repository
1. Click "Add New..." → "Project"
2. Import your GitHub repository: `MuhammedSinanHQ/Portfolio`
3. Vercel auto-detects Next.js configuration

#### Step 3: Configure Project
```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

#### Step 4: Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for build
3. Your site is live! 🎉

**Your URL:** `https://portfolio-[random].vercel.app`

#### Step 5: Add Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your domain: `muhammedsinan.com`
3. Update DNS records as shown
4. SSL automatically configured

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd /path/to/Portfolio
vercel

# Follow prompts:
# - Link to existing project or create new
# - Confirm settings
# - Deploy!

# For production deployment
vercel --prod
```

### Vercel Configuration File

Create `vercel.json` (optional, for custom config):

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "github": {
    "silent": true
  }
}
```

---

## 🔵 Netlify Deployment

### Method 1: Netlify Dashboard

#### Step 1: Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub

#### Step 2: New Site from Git
1. Click "Add new site" → "Import an existing project"
2. Choose GitHub
3. Select `MuhammedSinanHQ/Portfolio`

#### Step 3: Build Settings
```
Branch to deploy: main (or your branch)
Build command: npm run build
Publish directory: .next
```

#### Step 4: Deploy
1. Click "Deploy site"
2. Wait for build completion
3. Site is live!

**Your URL:** `https://[random-name].netlify.app`

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

### Netlify Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🖥️ Self-Hosted Deployment

### Option A: Docker Deployment

#### Step 1: Create Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### Step 2: Build and Run

```bash
# Build Docker image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

### Option B: VPS Deployment (Ubuntu/Debian)

#### Step 1: Server Setup

```bash
# SSH into your server
ssh user@your-server-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2
```

#### Step 2: Deploy Application

```bash
# Clone repository
git clone https://github.com/MuhammedSinanHQ/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Build for production
npm run build

# Start with PM2
pm2 start npm --name "portfolio" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

#### Step 3: Configure Nginx

```bash
# Install Nginx
sudo apt install nginx -y

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/portfolio
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site and restart Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Step 4: SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal
sudo certbot renew --dry-run
```

---

## 🔐 Environment Variables

If you add environment variables later:

### Vercel
```bash
# Via CLI
vercel env add VARIABLE_NAME

# Or in dashboard: Settings → Environment Variables
```

### Netlify
```bash
# Via CLI
netlify env:set VARIABLE_NAME value

# Or in dashboard: Site Settings → Build & Deploy → Environment
```

### Self-Hosted
Create `.env.local`:
```env
# Add your variables here
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## ✅ Post-Deployment

### 1. Verify Deployment

Check these pages work:
- ✅ Home: `https://your-domain.com/`
- ✅ Resume: `https://your-domain.com/resume`
- ✅ Work: `https://your-domain.com/work`
- ✅ Contact: `https://your-domain.com/contact`
- ✅ CV Download: `https://your-domain.com/assets/cv.pdf`

### 2. Test Functionality

- ✅ Navigation works
- ✅ Social links open correctly
- ✅ Project carousel navigates
- ✅ Contact form displays
- ✅ Mobile responsive
- ✅ Font loads (JetBrains Mono)

### 3. Performance Check

Use these tools:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### 4. SEO Setup

Add to `app/layout.jsx`:

```javascript
export const metadata = {
  title: "Muhammed Sinan - Data Scientist & ML Engineer",
  description: "Portfolio of Muhammed Sinan, Data Scientist and ML Engineer specializing in Machine Learning, Deep Learning, and MLOps.",
  keywords: ["Data Science", "Machine Learning", "Portfolio"],
  openGraph: {
    title: "Muhammed Sinan - Portfolio",
    description: "Data Scientist & ML Engineer",
    url: "https://your-domain.com",
    siteName: "Muhammed Sinan Portfolio",
    images: ["/assets/og-image.jpg"],
    locale: "en_US",
    type: "website",
  },
};
```

### 5. Analytics (Optional)

Add Google Analytics or Vercel Analytics:

```javascript
// app/layout.jsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## 🐛 Troubleshooting

### Build Fails

**Problem:** Build errors during deployment

**Solutions:**
```bash
# Test build locally
npm run build

# Check for errors
npm run lint

# Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### Fonts Not Loading

**Problem:** JetBrains Mono not displaying

**Solution:** Font loads from Google Fonts automatically. Check:
- Internet connection during build
- No ad blockers blocking fonts
- Fallback fonts in `tailwind.config.js`

### Images Not Showing

**Problem:** Images return 404

**Solution:**
- Verify images exist in `public/assets/`
- Check file names match exactly (case-sensitive)
- Ensure paths start with `/assets/...`

### Deployment Times Out

**Problem:** Vercel/Netlify build timeout

**Solution:**
- Reduce dependencies
- Optimize images
- Check build logs for issues
- Contact support if persistent

### Custom Domain Not Working

**Problem:** Domain doesn't point to site

**Solution:**
1. Check DNS propagation (24-48 hours)
2. Verify DNS records:
   - A record: points to service IP
   - CNAME: points to service domain
3. Use [DNS Checker](https://dnschecker.org/)

---

## 🎉 Success!

Your portfolio is now live! 🚀

**Next Steps:**
1. Share your portfolio URL
2. Add to LinkedIn, GitHub profile
3. Monitor analytics
4. Keep content updated

**Need Help?**
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Netlify Documentation](https://docs.netlify.com/)

---

## 📞 Support

If you encounter issues:
1. Check this guide first
2. Review platform-specific docs
3. Check GitHub Issues
4. Contact platform support

**Happy deploying! 🎊**
