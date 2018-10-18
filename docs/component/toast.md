# Toast - 提示弹出框

轻量级的信息反馈组件，可在页面顶部、中间和底部居中显示，可自动消失。常用于主动操作后的反馈提示。

## 组件概述

Toast 组件的实现应用了 Vue 的插件，在 Vue.prototype 中添加了全局方法 `$toast`

::: tip
调用 `Vue.use(Toastplugin)` 后，在 vue instance 中可以使用 `$toast` 方法。
:::

## 代码示例

### 1. 基础用法

有三个弹出位置选择，分别为 top、middle、bottom。默认位置为 top

<ClientOnly>
<toast-demo-1></toast-demo-1>
</ClientOnly>

```vue
<g-button @click="$toast('这是从上方弹出的信息')">上方弹出</g-button>
<g-button @click="$toast('这是从中间弹出的信息',{toastPosition:'middle'})">中间弹出</g-button>
<g-button @click="$toast('这是从底部弹出的信息',{toastPosition:'bottom'})">下方弹出</g-button>
```

### 2. 可手动关闭

可以添加关闭按钮，或设置关闭时间，默认 5 秒关闭。

`autoClose` 选项的值为 `false` 将显示默认的关闭按钮。当 `autoClose` 选项的值是数字时，将该数字设置为关闭时间，单位是秒。

<ClientOnly>
<toast-demo-2></toast-demo-2>
</ClientOnly>

```vue{3,9}
<g-button @click="$toast('点击右边按钮关闭弹框 👉',
  {
    autoClose:false,
    positionToast:'middle'
  })"
>有关闭按钮</g-button>
<g-button @click="$toast('十秒之后再关闭弹框',
  {
    autoClose:10,
    positionToast:'middle'
  })"
>十秒后关闭</g-button>
```

### 3. 弹出内容支持 HTML 片段

将 `enableHtml` 属性设置为 `true`，就会被传入的文本当作 HTML 片段处理。

<ClientOnly>
<toast-demo-3></toast-demo-3>
</ClientOnly>

```vue
<g-button @click="$toast('<strong>这是 <i>HTML</i> 片段</strong>',
{enableHtml:true})"
>开启 HTML</g-button>
```

::: warning 注意
`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。因此在 `enableHtml` 打开的情况下，请确保 `message` 的内容是可信的，永远不要将用户提交的内容赋值给 `message` 属性。
:::

### 4. 自定义关闭按钮

给 `closeButton` 传入一个对象，当中的 `text` 属性定义关闭按钮的文字信息。`callBack` 定义点击关闭按钮时的回调函数, 该回调函数的参数为被关闭的 `toast` 实例。

<ClientOnly>
<toast-demo-4></toast-demo-4>
</ClientOnly>

```vue {15-19}
<template>
  <g-button @click="showToast">点我有惊喜</g-button>
</template>
<script>
export default{
  data(){
    return{
      msg= '回调函数还未执行'
    }
  }
  methods:{
    showToast(){
      const propData={
        autoClose:false,
        closeButton:{
          text:'残忍拒绝',
          callBack: toast => {
            this.msg = "让 " + toast.$slots.default[0] + "，被拒绝了";
          }
        }
      }
      const zoo = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯"];
      let num = Math.floor(Math.random() * 10);
      const message = zoo[num] + "给个五星好评";
      this.$toast(message, propData)
    },
  },
}
</script>
```

## API


$toast接口使用方法： `$toast(message,props)`
- message
  - type类型: `String` 
  - 说明: 弹出框 toast 的文字信息，在开启 `enableHtml` 属性后可插入 HTML 片段

- props
  - type类型: `Object`
  - 说明：描述弹出框 toast 的对象，详细属性/方法（Attribute）如下：

  | 参数 | 说明 | 类型 | 默认值 |
  | -- |:--|:--|:--|
  | position | 描述toast弹出方位，可选值有:`top` `middle` `botttom` | String | top |
  | autoClose | 选择是否自动关闭或延迟关闭事件 | false,Number | 5 |
  | closeButton | 描述关闭按钮信息，当 autoClose 为 false 时，关闭按钮即出现 | Object | - |
  | enableHtml | toast 是否支持HTML片段 | Boolean | false |
