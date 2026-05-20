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
│   ├── 03_Locators_Commands/
│   │   ├── 219_Commands.spec.ts                # Playwright commands overview
│   │   ├── 220_GotoCommands.spec.ts            # Navigation commands
│   │   ├── 221_Referer_Command.spec.ts         # Referrer command examples
│   │   ├── 222_Automation.vwo.com.spec.ts      # VWO.com automation examples
│   │   ├── 223_Xpath.spec.ts                   # XPath locator strategies
│   │   ├── 224_GetRole.spec.ts                 # Accessible role-based locators
│   │   ├── 225_CSS_Locators.spec.ts            # CSS selector techniques
│   │   ├── 226_PressSequentially.spec.ts       # Keyboard input and key pressing
│   │   ├── 227_Cookie.spec.ts                  # Cookie management
│   │   └── TestPage.html                       # Test HTML page for automation
│   └── 04_Session_Storage/
│       └── 228_Session.spec.ts                 # Session and storage state management
│   └── 05_Allure_Reporting/
│       └── 230_Login.spec.ts                   # Login test with Allure reporting
│   └── Projects/
│       └── Project_4_TTA_Bank.spec.ts          # TTA Bank transfer fund automation
├── ├── tests/
│   ├── utils/
│   │   └── CustomTTAReporter.ts     # Custom test reporter implementation
├── playwright.config.ts             # Playwright configuration with reporters
├── package.json                     # Project dependencies
├── playwright-report/               # Playwright HTML test reports
├── allure-report/                   # Allure detailed test reports
├── allure-results/                  # Allure results data
├── tta-report/                      # TTA custom reporter output
│   ├── screenshots/                 # Test screenshots
│   ├── videos/                      # Test video recordings
│   └── traces/                      # Trace files for debugging
└── test-results/                    # Test results and artifacts
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
- **223_Xpath.spec.ts**: XPath locator strategies and usage patterns
- **224_GetRole.spec.ts**: Accessible role-based locator methods
- **225_CSS_Locators.spec.ts**: CSS selector locating techniques
- **226_PressSequentially.spec.ts**: Keyboard input and sequential key pressing
- **227_Cookie.spec.ts**: Cookie management and handling in tests
- **TestPage.html**: Local test page for automation practice

### 04_Session_Storage - Session and Storage State Management
Located in `tests/04_Session_Storage/`
- **228_Session.spec.ts**: Saving and reusing authenticated session state across tests

### 05_Allure_Reporting - Allure Test Reporting
Located in `tests/05_Allure_Reporting/`
- **230_Login.spec.ts**: Login test with Allure reporting integration

### 06_Multiple_Element - Element Selection and Filtering
Located in `tests/06_Multiple_Element/`
- Examples for working with multiple elements and advanced element selection techniques

### 07_Web_Tables - Web Table Automation
Located in `tests/07_Web_Tables/`
- Test cases for automating web table interactions, data extraction, and validation

### 12_Handle_SVG - SVG Element Handling
Located in `tests/12_Handle_SVG/`
- Techniques for automating SVG elements and complex graphical components

### 15_File_Download - File Download Testing
Located in `tests/15_File_Download/`
- Test scenarios for file download handling and validation

### 19_Data_Driven_Testing - Data-Driven Testing Patterns
Located in `tests/19_Data_Driven_Testing/`
- Parametrized tests and data-driven test execution examples

## ⚙️ Configuration

The project uses Playwright's configuration with the following settings:
- **Test Directory**: `./tests`
- **Reporters**: 
  - HTML Report (Default Playwright HTML)
  - Allure Report (Advanced test reporting with history and trends)
  - CustomTTAReporter (TTA Custom HTML Report with enhanced visualizations)
- **Parallel Execution**: Enabled
- **Browser**: Chromium (main browser for testing)
- **Video Recording**: `on` - Records video for all tests
- **Screenshots**: `on` - Captures screenshots for all tests
- **Trace Recording**: `on` - Records detailed trace files for all tests
- **Headless**: `false` - Runs in headed mode by default for visibility

