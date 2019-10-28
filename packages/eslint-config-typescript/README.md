# @kripod/eslint-config-typescript

Strict linter configuration for TypeScript.

## Usage

After installing the package, append the following to your [ESLint configuration](https://eslint.org/docs/user-guide/configuring):

```json
{
  "extends": "@kripod/eslint-config-typescript"
}
```

To enable additional rules requiring type checking, use the configuration below, instead of the previous one:

```jsonc
{
  // Please be aware that this may be slower to run
  "extends": "@kripod/eslint-config-typescript/strict"
}
```
