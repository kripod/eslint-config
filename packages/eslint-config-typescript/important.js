module.exports = {
  extends: ['@kripod/eslint-config-base/important', './rules/prettier'].map(
    require.resolve,
  ),
};
