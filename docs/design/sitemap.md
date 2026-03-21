# 站点地图 — Flame Source Technology

## 页面清单
| 页面 | 路径 | 文档 | 说明 |
|------|------|------|------|
| 首页（单页） | / | [home.md](./home.md) | 全站唯一页面，锚点导航，9语言 i18n |

## i18n（国际化）
- 9种语言: `en`, `zh-Hans`, `ms`, `ta`, `id`, `th`, `vi`, `my`, `fil`
- 翻译文件: `/locales/{lang}.json`
- 切换方式: `<select>` 下拉（nav 内），URL param `?lang=xx`，localStorage 持久化
- 特殊字体: Tamil (`Noto Sans Tamil`), Thai (`Noto Sans Thai`), Myanmar (`Noto Sans Myanmar`) — 按需 lazy-load
- hreflang 标签: `en`, `zh-Hans`, `ms`, `ta` + `x-default`

## 全局设计规范
- 主色: `#e25822` (Flame Orange)
- 辅色: `#ff7b3a` (Accent Light), `#ffb088` (渐变尾)
- 背景色:
  - `--bg-deep: #04070d`（footer、poster 背景）
  - `--bg: #0c1220`（主背景）
  - `--bg-alt: #151f30`（交替 section）
  - `--bg-card: #1a2740`（卡片）
- 文字:
  - `--text: #ffffff`（主文字）
  - `--text-secondary: #dce1e8`
  - `--text-muted: #94a0b4`
- 边框: `--border: #283a52`, `--border-light: #354d6a`
- 字体:
  - **Manrope** 600/700/800 — headings
  - **Inter** 300–800 — body
  - **JetBrains Mono** 400/500 — labels, 代码风格文本
- 间距: `--section-gap: 140px`（桌面），`100px`（平板），`72px`（手机），`56px`（小屏）
- 圆角: `--radius: 16px`, `--radius-sm: 10px`
- 最大宽度: `--max-w: 1200px`
- 组件库: 纯 CSS + vanilla JS，无框架依赖
- 所有 CSS/JS 内联在 `index.html` 中
- 部署: Cloudflare Pages（纯静态）

## 响应式断点
| 断点 | 宽度 | 关键变化 |
|------|------|----------|
| 桌面 | > 1024px | 默认布局，多列网格 |
| 平板 | <= 1024px | poster 改单列，section-gap 100px |
| 手机 | <= 768px | nav 收起汉堡菜单，所有网格改单列，section-gap 72px |
| 小屏 | <= 480px | CTA 按钮全宽堆叠，poster metrics 竖排，section-gap 56px |

## 设计风格
- 深色主题，专业精致（面向新加坡 + 东南亚企业客户）
- 温暖橙色渐变强调色，传达"火焰"品牌
- 入场动画: `.reveal` fade-up（IntersectionObserver 驱动）
- 渐变文字: `.gradient-text`（accent → accent-light → #ffb088）
- 卡片悬停: translateY(-4px) + 光影效果
- 能力卡片: 鼠标跟随径向渐变光晕
