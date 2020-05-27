module.exports = {
  plugins: [
    ['@babel/transform-runtime', { corejs: false, useESModules: true }],
  ],
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    ['@babel/react'],
  ],
};
