import type { TSESLint } from "@typescript-eslint/utils";
import type { Linter } from "eslint";
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
  "class-methods-use-this": "off",
  "@typescript-eslint/class-methods-use-this":
    coreRules["class-methods-use-this"],
  "@typescript-eslint/consistent-generic-constructors": "warn",
  "@typescript-eslint/consistent-indexed-object-style": "off",
  "@typescript-eslint/consistent-type-assertions": [
    "error",
    {
      assertionStyle: "as",
      objectLiteralTypeAssertions: "allow-as-parameter",
    },
  ],
  "@typescript-eslint/consistent-type-definitions": "warn",

  // Covered by `verbatimModuleSyntax` of TypeScript
  "@typescript-eslint/consistent-type-imports": "off",

  "default-param-last": "off",
  "@typescript-eslint/default-param-last": coreRules["default-param-last"],
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
  "init-declarations": "off",
  "@typescript-eslint/init-declarations": coreRules["init-declarations"],
  "max-params": "off",
  "@typescript-eslint/max-params": coreRules["max-params"],
  "@typescript-eslint/member-ordering": "off",
  "@typescript-eslint/method-signature-style": "error",
  "no-array-constructor": "off",
  "@typescript-eslint/no-array-constructor": coreRules["no-array-constructor"],
  "@typescript-eslint/no-confusing-non-null-assertion": "warn",
  "no-dupe-class-members": "off",
  "@typescript-eslint/no-dupe-class-members":
    coreRules["no-dupe-class-members"],
  "@typescript-eslint/no-duplicate-enum-values": "warn",
  "@typescript-eslint/no-dynamic-delete": "error",
  "no-empty-function": "off",
  "@typescript-eslint/no-empty-function": coreRules["no-empty-function"],
  "@typescript-eslint/no-empty-object-type": "warn",
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/no-extra-non-null-assertion": "warn",
  "@typescript-eslint/no-extraneous-class": "warn",
  "@typescript-eslint/no-import-type-side-effects": "error",
  "@typescript-eslint/no-inferrable-types": "warn",
  "no-invalid-this": "off",
  "@typescript-eslint/no-invalid-this": coreRules["no-invalid-this"],
  "@typescript-eslint/no-invalid-void-type": [
    "error",
    { allowAsThisParameter: true },
  ],
  "no-loop-func": "off",
  "@typescript-eslint/no-loop-func": coreRules["no-loop-func"],
  "no-magic-numbers": "off",
  "@typescript-eslint/no-magic-numbers": coreRules["no-magic-numbers"],
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
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": coreRules["no-shadow"],
  "@typescript-eslint/no-this-alias": "error",
  "@typescript-eslint/no-unnecessary-parameter-property-assignment": "warn",
  "@typescript-eslint/no-unnecessary-type-constraint": "warn",
  "@typescript-eslint/no-unsafe-declaration-merging": "error",
  "@typescript-eslint/no-unsafe-function-type": "error",
  "no-unused-expressions": "off",
  "@typescript-eslint/no-unused-expressions":
    coreRules["no-unused-expressions"],
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": coreRules["no-unused-vars"],
  "no-use-before-define": "off",
  "@typescript-eslint/no-use-before-define": coreRules["no-use-before-define"],
  "no-useless-constructor": "off",
  "@typescript-eslint/no-useless-constructor":
    coreRules["no-useless-constructor"],
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
    },
  ],
} satisfies TSESLint.FlatConfig.Rules;

const config: TSESLint.FlatConfig.Config[] = [
  {
    ...tseslint.configs.base,
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
    ...tseslint.configs.eslintRecommended,
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
          ...((tseslintRules as Linter.RulesRecord)[tseslintRule] != null
            ? [[tseslintRule, entry] as const]
            : []),
        ];
      }),
    ),
  },
];

export default config as Linter.Config[];
