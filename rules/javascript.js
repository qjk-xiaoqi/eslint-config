const baseRules = require('./rules/base')

module.exports = {
  ...baseRules,
  'no-shadow': [
    'error',
    {
      allow: ['data', 'res', 'e', 'err'],
    },
  ],
  // 未使用变量
  // 'no-unused-vars': '',
  // 不允许定义前使用变量，但是对于function和Class，允许放在文件尾部
  'no-use-before-define': ['error', { classes: false, functions: false }],
}
