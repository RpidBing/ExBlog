---
title: Vue 学习日志 <Part 1>
published: 2024-11-06
description: '这是一个关于 Vue.js 框架的学习记录'
image: ''
tags: [Learn, Front, Vue, Log]
category: 'CodeLog'
draft: false
lang: 'zh_CN'
---

# Vue framework 学习日志 Part 1

:::tip
> 学习途径 :
- 官方文档      : https://cn.vuejs.org/guide/quick-start.html
- B 站视频号    : BV1Pb4y157GV
- 教程作者码仓  : https://gitee.com/alex_john/vue-concise-tutorial/tree/main
- PS : 全文中的定义和解释 大部分为个人主观理解 表达不一定正确
:::

## 状态选项

### date

> 用于声明组件初始化响应式状态的函数
```js
// 用法
data() {
    return {
        变量 = 
    };
},
```

### methods

> 用于声明要混入到组件实例中的方法
```js
// 用法
methods: {
    函数名() {

    },
},

```

### watch

> 用于声明在数据更改时的侦听回调
:::tip
> 多用在需要监视变量动态情况,但是不能靠事件触发时使用
:::
```js
// 用法
watch: {
    变量(val, oldVal){
        处理代码<js>;
    }
}

```

### computed

> 用于声明要再组件实际上暴露的计算属性

```js
computed: {
    函数() {

    },
},
```
:::tip
> 对于 computed 的使用理解我又加深了一些 对于一些 需要计算值 通过变量动态调整的 的组件样式 可以使用computed的方法
:::

## 指令

### v-model 指令

> 可以实现双向绑定 - 当绑定的子组件变更了，会触发父组件绑定的值一起更新
```js
// 修饰符
.lazy - 懒加载
```


### v-bind 指令

> 单文件组件的 <style> 标签支持使用 v-bind CSS 函数将 CSS 的值链接到动态的组件状态 - 就是能让 属性 简单的绑定一个 对象 / 变量
```js
// 简写
v-bind: == :
```

### v-on 指令

> 用于给元素绑定事件监听器。
```js
// 接触写法

// 简写
v-on: == @

// 修饰符
.prevent - 调用 event.preventDefault() -- 不刷新

// 方法处理函数
v-on:click="<函数 or Js语句>"
```

### v-for 指令
> 基于原始数据多次渲染元素或模板块
```js
// 写法
// 初次学会的用法 是将数组变量中的 键 与 值 取出 且设置 key （类似于主键？） 来循环渲染
//ps: 在 js 的函数中 可以使用 filter 方法进行数组操作
    array = ["", ""],

<    v-for="(key, value) in array" >
```

### v-if 指令
> 基于表达式值的真假性，来条件性地渲染元素或者模板片段
```js
// 条件渲染一个元素
v-if = true // 渲染
v-if = false // 不渲染
```

### v-show 指令
> 基于表达式值的真假性，来改变元素的可见性
```js
// 条件显示一个元素 - 添加 display : none,
v-if = true // 显示
v-if = false // 不显示
```

:::tip
> 个人见解 若要重复使用 v-show 若仅用一次使用 v-if or (初始化使用)
:::
