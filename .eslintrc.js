module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'prettier/vue',
    'plugin:vue/base',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    'linebreak-style': [
      'error',
      require('os').EOL === '\r\n' ? 'windows' : 'unix',
    ],
    'prettier/prettier': [
      1,
      {
        printWidth: 80,
        trailingComma: 'all',
        singleQuote: true,
        semi: true,
        arrowParens: 'avoid',
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],
  },
};
