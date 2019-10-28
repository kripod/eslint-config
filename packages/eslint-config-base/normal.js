module.exports = {
  extends: [
    './rules/airbnb-base',
    './rules/eslint-comments',
    './rules/filenames',
    './rules/promise',
    './rules/simple-import-sort',
    './rules/unicorn',
  ].map(require.resolve),
};
