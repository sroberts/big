import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["big.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        addEventListener: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        getComputedStyle: "readonly"
      }
    },
    rules: {
      "no-console": 0,
      "prefer-const": 0,
      "no-var": 2
    }
  },
  {
    files: ["*.test.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeAll: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        jest: "readonly",
        Event: "readonly",
        __dirname: "readonly",
        require: "readonly",
        setTimeout: "readonly"
      }
    },
    rules: {
      "no-console": 0,
      "prefer-const": 0,
      "no-var": 2
    }
  },
  {
    files: ["*.config.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        module: "readonly",
        require: "readonly",
        process: "readonly"
      }
    },
    rules: {
      "no-console": 0,
      "prefer-const": 0,
      "no-var": 2
    }
  }
];
