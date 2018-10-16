# Input - 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 代码示例

### 1. 四种 Input 状态

<ClientOnly>
<input-demo-1></input-demo-1>
</ClientOnly>

```vue
<template>
  <g-input placeholder="请输入内容"></g-input>
  <g-input placeholder="错误提示显示" error="我是错误提醒文字"></g-input>
  <g-input placeholder="这是disabled状态" disabled></g-input>
  <g-input placeholder="这是readonly状态" readonly></g-input>
</template>
```

### 2. 支持 Input 事件

支持 Input 事件触发：change、blur、focus、input

<ClientOnly>
<input-demo-2></input-demo-2>
</ClientOnly>

```vue
<g-input placeholder="支持事件触发" 
  @change="onChange" 
  @blur="onBlur" 
  @focus="onFocus" 
  @input="onInput"
></g-input>
<script>
  export defalut{
    methods:{
      onChange($event){
        //得到 change 的event对象
      },
      onBlur($event){
        //得到 blur的event对象
      },
      onFocus($event){
        //得到 focus 的event对象
      },
      onInput(value){
        //得到 Input 事件触发时的 value 值
      }
    }
  }
</script>
```

### 3. 双向绑定

可以使用 `v-model` 实现数据的双向绑定。

<ClientOnly>
<input-demo-3></input-demo-3>
</ClientOnly>

```vue
<g-input placeholder="双向绑定value值" v-model="message"></g-input>
<span>{{message}}</span>
<g-button @click="changeMessage">点我变脸</g-button>
<script>
export default {
  data() {
    return {
      message: `我是初始值 🐶`
    };
  },
  methods: {
    changeMessage() {
      let zoo = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯"];
      let num = Math.floor(Math.random() * 10);
      this.message = zoo[num] + zoo[num];
    }
  }
};
</script>
```


## API

### Input props

| 属性 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| value | 绑定的值，可使用 `v-model` 双向绑定	| String/Number  | - |
| placeholder | 输入框占位文本	 | String | -|
| disabled | 设置输入框为禁用状态		 | Boolean | false|
| readonly | 设置输入框为只读			 | Boolean | false|
| error | 显示输入框错误状态				| String / Boolean | false|

### Input events
