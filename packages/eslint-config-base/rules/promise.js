module.exports = {
  plugins: ['promise'],

  rules: {
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/prefer-await-to-then': 'error',
  },
};
