module.exports = {
  plugins: ['simple-import-sort'],

  rules: {
    // Disable other sorting rules
    'sort-imports': 'off',
    'import/order': 'off',

    'simple-import-sort/sort': 'error',
  },
};
