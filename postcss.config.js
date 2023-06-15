module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
    }),
    require('postcss-clamp'),
    require('postcss-calc'),
  ],
}
