# 基本

支持 js ts

安装
pnpm add -D @xq/eslint-config

```
// .eslintrc.js
module.exports = {
extends: ['@xq/eslint-config']
}
```

# React

```
// .eslintrc.js
module.exports = {
extends: ['@xq/eslint-config/react']
}
```

- eslint-config-airbnb: 该包提供了所有的 Airbnb 的 ESLint 配置，作为一种扩展的共享配置，你是可以修改覆盖掉某些不需要的配置的，该工具包包含了 react 的相关 Eslint 规则(eslint-plugin-react 与 eslint-plugin-jsx-a11y)，所以安装此依赖包的时候还需要安装刚才提及的两个插件
- eslint-config-airbnb-base: 与上一个包的区别是，此依赖包不包含 react 的规则，一般用于服务端检查。
- eslint-config-prettier 将会禁用掉所有那些非必须或者和 prettier 冲突的规则。
