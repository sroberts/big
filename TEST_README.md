# Big Presentation Library - Test Suite

This directory contains tests for the Big presentation library.

## Running Tests

To run the test suite:

```bash
npm test
```

To run tests in watch mode:

```bash
npm run test:watch
```

To generate a coverage report:

```bash
npm run test:coverage
```

## Test Structure

The test suite is organized into the following sections:

### 1. Utility Functions
Tests for the core utility functions used internally by Big:
- `emptyNode()` - Removes all child nodes from an element
- `ce()` - Creates elements with class names
- `parseHash()` - Extracts slide numbers from URL hashes

### 2. Integration Tests
Integration tests that verify the library's behavior in a browser-like environment. These tests are currently skipped because jsdom doesn't fully support the dynamic `window.location` behavior that big.js requires.

For full integration testing in a real browser environment, consider using:
- [Puppeteer](https://pptr.dev/)
- [Playwright](https://playwright.dev/)
- [Cypress](https://www.cypress.io/)

### 3. Exported API
Tests that verify the library exports the correct API surface:
- Event listeners (load, keyboard, click, touch)
- `window.big` object
- Presentation modes (talk, print, jump)
- Speaker notes handling

### 4. CSS Integration
Tests that verify the CSS file exists and contains the required styles.

### 5. HTML Template
Tests that verify the HTML template exists and has the correct structure.

## Test Coverage

The test suite covers:
- ✅ Core utility functions
- ✅ API surface validation
- ✅ Event handler presence
- ✅ File existence and structure
- ⏭️ Runtime integration behavior (skipped due to jsdom limitations)

## Dependencies

The test suite uses:
- **Jest** - Test framework
- **jsdom** - Browser environment simulation
- **@testing-library/dom** - DOM testing utilities
- **@testing-library/jest-dom** - Custom Jest matchers

## Notes

The integration tests that exercise the full runtime behavior of Big are skipped because jsdom (the DOM implementation used by Jest) doesn't fully support all browser features that Big relies on, particularly around `window.location.hash` manipulation.

For comprehensive end-to-end testing, it's recommended to use a real browser automation tool like Puppeteer or Playwright in addition to these unit tests.
