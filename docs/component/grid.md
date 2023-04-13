# Grid - 网格系统

## 组件概述

我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。

我们定义了两个概念，行`row`和列``col``，具体使用方法如下：

- 使用`row`在水平方向创建一行
- 将一组`col`插入在`row`中
- 在每个`col`中，键入自己的内容
- 通过设置`col`的span参数，指定跨越的范围，其范围是1到24
- 每个`row`中的`col`总和应该为24

## 代码示例

### 1. 基础用法
水平排列的布局。`col` 必须放在 `row` 里面。

<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

```vue
<g-row>
  <g-col span="12">col-12</g-col>
  <g-col span="12">col-12</g-col>
</g-row>
<g-row>
  <g-col span="8">col-8</g-col>
  <g-col span="8">col-8</g-col>
  <g-col span="8">col-8</g-col>
</g-row>
<g-row>
  <g-col span="6">col-6</g-col>
  <g-col span="6">col-6</g-col>
  <g-col span="6">col-6</g-col>
  <g-col span="6">col-6</g-col>
</g-row>
```

### 2. 左右偏移
通过设置 `offset` 属性，将列进行左右偏移，偏移栅格数为 `offset` 的值。

```vue
<g-row>
  <g-col span="8">g-col-8</g-col>
  <g-col span="8" offset="8">g-col-8 | offset-8</g-col>
</g-row>
<g-row>
  <g-col span="6" offset="8">g-col-6 | offset-8</g-col>
  <g-col span="6" offset="4">g-col-6 | offset-4</g-col>
</g-row>
<g-row>
  <g-col span="12" offset="8">g-col-12 | offset-8</g-col>
</g-row>
```

<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>


### 3. Flex 布局
通过给 `row` 设置参数 `align` 为不同的值，来定义子元素的排布方式。

<ClientOnly>
<grid-demo-5></grid-demo-5>
</ClientOnly>

```vue
<p>子元素向左排列</p>
<g-row align="left">
  <g-col span="4">col-4</g-col>
  <g-col span="4">col-4</g-col>
  <g-col span="4">col-4</g-col>
  <g-col span="4">col-4</g-col>
</g-row>
<p>子元素向右排列</p>
<g-row align="right">
  <g-col span="4">col-4</g-col>
  <g-col span="4">col-4</g-col>
  <g-col span="4">col-4</g-col>
  <g-col span="4">col-4</g-col>
</g-row>
<p>子元素居中排列</p>
<g-row align="center">
  <g-col span="4">col-4</g-col>
  <g-col span="4">col-4</g-col>
  <g-col span="4">col-4</g-col>
  <g-col span="4">col-4</g-col>
</g-row>
```

### 4. 区块间隔

通过给 `row` 添加 `gutter` 属性，可以给下属的 `col` 添加间距，推荐使用 `(16+8n)px` 作为栅格间隔。

<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

```vue{1}
<g-row gutter="16">
  <g-col span="6">col-6/g-col>
  <g-col span="6">col-6/g-col>
  <g-col span="6">col-6/g-col>
  <g-col span="6">col-6/g-col>
</g-row>
```

### 5. 响应式布局

参照 Bootstrap 的 响应式设计，预设四个响应尺寸：xs sm md lg，详见 API。

<ClientOnly>
<grid-demo-4></grid-demo-4>
</ClientOnly>

```vue
<g-row>
  <g-col span="2" :pad="{span: 4}" :pc="{span: 6}" :widthPc="{span: 8}" >Col</g-col>
  <g-col span="20" :pad="{span: 16}" :pc="{span: 12}" :widthPc="{span: 8}" >Col</g-col>
  <g-col span="2" :pad="{span: 4}" :pc="{span: 6}" :widthPc="{span: 8}" >Col</g-col>
</g-row>
```



## API

### Row props

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| gutter | 栅格间距，单位 px，左右平分	| Number  | 0 |
| align | 子元素的水平排列方式，可选值为`start`、`end`、`center`	| String  | - |


### Col props

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| span | 栅格的占位格数，可选值为0~24的整数	| Number/String  | - |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格		| Number/String | - |
| ipad | `<577px` 响应式栅格，一个包含`offset`或`span`属性的对象	| Object  | 0 |
| narrowPc | `<768px` 响应式栅格，一个包含`offset`或`span`属性的对象	| Object  | 0 |
| pc | `<992px` 响应式栅格，一个包含`offset`或`span`属性的对象	| Object  | 0 |
| widePc | `<1200px` 响应式栅格，一个包含`offset`或`span`属性的对象	| Object  | 0 |
| ultraWidePc | `<1600px` 响应式栅格，一个包含`offset`或`span`属性的对象	| Object  | 0 |

> 注：这是一个mobile first Design，默认span、offset为手机的样式设置。
