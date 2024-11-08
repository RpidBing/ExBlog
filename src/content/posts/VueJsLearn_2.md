---
title: VueLearn_2.md
published: 2024-11-08
description: ''
image: ''
tags: []
category: ''
draft: false 
lang: ''
---

# Vue framework 学习日志 Part 2

:::note
> 学习途径 :
- 官方文档      : https://cn.vuejs.org/guide/quick-start.html
- B 站视频号    : BV1Pb4y157GV
- 教程作者码仓  : https://gitee.com/alex_john/vue-concise-tutorial/tree/main
- PS : 全文中的定义和解释 大部分为个人主观理解 表达不一定正确
:::

## 组件和Props

> 在 Vue 的 template 标签中 我们可以把多个重复使用的部分 做成 vue组件 存放在 components文件夹中 并作为子组件插入到 App.vue 中使用

### 组件创建与使用

> 在 components 文件夹下创建好 将要构建的 组件vue文件
:::note
```js
// Vue 文件的编写模板为: 

<template> 
    {/* 编写 HTML 语句 */}
</template>

<script>
    {/* 编写 Vue.js 语句 */}
</script>

<style>
    {/* 编写 CSS 语句 */}
</style>

```
:::

> 在创建好组件文件后 如何在父组件中导入使用 
:::tip
> PS : 父组件中创建的函数与方法只能在父组件中进行修改 子组件只能进行触发并不能进行修改
:::

> 第一步 import 导入:
```js
<script>
    import 组件名 from "组件路径 (相对父组件路径)"

    export default {
        ...
    }
</script>
```

> 第二步 方法导入:
```js
    import ...
    export default {
        ...

        components: { 组件名 }
    }
```

> 第三步 在 template 中插入使用:
```js
<template>
    ...
    < 组件名 />
    ...
</template>
```

### 父组件 向 子组件 传递方法、函数、数据

> 需要在子组件中使用 props 关键字导入
```js
export default {
    props: [ "自拟名" ],
}
```

> 通过 v-bind 在父组件中的子组件插入部分传入方法
```js
<template>
    ...
    < 组件名 :自拟名="方法名"/>
    ...
</template>
```
