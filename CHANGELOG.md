# Changelog

All notable changes to EngiCalc Pro will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-04

### Added
- 🎨 Modern vibrant UI with animated gradients
- 🌙 Dark mode toggle with persistent preferences
- 📐 DEG/RAD angle mode toggle for trigonometric functions
- 📋 Copy to clipboard functionality with visual feedback
- 🧮 Three calculator modes: Basic, Scientific, Engineering
- ➕ Basic arithmetic operations (+, −, ×, ÷)
- 🔢 Scientific functions:
  - Trigonometric: sin, cos, tan
  - Inverse trigonometric: sin⁻¹, cos⁻¹, tan⁻¹
  - Hyperbolic: sinh, cosh, tanh
  - Logarithmic: log, ln
  - Exponential: e^x, x^y
  - Root functions: √, ∛
  - Power functions: x², x³
  - Factorial (n!)
  - Absolute value |x|
  - Modulo operation
  - Random number generator
- 🔄 Unit conversions (8 categories):
  - Length, Mass, Temperature
  - Area, Volume, Speed
  - Pressure, Energy
- 🔬 Physical constants:
  - Speed of Light (c)
  - Gravitational Acceleration (g)
  - Planck's Constant (h)
  - Avogadro's Number (Nₐ)
  - Boltzmann Constant (k)
  - Gas Constant (R)
- 💾 Memory functions (MC, MR, M+, M−, MS)
- 📜 Calculation history with localStorage persistence
- ⌨️ Full keyboard support
- 📱 Responsive design for mobile, tablet, and desktop
- ♿ ARIA labels for screen reader accessibility
- 🐳 Docker support with nginx
- 🏥 Docker health checks
- 📄 Comprehensive README documentation
- 📝 MIT License
- 🤝 Contributing guidelines

### Fixed
- Division by zero error handling
- Logarithm of negative numbers validation
- Square root of negative numbers validation
- Error state auto-clear functionality
- HTML structure validation
- Modulo by zero error handling

### Security
- Added meta tags for security headers
- Input validation for mathematical operations
- Safe number handling for edge cases

## [Unreleased]

### Planned
- Complex number support
- Expression parser for compound calculations
- Graph plotting functionality
- More unit conversion categories
- Export calculation history
- Customizable themes
- PWA support for offline use
