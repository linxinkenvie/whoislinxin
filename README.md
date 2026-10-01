# Who is Linxin?

Linxin 的个人网站，用来展示正在做的项目、记录开发过程，以及分享关于 AI、编程语言、Linux 和生活的笔记。

**网站：[whoislinxin.com](https://whoislinxin.com)** · [Blog](https://whoislinxin.com/blog/) · [About](https://whoislinxin.com/about/) · [GitHub](https://github.com/linxinkenvie)

首页以 `linxin@whoislinxin:~$` 为入口：输入命令认识 Linxin，查看创作进度，或进入博客。网站使用 Astro 构建为静态文件，终端交互在浏览器中运行，不连接真实 Shell。

## 主要功能

- **终端式首页**：命令提示符、个人信息输出、可点击的目录导航，以及响应式布局。
- **交互命令**：支持 Tab 补全、↑ / ↓ 命令历史和 Ctrl+L 清屏。
- **创作进度条**：展示 NEW ERAS、ART、MUSIC，以及以 `NO END` 表示的 LIFE EXPERIENCE。进度由源码手动维护，不是自动统计。
- **站点导航**：首页提供 `blog/`、`about/`、`github/` 入口；共享顶栏提供 Blog、GitHub、About 和 X 链接。
- **博客与双语阅读**：使用 Markdown / MDX 内容集合；提供中英文列表、配对文章的语言切换和浏览器语言选择。专题文章支持明暗主题切换。
- **订阅与元信息**：提供 [RSS](https://whoislinxin.com/rss.xml)、自动生成的 sitemap、canonical URL 和 Open Graph 元信息；字体资源本地托管。

### 首页命令

以下命令在网站首页输入框中使用，与本地开发命令无关。

| 命令 | 功能 |
| --- | --- |
| `help` | 查看命令与快捷键 |
| `whois linxin` | 显示个人信息 |
| `whoami` / `pwd` | 显示模拟用户或工作目录 |
| `ls` | 列出可点击的导航入口 |
| `progress` | 显示创作进度 |
| `cd blog` / `blog` | 打开博客 |
| `cd about` / `about` | 打开 About 页面 |
| `cd github` / `github` / `open github` | 打开 GitHub 个人主页 |
| `cat about` | 在终端内显示简短介绍 |
| `clear` | 清空终端显示 |

## 技术栈

| 技术 | 用途 |
| --- | --- |
| Astro `^7.2.10` | 页面、路由与静态站点构建 |
| `@astrojs/mdx` | MDX 内容支持 |
| `@astrojs/rss` | 生成 RSS 订阅源 |
| `@astrojs/sitemap` | 构建时生成 sitemap |
| Astro Content Collections + Zod | 加载文章并校验 frontmatter |
| TypeScript、原生 JavaScript、CSS | 页面逻辑、浏览器交互与样式 |
| `sharp` | 图片处理 |
| Cloudflare Pages | 静态托管及连接 GitHub 的自动构建部署 |
| Cloudflare DNS | 正式域名解析与 CDN |

依赖声明见 [package.json](./package.json)，实际安装版本由 [package-lock.json](./package-lock.json) 锁定。项目采用 ES Modules 和 Astro 的严格 TypeScript 配置。

## 本地开发

需要 Git、Node.js 和 npm。`package.json` 声明的 Node.js 范围为 `>=22.12.0`；本地和构建环境应使用兼容依赖的 Node.js 版本。

```sh
git clone https://github.com/linxinkenvie/whoislinxin.git
cd whoislinxin
npm ci
npm run dev -- --background
```

开发地址默认为 [http://localhost:4321](http://localhost:4321)。按照 [AGENTS.md](./AGENTS.md) 的约定，开发服务器使用后台模式。

所有命令均在仓库根目录执行：

| 命令 | 用途 |
| --- | --- |
| `npm ci` | 按锁文件安装依赖，适用于首次拉取和 CI |
| `npm install` | 调整依赖时使用；检查并提交相应锁文件变更 |
| `npm run dev -- --background` | 启动后台开发服务器 |
| `npm run astro -- dev status` | 查看后台开发服务器状态 |
| `npm run astro -- dev logs` | 查看后台开发服务器日志 |
| `npm run astro -- dev stop` | 停止后台开发服务器 |
| `npm run build` | 构建生产站点，输出到 `dist/` |
| `npm run preview` | 本地预览已经生成的生产构建 |
| `npm run astro -- --help` | 查看 Astro CLI 帮助 |

预览前先运行 `npm run build`。`npm run preview` 用于本地检查构建产物，不是生产托管服务。

## 目录结构

| 路径 | 内容 |
| --- | --- |
| `public/` | 原样复制到构建输出的静态文件 |
| `public/_headers` | 供支持此格式的托管平台读取的安全响应头规则 |
| `public/scripts/` | 文章语言、主题切换与博客快捷键脚本 |
| `public/downloads/` | 公开下载文件 |
| `src/assets/` | 由构建处理的图片和本地字体 |
| `src/components/` | 共享顶栏、页面元信息、页脚等组件 |
| `src/content/blog/` | Markdown / MDX 文章及其本地图片 |
| `src/content.config.ts` | 博客集合的加载规则与 frontmatter schema |
| `src/layouts/` | 博客列表和文章布局 |
| `src/pages/index.astro` | 终端首页、命令逻辑与进度条 |
| `src/pages/about.astro` | About 页面 |
| `src/pages/blog/index.astro` | 中文博客列表 |
| `src/pages/blog/en/index.astro` | 英文博客列表 |
| `src/pages/blog/[...slug].astro` | 从内容集合生成文章路由 |
| `src/pages/rss.xml.js` | RSS 生成入口 |
| `src/pages/404.astro` | 自定义 404 页面 |
| `src/styles/global.css` | 全局样式与字体定义 |
| `src/consts.ts` | 站点标题和描述 |
| `astro.config.mjs` | 站点地址、集成与构建配置 |
| `package.json` / `package-lock.json` | 开发命令、依赖与锁定版本 |
| `tsconfig.json` | TypeScript 配置 |
| `AGENTS.md` | 开发与双语内容维护约定 |

## 内容维护

站点标题与描述在 [src/consts.ts](./src/consts.ts) 中维护。首页信息、进度条和命令位于 [src/pages/index.astro](./src/pages/index.astro)：更新进度时，需要同步初始 HTML、`progress` 命令输出、ARIA 数值及对应 CSS 宽度。

博客内容放在 `src/content/blog/`，frontmatter 必填字段为 `title`、`description` 和 `pubDate`；其他字段以 [内容 schema](./src/content.config.ts) 为准。

新文章遵循 [AGENTS.md](./AGENTS.md) 中的双语约定：保留中文原文，另建英文条目，分别设置 `lang: 'zh-CN'` 与 `lang: 'en'`，并使用相同的 `translationKey` 配对。

| 内容 | 路由 |
| --- | --- |
| 中文文章 | `/blog/<translationKey>/` |
| 对应英文文章 | `/blog/<translationKey>/en/` |
| 中文 / 英文列表 | `/blog/` / `/blog/en/` |

设置配对字段时应同时提供两种语言的文章，避免切换到不存在的页面。当前 RSS 会排除 `lang: 'en'` 的条目，避免重复订阅译文。

## 构建与部署

项目使用 Astro 默认静态输出模式，没有配置服务端 adapter。生产环境托管在 Cloudflare Pages，并连接 GitHub 仓库；`main` 是正式部署分支，`terminal-v2` 是当前开发分支。生产构建流程为：

```sh
npm ci
npm run build
```

Cloudflare Pages 在 `main` 更新后自动执行构建。构建命令为 `npm run build`，发布目录为 `dist`，构建工作目录为仓库根目录。

部署时注意：

- **正式域名**：`astro.config.mjs` 的 `site` 为 `https://whoislinxin.com`，用于 canonical、RSS 和 sitemap 等绝对地址。更换正式域名后需更新配置并重新构建。
- **根路径部署**：当前配置未设置 `base`，源码也使用 `/blog/`、`/about/`、`/scripts/...` 等根路径。应部署在域名根目录；迁移到 `/<repository>/` 子路径时，需要检查 `base` 与这些硬编码链接。
- **托管配置**：Cloudflare Pages 的项目连接、分支规则和构建设置保存在 Cloudflare 控制台，不在仓库内；仓库因此不需要 GitHub Actions 部署工作流或 `public/CNAME`。迁移托管平台时需要重新配置正式分支、构建命令、发布目录、自定义域名、DNS、HTTPS 和 `www` 跳转。
- **安全响应头**：`public/_headers` 只有在托管平台支持其格式时才生效；其他平台需配置等效规则。当前 CSP 限制脚本和样式来源为本站，构建配置保留了 `inlineStylesheets: 'never'`，Markdown 代码高亮也已关闭；调整资源加载方式时应一起检查 CSP。
- **发布检查**：先构建并预览，检查首页命令、进度条、导航、双语文章和专题文章主题切换；上线后检查直接访问文章 URL、404、`/rss.xml`、`/sitemap-index.xml` 以及响应头是否符合预期。

## Credit

项目最初使用 [Astro 官方 Blog Starter](https://github.com/withastro/astro/tree/main/examples/blog) 初始化，之后加入了 whoislinxin 的终端首页、交互命令和定制博客体验。

原模板的主题样式基于 [Bear Blog](https://github.com/HermanMartinus/bearblog/)。[src/styles/global.css](./src/styles/global.css) 保留了原始样式来源与 MIT 许可证链接，感谢原作者及 Astro 社区。
