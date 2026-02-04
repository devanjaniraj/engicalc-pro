# EngiCalc Pro - Enhanced Version

A modern, feature-rich web-based engineering calculator with comprehensive scientific functions, advanced features, and offline capability.

## 🚀 Live Demo

**Try it now:** [https://devanjaniraj.github.io/engicalc-pro/](https://devanjaniraj.github.io/engicalc-pro/)

---

## ✨ New Features Added

### 1. **Advanced Calculator Modes**
- ✅ **Basic Mode** - Standard arithmetic operations
- ✅ **Scientific Mode** - Advanced mathematical functions
- ✅ **Statistics Mode** - Statistical calculations (mean, median, mode, std dev, variance)
- ✅ **Matrix Calculator** - Matrix operations (add, subtract, multiply, transpose, determinant)
- ✅ **Equation Solver** - Solve linear, quadratic, and 2x2 system equations
- ✅ **Engineering Mode** - Unit conversions and physical constants

### 2. **Multiple Themes**
- 🎨 Light Theme (Default)
- 🎨 Dark Theme
- 🎨 Ocean Theme (Blue palette)
- 🎨 Forest Theme (Green palette)
- 🎨 Sunset Theme (Warm palette)
- 🎨 Cyberpunk Theme (Neon palette)
- 🎨 Nord Theme (Arctic color scheme)
- 🎨 Dracula Theme (Dark vampire theme)

### 3. **Multilingual Support**
Available languages:
- 🌐 English (en)
- 🌐 Spanish (es)
- 🌐 French (fr)
- 🌐 German (de)
- 🌐 Chinese Simplified (zh)
- 🌐 Japanese (ja)

### 4. **Calculator History & Undo/Redo**
- 📊 Complete calculation history with timestamps
- ↶ Undo last operation
- ↷ Redo operation
- 💾 Export history as CSV

### 5. **Progressive Web App (PWA)**
- 📱 Installable on desktop and mobile
- 🔌 Full offline functionality
- ⚡ Instant loading with caching
- 📦 Service Worker support

### 6. **Accessibility Enhancements**
- ♿ Full WCAG 2.1 AA compliance
- 🎯 High contrast mode support
- ⌨️ Complete keyboard navigation
- 🎤 Screen reader optimization
- 🎨 Reduced motion support

### 7. **Advanced Features**
- 📈 Statistics Calculator (mean, median, mode, standard deviation, variance)
- 🧮 Matrix Calculator (operations for 2x2 and larger matrices)
- 📐 Equation Solver (linear, quadratic, and system equations)
- ⚛️ Periodic Table with element properties
- 🔧 Undo/Redo functionality
- 💾 Settings persistence
- 🎨 Theme selector modal

### 8. **Unit Conversions**
Supported categories:
- Length (meters, kilometers, miles, feet, inches, yards, cm, mm)
- Mass (kg, g, pounds, ounces, tons, mg)
- Temperature (Celsius, Fahrenheit, Kelvin)
- Area (square meters, km², hectares, acres, square miles, feet, inches)
- Volume (liters, cubic meters, gallons, cubic feet, cubic inches, ml)
- Speed (m/s, km/h, mph, knots)
- Pressure (Pascal, bar, PSI, atmosphere)
- Energy (Joules, calories, kWh, eV)

### 9. **Physical Constants**
Quick access to:
- Speed of Light (c = 299,792,458 m/s)
- Gravitational Acceleration (g = 9.81 m/s²)
- Planck's Constant (h = 6.626×10⁻³⁴ J·s)
- Avogadro's Number (Nₐ = 6.022×10²³)
- Boltzmann Constant (k = 1.381×10⁻²³ J/K)
- Gas Constant (R = 8.314 J/(mol·K))

### 10. **Memory Functions**
- MC - Memory Clear
- MR - Memory Recall
- M+ - Memory Add
- M- - Memory Subtract
- MS - Memory Store

## 📁 Project Structure

```
engicalc-pro/
├── index.html                 # Main HTML file with enhanced structure
├── script.js                  # Enhanced main script (all features integrated)
├── styles.css                 # Combined CSS (includes themes and components)
├── themes.css                 # Theme definitions
├── components.css             # Component-specific styles
├── manifest.json              # PWA manifest
├── sw.js                      # Service Worker
├── modules/
│   ├── statistics.js          # Statistics calculator module
│   ├── matrix.js              # Matrix calculator module
│   ├── equation-solver.js     # Equation solver module
│   ├── periodic-table.js      # Periodic table data
│   ├── utilities.js           # Utility classes (History, Settings, Theme Manager)
│   └── i18n.js                # Internationalization module
├── README.md                  # Original README
└── ENHANCEMENTS.md            # This file

```

## 🚀 Getting Started

### Direct Use
1. Open `index.html` in any modern web browser
2. No build process or installation needed
3. All features work offline

### Docker Deployment
```bash
docker-compose up -d
```

### Local Server
```bash
# Python 3
python -m http.server 8080

# Node.js
npx http-server -p 8080
```

### Install as App
1. Open in a modern browser (Chrome, Edge, Firefox, Safari)
2. Click the install button or menu option
3. Use as a native app!

## 💻 Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with CSS variables, gradients, animations
- **Vanilla JavaScript** - Zero dependencies
- **LocalStorage API** - Persistent data storage
- **Service Workers** - Offline functionality
- **PWA** - Progressive Web App capabilities

## 🎯 Key Features Explained

### Statistics Mode
1. Switch to Statistics mode
2. Enter comma-separated values
3. Click "Add" to add to dataset
4. View automatic calculations:
   - Mean (average)
   - Median (middle value)
   - Mode (most frequent)
   - Standard Deviation
   - Variance

### Matrix Calculator
1. Switch to Matrix mode
2. Select operation (Add, Subtract, Multiply, Transpose, Determinant)
3. Input matrix values
4. View results instantly

### Equation Solver
1. Switch to Equations mode
2. Choose equation type (Linear, Quadratic, System 2x2)
3. Enter coefficients
4. Click "Solve" for results

### Theme Selector
1. Click the 🎨 theme button in header
2. Choose from 8 available themes
3. Changes apply instantly
4. Selection is saved automatically

### Language Selector
1. Select language from dropdown in header
2. All text updates immediately
3. Preference is saved

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Number input |
| `.` | Decimal point |
| `+` `-` `*` `/` | Operations |
| `Enter` or `=` | Calculate |
| `Escape` | Clear display |
| `Backspace` | Delete last digit |

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

- ✅ Desktop optimization
- ✅ Tablet optimization
- ✅ Mobile optimization
- ✅ Safe area support (notch compatibility)

## ♿ Accessibility Features

- WCAG 2.1 Level AA compliant
- Screen reader support with ARIA labels
- High contrast mode compatibility
- Keyboard navigation fully supported
- Reduced motion support
- Focus indicators on all interactive elements

## 🔒 Privacy & Security

- ✅ All calculations performed locally
- ✅ No data sent to servers
- ✅ No tracking or analytics
- ✅ Settings stored only in browser
- ✅ Offline-first design

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test in multiple browsers
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 👨‍💻 Author

**Anjani Raj**

Engineer by instinct. Entrepreneur by action.

- Website: [anjaniraj.live](https://anjaniraj.live)
- GitHub: [@devanjaniraj](https://github.com/devanjaniraj)
- LinkedIn: [anjaniraj](https://www.linkedin.com/in/anjaniraj)
- Email: Kanjanikumar52@gmail.com

---

## 📈 Future Enhancements

Potential features for future versions:
- [ ] Graph plotting with visualization
- [ ] Calculus operations (derivatives, integrals)
- [ ] Advanced statistics (regression, distributions)
- [ ] Programming mode (binary, hex, octal)
- [ ] Financial calculations
- [ ] Chemistry molecular weight calculator
- [ ] Physics formula library
- [ ] Collaborative calculations (sync across devices)

---

**If this enhanced calculator is useful to you, please consider starring the repository!** ⭐

---

## 📞 Support

For issues, feature requests, or questions:
- GitHub Issues: [engicalc-pro/issues](https://github.com/devanjaniraj/engicalc-pro/issues)
- Email: Kanjanikumar52@gmail.com

---

**Last Updated:** February 4, 2026
**Version:** 2.0.0 (Enhanced)
