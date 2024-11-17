# @kripod/eslint-config

Pragmatic ESLint config for robust collaboration.

## Principles

- Exhaustive rulesets
- Distinct severities
  - Error on potential bugs, ambiguities and unsafe/legacy constructs
  - Warn about incompletions and unification opportunities
- Modular entry points

## Usage

Install as a dev dependency:

```sh
pnpm add -D @kripod/eslint-config
```

Set up ESLint with [predefined global variables](https://eslint.org/docs/latest/use/configure/language-options#predefined-global-variables):

```js
// eslint.config.js
import baseConfig from "@kripod/eslint-config/base";
import typeCheckedConfig from "@kripod/eslint-config/type-checked";
import globals from "globals";

/** @type {import("eslint").Linter.Config[]} */
export default [
  { files: ["**/*.jsx", "**/*.ts", "**/*.mts", "**/*.cts", "**/*.tsx"] },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  ...baseConfig,
  ...typeCheckedConfig,
];
```

If using TypeScript, enable [`strictNullChecks`](https://www.typescriptlang.org/tsconfig/#strictNullChecks) e.g. via [`@total-typescript/tsconfig`](https://github.com/total-typescript/tsconfig) or the [`strict`](https://www.typescriptlang.org/tsconfig/#strict) compiler option.

### Presets

- `base` — JS + TS, no framework-specific rules
- `type-checked` — Typed linting via [project service](https://typescript-eslint.io/troubleshooting/typed-linting/#project-service-issues)
  - [Complements native-speed linters](https://typescript-eslint.io/troubleshooting/faqs/general/#how-does-typescript-eslint-compare-to-native-speed-linters)
