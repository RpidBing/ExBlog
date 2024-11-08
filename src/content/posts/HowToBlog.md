---
title: 如何写并推送一篇推文
published: 2024-10-31
description: '教 27 如何往我们的 blog 编写推送文章'
image: ''
tags: [Nodejs, Astro, Markdown, Git, GitHub]
category: 'Tutorials'
draft: false 
lang: 'zh_CN'
---

# 怎么 '推 / 写' 一篇博客文

:::note
> 有一天 `27` 和我说 "该如何 向咱们的博客站写并推送一篇文章" 的时候  
> 我就意识到 我忘记了点什么 - `27` 并没有使用过几次 git 工具 也不太清楚推送部署  
> 所以就有了这篇 从文章编写到 推送的教程
:::

## 第一步 仓库拉取

### 初始化仓库

> 不论是 Linux 还是 Windows 首先 得准备一个空白文件夹作为代码的`本地仓库`
```shell
# 在某个路径下创建一个本地仓库的文件夹
mkdir blog && cd blog
```
> 运行命令后 会在本地生成一个名为 "blog" 的文件夹 并进入blog文件夹
```shell
# 初始化 git 仓库
git init .
```
> 此时我们的本地仓库就算初始化完成了

### 绑定远程仓库并拉取代码

> 使用 git remote 命令绑定远程仓库 再使用 git pull 命令 拉取代码
```shell
# 绑定远程仓 - 仓库名自取
git remote add 仓库名 仓库URL

# 拉取代码
git pull 仓库名 main  # PS : 操作化简不使用多分支管理 直接 拉取/推送 主分支就 OK
```

:::tip
> 若是使用 咱家的开发机器的话 就直接进 ~/blog 写就好了 在推代码前 先拉取一下在推
> !!!! 什么？ 你说你不会连开发机
```shell
ssh root@ 开发机ip
# 连上后 cd 进去 就好
```
:::

## 第二步 创建文章

### 有 Node js 环境下

> 若是在有node js 的环境下 并且已经配置好了项目依赖 就可以使用此方法创建新的文章
```shell
pnpm new-post 文章名称
```
> 在使用此命令后 ./src/content/post 路径下就会创建出一个新的 `文章名称.md` 文件并且 开头的frontmatter模板已经写好 - 直接填了 就可以开始编写内容了

### 在没有 Node js 的环境下

> 若是在没有node js 的环境下 依然可以 编写文章 但是就有些麻烦了
```shell
# 在 ./src/content/post/ 路径下创建 文章文件 - 文件名称.md
touch 文章名称.md
# 创建好后在使用 编辑器打开编写 - vim code nano
nano 文章名称.md
# 然后加入文章的frontmatter
```
:::caution
> 在新的文章中一定要严格写入 `frontmatter` 不然会导致推送的文章无法显示 vercle部署也会出问题
:::

> frontmatter 模板
```js
title:              // 标题
published:          // 日期
description: ''     // 简介
image: ''           // 图片路径
tags: []            // 标签
category: ''        // 分类
draft: false        // 是否为草稿
lang: 'zh_CN'       // 文本语言
```

> 写完 frontmatter后就可以 用 markdown 语法写 文章啦 若是不太会 markdown 也没事
:::note
> 下面这文档 可以很快学会 markdown
[Markdown Tutorials](https://markdown.com.cn/basic-syntax/)
:::

