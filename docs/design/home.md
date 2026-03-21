# 页面: 首页 (/)

## 双向链接
- 上游: 无（入口页，单页网站）
- 下游: 各锚点 section
- 共享组件: [导航栏](./components/navbar.md), [页脚](./components/footer.md)

## 布局
- 结构: Poster Carousel → Nav → Hero → AI Gap → Flame Source OS → Capabilities → Team → Contact → Privacy → Footer
- 响应式断点: 小屏(480px), 手机(768px), 平板(1024px), 桌面(>1024px)

## 配色（继承全局）
- 背景: `#0c1220`（主），`#151f30`（交替 section），`#04070d`（footer/poster）
- 强调色: `#e25822` → `#ff7b3a` 渐变
- 卡片: `#1a2740`

## 内容大纲

### 0. Poster Carousel（全屏强制浏览）
- 固定定位覆盖全屏 (`position: fixed; inset: 0; z-index: 900`)
- 页面加载时 `body.scroll-locked` 阻止滚动
- 4张用例海报，每张有 AI 生成背景图 + 半透明渐变遮罩
- 滚轮/触摸/键盘(↑↓/Space) 切换海报，最后一张后 dismiss 进入主页
- 各海报左文右数据的两列布局 (1.1fr / 0.9fr)
- 内容入场: staggered fade-up (tag → headline → desc → metrics)

| # | 主题色 | 场景 | 标题 | 指标 |
|---|--------|------|------|------|
| 1 | Blue `#60a5fa` | Recruitment | "500 Resumes a Day. 490 Were Noise." | 500 resumes → 10 worth interviewing |
| 2 | Green `#4ade80` | Finance | "Three People. Forty Hours. Every Month." | 40h manual → 0 errors over 6 months |
| 3 | Purple `#c084fc` | Music Production | "The Song Was Ready. The Arrangement Took Weeks." | 3 wk → 2 days |
| 4 | Amber `#fbbf24` | F&B Translation | "One Wrong Character. Wrong Dish. Angry Customer." | 12/wk wrong orders → 0 |

- 底部: 进度圆点 (4个，颜色跟随当前主题) + "Scroll" / "Enter" 提示文字
- 右上角: 计数器 `1 / 4`
- 图片资源: `poster-recruitment.jpg`, `poster-finance.jpg`, `poster-music.jpg`, `poster-restaurant.jpg`
- 点击 nav 链接也可 dismiss

### 1. Hero 区域 (#hero)
- 背景: 3张照片轮播 (6秒间隔，淡入淡出)
  - `office-hongkong-st.jpg`, `office-onenorth.jpg`, `office-interior.jpg`
- 覆盖层: 半透明深色渐变 + 微弱网格图案 (80px grid, accent 色 4% opacity)
- Badge: "Singapore"（含脉冲圆点动画）
- 大标题: "We Build AI That **Works.**"（Works 使用 `.gradient-text`）
- 副标题: "Your team wastes 40% of its time on work a machine should do. Flame Source OS fixes that — one workflow at a time."
- CTA: "Learn More →"（primary, 链接 #product）+ "Talk to Us"（outline, 链接 #contact）
- 入场动画: clip-path reveal（标题）+ fade-up（副标题、CTA），poster dismiss 后触发

### 2. AI Gap (#ai-gap)
- Label: "The Problem"
- 标题: "Everyone Has AI. Nobody Gets Results."
- 两列布局:
  - 左: 两段文字阐述 AI 落地困境（模型强大但最后一英里断裂）
  - 右: 大数字统计卡片 — **73%** "of enterprise AI projects never make it to production"
- 73% 数字使用 `.gradient-text` + 滚动计数动画（IntersectionObserver，1400ms 缓出）
- 背景: `--bg`，顶部 1px border

### 3. Flame Source OS (#product)
- Label: "Flame Source OS"
- 标题: "Give Us the Problem. Get Back the Result."
- 描述: "An AI operating system that orchestrates models, tools, and workflows — so your team focuses on decisions, not configuration."
- 背景: `office-onenorth.jpg` 全幅 + 深色半透明遮罩，营造层次感
- 3列特性卡片 (手机单列):

| 特性 | 图标 | 描述 |
|------|------|------|
| Model Routing | 三层堆叠图标 | 自动选择合适 AI 模型，平衡速度/精度/成本 |
| Skill Library | 2x2 网格图标 | 预置 domain-specific skills（招聘、财务、翻译等），编码专家逻辑 |
| Zero Prompt Engineering | 交叉箭头图标 | 用自然语言描述目标，OS 自动分解/选工具/纠错/质检 |

- 卡片样式: 半透明深色 + backdrop-blur，顶部 3px accent 渐变条（hover 显示）
- hover: translateY(-4px) + 阴影

