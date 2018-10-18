# 首页

[![Build Status](https://travis-ci.org/code661/gulu.svg?branch=master)](https://travis-ci.org/code661/gulu)
[![NPM version][npm-image]][npm-url]
[![npm license][license-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/wish-ui.svg
[npm-url]: https://npmjs.org/package/wish-ui
[download-url]: https://npmjs.org/package/wish-ui
[license-image]: https://img.shields.io/npm/l/wish-ui.svg

Wish-UI 是一个基于 Vue 2.x 的前端 UI 组件库，它提供了 button、input、tabs 等常用组件，适合移动端和 PC 端使用。
是个人开发和维护的小项目，以后会提供更多的组件。
## 支持环境

- Wish-UI 基于 Vue2.x 开发，因此支持到现代浏览器和 IE 9 及以上
- Wish-UI所有组件均使用 flex 布局，详情请看[Can I use](https://caniuse.com/#search=flex)

## 注意事项

- Will-UI 库所有组件盒模型均使用`box-sizing:border-box`。在使用本UI库时，建议保持一致，所有元素开启 `border-box`
 盒模型：

```css
* {box-sizing:border-box}
```
  
## 安装使用

### 1. 安装「轱辘 UI」
```bash
yarn add wish-ui # 或者：npm i --save wish-ui
```

### 2. 在文件中引入「轱辘 UI」

````vue
<script>
import {Button} from 'wish-ui'
import 'wish-ui/dist/index.css'

export default{
  components:{
    'g-button':Button,
  }
}
</script>
