module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: '.',
        cwd: 'babelrc',
        alias: {
          '#': './src',
          '~': './',
        },
      },
    ],
  ],
}
