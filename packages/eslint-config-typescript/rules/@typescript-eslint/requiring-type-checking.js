const {
  rules: baseBestPracticesRules,
} = require('eslint-config-airbnb-base/rules/best-practices');

module.exports = {
  extends: 'plugin:@typescript-eslint/recommended-requiring-type-checking',

  rules: {
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      { ignoreRhs: true },
    ],
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      { allowNullable: true, ignoreRhs: true },
    ],
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

    // Override the base config, preferring rules based on type information:

    'require-await': 'off',
    '@typescript-eslint/require-await': baseBestPracticesRules['require-await'],

    'unicorn/prefer-includes': 'off',
    '@typescript-eslint/prefer-includes': 'error',

    'unicorn/prefer-starts-ends-with': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  },
};
