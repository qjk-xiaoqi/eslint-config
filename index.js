// 默认支持 js、ts 项目
const javascript = require('./overrides/javascript')
const typescript = require('./overrides/typescript')

module.exports = {
  extends: [
    // 解决prettier和eslint的冲突，此项配置必须在最后
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    // 指定 ECMAScript 版本 2021 (same as 12)
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [javascript, typescript],
}
