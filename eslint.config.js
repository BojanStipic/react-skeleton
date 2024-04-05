import eslint from "@eslint/js";
import * as tanstackQuery from "@tanstack/eslint-plugin-query";
import prettier from "eslint-config-prettier";
import jestDom from "eslint-plugin-jest-dom";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import reactJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import react from "eslint-plugin-react/configs/recommended.js";
import testingLibrary from "eslint-plugin-testing-library";
import tseslint from "typescript-eslint";

// eslint-disable-next-line no-restricted-syntax
export default tseslint.config(
  {
    ignores: ["dist/", "coverage/", "eslint.config.js"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  react,
  reactJsxRuntime,
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
  {
    plugins: {
      "jsx-a11y": {
        rules: jsxA11y.rules,
      },
    },
    rules: jsxA11y.configs.recommended.rules,
  },
  {
    plugins: {
      "@tanstack/query": {
        rules: tanstackQuery.rules,
      },
    },
    rules: tanstackQuery.configs.recommended.rules,
  },
  prettier,
  {
    settings: { react: { version: "detect" } },
    languageOptions: {
      parserOptions: {
        project: ["tsconfig.json", "tsconfig.node.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-console": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector: "TSEnumDeclaration",
          message: "Don't declare enums. Use tagged unions instead.",
        },
        {
          selector: "ExportDefaultDeclaration",
          message: "Don't use default exports. Use named exports instead.",
        },
      ],
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/consistent-type-assertions": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "react/boolean-prop-naming": ["error", { propTypeNames: ["boolean"] }],
      "react/destructuring-assignment": "error",
      "react/forbid-component-props": "error",
      "react/hook-use-state": "error",
      "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
      "react/jsx-pascal-case": "error",
      "react/self-closing-comp": "error",
    },
  },
  {
    files: ["*.test*."],
    ...jestDom.configs["flat/recommended"],
  },
  {
    files: ["*.test*."],
    plugins: {
      "testing-library": {
        rules: testingLibrary.rules,
      },
    },
    rules: testingLibrary.configs.react.rules,
  },
);
