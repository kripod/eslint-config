module.exports = {
  extends: [
    '@kripod/eslint-config-base/normal',
    './rules/@typescript-eslint',
    './rules/import',
  ].map(require.resolve),
};
