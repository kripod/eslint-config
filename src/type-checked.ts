import type { TSESLint } from "@typescript-eslint/utils";
import tseslint from "typescript-eslint";

import { coreRules } from "./common.js";

const config: TSESLint.FlatConfig.Config[] = [
  {
    ...tseslint.configs.base,
    name: "kripod/type-checked/setup",
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.js", "*.mjs", "*.cjs"],
        },
      },
    },
  },
  {
    name: "kripod/type-checked/rules",
    rules: {
      "@typescript-eslint/await-thenable": "error",
      "consistent-return": "off",
      "@typescript-eslint/consistent-return": coreRules["consistent-return"],
      "@typescript-eslint/consistent-type-exports": [
        "warn",
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],
      "dot-notation": "off",
      "@typescript-eslint/dot-notation": coreRules["dot-notation"],
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-array-delete": "error",
      "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-confusing-void-expression": [
        "warn",
        { ignoreArrowShorthand: true },
      ],
      "@typescript-eslint/no-deprecated": "warn",
      "@typescript-eslint/no-duplicate-type-constituents": "off",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "no-implied-eval": "off",
      "@typescript-eslint/no-implied-eval": coreRules["no-implied-eval"],
      "@typescript-eslint/no-meaningless-void-operator": "warn",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            arguments: false,
            attributes: false,
          },
        },
      ],
      "@typescript-eslint/no-mixed-enums": "error",
      "@typescript-eslint/no-redundant-type-constituents": "warn",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",

      // Produces false positives
      // https://github.com/typescript-eslint/typescript-eslint/issues?q=is%3Aissue+is%3Aopen+%22no-unnecessary-condition%22
      "@typescript-eslint/no-unnecessary-condition": "off",

      "@typescript-eslint/no-unnecessary-qualifier": "warn",
      "@typescript-eslint/no-unnecessary-template-expression": "warn",
      "@typescript-eslint/no-unnecessary-type-arguments": "warn",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/no-unnecessary-type-parameters": "warn",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-enum-comparison": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unsafe-unary-minus": "error",
      "@typescript-eslint/non-nullable-type-assertion-style": "warn",
      "no-throw-literal": "off",
      "@typescript-eslint/only-throw-error": coreRules["no-throw-literal"],
      "prefer-destructuring": "off",
      "@typescript-eslint/prefer-destructuring":
        coreRules["prefer-destructuring"],
      "@typescript-eslint/prefer-find": "warn",
      "@typescript-eslint/prefer-includes": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": [
        "error",
        {
          ignorePrimitives: {
            string: true,
          },
        },
      ],
      "@typescript-eslint/prefer-optional-chain": [
        "warn",
        { requireNullish: true },
      ],
      "prefer-promise-reject-errors": "off",
      "@typescript-eslint/prefer-promise-reject-errors":
        coreRules["prefer-promise-reject-errors"],
      "@typescript-eslint/prefer-readonly": "warn",
      "@typescript-eslint/prefer-readonly-parameter-types": "off",
      "@typescript-eslint/prefer-reduce-type-parameter": "warn",
      "@typescript-eslint/prefer-regexp-exec": "warn",
      "@typescript-eslint/prefer-return-this-type": "warn",
      "@typescript-eslint/prefer-string-starts-ends-with": "warn",
      "@typescript-eslint/promise-function-async": "warn",
      "@typescript-eslint/require-array-sort-compare": "error",
      "require-await": "off",
      "@typescript-eslint/require-await": coreRules["require-await"],
      "@typescript-eslint/restrict-plus-operands": [
        "error",
        {
          allowAny: false,
          allowBoolean: false,
          allowNullish: false,
          allowNumberAndString: false,
          allowRegExp: false,
        },
      ],
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowAny: false,
          allowBoolean: false,
          allowNever: false,
          allowNullish: false,
          allowNumber: false,
          allowRegExp: false,
        },
      ],
      "@typescript-eslint/return-await": ["error", "always"],
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          allowAny: false,
          allowNullableBoolean: true,
          // TODO: Consider `false` without autofix
          allowNullableEnum: true,
          allowNullableNumber: false,
          allowNullableObject: true,
          allowNullableString: true,
          allowNumber: false,
          allowString: true,
        },
      ],
      "@typescript-eslint/switch-exhaustiveness-check": [
        "error",
        { considerDefaultExhaustiveForUnions: true },
      ],
      "@typescript-eslint/unbound-method": "error",
      "@typescript-eslint/use-unknown-in-catch-callback-variable": "warn",
    },
  },
];

export default config;
