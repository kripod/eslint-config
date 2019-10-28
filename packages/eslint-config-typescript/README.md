# @kripod/eslint-config-typescript

Strict linter configuration for TypeScript.

## Usage

After installing the package, append the following to your [ESLint configuration](https://eslint.org/docs/user-guide/configuring):

```jsonc
{
  // Make sure to put it last, letting it override other configs
  "extends": "@kripod/eslint-config-typescript"
}
```

To enable additional rules requiring type checking, use the configuration below:

```jsonc
{
  // Please be aware that this may be slower to run
  "extends": [
    "@kripod/eslint-config-typescript",
    "@kripod/eslint-config-typescript/strict"
  ]
}
```
