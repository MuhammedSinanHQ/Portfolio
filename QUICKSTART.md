# 🚀 Quick Start Guide - Run in VS Code

## TL;DR - 3 Steps to Run

```bash
# 1. Open in VS Code
code .

# 2. Install dependencies
npm install

# 3. Start (choose one):
# - Press F5, OR
# - Press Ctrl+Shift+B, OR
# - Run: npm run dev
```

Then open: **http://localhost:3000**

---

## Complete Instructions

### 1️⃣ Open Project in VS Code

**Option A: From Terminal**
```bash
cd /path/to/Portfolio
code .
```

**Option B: From VS Code**
- File → Open Folder
- Select the Portfolio folder
- Click "Select Folder"

### 2️⃣ Install Extensions (One-Time Setup)

When you open the project, VS Code will show a popup:
**"This workspace has extension recommendations"**

Click **"Install All"** to install:
- ✅ ESLint
- ✅ Prettier  
- ✅ Tailwind CSS IntelliSense
- ✅ React Snippets
- ✅ Auto Rename Tag
- ✅ Path Intellisense

### 3️⃣ Install Dependencies

Open terminal in VS Code (`Ctrl+\``) and run:
```bash
npm install
```

Wait for installation to complete (~1-2 minutes).

### 4️⃣ Start Development Server

**Choose your preferred method:**

#### Method 1: Press F5 ⭐ (Recommended)
- Simply press `F5` on your keyboard
- Server starts automatically
- Browser opens to http://localhost:3000
- You can set breakpoints and debug!

#### Method 2: Build Task (Ctrl+Shift+B)
- Press `Ctrl+Shift+B` (Windows/Linux) or `Cmd+Shift+B` (Mac)
- Server starts in terminal
- Open browser to http://localhost:3000

#### Method 3: Terminal Command
```bash
npm run dev
```
- Open browser to http://localhost:3000

---

## ✅ Verification

You should see:
```
▲ Next.js 16.1.4 (Turbopack)
- Local:         http://localhost:3000

✓ Ready in 400ms
```

Open **http://localhost:3000** to see your portfolio!

---

## 🎯 Common Tasks

### Make Changes
- Edit any `.jsx` file
- Changes appear automatically (Hot Reload)
- No need to restart server

### Stop Server
- In terminal: Press `Ctrl+C`
- Or close the terminal tab

### Restart Server
- Press `F5` again, OR
- Run `npm run dev` again

---

## ❓ Having Issues?

### Port 3000 Already in Use
```bash
npx kill-port 3000
```

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### VS Code Not Recognizing Extensions
- Reload VS Code: `Ctrl+Shift+P` → "Reload Window"

---

## 📚 Learn More

- **Full Setup Guide:** See `VSCODE_SETUP.md`
- **README:** See `README.md`
- **Next.js Docs:** https://nextjs.org/docs

---

## 🎉 You're Ready!

Start building your amazing portfolio! 🚀

For detailed documentation, keyboard shortcuts, debugging tips, and more, see **VSCODE_SETUP.md**.
