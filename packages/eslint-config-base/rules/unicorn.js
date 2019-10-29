const { rules: baseES6Rules } = require('eslint-config-airbnb-base/rules/es6');

module.exports = {
  extends: 'plugin:unicorn/recommended',

  rules: {
    'unicorn/import-index': 'off',
    'unicorn/prevent-abbreviations': 'off',

    'unicorn/custom-error-definition': 'error',
    'unicorn/explicit-length-check': ['error', { 'non-zero': 'greater-than' }],
    'unicorn/no-fn-reference-in-iterator': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'error',

    // A base filename should exactly match the name of its default export
    // See: https://github.com/airbnb/javascript#naming--filename-matches-export
    'unicorn/filename-case': [
      'error',
      { cases: { camelCase: true, pascalCase: true, kebabCase: true } },
    ],

    // Improve compatibility with `unicorn/no-unreadable-array-destructuring`
    // See: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unreadable-array-destructuring.md#note
    'prefer-destructuring': [
      'error',
      {
        ...baseES6Rules['prefer-destructuring'][1],
        VariableDeclarator: {
          ...baseES6Rules['prefer-destructuring'][1].VariableDeclarator,
          array: false,
        },
        AssignmentExpression: {
          ...baseES6Rules['prefer-destructuring'][1].AssignmentExpression,
          array: false,
        },
      },
    ],
  },
};
