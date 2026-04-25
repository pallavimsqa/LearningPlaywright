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
│   ├── 01_Basics/
│   │   ├── Lab209.spec.ts           # Fundamentals lab exercises
│   │   └── Lab210_Test_Annoations.spec.ts  # Test annotations examples
│   ├── 02_First_tests/
│   │   ├── 211_First_Running_Test.spec.ts      # First running test example
│   │   ├── 212_Browser_Context_Pages.spec.ts   # Browser context and pages management
│   │   ├── 213_Multiple_Context.spec.ts        # Multiple context handling
│   │   ├── 214_Multiple_Pages.spec.ts          # Multiple pages within a context
│   │   ├── 215_Test_PW.spec.ts                 # VWO login application test
│   │   ├── 216_Manual_Context.spec.ts          # Manual context setup examples
│   │   ├── 217_Manual_Context_Options.spec.ts  # Context configuration options
│   │   ├── 218_Context_Reuse.spec.ts           # Context reusability patterns
│   │   ├── task1_Multiple_Context_Pages.spec.ts # Task 1: Multiple contexts and pages
│   │   └── task2_Context_MultiPages.spec.ts    # Task 2: Advanced context scenarios
│   └── 03_Locators_Commands/
│       ├── 219_Commands.spec.ts                # Playwright commands overview
│       ├── 220_GotoCommands.spec.ts            # Navigation commands
│       ├── 221_Referer_Command.spec.ts         # Referrer command examples
│       ├── 222_Automation.vwo.com.spec.ts      # VWO.com automation examples
│       ├── Task1_Cura_Automation.spec.ts       # CURA healthcare automation task
│       └── TestPage.html                       # Test HTML page for automation
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

### 02_First_tests - Practical Testing
Located in `tests/02_First_tests/`
- **211_First_Running_Test.spec.ts**: First practical running test example
- **212_Browser_Context_Pages.spec.ts**: Browser context and page management
- **213_Multiple_Context.spec.ts**: Working with multiple browser contexts
- **214_Multiple_Pages.spec.ts**: Managing multiple pages within a single context
- **215_Test_PW.spec.ts**: VWO login application - demonstrates real-world login scenario with URL hash routing
- **216_Manual_Context.spec.ts**: Manual context creation and configuration
- **217_Manual_Context_Options.spec.ts**: Advanced context options and settings
- **218_Context_Reuse.spec.ts**: Best practices for context reusability
- **task1_Multiple_Context_Pages.spec.ts**: Hands-on task for multiple contexts and pages
- **task2_Context_MultiPages.spec.ts**: Advanced task combining multiple contexts and pages

### 03_Locators_Commands - Locators and Automation
Located in `tests/03_Locators_Commands/`
- **219_Commands.spec.ts**: Overview of Playwright commands and API
- **220_GotoCommands.spec.ts**: Navigation and goto command patterns
- **221_Referer_Command.spec.ts**: HTTP referrer header handling
- **222_Automation.vwo.com.spec.ts**: Real-world automation examples with VWO.com
- **Task1_Cura_Automation.spec.ts**: Complete CURA healthcare patient portal automation task
- **TestPage.html**: Local test page for automation practice

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
