const rules = require('../rules/javascript')

module.exports = {
  files: ['*.js'],
  extends: ['eslint-config-airbnb-base', 'eslint-config-prettier'],
  rules: { ...rules },
}
