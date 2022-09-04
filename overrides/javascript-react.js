const reactRules = require('../rules/react')
const javascriptRules = require('../rules/javascript')

module.exports = {
  files: ['*.jsx'],
  // 配置时可省略报名中的 eslint-config- 前缀
  extends: [
    'airbnb-base',
    'airbnb/rules/react',
    // react和react-hooks相关配置
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...javascriptRules,
    ...reactRules,
  },
}