### Test Artifacts

All tests generate the following artifacts automatically:
- 📹 **Videos**: Stored in `tta-report/videos/`
- 📷 **Screenshots**: Stored in `tta-report/screenshots/`
- 🔍 **Traces**: Stored in `tta-report/traces/` (viewable in Playwright Inspector)

## 📊 Report Generation

### CustomTTAReporter
The project includes a custom Playwright reporter (`tests/utils/CustomTTAReporter.ts`) that generates beautiful HTML reports with:
- Real-time test execution monitoring
- Test step-by-step breakdown with status indicators
- Video playback directly in the report
- Screenshot gallery with detailed views
- Error messages and stack traces
- Trace file downloads
- Test execution history
- Performance metrics and pass rate analysis
- Environment and browser information

**View TTA Custom Report:**
```bash
# Open the latest generated report
open tta-report/index.html
```

### Allure Report
Generate Allure reports for advanced test analytics:
```bash
allure generate
```

### HTML Report
Default Playwright HTML report:
```bash
npx playwright show-report
```

## 🎯 Projects

### Project 4 - TTA Bank Digital
Located in `tests/Projects/Project_4_TTA_Bank.spec.ts`

**Objective**: Automate fund transfer workflow in TTA Bank digital application

**Application URL**: https://tta-bank-digital-973242068062.us-west1.run.app/

**Test Scenarios**:
1. **Signup**: Click signup button, enter username and password, create account
2. **Transfer Fund**: Navigate to transfer fund section, enter amount ($5000), add note, and continue
3. **Confirm Transfer**: Confirm the transfer and return to dashboard
4. **Verification**: Verify that the account balance has been reduced by the transferred amount

**Technologies Used**:
- Playwright for test automation
- TypeScript for type safety
- CustomTTAReporter for enhanced reporting
- Video recording and screenshots for test documentation

**How to Run**:
```bash
# Run the TTA Bank project test
npx playwright test tests/Projects/Project_4_TTA_Bank.spec.ts

# View the generated report
open tta-report/index.html
```

**Expected Artifacts**:
- ✅ Test execution video
- ✅ Screenshots of each step
- ✅ Trace file for debugging
- ✅ Detailed HTML report with all interactions

### Project 5 - QA Profile Form
Located in `tests/Projects/Project_5_QA_Profile_Form.spec.ts`

**Objective**: Automate QA professional profile form submission and validation

**Test Scenarios**:
- Form field population with various input types
- Validation of form fields
- Submission and confirmation handling

### Project 6 - Web Tables Automation
Located in `tests/Projects/Project_6_Web_Tables.spec.ts`

**Objective**: Advanced web table interaction and data extraction

**Test Scenarios**:
- Table navigation and sorting
- Data extraction from table rows
- Dynamic table content handling
- Filter and search operations on tables

### Project 7 - IFrame Automation
Located in `tests/Projects/Project_7_Iframe.spec.ts`

**Objective**: Automate interactions within iFrame elements

**Test Scenarios**:
- IFrame detection and switching
- Element interaction within iFrames
- IFrame content validation

### Project 8 - File Download
Located in `tests/Projects/Project_8_FileDownload.spec.ts`

**Objective**: Automate file download scenarios and validation

**Test Scenarios**:
- Trigger file downloads
- Verify download completion
- Validate downloaded file content

### Project 8 - SVG Flipkart
Located in `tests/Projects/Project_8_SVG_Filpkart.spec.ts`

**Objective**: Automate Flipkart-like interface with SVG elements

**Test Scenarios**:
- SVG element interaction (click, hover, etc.)
- Complex graphical component automation
- Dynamic SVG content handling

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

**Last Updated**: May 2026  
**Author**: Pallavi MSQA
