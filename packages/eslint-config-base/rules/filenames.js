module.exports = {
  plugins: ['filenames'],

  rules: {
    // Accept kebab-cased filenames with a special transform
    'filenames/match-exported': ['error', [null, 'kebab']],
  },
};
