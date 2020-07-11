module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
  ],
  plugins: ['vue'],
  rules: {
    'linebreak-style': [
      'error',
      require('os').EOL === '\r\n' ? 'windows' : 'unix',
    ],
  },
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
