# 项目上下文

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4

## 目录结构

```
├── public/                 # 静态资源
├── scripts/                # 构建与启动脚本
│   ├── build.sh            # 构建脚本
│   ├── dev.sh              # 开发环境启动脚本
│   ├── prepare.sh          # 预处理脚本
│   └── start.sh            # 生产环境启动脚本
├── src/
│   ├── app/                # 页面路由与布局
│   ├── components/ui/      # Shadcn UI 组件库
│   ├── hooks/              # 自定义 Hooks
│   ├── lib/                # 工具库
│   │   └── utils.ts        # 通用工具函数 (cn)
│   └── server.ts           # 自定义服务端入口
├── next.config.ts          # Next.js 配置
├── package.json            # 项目依赖管理
└── tsconfig.json           # TypeScript 配置
```

- 项目文件（如 app 目录、pages 目录、components 等）默认初始化到 `src/` 目录下。

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。
**常用命令**：
- 安装依赖：`pnpm add <package>`
- 安装开发依赖：`pnpm add -D <package>`
- 安装所有依赖：`pnpm install`
- 移除依赖：`pnpm remove <package>`

## 开发规范

### Hydration 问题防范

1. 严禁在 JSX 渲染逻辑中直接使用 typeof window、Date.now()、Math.random() 等动态数据。**必须使用 'use client' 并配合 useEffect + useState 确保动态内容仅在客户端挂载后渲染**；同时严禁非法 HTML 嵌套（如 <p> 嵌套 <div>）。
2. **禁止使用 head 标签**，优先使用 metadata，详见文档：https://nextjs.org/docs/app/api-reference/functions/generate-metadata
   1. 三方 CSS、字体等资源可在 `globals.css` 中顶部通过 `@import` 引入或使用 next/font
   2. preload, preconnect, dns-prefetch 通过 ReactDOM 的 preload、preconnect、dns-prefetch 方法引入
   3. json-ld 可阅读 https://nextjs.org/docs/app/guides/json-ld

## UI 设计与组件规范 (UI & Styling Standards)

- 模板默认预装核心组件库 `shadcn/ui`，位于`src/components/ui/`目录下
- Next.js 项目**必须默认**采用 shadcn/ui 组件、风格和规范，**除非用户指定用其他的组件和规范。**

## 多语言支持规范

### 支持的语言
| 代码 | 语言 | 方向 |
|------|------|------|
| `en` | English | LTR |
| `ru` | Русский (俄语) | LTR |
| `zh-HK` | 繁體中文 | LTR |
| `ja` | 日本語 (日语) | LTR |
| `tr` | Türkçe (土耳其语) | LTR |
| `ar` | العربية (阿拉伯语) | RTL |

### 实现方式
- 使用 Context API (`LanguageContext`) 管理全局语言状态
- 所有翻译键存储在 `src/contexts/LanguageContext.tsx` 的 `translations` 对象中
- 使用 `useLanguage()` hook 获取当前语言和翻译函数 `t()`

### 语言切换与字体
- `src/contexts/LanguageContext.tsx` 中的 `useEffect` 根据语言添加 CSS 类（如 `lang-ar`、`lang-ja`）
- `src/app/globals.css` 中定义各语言的字体：
  - `.lang-ja`: Hiragino Sans, Yu Gothic, Meiryo
  - `.lang-ar`: Noto Sans Arabic, Tahoma
  - `.lang-tr`: Segoe UI, Helvetica Neue, Arial
  - `.lang-zhHK`: Microsoft JhengHei, PingFang TC

### RTL 支持
- 阿拉伯语自动设置 `dir="rtl"`（通过 `document.documentElement.setAttribute('dir', 'rtl')`）
