module.exports = {
  extends: ['./rules/airbnb'].map(require.resolve),

  env: {
    browser: true,
  },
};
