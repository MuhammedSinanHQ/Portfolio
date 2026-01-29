# VS Code Setup Guide for Portfolio Project

## 🎯 Quick Setup (3 Steps)

1. **Open in VS Code**
   ```bash
   code .
   ```

2. **Install Dependencies**
   - Press `Ctrl+`` to open terminal
   - Run: `npm install`

3. **Start Development**
   - Press `F5` or `Ctrl+Shift+B`
   - Open browser to `http://localhost:3000`

## 📋 Detailed Setup Instructions

### Step 1: Install VS Code Extensions

When you open the project, VS Code will show a popup asking to install recommended extensions. Click **"Install All"**.

Or manually install these extensions:

1. **ESLint** (`dbaeumer.vscode-eslint`)
   - Lints your JavaScript/JSX code
   - Shows errors and warnings inline

2. **Prettier** (`esbenp.prettier-vscode`)
   - Auto-formats your code on save
   - Keeps code style consistent

3. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
   - Autocomplete for Tailwind classes
   - Shows color previews

4. **ES7+ React Snippets** (`dsznajder.es7-react-js-snippets`)
   - Quick React component snippets
   - Type `rafce` for a functional component

5. **Auto Rename Tag** (`formulahendry.auto-rename-tag`)
   - Automatically renames paired HTML/JSX tags

6. **Path Intellisense** (`christian-kohler.path-intellisense`)
   - Autocompletes file paths

### Step 2: Configure VS Code

The project includes pre-configured settings in `.vscode/`:

- ✅ **Format on save** enabled
- ✅ **ESLint auto-fix** on save
- ✅ **Tailwind CSS** IntelliSense
- ✅ **Import path** preferences

No additional configuration needed!

### Step 3: Running the Project

#### Method 1: Debug Mode (F5) ⭐ Recommended

1. Press `F5` (or click "Run and Debug" in the sidebar)
2. Select "Next.js: debug full stack"
3. Dev server starts and browser opens automatically
4. Set breakpoints and debug your code!

#### Method 2: Build Task (Ctrl+Shift+B)

1. Press `Ctrl+Shift+B` (Windows/Linux) or `Cmd+Shift+B` (Mac)
2. This runs the "Start Dev Server" task
3. Open `http://localhost:3000` in your browser

#### Method 3: Terminal

1. Press `Ctrl+`` to open integrated terminal
2. Run: `npm run dev`
3. Open `http://localhost:3000` in your browser

## 🎮 VS Code Features & Shortcuts

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `F5` | Start debugging / Run dev server |
| `Ctrl+Shift+B` | Run build task (Start dev server) |
| `Ctrl+`` | Toggle terminal |
| `Ctrl+Shift+P` | Command palette |
| `Ctrl+P` | Quick file open |
| `Ctrl+,` | Open settings |
| `Ctrl+K Ctrl+S` | Keyboard shortcuts reference |

### Debugging

1. **Set Breakpoints:**
   - Click in the left margin next to line numbers
   - Or press `F9` on a line

2. **Debug Controls:**
   - `F5` - Continue
   - `F10` - Step over
   - `F11` - Step into
   - `Shift+F11` - Step out
   - `Shift+F5` - Stop debugging

3. **View Variables:**
   - Open "Variables" panel in debug sidebar
   - Hover over variables in code
   - Use the Debug Console

### Terminal Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run linter

# Stop server
Ctrl+C               # In terminal
```

### Multi-Cursor Editing

- `Alt+Click` - Add cursor
- `Ctrl+Alt+Down` - Add cursor below
- `Ctrl+D` - Select next occurrence
- `Ctrl+Shift+L` - Select all occurrences

## 🎨 Editing Tips

### React Snippets

Type these and press `Tab`:

- `rafce` - React Arrow Function Component Export
- `rfc` - React Functional Component
- `useState` - Import useState
- `useEffect` - Import useEffect

### Tailwind IntelliSense

- Start typing class names: `className="bg-`
- Press `Ctrl+Space` for suggestions
- Hover over classes to see CSS

### Auto Import

- Start typing a component name
- VS Code suggests auto-import
- Press `Enter` to accept

### Format Document

- `Shift+Alt+F` - Format entire file
- Or right-click → "Format Document"

## 🐛 Troubleshooting

### Dev Server Won't Start

1. Make sure Node.js is installed: `node --version`
2. Install dependencies: `npm install`
3. Check port 3000 is available
4. Restart VS Code

### Extensions Not Working

1. Reload VS Code: `Ctrl+Shift+P` → "Reload Window"
2. Check extension is enabled
3. Reinstall extension if needed

### Port Already in Use

If you see "Port 3000 is already in use":

```bash
# Find process using port 3000
npx kill-port 3000

# Or manually:
# Windows: netstat -ano | findstr :3000
# Mac/Linux: lsof -ti:3000 | xargs kill
```

### ESLint Errors

If you see ESLint errors:

```bash
npm run lint          # Check what errors exist
npm run lint --fix    # Auto-fix some errors
```

## 📚 Additional Resources

### Next.js

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn Tutorial](https://nextjs.org/learn)

### React

- [React Documentation](https://react.dev)
- [React Hooks](https://react.dev/reference/react)

### Tailwind CSS

- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)

### VS Code

- [VS Code Tips & Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)
- [VS Code Keyboard Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

## 🎯 Common Tasks

### Create a New Page

1. Create file: `app/newpage/page.jsx`
2. Type `rafce` and press Tab
3. Add your content
4. Navigate to `http://localhost:3000/newpage`

### Add a New Component

1. Create file: `components/MyComponent.jsx`
2. Type `rafce` and press Tab
3. Import in your page: `import MyComponent from '@/components/MyComponent'`
4. Use: `<MyComponent />`

### Add Images

1. Place image in `public/assets/`
2. Import: `import Image from 'next/image'`
3. Use: `<Image src="/assets/image.jpg" alt="..." width={500} height={500} />`

### Modify Styles

- Edit `app/globals.css` for global styles
- Edit `tailwind.config.js` for theme colors
- Use Tailwind classes in components

## ✨ Pro Tips

1. **Split Editor:** `Ctrl+\` to split editor horizontally
2. **Side-by-Side Preview:** Split editor, put browser on one side
3. **Zen Mode:** `Ctrl+K Z` for distraction-free coding
4. **Breadcrumbs:** Use breadcrumbs at top to navigate file structure
5. **Go to Symbol:** `Ctrl+Shift+O` to jump to functions/components
6. **Find in Files:** `Ctrl+Shift+F` to search across all files

## 🎉 You're Ready!

Press `F5` and start building your amazing portfolio! 🚀
