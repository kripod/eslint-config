import confusingBrowserGlobals from "confusing-browser-globals";
import type { ESLintRules } from "eslint/rules";

export const coreRules = {
  "accessor-pairs": "warn",
  "array-callback-return": "error",
  "arrow-body-style": "warn",
  "block-scoped-var": "error",
  camelcase: [
    "warn",
    {
      properties: "never",
      ignoreDestructuring: true,
      ignoreImports: true,
      ignoreGlobals: true,
    },
  ],
  "capitalized-comments": "off",
  "class-methods-use-this": "off",
  complexity: "off",

  // Covered by `noImplicitReturns` or `strictNullChecks` of TypeScript
  // https://github.com/typescript-eslint/typescript-eslint/issues/4510
  // https://github.com/microsoft/TypeScript/issues/51312
  "consistent-return": "off",

  "consistent-this": "off",
  "constructor-super": "error",
  curly: "warn",

  // Covered by '@typescript-eslint/switch-exhaustiveness-check'
  "default-case": "off",

  "default-case-last": "error",
  "default-param-last": "error",
  "dot-notation": "warn",
  eqeqeq: ["error", "always", { null: "ignore" }],
  "for-direction": "error",
  "func-name-matching": "off",
  "func-names": ["warn", "as-needed"],
  "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
  "getter-return": "error",
  "grouped-accessor-pairs": ["warn", "getBeforeSet"],
  "guard-for-in": "error",
  "id-denylist": "off",
  "id-length": "off",
  "id-match": "off",
  "init-declarations": "off",
  "logical-assignment-operators": "warn",
  "max-classes-per-file": "off",
  "max-depth": "off",
  "max-lines": "off",
  "max-lines-per-function": "off",
  "max-nested-callbacks": "off",
  "max-params": "off",
  "max-statements": "off",
  "new-cap": "error",
  "no-alert": "warn",
  "no-array-constructor": "error",
  "no-async-promise-executor": "error",
  "no-await-in-loop": "warn",
  "no-bitwise": "warn",
  "no-caller": "error",
  "no-case-declarations": "error",
  "no-class-assign": "error",
  "no-compare-neg-zero": "error",
  "no-cond-assign": "error",
  "no-console": ["warn", { allow: ["debug", "info", "warn", "error"] }],
  "no-const-assign": "error",
  "no-constant-binary-expression": "error",
  "no-constant-condition": "error",
  "no-constructor-return": "error",
  "no-continue": "off",

  // TODO: Replace with 'regexp/no-control-character'
  "no-control-regex": "error",

  "no-debugger": "error",
  "no-delete-var": "error",
  "no-div-regex": "off",
  "no-dupe-args": "error",
  "no-dupe-class-members": "error",
  "no-dupe-else-if": "error",
  "no-dupe-keys": "error",
  "no-duplicate-case": "error",

  // TODO: Replace with 'import/no-duplicates'
  "no-duplicate-imports": "error",

  "no-else-return": ["warn", { allowElseIf: false }],
  "no-empty": ["warn", { allowEmptyCatch: true }],

  // TODO: Disable when using 'eslint-plugin-regexp'
  "no-empty-character-class": "warn",

  "no-empty-function": "off",
  "no-empty-pattern": "warn",
  "no-empty-static-block": "warn",
  "no-eq-null": "off",
  "no-eval": "error",
  "no-ex-assign": "error",
  "no-extend-native": "error",
  "no-extra-bind": "warn",
  "no-extra-boolean-cast": ["warn", { enforceForInnerExpressions: true }],
  "no-extra-label": "warn",
  "no-fallthrough": "error",
  "no-func-assign": "error",
  "no-global-assign": "error",
  "no-implicit-coercion": [
    "warn",
    {
      disallowTemplateShorthand: true,
      allow: [
        // Narrows types by truthiness
        "!!",
      ],
    },
  ],
  "no-implicit-globals": "error",
  "no-implied-eval": "error",
  "no-import-assign": "error",
  "no-inline-comments": "off",
  "no-inner-declarations": "error",

  // TODO: Disable when using 'eslint-plugin-regexp'
  "no-invalid-regexp": "error",

  "no-invalid-this": "error",
  "no-irregular-whitespace": "error",
  "no-iterator": "error",
  "no-label-var": "error",
  "no-labels": [
    "error",
    {
      allowLoop: true,
      allowSwitch: true,
    },
  ],
  "no-lone-blocks": "warn",
  "no-lonely-if": "warn",
  "no-loop-func": "error",
  "no-loss-of-precision": "error",
  "no-magic-numbers": "off",
  "no-misleading-character-class": "error",
  "no-multi-assign": "error",
  "no-multi-str": "error",
  "no-negated-condition": "off",

  // Curious ternaries via Prettier solve readability
  // https://github.com/prettier/prettier/pull/13183
  "no-nested-ternary": "off",

  // Validation in `try...catch` may omit assignment/comparison
  "no-new": "warn",

  "no-new-func": "error",
  "no-new-native-nonconstructor": "error",
  "no-new-wrappers": "error",
  "no-nonoctal-decimal-escape": "error",
  "no-obj-calls": "error",
  "no-object-constructor": "error",
  "no-octal": "error",
  "no-octal-escape": "error",
  "no-param-reassign": ["error", { props: true }],

  // Postfix operators have a side effect, while `+=`/`-=` are unambiguous
  // https://www.informit.com/articles/article.aspx?p=2425867#:~:text=%233%3A%20I%20rate%20plus%2Dplus%20a%20minus%2Dminus
  "no-plusplus": "error",

  "no-promise-executor-return": "error",
  "no-proto": "error",
  "no-prototype-builtins": "error",
  "no-redeclare": "error",
  "no-regex-spaces": "error",
  "no-restricted-exports": [
    "error",
    {
      restrictedNamedExports: [
        // Ambiguous with dynamic imports
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object
        "then",
      ],
      restrictDefaultExports: {
        // Prefer `export default` expressions
        named: true,
        // Avoid re-exporting entire modules as is
        namespaceFrom: true,
      },
    },
  ],
  "no-restricted-globals": ["error", ...confusingBrowserGlobals],

  // TODO: Adopt 'unicorn/prefer-node-protocol'
  "no-restricted-imports": "off",

  "no-restricted-properties": [
    "error",
    {
      property: "__defineGetter__",
      message: "Use 'Object.defineProperty' instead.",
    },
    {
      property: "__defineSetter__",
      message: "Use 'Object.defineProperty' instead.",
    },
    {
      property: "__lookupGetter__",
      message: "Use 'Object.getOwnPropertyDescriptor' instead.",
    },
    {
      property: "__lookupSetter__",
      message: "Use 'Object.getOwnPropertyDescriptor' instead.",
    },
  ],
  "no-restricted-syntax": "off",
  "no-return-assign": ["error", "always"],
  "no-script-url": "error",
  "no-self-assign": "warn",
  "no-self-compare": "warn",
  "no-sequences": "error",
  "no-setter-return": "error",
  "no-shadow": "error",
  "no-shadow-restricted-names": "error",
  "no-sparse-arrays": "error",
  "no-template-curly-in-string": "error",
  "no-ternary": "off",
  "no-this-before-super": "error",
  "no-throw-literal": "error",
  "no-undef": "error",
  "no-undef-init": "warn",
  "no-undefined": "off",

  // Prisma uses '_' prefix for aggregations
  "no-underscore-dangle": "off",

  "no-unexpected-multiline": "error",
  "no-unmodified-loop-condition": "error",
  "no-unneeded-ternary": ["warn", { defaultAssignment: false }],
  "no-unreachable": "error",
  "no-unreachable-loop": "error",
  "no-unsafe-finally": "error",
  "no-unsafe-negation": ["error", { enforceForOrderingRelations: true }],
  "no-unsafe-optional-chaining": [
    "error",
    { disallowArithmeticOperators: true },
  ],
  "no-unused-expressions": ["error", { enforceForJSX: true }],
  "no-unused-labels": "warn",
  "no-unused-private-class-members": "warn",
  "no-unused-vars": [
    "warn",
    {
      destructuredArrayIgnorePattern: "^_",
      ignoreRestSiblings: true,
      reportUsedIgnorePattern: true,
    },
  ],
  "no-use-before-define": ["error", { functions: false }],

  // TODO: Enable once false positives are resolved
  // https://github.com/eslint/eslint/issues/19245
  "no-useless-assignment": "off",

  // TODO: Disable when using 'eslint-plugin-regexp'
  "no-useless-backreference": "warn",

  "no-useless-call": "warn",
  "no-useless-catch": "warn",
  "no-useless-computed-key": "warn",
  "no-useless-concat": "warn",
  "no-useless-constructor": "warn",
  "no-useless-escape": "warn",
  "no-useless-rename": "warn",
  "no-useless-return": "warn",

  // TODO: Support declaring global variables
  // https://github.com/typescript-eslint/typescript-eslint/issues/7941
  "no-var": "error",

  "no-void": [
    "error",
    {
      // Interop with '@typescript-eslint/no-floating-promises'
      allowAsStatement: true,
    },
  ],
  "no-warning-comments": "off",
  "no-with": "error",
  "object-shorthand": "warn",
  "one-var": ["warn", "never"],
  "operator-assignment": "warn",
  "prefer-arrow-callback": ["warn", { allowNamedFunctions: true }],
  "prefer-const": "warn",
  "prefer-destructuring": [
    "warn",
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    },
  ],
  "prefer-exponentiation-operator": "warn",
  "prefer-named-capture-group": "off",
  "prefer-numeric-literals": "warn",
  "prefer-object-has-own": "warn",
  "prefer-object-spread": "warn",

  // Same severity as 'no-throw-literal'
  "prefer-promise-reject-errors": "error",

  "prefer-regex-literals": ["warn", { disallowRedundantWrapping: true }],
  "prefer-rest-params": "error",
  "prefer-spread": "warn",
  "prefer-template": "warn",
  radix: "error",
  "require-atomic-updates": "error",
  "require-await": "off",

  // TODO: Replace with 'regexp/require-unicode-regexp'
  "require-unicode-regexp": "error",

  "require-yield": "error",
  "sort-imports": "off",
  "sort-keys": "off",
  "sort-vars": "off",
  strict: "error",
  "symbol-description": "off",
  "unicode-bom": "error",
  "use-isnan": ["error", { enforceForIndexOf: true }],
  "valid-typeof": ["error", { requireStringLiterals: true }],
  "vars-on-top": "error",
  yoda: "warn",
} satisfies Partial<ESLintRules>;
