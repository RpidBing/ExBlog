---
title: Algorithm Learning
published: 2024-12-10
description: 'follow 《代码随想录》 learnign algorithm'
image: ''
tags: [Learm, C, algo]
category: 'CodeLog'
draft: false
lang: 'zh_CN'
---

# "代码随想录" 跟随式 算法学习
:::note
> 从未系统性的学习使用过好的数据结构，为了编程能力水平跟进一步，系统性的学习数据结构是必要的
> 本文为更随 《代码随想录》 来进行算法学习的记录文章
:::

## 数组

### 1. 二分查找 407
> 关于 “二分查找法” 的知识
> - 流程: 二分查找法通过在每次比较后折半缩小范围，定位目标值在有序数组中的位置。
> - 二分的前提条件: 数组为有序数组，同时还强调数组中无重复元素。

> 易错点
> - 循环条件问题: 是 left < right 还是 left <= right ?
> - 更新区间问题: 是更新为 middle 还是 middle - 1 ?

> 循环不变量 -- 区间定义
> - 确定区间是关键: 一般情况下对 区间为` [left, right] ` 及包含left和right 或` [left, right) ` 及包含left但不包含right 的区间进行搜索
:::note
> 确定区间 影响的是 我们对于边界条件的处理
:::

> 左闭右闭
```c
// 左闭右闭区间二分法
int search(int* nums, int numsSize, int target) {
    int left = 0, right = numsSize - 1, middle = 0;
    while(left <= right){
        middle = left + (right - left) / 2;
        // 因为是左闭右闭区间 所以在新的区间一定不包含middle
        // 注意上述 要点 向右更新去掉 middle 是 +1 左边则是 -1
        if(nums[middle] > target) right = middle - 1;
        else if(nums[middle] < target) left = middle + 1;
        else return middle;
    }
    return -1;
}
```

> 左闭右开
```c
// 左闭右开区间二分法
int search(int* nums, int numsSize, int target) {
    int left = 0, right = numsSize, middle = 0; // right 的取值要符合 左闭右开 原则
    while(left < right){
        middle = left + (right - left) / 2;
        // 因为是左闭右开区间 所以在右区间取值为 开值 -- middle
        // 注意上述 要点 向右更新去掉 middle 是 左边则是 +1
        if(nums[middle] > target) right = middle;
        else if(nums[middle] < target) left = middle + 1;
        else return middle;
    }
    return -1;
}
```

### 2. 移除元素 27
> 关于 “移除元素” 的知识
> - 流程: 数组移除元素的原理是遍历数组，找到所有需要保留的元素，按照一定规则重新排列或覆盖原数组，最终忽略被移除元素所在的部分。
> - 移除元素前提条件: 数组的元素在内存地址中是连续的，不能单独删除数组中的某个元素，只能覆盖。

>