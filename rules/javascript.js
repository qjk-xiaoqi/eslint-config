module.exports = {
  // 从实际应用来看，嵌套的三元表达式能简化较多的代码
  'no-nested-ternary': 'off',
  // 关闭 强制类方法使用 this
  'class-methods-use-this': 'off',
  // 从实际应用来看，_xxx这种变量形式比较常见，关闭此项规则
  'no-underscore-dangle': 'off',
  // import时，可以忽略文件后缀
  'import/extensions': 'off',
  'import/no-unresolved': 'off',
  // 不推荐使用 export default ：https://jkchao.github.io/typescript-book-chinese/tips/avoidExportDefault.html#commonjs-%E4%BA%92%E7%94%A8
  'import/prefer-default-export': 'off',
  // 后端接口返回snake_case的情况比较多，关闭此配置
  camelcase: 'off',
  // 开启 prettier配置，代码格式(空格换行等)统一由prettier接管
  'prettier/prettier': 'error',
  // 单个文件最大600行，不包含空行和注释
  'max-lines': ['warn', { max: 600, skipBlankLines: true, skipComments: true }],
}
