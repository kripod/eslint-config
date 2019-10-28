module.exports = {
  extends: ['./rules/airbnb', './rules/react'].map(require.resolve),

  env: {
    browser: true,
  },
};
