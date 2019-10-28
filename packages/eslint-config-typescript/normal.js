module.exports = {
  extends: [
    '@kripod/eslint-config-base/normal',
    './rules/@typescript-eslint',
  ].map(require.resolve),
};
