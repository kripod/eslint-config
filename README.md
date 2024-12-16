# @kripod/eslint-config

Pragmatic ESLint config for robust collaboration

[![npm version](https://img.shields.io/npm/v/@kripod/eslint-config)](https://www.npmjs.com/package/@kripod/eslint-config)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/kripod)](https://github.com/sponsors/kripod)

## Principles

- Exhaustive [flat configs](https://eslint.org/docs/latest/use/configure/configuration-files) for ESLint v9+
- Distinct severities
  - Error on potential bugs, ambiguities and unsafe/legacy constructs
  - Warn about incompletions, lack of affordance and unification opportunities
- Composable entry points

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
  ...baseConfig,
  ...typeCheckedConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
```

If using TypeScript, consider adopting [`@total-typescript/tsconfig`](https://github.com/total-typescript/tsconfig) or:

- Enable [`strictNullChecks`](https://www.typescriptlang.org/tsconfig/#strictNullChecks) or the broader [`strict`](https://www.typescriptlang.org/tsconfig/#strict) compiler option
- Set [`module`](https://www.typescriptlang.org/tsconfig/#module) to `Preserve` or `NodeNext`, as package entry points may fail to resolve otherwise

### Presets

- `base` — JS + TS, no framework-specific rules
- `type-checked` — Typed linting via [project service](https://typescript-eslint.io/troubleshooting/typed-linting/#project-service-issues)
  - [Complements native-speed linters](https://typescript-eslint.io/troubleshooting/faqs/general/#how-does-typescript-eslint-compare-to-native-speed-linters)
