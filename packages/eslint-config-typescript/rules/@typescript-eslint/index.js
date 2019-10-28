const {
  rules: baseBestPracticesRules,
} = require('eslint-config-airbnb-base/rules/best-practices');
const { rules: baseES6Rules } = require('eslint-config-airbnb-base/rules/es6');
const {
  rules: baseStyleRules,
} = require('eslint-config-airbnb-base/rules/style');
const {
  rules: baseVariablesRules,
} = require('eslint-config-airbnb-base/rules/variables');

module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  rules: {
    // Interfaces can be implemented, extended and augmented
    // See: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#types-or-interfaces
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/prefer-function-type': 'error',

    // Override the base config, preferring rules based on type information:

    camelcase: 'off',
    '@typescript-eslint/camelcase': baseStyleRules.camelcase,

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function':
      baseBestPracticesRules['no-empty-function'],

    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers':
      baseBestPracticesRules['no-magic-numbers'],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': baseVariablesRules['no-unused-vars'],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        ...baseVariablesRules['no-use-before-define'][1],
        typedefs: true,
      },
    ],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor':
      baseES6Rules['no-useless-constructor'],
  },
};
