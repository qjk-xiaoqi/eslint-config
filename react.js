const javascriptReact = require('./overrides/javascriptReact')
const typescriptReact = require('./overrides/typescriptReact')

module.exports = {
  extends: ['./index'],
  overrides: [javascriptReact, typescriptReact],
}
