# EngiCalc Pro

A modern web-based engineering calculator with comprehensive scientific functions, unit conversions, and physical constants. Built with vanilla JavaScript for speed, reliability, and offline capability.

[![License: MIT](https://img.shields.io/github/license/devanjaniraj/engicalc-pro)](https://github.com/devanjaniraj/engicalc-pro/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/devanjaniraj/engicalc-pro)](https://github.com/devanjaniraj/engicalc-pro/stargazers)
[![GitHub last commit](https://img.shields.io/github/last-commit/devanjaniraj/engicalc-pro)](https://github.com/devanjaniraj/engicalc-pro/commits/main)

## Features

### Calculator Modes

**Basic Mode** - Standard arithmetic operations for everyday calculations

**Scientific Mode** - Advanced mathematical functions:
- Trigonometric functions (sin, cos, tan) and their inverses
- Hyperbolic functions (sinh, cosh, tanh)
- Logarithmic and exponential functions (log, ln, e^x, x^y)
- Root and power functions (, , x, x)
- Factorial, absolute value, modulo operations
- Mathematical constants (π, e)
- Random number generator

**Engineering Mode** - Professional tools:
- Unit conversions across 8 categories
- Physical constants library
- Memory functions (MC, MR, M+, M-, MS)

### Unit Conversions

Convert between units in multiple categories:
- **Length** - meters, kilometers, miles, feet, inches
- **Mass** - kilograms, grams, pounds, ounces
- **Temperature** - Celsius, Fahrenheit, Kelvin
- **Area** - square meters, acres, hectares
- **Volume** - liters, gallons, cubic meters
- **Speed** - m/s, km/h, mph, knots
- **Pressure** - Pascal, bar, PSI, atmosphere
- **Energy** - Joules, calories, kilowatt-hours

### Physical Constants

Quick access to essential scientific constants:
- Speed of Light (c)
- Gravitational Acceleration (g)
- Planck'\''s Constant (h)
- Avogadro'\''s Number (Nₐ)
- Boltzmann Constant (k)
- Gas Constant (R)

### Interface Features

- **Dark Mode** - Toggle between light and dark themes
- **DEG/RAD Toggle** - Switch between degrees and radians
- **Copy to Clipboard** - One-click result copying
- **Calculation History** - View and reuse previous calculations
- **Keyboard Support** - Full keyboard shortcuts
- **Responsive Design** - Optimized for desktop, tablet, and mobile

### Keyboard Shortcuts

- `0-9`, `.` - Number input
- `+`, `-`, `*`, `/` - Operations
- `Enter` or `=` - Calculate result
- `Escape` - Clear display
- `Backspace` - Delete last digit

## Installation

### Direct Use

1. Clone the repository:
```bash
git clone https://github.com/devanjaniraj/engicalc-pro.git
cd engicalc-pro
```

2. Open `index.html` in a web browser:
   - Double-click the file, or
   - Right-click and select "Open with" your preferred browser

No build process or dependencies required.

### Docker Deployment

Run in a containerized environment:

```bash
# Using Docker Compose (recommended)
docker-compose up -d

# Or using Docker directly
docker build -t engicalc-pro .
docker run -d -p 8080:80 engicalc-pro
```

Access at `http://localhost:8080`

### Local Server (Optional)

```bash
# Python 3
python -m http.server 8080

# Node.js
npx http-server -p 8080
```

## Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with CSS variables, gradients, animations
- **Vanilla JavaScript** - Zero dependencies
- **LocalStorage API** - Persistent settings and history

## Architecture

- **Zero Dependencies** - Pure HTML, CSS, and JavaScript
- **Offline Ready** - Works without internet connection
- **Fast & Lightweight** - Instant load times
- **Cross-Platform** - Windows, macOS, Linux, iOS, Android
- **Privacy First** - All calculations performed locally

## Use Cases

- Engineering students working on coursework
- Scientists performing quick calculations
- Professionals requiring unit conversions
- Educational purposes and demonstrations
- Offline calculation needs

## Contributing

Contributions are welcome. Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test in multiple browsers
5. Submit a pull request

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Author

**Anjani Raj**

Engineer by instinct. Entrepreneur by action.

- Website: [anjaniraj.live](https://anjaniraj.live)
- GitHub: [@devanjaniraj](https://github.com/devanjaniraj)
- LinkedIn: [anjaniraj](https://www.linkedin.com/in/anjaniraj)
- Email: Kanjanikumar52@gmail.com

---

**If this calculator is useful to you, consider starring the repository.**
