# T05 — 全站 CSS 一致性

## Prompt
审核并统一 6 个 HTML 页面的 CSS。当前每个页面都内联了自己的 CSS，可能存在不一致。

页面列表：
- `/home/leonard/flamesource-tech/index.html`
- `/home/leonard/flamesource-tech/solutions/index.html`
- `/home/leonard/flamesource-tech/case-studies/index.html`
- `/home/leonard/flamesource-tech/how-we-work/index.html`
- `/home/leonard/flamesource-tech/company/index.html`
- `/home/leonard/flamesource-tech/contact/index.html`

检查并统一：
1. CSS 变量值（--bg, --accent, --text 等）在所有页面一致
2. 字体大小层级一致（h1, h2, h3, body, label）
3. Section padding/margin 一致
4. 卡片样式一致（border, radius, shadow）
5. 按钮样式一致（primary, outline, sizes）
6. Nav 样式一致（active state 高亮当前页）
7. Footer 样式一致
8. 响应式断点一致（1024, 768, 480）
9. `.reveal` 动画在所有页面工作

不要合并成外部 CSS 文件（保持 inline），但确保每个页面的 CSS 值完全一致。

## Skill / Tool
- Agent (general-purpose, Codex role)
- 工具：Read + Edit + Grep

## 交付物
- 6 个 HTML 文件的 CSS 部分统一

## 验收标准
1. 所有页面 :root 变量值完全一致
2. Nav 在每个页面的 active link 正确高亮
3. 从任意页面切换到另一页面，视觉不跳变
4. 手机端所有页面布局一致

## 交叉审核
完成后由 Codex 5.4 agent 截图对比各页面一致性。
