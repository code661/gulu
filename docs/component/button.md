# Button - 按钮

常用的基础操作按钮，触发业务逻辑时使用。

## 代码示例

### 1. 简单用法

基础的按钮用法。

<ClientOnly>
<button-demo-1></button-demo-1>
</ClientOnly>

```vue
<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">设置</g-button>
    <g-button :loading="true">加载中</g-button>
    <g-button icon="info" 
      @click="loading=!loading" 
      :loading="loading"
    >点击加载</g-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  }
};
</script>
```


### 2. 图标按钮

带图标的无文字按钮

<ClientOnly>
<button-demo-2></button-demo-2>
</ClientOnly>


  
```vue
<g-button icon="settings"></g-button>
<g-button icon="ups"></g-button>
<g-button icon="download"></g-button>
<g-button icon="left"></g-button>
<g-button icon="right"></g-button>
<g-button icon="info"></g-button>
<g-button icon="bell"></g-button>
<g-button icon="warning-circle"></g-button>
<g-button icon="wechat"></g-button>
<g-button icon="wechat-pay"></g-button>  
```

### 3. 按钮组

将多个`Button`放入`ButtonGroup`内，可实现按钮组合的效果

  <ClientOnly>
  <button-demo-3></button-demo-3>
  </ClientOnly>

```vue
<g-button-group class="groupItem">
  <g-button icon="left">上一页</g-button>
  <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
<g-button-group>
  <g-button icon="share"></g-button>
  <g-button icon="edit"></g-button>
  <g-button icon="delete"></g-button>
</g-button-group>
```

## API

### Button props

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| icon | 设置按钮的图标类型| String  | - |
| orientation | 设置图标和文字之间的显示位置 | String | left |
| loading | 设置按钮为加载中状态 | Boolean | false |


## 可选图标

### 所有图标：

<ClientOnly>
<icon-demo></icon-demo>
</ClientOnly>

### 如何单独使用`Icon`组件

先引入`<Icon />`组件，指定图标对应的 `name` 属性，示例代码：

```html
<Icon name="settings" />
```


