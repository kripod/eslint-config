import type { TSESLint } from "@typescript-eslint/utils";
import type { Linter } from "eslint";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import { coreRules } from "./common.js";

function ruleDisabled(entry: Linter.RuleEntry) {
  const severity = Array.isArray(entry) ? entry[0] : entry;
  return severity === "off" || severity === 0;
}

const tseslintRules = {
  "@typescript-eslint/adjacent-overload-signatures": "warn",
  "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
  "@typescript-eslint/ban-ts-comment": "warn",
  "@typescript-eslint/ban-tslint-comment": "warn",
  "@typescript-eslint/class-literal-property-style": [
    "warn",
    // Enforcement at runtime
    "getters",
  ],

  // Covered by core rule
  "@typescript-eslint/class-methods-use-this": "off",

  "@typescript-eslint/consistent-generic-constructors": "warn",
  "@typescript-eslint/consistent-indexed-object-style": "off",
  "@typescript-eslint/consistent-type-assertions": [
    "error",
    {
      arrayLiteralTypeAssertions: "allow-as-parameter",
      objectLiteralTypeAssertions: "allow-as-parameter",
    },
  ],
  "@typescript-eslint/consistent-type-definitions": "warn",

  // Covered by `verbatimModuleSyntax` of TypeScript
  "@typescript-eslint/consistent-type-imports": "off",

  // Covered by core rule
  "@typescript-eslint/default-param-last": "off",

  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/explicit-member-accessibility": [
    "warn",
    {
      accessibility: "no-public",
      overrides: {
        parameterProperties: "explicit",
      },
    },
  ],
  "@typescript-eslint/explicit-module-boundary-types": "off",

  // Covered by core rule
  "@typescript-eslint/init-declarations": "off",

  // Covered by core rule
  "@typescript-eslint/max-params": "off",

  "@typescript-eslint/member-ordering": "off",
  "@typescript-eslint/method-signature-style": "error",

  // Covered by core rule
  "@typescript-eslint/no-array-constructor": "off",

  "@typescript-eslint/no-confusing-non-null-assertion": "warn",

  // Covered by core rule
  "@typescript-eslint/no-dupe-class-members": "off",

  "@typescript-eslint/no-duplicate-enum-values": "warn",
  "@typescript-eslint/no-dynamic-delete": "error",

  // Covered by core rule
  "@typescript-eslint/no-empty-function": "off",

  "@typescript-eslint/no-empty-object-type": [
    "warn",
    { allowInterfaces: "with-single-extends" },
  ],
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/no-extra-non-null-assertion": "warn",
  "@typescript-eslint/no-extraneous-class": "warn",
  "@typescript-eslint/no-import-type-side-effects": "error",
  "@typescript-eslint/no-inferrable-types": "warn",

  // Covered by core rule
  "@typescript-eslint/no-invalid-this": "off",

  "@typescript-eslint/no-invalid-void-type": [
    "error",
    { allowAsThisParameter: true },
  ],

  // Covered by core rule
  "@typescript-eslint/no-loop-func": "off",

  // Covered by core rule
  "@typescript-eslint/no-magic-numbers": "off",

  "@typescript-eslint/no-misused-new": "error",
  "@typescript-eslint/no-namespace": "error",
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
  "@typescript-eslint/no-non-null-assertion": "warn",
  "no-redeclare": "off",
  "@typescript-eslint/no-redeclare": coreRules["no-redeclare"],
  "@typescript-eslint/no-require-imports": "off",
  "no-restricted-imports": "off",
  "@typescript-eslint/no-restricted-imports":
    coreRules["no-restricted-imports"],
  "@typescript-eslint/no-restricted-types": "off",

  // Covered by core rule
  "@typescript-eslint/no-shadow": "off",

  "@typescript-eslint/no-this-alias": "error",
  "@typescript-eslint/no-unnecessary-parameter-property-assignment": "warn",
  "@typescript-eslint/no-unnecessary-type-constraint": "warn",
  "@typescript-eslint/no-unsafe-declaration-merging": "error",
  "@typescript-eslint/no-unsafe-function-type": "error",

  // Covered by core rule
  "@typescript-eslint/no-unused-expressions": "off",

  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": coreRules["no-unused-vars"],

  // Covered by core rule
  "@typescript-eslint/no-use-before-define": "off",

  // Covered by core rule
  "@typescript-eslint/no-useless-constructor": "off",

  "@typescript-eslint/no-useless-empty-export": "warn",
  "@typescript-eslint/no-wrapper-object-types": "error",
  "@typescript-eslint/parameter-properties": "error",
  "@typescript-eslint/prefer-as-const": "warn",
  "@typescript-eslint/prefer-enum-initializers": "warn",
  "@typescript-eslint/prefer-for-of": "warn",
  "@typescript-eslint/prefer-function-type": "warn",
  "@typescript-eslint/prefer-literal-enum-member": [
    "warn",
    { allowBitwiseExpressions: true },
  ],
  "@typescript-eslint/prefer-namespace-keyword": "warn",
  "@typescript-eslint/triple-slash-reference": "error",
  "@typescript-eslint/typedef": "off",
  "@typescript-eslint/unified-signatures": [
    "warn",
    {
      // For docs generation
      ignoreDifferentlyNamedParameters: true,
      ignoreOverloadsWithDifferentJSDoc: true,
    },
  ],
} satisfies TSESLint.FlatConfig.Rules;

export default defineConfig([
  {
    ...(tseslint.configs.base as Linter.Config),
    name: "kripod/base/setup",
  },
  {
    name: "kripod/base/rules",
    rules: {
      ...coreRules,
      ...tseslintRules,
    },
  },
  {
    ...(tseslint.configs.eslintRecommended as Linter.Config),
    name: "kripod/base/disables",
    files: ["**/*.ts", "**/*.mts", "**/*.cts", "**/*.tsx"],
    rules: Object.fromEntries(
      Object.entries<TSESLint.FlatConfig.RuleEntry | undefined>({
        ...tseslint.configs.eslintRecommended.rules,
        "no-invalid-this": "off",
      }).flatMap(([rule, entry]) => {
        if (entry == null || !ruleDisabled(entry)) {
          // Retain severity of core rule
          return [];
        }
        // Disable corresponding extension rule if one exists
        const tseslintRule = `@typescript-eslint/${rule}`;
        return [
          [rule, entry],
          ...(tseslintRule in tseslintRules
            ? [[tseslintRule, entry] as const]
            : []),
        ];
      }),
    ),
  },
]);
