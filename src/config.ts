import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '27 / 28 Blog',
  subtitle: 'TimeMachine',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,         // 主题颜色的默认色相，从 0 到 360。例如，红色: 0，青色: 200，蓝色: 250，粉色: 345
    fixed: true,     // 隐藏主题颜色选择器
  },
  banner: {
    enable: true,
    src: 'assets/images/banner.jpg',   // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
    position: 'center',      // 等同于对象定位，仅支持 'top'、'center'、'bottom'。默认是 'center'
    credit: {
      enable: false,         // 显示横幅图像的版权文本
      text: '',              // 要显示的版权文本
      url: ''                // （可选）链接到原始作品或艺术家页面的 URL
    }
  },
  toc: {
    enable: true,           // 在文章右侧显示目录
    depth: 2                // 显示的最大标题深度，从 1 到 3
  },
  favicon: [    // 如果不想使用默认图标，可以将此数组留空
    {
      src: '/favicon/favicon.jpg',    // 图标的路径，相对于 /public 目录
      // theme: 'light',              // （可选）可以是 'light' 或 'dark'，仅在你有不同的浅色和深色图标时设置
      // sizes: '32x32',              // （可选）图标的大小，仅在你有不同大小的图标时设置
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/saicaca/fuwari',     // 内部链接不应包含基础路径，因为它会自动添加
    //   external: true,                               // 显示外部链接图标，并将在新标签页中打开
    // },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.jpg',  // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
  name: '27 And 28',
  bio: 'Even if the world is tattered and worn, we still have to stitch it back together.',
  // 访问 https://icones.js.org/ 获取图标代码
  // 如果相应的图标集未包含，你需要安装相应的图标集
  // `pnpm add @iconify-json/<icon-set-name>`
  links: [
    // {
    //   name: 'Twitter',
    //   icon: 'fa6-brands:twitter',
    //   url: 'https://twitter.com',
    // },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://store.steampowered.com',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://https://github.com/RpidBing',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
