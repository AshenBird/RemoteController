# remote-controller-fore-end

## 推荐的 VS Code 配置

```js
// /path/tos/ettings.json
{
  // 保存时调用 eslint 进行修复，这个配置需要安装 eslint 插件
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

  // 允许 eslint 作为格式化处理器
  "eslint.format.enable": true,
  
  // 关闭 vetur 插件的代码校验，因为已经有 eslint 帮我们校验了
  "vetur.validation.template": false,

  // .vue 文件中 docs 自定义标签的语法高亮
  "vetur.grammar.customBlocks": {
    "docs": "md",
  }
}
```

## Project setup

```shell
yarn install
```

### Compiles and hot-reloads for development

```shell
yarn serve
```

### Compiles and minifies for production

```shell
yarn build
```

### Run your unit tests

```shell
yarn test:unit
```

### Lints and fixes files

```shell
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 比较重要的依赖

[node-qrcode: 通用的 js 二维码生成包](https://github.com/soldair/node-qrcode)
[jsQr: 一个 js 二维码识别包](https://github.com/cozmo/jsQR#readme)
