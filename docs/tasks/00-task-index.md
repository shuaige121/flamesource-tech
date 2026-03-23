# Flame Source Tech — Task Index

## P1 Tasks (Current Sprint)

| ID | Task | Spec File | Agent Type | Status |
|----|------|-----------|------------|--------|
| T01 | Solutions 页面内容填充 | [t01-solutions-content.md](t01-solutions-content.md) | Ops (Copywriter) | 待执行 |
| T02 | How We Work 页面重写 | [t02-how-we-work-content.md](t02-how-we-work-content.md) | Ops (Copywriter) | 待执行 |
| T03 | Company 页面内容完善 | [t03-company-content.md](t03-company-content.md) | Ops (Copywriter) | 待执行 |
| T04 | Contact 页面表单优化 | [t04-contact-form.md](t04-contact-form.md) | Codex (Frontend) | 待执行 |
| T05 | 全站 CSS 一致性 | [t05-css-consistency.md](t05-css-consistency.md) | Codex (Frontend) | 待执行 |
| T06 | 全站 SEO + Meta | [t06-seo-meta.md](t06-seo-meta.md) | Codex (Frontend) | 待执行 |
| T07 | i18n 新页面翻译 | [t07-i18n-new-pages.md](t07-i18n-new-pages.md) | Ops (9x Native Editors) | 待执行 |
| T08 | Gemini 全站视觉评审 | [t08-gemini-review.md](t08-gemini-review.md) | QA (Gemini) | 待执行 |

## 依赖关系
```
T01, T02, T03 (内容) → 可并行
T04, T05, T06 (技术) → 可并行，但在内容完成后做最终调整
T07 (翻译) → 依赖 T01-T03 内容定稿
T08 (评审) → 最后执行，依赖所有其他任务
```
