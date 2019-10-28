module.exports = {
  extends: [
    './normal',
    './rules/@typescript-eslint/requiring-type-checking',
    './important',
  ].map(require.resolve),
};
