module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

        // Using a type system makes it safe enough to spread props
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
