---
title: Vue 学习日志三
published: 2024-11-13
description: '这是一个关于 Vue.js 框架的学习记录'
image: ''
tags: [Learn, Front, Vue, Log]
category: 'CodeLog'
draft: false
lang: 'zh_CN'
---

# Vue framework 学习日志 Part 3

:::note
> 学习途径 :
- 官方文档      : https://cn.vuejs.org/guide/quick-start.html
- B 站视频号    : BV1Pb4y157GV
- 教程作者码仓  : https://gitee.com/alex_john/vue-concise-tutorial/tree/main
- PS : 全文中的定义和解释 大部分为个人主观理解 表达不一定正确
:::

## keepAlive 动态组件

> 有些场景会需要在两个组件间来回切换，比如 Tab 界面 就可以使用动态组件渲染的方式 使用 KeepAlive 来完成

```js
// 可以在 data 中声明一个 “组件” 集 

NowcName = "",
componentName: { "组件1", "组件2", "组件3" },

// 然后使用 component 标签来选则需要渲染的组件

<component :is="NowcName"></component>

// 然后在 methods 中创建一个 或多个切换事件函数来绑定 切换 按钮

this.NowcName = this.componentName[0 or 1 or 2 or ...];

// 最后在使用 KeepAlive 标签将 component 标签扩起来
// 就能实现动态缓存和渲染组件的效果了

<KeepAlive>
    <component :is="NowcName"></component>
</KeepAlive>

```

### KeepAlive 生命周期函数 activated and deactivated

> activated - 若组件实例是 <KeepAlive> 缓存树的一部分，当组件被插入到 DOM 中时调用.  

> deactivated - 若组件实例是 <KeepAlive> 缓存树的一部分，当组件从 DOM 中被移除时调用。

:::note
当动态组件被 KeepAlive 修饰使用时 如果需要在每次组件渲染时 进行某些操作 就无法使用 mounted 来完成 ，此时就需要使用 activated 和 deactivated 生命周期函数来完成操作
:::