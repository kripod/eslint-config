module.exports = {
  extends: ['@kripod/eslint-config-base/important', 'prettier/react'].map(
    require.resolve,
  ),
};
