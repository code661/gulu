# Popover - 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 代码示例

### 1. 基本用法

最简单的用法，浮层的大小由内容区域决定。

<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

```vue
<g-popover>
  <div slot="content">
    <h4>这是标题</h4>
    <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
  </div>
  <g-button>click 弹出</g-button>
</g-popover>
```

### 2. 两种触发方式

支持三种触发方式：鼠标悬停、点击。默认是点击。

<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>

```vue{9}
<g-popover position="bottom">
  <div slot="content">
    <h4>这是标题</h4>
    <div>这是一段内容。</div>
  </div>
  <g-button>click 弹出</g-button>
</g-popover>

<g-popover trigger="hover">
  <div slot="content">
    <h4>这是标题</h4>
    <div>这是一段内容。</div>
  </div>
  <g-button >hover 弹出</g-button>
</g-popover>
```

### 3. 四种方位选择

组件提供了 4 个不同的方向显示 Popover，具体配置可查看 API。

<ClientOnly>
<popover-demo-3></popover-demo-3>
</ClientOnly>

```vue{1,9,17,25}
<g-popover trigger="hover">
  <div slot="content">
    <h4>这是标题</h4>
    <div>这是一段内容。</div>
  </div>
  <g-button>hover 向上</g-button>
</g-popover>

<g-popover trigger="hover" position="bottom">
  <div slot="content">
    <h4>这是标题</h4>
    <div>这是一段内容。</div>
  </div>
  <g-button >hover 向下</g-button>
</g-popover>

<g-popover trigger="hover" position="left">
  <div slot="content">
    <h4>这是标题</h4>
    <div>这是一段内容。</div>
  </div>
  <g-button >hover 向左</g-button>
</g-popover>

<g-popover trigger="hover" position="right">
  <div slot="content">
    <h4>这是标题</h4>
    <div>这是一段内容。</div>
  </div>
  <g-button >hover 向右</g-button>
</g-popover>
```

## API

### Popover props

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| trigger | 触发方式，可选值为`hover`（悬停）`click`（点击）| String  | click |
| position | 提示框出现的位置，可选值为`top` `bottom` `right` `left` | String | top |
