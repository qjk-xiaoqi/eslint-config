const rules = require('../rules/javascript')

module.exports = {
  files: ['*.js'],
  // 配置时可省略报名中的 eslint-config- 前缀
  extends: ['airbnb-base', 'prettier'],
  rules: {
    ...rules,
  },
}
