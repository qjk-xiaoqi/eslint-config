const rules = require('../rules/javascript')
module.exports = {
  extends: [],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    // 指定 ECMAScript 版本 2021 (same as 12)
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: { ...rules },
}
