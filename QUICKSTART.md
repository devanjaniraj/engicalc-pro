# 🚀 Quick Start Guide - EngiCalc Pro Enhanced

## What You Need to Know

Your calculator has been **massively enhanced** with 10+ new features, 8 themes, 6 languages, and PWA support.

## 🌐 Live Demo

**Use it now:** [https://devanjaniraj.github.io/engicalc-pro/](https://devanjaniraj.github.io/engicalc-pro/)

No installation needed - works instantly in your browser!

---

## ⚡ Getting Started in 30 Seconds

### Option 1: Use Immediately
1. Open `index.html` in your browser
2. Start calculating!
3. All features are ready to use

### Option 2: Install as App
1. Open in Chrome, Edge, or Firefox
2. Click the install button (appears in address bar)
3. Use like a native app on desktop or mobile!

### Option 3: Run Locally
```bash
cd engicalc-pro
python -m http.server 8080
# Then open http://localhost:8080
```

---

## 🎯 Quick Feature Tour

### Calculator Modes (Click tabs at top)
```
Basic       → Simple arithmetic
Scientific  → Trig, logs, advanced math
Statistics  → Mean, median, std dev, variance
Matrix      → Matrix operations
Equations   → Solve equations
Engineering → Unit converter, constants
```

### Change Theme (Click 🎨 icon)
- 8 themes available
- Instant switching
- Preference saved

### Change Language (Dropdown menu)
- English, Spanish, French
- German, Chinese, Japanese
- Auto-detection from browser

### Undo/Redo
- See ↶ and ↷ buttons in calculator
- Full history with timestamps

---

## 📊 What Each Mode Does

### Statistics Mode
```
Input: 10, 20, 30, 40, 50
Output:
  Mean:     30
  Median:   30
  Mode:     Multiple
  Std Dev:  14.14
  Variance: 200
```

### Matrix Mode
```
Operation: Multiply Matrix A × Matrix B
Enter values for each matrix
View instant results
```

### Equation Solver Mode
```
Type: Linear (ax + b = 0)
Enter: a=2, b=4
Result: x = -2
```

### Engineering Mode (Original)
```
Unit Conversions: 8 categories
Physical Constants: 6 constants
Memory Functions: M+, M-, MC, MR, MS
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Numbers |
| `+` `-` `*` `/` | Operations |
| `Enter` | Calculate |
| `Escape` | Clear |
| `Backspace` | Delete digit |

---

## 🎨 Available Themes

| Theme | Best For |
|-------|----------|
| Light | Bright environments |
| Dark | Night mode, ease on eyes |
| Ocean | Calm blue aesthetic |
| Forest | Nature lovers |
| Sunset | Warm, cozy feel |
| Cyberpunk | Modern, futuristic |
| Nord | Minimalist Arctic |
| Dracula | Dark theme lovers |

---

## 🌍 Supported Languages

- 🇺🇸 **English** (EN)
- 🇪🇸 **Spanish** (ES)
- 🇫🇷 **French** (FR)
- 🇩🇪 **German** (DE)
- 🇨🇳 **Chinese** (ZH)
- 🇯🇵 **Japanese** (JA)

*Automatically detects your browser language!*

---

## 📱 Features for You

### ✅ What's Better
- 6 calculator modes instead of 3
- 8 themes instead of 1
- 6 languages instead of 1
- Undo/Redo functionality
- History with timestamps
- Installable as app
- Better accessibility
- More powerful features

### ✅ What's the Same
- All unit conversions still work
- All physical constants available
- Memory functions (M+, M-, etc.)
- Keyboard support
- Dark mode toggle
- DEG/RAD toggle
- No external dependencies
- Offline capable

---

## 🔧 File Organization

```
engicalc-pro/
├── index.html              ← Open this in browser
├── script.js               ← Main calculator logic
├── styles.css              ← All styling (themes included)
├── manifest.json           ← PWA config (for app install)
├── sw.js                   ← Offline support
├── modules/                ← Feature modules
│   ├── statistics.js
│   ├── matrix.js
│   ├── equation-solver.js
│   ├── periodic-table.js
│   ├── utilities.js
│   └── i18n.js
├── ENHANCEMENTS.md         ← Full feature docs
├── IMPLEMENTATION_SUMMARY.md ← What was added
└── README.md               ← Original docs
```

---

## 🚀 Tips & Tricks

### Dark Mode Toggle
Click the 🌙/☀️ icon in top right

### Copy Result
Click 📋 icon to copy to clipboard

### View History
Click 📜 History button

### Clear History
Click "Clear" in history panel

### Switch Language Mid-Calculation
Change language anytime, calculator keeps working

### Use Offline
Works perfectly without internet once loaded

### Install on Mobile
Open in mobile Chrome → Menu → "Install app"

---

## ❓ FAQ

**Q: Do I need to install anything?**  
A: No! Just open `index.html` in your browser.

**Q: Does it work offline?**  
A: Yes! Works completely offline once loaded.

**Q: Can I install it as an app?**  
A: Yes! Supported on Chrome, Edge, Firefox, Safari.

**Q: Will my settings be saved?**  
A: Yes! Theme, language, and history saved automatically.

**Q: Is my data private?**  
A: 100%! All calculations stay on your device.

**Q: What if I find a bug?**  
A: Report it on GitHub: devanjaniraj/engicalc-pro

**Q: Can I customize the themes?**  
A: Yes! Edit the CSS variables in styles.css `:root` section

---

## 🎓 Learning Resources

- **Basic Mode**: Start here to learn
- **Scientific Mode**: Try trigonometry and logs
- **Statistics Mode**: Great for data analysis
- **Matrix Mode**: Learn linear algebra
- **Equation Mode**: Solve real problems
- **Engineering Mode**: Unit conversions and constants

---

## 📞 Need Help?

Check these files:
1. **ENHANCEMENTS.md** - Detailed feature documentation
2. **IMPLEMENTATION_SUMMARY.md** - What was added and why
3. **README.md** - Original documentation
4. **Code comments** - Inline documentation

---

## 🌟 Quick Settings

### Change Precision
Edit in script.js:
```javascript
this.precision = 10;  // Change number
```

### Change Default Theme
Edit in HTML header or use Theme Selector

### Change Default Language
Edit in modules/i18n.js:
```javascript
new i18n('en');  // Default language
```

---

## 🎯 Common Tasks

### Calculate Statistics
1. Click "Statistics" tab
2. Enter: `10, 20, 30, 40, 50`
3. Click "Add"
4. View results instantly

### Solve an Equation
1. Click "Equations" tab
2. Select "Quadratic"
3. Enter: a=1, b=2, c=1
4. Click "Solve"

### Convert Units
1. Click "Engineering" tab
2. Select category (e.g., "Length")
3. Enter value and units
4. Results appear instantly

### Use Undo/Redo
1. Make some calculations
2. Click ↶ (undo) or ↷ (redo)
3. Calculator goes back/forward

---

## 🔐 Security & Privacy

✅ No data sent to servers  
✅ No tracking  
✅ No external dependencies  
✅ All processing local  
✅ Settings stored only in browser  
✅ MIT Licensed  

---

## 📊 By the Numbers

- **6** Calculator Modes
- **8** Themes
- **6** Languages
- **0** External Dependencies
- **100%** Offline Capable
- **WCAG 2.1 AA** Accessible

---

## 🎉 You're All Set!

Your enhanced calculator is ready to use. Enjoy the new features!

For detailed information, see:
- [ENHANCEMENTS.md](ENHANCEMENTS.md)
- [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)
- [README.md](README.md)

---

**Questions?** Open an issue on GitHub:  
https://github.com/devanjaniraj/engicalc-pro/issues

**Happy calculating!** 🧮✨
