const { rules: baseReactRules } = require('eslint-config-airbnb/rules/react');

module.exports = {
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Using a type system makes it safe enough to spread props
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