### 4. Capabilities (#capabilities)
- Label: "Under the Hood"
- 标题: "What Powers Flame Source OS"
- 描述: "Three layers of capability that make the operating system work."
- 背景: `--bg-alt`，顶部 2px accent-dim border
- 3列卡片:

| 能力 | 图标 | 描述 |
|------|------|------|
| AI Orchestration | 节点连线图标 | 多模型路由、任务分解、自主纠错 |
| Integration Engineering | 齿轮/太阳图标 | ERP/CRM/数据库/API 连接器，无需推倒重来 |
| Intelligent Hardware | 方框文本图标 | IoT 传感器和边缘设备，34 patents, 150+ countries |

- 卡片样式: `--bg-card` + border，hover 鼠标跟随径向渐变光晕 (via CSS custom properties `--mouse-x`, `--mouse-y`)

### 5. Team (#team)
- Label: "Team"
- 标题: "Who We Are"
- 3列卡片（手机单列），左侧 3px accent 边框条:

| 姓名 | 中文名 | 职位 | 简介 |
|------|--------|------|------|
| Wu Linwei | 武林威 | Co-Founder · Hardware & BD | Co-founded **GameSir**, consumer electronics in **150+ countries**. 34 patents. B.Eng., SCUT. |
| Chen Jinzhu | 陈进柱 | Chief Technology Officer | **{N} years** software engineering (动态计算, 2008-今). Former CTO, **100+ engineer** team, RMB 100M+ monthly revenue. Distributed systems & AI. |
| Leonard Chow Yi Ding | 周义鼎 | Co-Founder · SG Operations | **Singaporean** entrepreneur. Built **AI marketing automation** & digital ordering for F&B. B.Com (Marketing), UCD. |

- Chen Jinzhu 年数动态计算: `new Date().getFullYear() - 2008`

### 6. Contact (#contact)
- Label: "Get In Touch"
- 标题: "Let's Talk"
- 背景: `office-interior.jpg` 全幅 + 深色遮罩
- 公司名: FLAME SOURCE TECHNOLOGY PTE. LTD.
- 地址: 39 Hongkong Street #03-01, Singapore 059678
- 按钮:
  - "WhatsApp Us"（primary, 链接 `wa.me/6588165505`, 含 WhatsApp SVG 图标）
  - "Email Us"（outline, `mailto:info@flamesource.ai`, 含信封图标）
- 可复制邮箱按钮: `info@flamesource.ai`, `bd@flamesource.ai`（点击复制，2秒绿色"Copied!"反馈）

### 7. Privacy Policy (#privacy)
- Label: "Legal"
- 标题: "Privacy Policy"
- 更新日期: March 2026
- 背景: `--bg-alt`
- 可折叠 `<details>` 手风琴:
  - 6个条款: Data We Collect, Purpose of Collection, Data Protection Officer, Third-Party Disclosure, Data Retention, Your Rights
  - PDPA 合规
  - 最大宽度 720px

### 8. Footer
- 背景: `--bg-deep`
- 左: "© 2024–2026 FLAME SOURCE TECHNOLOGY PTE. LTD. | UEN: 202432774E | Singapore"
- 右: "Privacy Policy" 链接 (#privacy)
- 手机: 居中堆叠

## 导航栏 (Nav)
- 固定顶部 (`position: fixed; z-index: 1000`)
- 透明 → 滚动后加深背景 + backdrop-blur(20px)
- 左: logo + "FLAME SOURCE" 文字
- 右: "Flame Source OS" (#product) | "Team" (#team) | 语言切换器 | "Get in Touch" (#contact, accent 按钮)
- 手机: 汉堡菜单展开为全宽下拉
- 高度: 72px

## 交互说明
- **Poster Carousel**: 全屏强制浏览，scroll/touch/keyboard 切换，最后一张后 dismiss 进入主页
- **导航栏**: 滚动 >40px 添加深色背景 + border
- **Hero**: poster dismiss 后触发 clip-path + fade-up 入场动画
- **Hero 背景**: 3照片轮播，6秒间隔
- **各 section**: `.reveal` fade-up 进入视口动画 (IntersectionObserver, threshold 0.12)
- **73% 统计**: 滚动进入视口时数字从 0 计数到 73 (1400ms 缓出)
- **Poster 指标**: 每张海报 active 时指标数字从 0 计数 (1200ms 缓出)
- **能力卡片**: 鼠标跟随径向渐变光晕
- **邮箱按钮**: 点击复制 + 2秒绿色"Copied!"反馈
- **i18n**: 语言切换实时替换所有 `[data-i18n]` 元素文本，特殊处理 hero headline accent span
