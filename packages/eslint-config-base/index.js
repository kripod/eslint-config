module.exports = {
  extends: ['./normal', './important'].map(require.resolve),
};
