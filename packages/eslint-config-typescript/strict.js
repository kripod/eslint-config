module.exports = {
  extends: ['./rules/@typescript-eslint/requiring-type-checking'].map(
    require.resolve,
  ),
};
