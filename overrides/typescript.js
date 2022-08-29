const typescriptRules = require('../rules/typescript')
const javascriptRules = require('../rules/javascript')

module.exports = {
  files: ['*.ts'],
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-prettier',
    // ts推荐配置
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: { ...javascriptRules, ...typescriptRules },
}
