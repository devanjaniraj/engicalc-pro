# Contributing to EngiCalc Pro

Thank you for considering contributing to EngiCalc Pro. This document provides guidelines for contributing to the project.

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to Kanjanikumar52@gmail.com.

## How to Contribute

### Reporting Bugs

Before creating a bug report, please check existing issues. When creating a bug report, include:

* Clear and descriptive title
* Exact steps to reproduce the problem
* Specific examples and expected vs. actual behavior
* Screenshots if applicable
* Browser and version information

Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md) when creating an issue.

### Suggesting Features

Feature suggestions are tracked as GitHub issues. When creating a feature request, include:

* Clear and descriptive title
* Step-by-step description of the suggested enhancement
* Specific examples demonstrating the use case
* Explanation of why this would be useful

Use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md) when creating an issue.

### Pull Requests

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test in multiple browsers (Chrome, Firefox, Safari, Edge)
5. Commit with clear messages: `git commit -m "Add feature: description"`
6. Push to your fork: `git push origin feature/your-feature-name`
7. Open a Pull Request using the [PR template](.github/PULL_REQUEST_TEMPLATE.md)

## Development Guidelines

### JavaScript

* Use meaningful variable and function names
* Add comments for complex logic
* Follow existing code patterns and structure
* Use ES6+ features appropriately
* Avoid introducing external dependencies

### CSS

* Use class names that describe purpose, not appearance
* Keep specificity low
* Use CSS custom properties for repeated values
* Maintain responsive design principles
* Test in both light and dark modes

### HTML

* Use semantic HTML5 elements
* Ensure accessibility (ARIA labels where appropriate)
* Maintain clean structure and indentation

## Testing

Before submitting a PR, verify:

* All calculator modes work correctly (Basic, Scientific, Engineering)
* Unit conversions produce accurate results
* Dark mode toggle functions properly
* Calculation history saves and loads correctly
* Keyboard shortcuts work as expected
* UI is responsive on mobile, tablet, and desktop
* No console errors in browser developer tools
* Code works in Chrome, Firefox, Safari, and Edge

## Commit Message Guidelines

* Use present tense: "Add feature" not "Added feature"
* Use imperative mood: "Fix bug" not "Fixes bug"
* Limit first line to 72 characters
* Reference issues: "Fix #123: Description"

## Project Structure

```
engicalc-pro/
 index.html          # Main HTML structure
 styles.css          # All styling
 script.js           # All JavaScript logic
 README.md           # Project documentation
 CONTRIBUTING.md     # This file
 CODE_OF_CONDUCT.md  # Community guidelines
 SECURITY.md         # Security policy
 LICENSE             # MIT License
 .github/
     ISSUE_TEMPLATE/ # Issue templates
     PULL_REQUEST_TEMPLATE.md
```

## Questions?

If you have questions not covered here, feel free to:

* Open a discussion on GitHub
* Contact the maintainer at Kanjanikumar52@gmail.com

Thank you for contributing!
