# Layout - 布局

协助进行页面级整体布局。

## 组件概述

- `Layout`：布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。
- `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

::: warning 注意
采用 flex 布局实现，请注意[浏览器兼容性](https://caniuse.com/#search=flex)问题。
:::

## 代码示例

### 1. 上中下布局

通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定

<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

```vue
<g-layout>
  <g-header>Header</g-header>
  <g-content>Content</g-content>
  <g-footer>Footer</g-footer>
</g-layout>
```

### 2. 顶部-侧边布局-通栏

同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。

<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

```vue
<g-layout class="g-layout">
  <g-sider class="g-sider">Sider</g-sider>
  <g-layout class="g-layout">
    <g-header class="g-header">Header</g-header>
    <g-content class="g-content">Content</g-content>
    <g-footer class="g-footer">Footer</g-footer>        
  </g-layout>
</g-layout>
```

### 3.顶部-侧边布局

拥有顶部导航及侧边栏的页面，多用于展示类网站。

<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>


```vue
<g-layout class="g-layout">
  <g-header class="g-header">Header</g-header>
  <g-layout class="g-layout">
    <g-sider class="g-sider">Sider</g-sider>
    <g-content class="g-content">Content</g-content>
  </g-layout>
  <g-footer class="g-footer">Footer</g-footer>        
</g-layout>
```

<ClientOnly>
<layout-demo-4></layout-demo-4>
</ClientOnly>

```vue
<g-layout class="g-layout">
  <g-header class="g-header">Header</g-header>
  <g-layout class="g-layout">
    <g-content class="g-content">Content</g-content>
    <g-sider class="g-sider">Sider</g-sider>
  </g-layout>
  <g-footer class="g-footer">Footer</g-footer>        
</g-layout>
```
