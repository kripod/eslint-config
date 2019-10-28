module.exports = {
  extends: [
    '@kripod/eslint-config-base/important',
    'prettier/@typescript-eslint',
  ].map(require.resolve),
};
