const typescriptRules = require('../rules/typescript')

module.exports = {
  files: ['*.ts'],
  extends: [
    'airbnb-base',
    'prettier',
    // plugin: 包名 (省略了前缀，比如，react) / 配置名称 (比如 recommended)
    // ts推荐配置:  定义文件继承的子规范
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  // plugins属性值: 可以省略包名的前缀 eslint-plugin-。
  // 依赖的插件 @typescript-eslint/eslint-plugin
  plugins: ['@typescript-eslint', 'prettier'],
  rules: { ...typescriptRules },
  // settings：该字段定义的数据可以在所有的插件中共享。这样每条规则执行的时候都可以访问这里面定义的数据
  settings: {
    // Apply special parsing for TypeScript files
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
      },
    },
    // Append 'ts' extensions to Airbnb 'import/extensions' setting
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    // Resolve type definition packages
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
}
