# Tabs - 标签页

选项卡切换组件，常用于平级区域大块内容的的收纳和展现。

## 代码示例

### 1. 基础用法

`selected` 与 TabItem 和 TabsPane 的 `name` 对应，用于标识当前激活的是哪一项

<ClientOnly>
<tabs-demo-1></tabs-demo-1>
</ClientOnly>

```vue{1}
<g-tabs selected="1">
  <g-tabs-head>
    <g-tabs-item name="1">标签一</g-tabs-item>
    <g-tabs-item name="2">标签二</g-tabs-item>
    <g-tabs-item name="3">标签三</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">标签一的内容</g-tabs-pane>
    <g-tabs-pane name="2">标签二的内容</g-tabs-pane>
    <g-tabs-pane name="3">标签三的内容</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```

### 2. 禁用某一项

<ClientOnly>
<tabs-demo-2></tabs-demo-2>
</ClientOnly>

```vue{4}
<g-tabs selected="1">
  <g-tabs-head>
    <g-tabs-item name="1">标签一</g-tabs-item>
    <g-tabs-item name="2" disabled >标签二</g-tabs-item>
    <g-tabs-item name="3">标签三</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">标签一的内容</g-tabs-pane>
    <g-tabs-pane name="2">标签二的内容</g-tabs-pane>
    <g-tabs-pane name="3">标签三的内容</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```

### 3. 设置为纵向布局

<ClientOnly>
<tabs-demo-3></tabs-demo-3>
</ClientOnly>

```vue{1}
<g-tabs selected="1" direction="vertical">
  <g-tabs-head>
    <g-tabs-item name="1">标签一</g-tabs-item>
    <g-tabs-item name="2">标签二</g-tabs-item>
    <g-tabs-item name="3">标签三</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">标签一的内容</g-tabs-pane>
    <g-tabs-pane name="2">标签二的内容</g-tabs-pane>
    <g-tabs-pane name="3">标签三的内容</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```

### 4. 附加内容

设置 slot `actions` 可以在页签右边、纵向布局的下边添加附加操作。

<ClientOnly>
<tabs-demo-4></tabs-demo-4>
</ClientOnly>

```vue{6}
<g-tabs selected="1">
  <g-tabs-head>
    <g-tabs-item name="1">标签一</g-tabs-item>
    <g-tabs-item name="2">标签二</g-tabs-item>
    <g-tabs-item name="3">标签三</g-tabs-item>
    <g-button slot="actions" icon="edit"></g-button>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">标签一的内容</g-tabs-pane>
    <g-tabs-pane name="2">标签二的内容</g-tabs-pane>
    <g-tabs-pane name="3">标签三的内容</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```

## API

### Tabs props

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| selected | 设置初始激活 tab 面板的 `name` 值，此项为必选项| String  | - |
| direction | 设置页签的排列样式是横向或纵向，默认为横向。可选值有`vertical`、`horizontal` | String | `horizontal` |

### TabsItem props

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| name | 表示该选项卡的唯一标记，与`TabsPane`的`name`属性相对应，此项为必选项| String  | - |
| disabled | 是否禁用该选项卡 | Boolean | false |

### TabsPane props

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| name | 表示标签页的唯一标记，与`TabsItem`的`name`属性相对应，此项为必选项| String  | - |