# Flamesource Tech 网站修改清单

基于 5 个 Agent（政府采购官、B2B营销顾问、UI/UX专家、Codex审计、事实核查）的全面审核。

---

## P0 — 必须修（影响可信度 / 功能性 Bug）

### 1. [ ] 联系表单是假的
- **问题**: `handleSubmit` 只做动画，数据丢失。用户以为发了其实没发
- **修复**: 接 Cloudflare Workers 后端发邮件，或至少用 mailto: 链接
- **来源**: Codex Agent, 事实核查 Agent

### 2. [ ] 手机端 Capabilities 3列 Bug
- **问题**: `style="grid-template-columns: repeat(3, 1fr)"` inline style 优先级高于 media query，手机上还是3列
- **修复**: 删掉 inline style，改到 CSS class 里
- **来源**: Codex Agent

### 3. [ ] 添加企业邮箱
- **问题**: 只有 WhatsApp，政府机构需要正式邮箱
- **修复**: 用 flamesource.ai 域名配邮箱（info@flamesource.ai, bd@flamesource.ai），添加到联系区
- **来源**: 政府采购官, Codex Agent, B2B营销顾问

### 4. [ ] 添加办公地址
- **问题**: 只写了"Singapore"，政府采购需要具体地址
- **修复**: 添加 "39 Hongkong Street #03-01, Singapore 059678"
- **来源**: 政府采购官, Codex Agent

### 5. [ ] "34 patents" 归属不清
- **问题**: Capabilities 区写 "We... With 34 patents"，读起来像 Flamesource 的专利
- **修复**: 改成 "Our co-founder holds 34 patents in precision sensing..."
- **来源**: Codex Agent, 事实核查 Agent

### 6. [ ] "150+ countries" 归属不清
- **问题**: Our Approach 里 "serving millions of users across 150+ countries" 读起来像 Flamesource 的成绩
- **修复**: 改成 "Before founding Flamesource, our team members built and scaled..."
- **来源**: Codex Agent, 事实核查 Agent

### 7. [ ] 武林威 "Co-founder of GameSir" 搜索不到
- **问题**: GameSir 官网和维基百科只写了 Yao Ma 是创始人，搜不到武林威
- **修复**: 需确认真实头衔。可改为 "Co-founder" 或 "Founding Partner" 或 "Early Partner & Core Team Member"
- **待定**: 需要 Leonard 确认武林威在 GameSir 的真实角色
- **来源**: 事实核查 Agent

### 8. [ ] 陈进柱 "Co-founder & CTO" 持股只有4%
- **问题**: 36Kr 显示他持股4%，元游 CEO/创始人是陈元高
- **修复**: 可改为 "Former CTO" 去掉 "Co-founder"，或确认他确实是联合创始人
- **待定**: 需要确认真实情况
- **来源**: 事实核查 Agent

---

## P1 — 应该修（影响专业度 / 用户体验）

### 9. [ ] AI 图片无"示意图"标注
- **问题**: Hero 背景显示 "Singapore Water Hub" 控制室，暗示 Flamesource 有此设施
- **修复**: 方案A — 换一张不暗示拥有设施的图；方案B — 加 "Conceptual illustration" 标注
- **来源**: 政府采购官, 事实核查 Agent

### 10. [ ] Dashboard 截图暗示已有产品
- **问题**: 展示为 "Real-Time Data Analytics" 但不是真实产品
- **修复**: 同上，加标注或换图
- **来源**: 事实核查 Agent

### 11. [ ] 缺 OG / Twitter Card meta 标签
- **问题**: 分享到 LinkedIn / WhatsApp 没有预览图和描述
- **修复**: 添加 og:title, og:description, og:image, twitter:card 等标签
- **来源**: Codex Agent

### 12. [ ] 缺 favicon
- **问题**: 浏览器标签页显示默认图标
- **修复**: 用火焰 Logo 生成 favicon
- **来源**: Codex Agent

### 13. [ ] 图片太大未优化
- **问题**: 6张图共 4.3MB，无 lazy loading，无 WebP
- **修复**: 压缩图片、添加 loading="lazy"、考虑 WebP 格式
- **来源**: Codex Agent

### 14. [ ] /images/ 目录有 7.3MB 废弃文件
- **问题**: 旧版本的图片没被引用，白白部署
- **修复**: 删除 /images/ 目录
- **来源**: Codex Agent

### 15. [ ] 无障碍对比度不足
- **问题**: 深色文字在深色背景上对比度低于 WCAG AA 标准
- **修复**: 提亮 body text 颜色、表单占位符颜色
- **来源**: UI/UX 专家 (5.5/10)

### 16. [ ] 团队简介太长
- **问题**: 卡片内文字墙，B2B 用户扫读不进去
- **修复**: 精简为 bullet points 或限制行数 + "Read More"
- **来源**: UI/UX 专家, B2B营销顾问, 政府采购官 (3/5 Agent)

### 17. [ ] PDPA 合规缺陷
- **问题**: 表单没有勾选框明确同意；DPO 联系只有 WhatsApp
- **修复**: 添加 consent checkbox；DPO 改为邮箱（配好后用 dpo@flamesource.ai）
- **来源**: Codex Agent

---

## P2 — 可以改（锦上添花）

### 18. [ ] CTA 效果差
- **问题**: "Get in Touch" 摩擦力高，"Meet the Team" 浪费首屏位置
- **修复**: 主CTA改 "Discuss Your Project"；次CTA改 "Explore Capabilities"
- **来源**: B2B营销顾问, UI/UX专家

### 19. [ ] 价值主张不够客户导向
- **问题**: 标题说"我们是什么"而非"客户能得到什么"
- **修复**: 考虑改为更以客户利益为导向的文案
- **来源**: B2B营销顾问

### 20. [ ] 缺 LinkedIn 公司页面链接
- **问题**: B2B 公司应该至少有 LinkedIn
- **修复**: 创建 LinkedIn 公司页后添加链接
- **来源**: Codex Agent

### 21. [ ] 图片扩展名错误
- **问题**: .png 文件实际是 JPEG 数据
- **修复**: 重命名或重新导出
- **来源**: Codex Agent

### 22. [ ] 缺 rel="noopener" 在 WhatsApp 链接
- **修复**: 添加 rel="noopener noreferrer"
- **来源**: Codex Agent

### 23. [ ] 缺 _headers 文件（CSP, X-Frame-Options）
- **修复**: 创建 Cloudflare Pages _headers 文件
- **来源**: Codex Agent

---

## 需要 Leonard 确认后才能改

- [ ] 武林威在 GameSir 的真实头衔（#7）
- [ ] 陈进柱在元游的真实头衔（#8）
- [ ] 企业邮箱配置完成后更新网站（#3）
- [ ] 是否要创建 LinkedIn 公司页（#20）
