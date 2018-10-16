# Collapse - 折叠面板

可以折叠/展开的内容区域。

## 代码示例

### 1. 同时显示多个面板

默认可以同时展开多个面板，可以设置默认展开第几个。这个例子默认展开了第一个和第二个。

<ClientOnly>
<collapse-demo-1></collapse-demo-1>
</ClientOnly>

```vue
<g-collapse :value.sync="selectedItem">
  <g-collapse-item title="史蒂夫·乔布斯" name="1">
    史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
  </g-collapse-item>
  <g-collapse-item title="斯蒂夫·盖瑞·沃兹尼亚克" name=2 >
    斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
  </g-collapse-item>
  <g-collapse-item title="乔纳森·伊夫" name=3 >
    乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
  </g-collapse-item>
</g-collapse>
```

### 2. 每次至多展开一个面板

通过设置属性accordion开启手风琴模式，每次只能打开一个面板。

<ClientOnly>
<collapse-demo-2></collapse-demo-2>
</ClientOnly>

```vue
<g-collapse :value.sync="selectedItem" accordion>
  <g-collapse-item title="史蒂夫·乔布斯" name="1">
    史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
  </g-collapse-item>
  <g-collapse-item title="斯蒂夫·盖瑞·沃兹尼亚克" name=2 >
    斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
  </g-collapse-item>
  <g-collapse-item title="乔纳森·伊夫" name=3 >
    乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
  </g-collapse-item>
</g-collapse>
```

## API

### Collapse props

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| value | 当前激活的面板的 name | Array  | - |
| accordion | 是否开启手风琴模式，开启后每次至多展开一个面板 | Boolean | false |

### Collapse-item props

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| name | 当前面板的 name，与 `Collapse`的`value`相对应<span class="Apple-tab-span" style="white-space:pre"></span> | Array/Number | - |
| title | 表示展示面板的标题 | String | - |