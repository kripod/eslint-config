import confusingBrowserGlobals from "confusing-browser-globals";
import type { Linter } from "eslint";
import type { ESLintRules } from "eslint/rules";

export default [
  {
    rules: {
      "accessor-pairs": "warn",
      "array-callback-return": "error",
      "arrow-body-style": "warn",
      "block-scoped-var": "error",
      camelcase: [
        "warn",
        {
          properties: "never",
          ignoreDestructuring: true,
          // TODO: ignoreImports: true,
          // TODO: ignoreGlobals: true,
        },
      ],
      "capitalized-comments": "off",
      "class-methods-use-this": "off",
      complexity: "off",

      // Covered by `noImplicitReturns` of TypeScript
      // https://github.com/typescript-eslint/typescript-eslint/issues/4510
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
      "no-bitwise": "error",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-console": "warn",
      "no-const-assign": "error",
      "no-constant-binary-expression": "error",
      "no-constant-condition": "error",
      "no-constructor-return": "error",
      "no-continue": "error",

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
      "no-extra-boolean-cast": [
        "warn",
        // TODO: { enforceForInnerExpressions: true }
      ],
      "no-extra-label": "warn",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-global-assign": "error",
      "no-implicit-coercion": [
        "warn",
        {
          disallowTemplateShorthand: true,
          allow: ["!!"], // Narrows types by truthiness
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
      "no-labels": ["error", { allowLoop: true, allowSwitch: true }],
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
      "no-return-assign": "off",
      "no-script-url": "off",
      "no-self-assign": "error",
      "no-self-compare": "off",
      "no-sequences": "off",
      "no-setter-return": "error",
      "no-shadow": "off",
      "no-shadow-restricted-names": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "off",
      "no-ternary": "off",
      "no-this-before-super": "error",
      "no-throw-literal": "off",
      "no-undef": "error",
      "no-undef-init": "off",
      "no-undefined": "off",
      "no-underscore-dangle": "off",
      "no-unexpected-multiline": "error",
      "no-unmodified-loop-condition": "off",
      "no-unneeded-ternary": "off",
      "no-unreachable": "error",
      "no-unreachable-loop": "off",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unsafe-optional-chaining": "error",
      "no-unused-expressions": "off",
      "no-unused-labels": "error",
      "no-unused-private-class-members": "error",
      "no-unused-vars": "error",
      "no-use-before-define": "off",
      "no-useless-assignment": "off",

      // TODO: Disable when using 'eslint-plugin-regexp'
      "no-useless-backreference": "error",

      "no-useless-call": "off",
      "no-useless-catch": "error",
      "no-useless-computed-key": "off",
      "no-useless-concat": "off",
      "no-useless-constructor": "off",
      "no-useless-escape": "error",
      "no-useless-rename": "off",
      "no-useless-return": "off",
      "no-var": "off",
      "no-void": "off",
      "no-warning-comments": "off",
      "no-with": "error",
      "object-shorthand": "off",
      "one-var": "off",
      "operator-assignment": "off",
      "prefer-arrow-callback": "off",
      "prefer-const": "off",
      "prefer-destructuring": "off",
      "prefer-exponentiation-operator": "off",
      "prefer-named-capture-group": "off",
      "prefer-numeric-literals": "off",
      "prefer-object-has-own": "off",
      "prefer-object-spread": "off",
      "prefer-promise-reject-offs": "off",
      "prefer-regex-literals": "off",
      "prefer-rest-params": "off",
      "prefer-spread": "off",
      "prefer-template": "off",
      radix: "off",
      "require-atomic-updates": "off",
      "require-await": "off",
      "require-unicode-regexp": "off",
      "require-yield": "error",
      "sort-imports": "off",
      "sort-keys": "off",
      "sort-vars": "off",
      strict: "off",
      "symbol-description": "off",
      "unicode-bom": "off",
      "use-isnan": "error",
      "valid-typeof": "error",
      "vars-on-top": "off",
      yoda: "off",
    },
  },
] satisfies Linter.Config<ESLintRules>[];
