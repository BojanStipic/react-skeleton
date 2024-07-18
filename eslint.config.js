import { fixupPluginRules } from "@eslint/compat";
import javascript from "@eslint/js";
import tanstackQuery from "@tanstack/eslint-plugin-query";
import prettier from "eslint-config-prettier";
import jestDom from "eslint-plugin-jest-dom";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import reactJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import react from "eslint-plugin-react/configs/recommended.js";
import testingLibrary from "eslint-plugin-testing-library";
import typescript from "typescript-eslint";

// eslint-disable-next-line no-restricted-syntax
export default typescript.config(
  {
    ignores: ["dist/", "coverage/", "eslint.config.js"],
  },

  javascript.configs.recommended,
  ...typescript.configs.strictTypeChecked,
  react,
  reactJsxRuntime,
  {
    plugins: { "react-hooks": fixupPluginRules(reactHooks) },
    rules: reactHooks.configs.recommended.rules,
  },
  jsxA11y.flatConfigs.recommended,
  ...tanstackQuery.configs["flat/recommended"],
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
