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
    '@vue/prettier',
  ],
  plugins: ['vue'],
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
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: true,
      },
    ],
    'no-console': 2,
    'no-debugger': 2,
    'no-alert': 2,
  },
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
