# Learning Playwright Fundamentals

A comprehensive learning project for Playwright testing framework fundamentals, covering basic test setup, annotations, and end-to-end testing practices.

## 📋 Overview

This repository contains hands-on labs and examples for learning Playwright, a modern end-to-end testing framework. The project demonstrates core testing concepts including test structure, annotations, and testing best practices.

## 🛠️ Technology Stack

- **Playwright** (v1.59.1): End-to-end testing framework
- **Node.js**: JavaScript runtime
- **TypeScript**: Type-safe testing code

## 📁 Project Structure

```
LearningPlaywrightFoundamentals/
├── tests/
│   ├── example.spec.ts              # Basic example test
│   └── 01_Basics/
│       ├── Lab209.spec.ts           # Fundamentals lab exercises
│       └── Lab210_Test_Annoations.spec.ts  # Test annotations examples
├── playwright.config.ts             # Playwright configuration
├── package.json                     # Project dependencies
├── playwright-report/               # Test reports
└── test-results/                    # Test results
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pallavimsqa/LearningPlaywright.git
cd LearningPlaywright
```

2. Install dependencies:
```bash
npm install
```

### Running Tests

Run all tests:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/01_Basics/Lab209.spec.ts
```

Run tests in headed mode (with browser UI):
```bash
npx playwright test --headed
```

Run tests with debug mode:
```bash
npx playwright test --debug
```

View test report:
```bash
npx playwright show-report
```

## 📚 Learning Labs

### Lab 209 - Basics
Located in `tests/01_Basics/Lab209.spec.ts`
- Fundamental test setup and execution
- Basic assertions and test structure
- Page navigation and element interaction

### Lab 210 - Test Annotations
Located in `tests/01_Basics/Lab210_Test_Annoations.spec.ts`
- Using test annotations (@)
- Tagging tests
- Conditional test execution

## ⚙️ Configuration

The project uses Playwright's default configuration with the following settings:
- **Test Directory**: `./tests`
- **Reporter**: HTML report
- **Parallel Execution**: Enabled
- **Browser**: Chromium (main browser for testing)
- **Trace**: Collected on first retry for failed tests

See `playwright.config.ts` for detailed configuration options.

## 📊 Test Reports

After running tests, HTML reports are automatically generated in the `playwright-report/` directory. View the report using:
```bash
npx playwright show-report
```

## 📝 Notes

- Tests run in parallel by default for faster execution
- Tracing is enabled on first retry to help debug failures
- All test files follow the `.spec.ts` naming convention
- Configuration is optimized for CI/CD pipelines

## 🤝 Contributing

This is a learning repository. Feel free to fork and explore Playwright features!

## 📄 License

ISC

---

**Last Updated**: April 2026  
**Author**: Pallavi MSQA
