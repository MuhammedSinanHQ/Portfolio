# Portfolio - Muhammed Sinan

This is a [Next.js](https://nextjs.org) project showcasing a professional portfolio website with a modern dark theme and green accent color.

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [VS Code](https://code.visualstudio.com/) (recommended)

### Running in VS Code

1. **Open the project in VS Code:**
   ```bash
   code /path/to/Portfolio
   ```

2. **Install dependencies:**
   - Open the integrated terminal in VS Code (`Ctrl+`` or `View > Terminal`)
   - Run:
     ```bash
     npm install
     ```

3. **Start the development server:**
   
   **Option A: Using VS Code Tasks (Recommended)**
   - Press `Ctrl+Shift+B` (or `Cmd+Shift+B` on Mac) to run the default build task
   - Or press `Ctrl+Shift+P`, type "Tasks: Run Task", and select "Start Dev Server"
   
   **Option B: Using the Terminal**
   - In the integrated terminal, run:
     ```bash
     npm run dev
     ```
   
   **Option C: Using Debug (F5)**
   - Press `F5` to start debugging
   - This will launch the dev server and open your browser automatically

4. **View the website:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser
   - The page auto-updates as you edit files

### VS Code Extensions (Recommended)

When you first open the project, VS Code will suggest installing recommended extensions. Click "Install All" or install them individually:

- **ESLint** - JavaScript linting
- **Prettier** - Code formatting
- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
- **ES7+ React/Redux/React-Native snippets** - React code snippets
- **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
- **Path Intellisense** - Autocomplete for file paths

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

### VS Code Keyboard Shortcuts

- `F5` - Start debugging / Run dev server
- `Ctrl+Shift+B` - Build (Start Dev Server)
- `Ctrl+C` - Stop the running server (in terminal)
- `Ctrl+`` - Toggle integrated terminal

## 📁 Project Structure

```
Portfolio/
├── app/                # Next.js app directory
│   ├── page.jsx       # Home page
│   ├── resume/        # Resume page
│   ├── work/          # Work/Projects page
│   ├── contact/       # Contact page
│   └── layout.jsx     # Root layout
├── components/        # React components
├── public/            # Static assets
│   └── assets/        # Images, CV, etc.
├── .vscode/          # VS Code configuration
└── package.json      # Dependencies and scripts
```

## 🎨 Features

- ✨ Modern dark theme with green (#00ff99) accent
- 📱 Fully responsive design
- 🎭 Smooth animations with Framer Motion
- 💼 Project showcase carousel
- 📧 Contact form
- 📄 Downloadable CV
- 🔗 Social media integration

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.4
- **UI Library:** React 19
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Font:** JetBrains Mono

## 🚀 Deployment

### Quick Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MuhammedSinanHQ/Portfolio)

Or follow these steps:

1. **Push your code to GitHub** (if not already)
2. **Go to [vercel.com](https://vercel.com)** and sign up
3. **Import your repository** - Click "Add New..." → "Project"
4. **Deploy** - Vercel auto-configures everything
5. **Done!** Your site is live at `https://portfolio-[random].vercel.app`

### Other Deployment Options

- **Netlify:** See [DEPLOY_QUICK.md](DEPLOY_QUICK.md)
- **Self-Hosted:** See [DEPLOYMENT.md](DEPLOYMENT.md) for Docker/VPS options

### Deployment Documentation

- 📖 **Quick Guide:** [DEPLOY_QUICK.md](DEPLOY_QUICK.md) - Get live in 5 minutes
- 📚 **Complete Guide:** [DEPLOYMENT.md](DEPLOYMENT.md) - All deployment options, troubleshooting, and advanced setup

## 📖 Additional Documentation

- **VS Code Setup:** [VSCODE_SETUP.md](VSCODE_SETUP.md) - Detailed IDE configuration
- **Quick Start:** [QUICKSTART.md](QUICKSTART.md) - Get running in 2 minutes
- **Quick Reference:** [VS_CODE_INSTRUCTIONS.txt](VS_CODE_INSTRUCTIONS.txt) - Visual guide

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
