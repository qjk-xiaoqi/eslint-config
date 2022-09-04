const reactRules = require('../rules/react')
const typescriptRules = require('../rules/typescript')

module.exports = {
  files: ['*.jsx'],
  // 配置时可省略报名中的 eslint-config- 前缀
  extends: [
    'airbnb-base',
    'airbnb/rules/react',
    'plugin:@typescript-eslint/recommended',
    // react和react-hooks相关配置
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  // 可以省略包名的前缀 eslint-plugin-。
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...typescriptRules,
    ...reactRules,
  },
}
