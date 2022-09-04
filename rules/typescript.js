const baseRules = require('./base')

module.exports = {
  ...baseRules,
  // 与TS冲突的eslint config
  'no-undef': 'off',
  'no-shadow': 'off',
  'no-redeclare': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  // 不允许作用域内部有跟外部一样的变量名,但是从实际应用出发，对于如下变量允许存在同名变量
  // ['data', 'res', 'e', 'err']
  '@typescript-eslint/no-shadow': [
    'error',
    {
      allow: ['data', 'res', 'e', 'err'],
    },
  ],
  // 未使用变量
  '@typescript-eslint/no-unused-vars': ['warn'],
  // 允许定义空的接口，可配置为允许单继承下的空接口：
  '@typescript-eslint/no-empty-interface': 'off',
  // 允许使用() => {}
  '@typescript-eslint/no-empty-function': 'off',
  // 不允许定义前使用变量，但是对于function和Class，允许放在文件尾部
  '@typescript-eslint/no-use-before-define': ['error', { classes: false, functions: false }],
  // 不允许重复的变量名，包括重复的变量和TS类型名
  '@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: true }],
}
