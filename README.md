# eslint-config-lean

### Warn

- Formatting / simplification / consistency (e.g. arrow-body-style)
- Potentially missing something (e.g. accessor-pairs, array-callback-return)
- Incomplete refactoring (e.g. no-self-assign, no-self-compare)

### Error

- Potential bugs / misunderstandings (e.g. block-scoped-var)
- Non-linear control flow (e.g. no-continue)
- Unsafe/legacy constructs (e.g. no-eval, no-var, prefer-rest-params)

## Configs

### `type-checked`

Can be used standalone for [“dual linting”](https://typescript-eslint.io/troubleshooting/faqs/general/#how-does-typescript-eslint-compare-to-native-speed-linters).
