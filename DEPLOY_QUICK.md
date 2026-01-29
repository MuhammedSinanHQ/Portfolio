# 🚀 Quick Deployment Guide

Get your portfolio live in 5 minutes!

## ⚡ Fastest Method - Vercel (Recommended)

### One-Click Deploy

Click this button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MuhammedSinanHQ/Portfolio)

### Manual Deploy

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Repository**
   - Click "Add New..." → "Project"
   - Select `MuhammedSinanHQ/Portfolio`
   - Click "Import"

3. **Deploy**
   - Vercel auto-configures everything
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done! 🎉

**Your site:** `https://portfolio-[random].vercel.app`

### Add Custom Domain

1. Go to Project Settings → Domains
2. Add: `yourname.com`
3. Update DNS records (provided by Vercel)
4. SSL auto-configured ✅

---

## 📋 Pre-Deployment Checklist

✅ Repository is on GitHub
✅ All changes committed and pushed
✅ CV file exists at `public/assets/cv.pdf`
✅ Project images in `public/assets/work/`
✅ Contact info updated in code

---

## 🔵 Alternative - Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. "New site from Git" → Select repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy"

---

## 🖥️ Self-Hosted Options

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### VPS/Server
```bash
# Install dependencies
npm install

# Build
npm run build

# Start
npm start
# Or with PM2: pm2 start npm --name portfolio -- start
```

---

## 📚 Complete Guide

For detailed instructions, troubleshooting, and all deployment options:

👉 **See [DEPLOYMENT.md](DEPLOYMENT.md)**

---

## ✅ After Deployment

### Test These Pages:
- ✅ Home: `/`
- ✅ Resume: `/resume`
- ✅ Work: `/work`
- ✅ Contact: `/contact`
- ✅ CV Download: `/assets/cv.pdf`

### Performance Check:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

### Share Your Portfolio:
- Add to LinkedIn profile
- Update GitHub README
- Share on social media

---

## 🆘 Need Help?

- **Full Guide:** [DEPLOYMENT.md](DEPLOYMENT.md)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Deploy:** [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

---

## 🎉 Your Portfolio is Live!

Congratulations on deploying your portfolio! 🚀

**What's Next?**
1. ✨ Monitor analytics
2. 🔄 Keep content updated
3. 📈 Share with recruiters
4. 💼 Land that dream job!

**Good luck! 🌟**
