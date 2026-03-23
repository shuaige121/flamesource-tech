# T04 — Contact 页面表单优化

## Prompt
优化 `/home/leonard/flamesource-tech/contact/index.html` 的联系表单。当前表单是骨架，需要完善字段、验证和提交逻辑。

表单必须包含的字段（qualifying fields）：
- 姓名 (required)
- 邮箱 (required, email validation)
- 公司名称 (required)
- 职位/角色 (dropdown: Owner/Founder, Operations Manager, HR Manager, Finance Manager, IT Director, Other)
- 感兴趣的方案 (dropdown: Recruitment Operations, Finance & Back-Office, Frontline Communication, Sales Enablement, Creative Production, Not Sure Yet)
- 当前工作流问题 (textarea, 帮助我们理解你的痛点)
- 团队规模 (optional: 1-10, 11-50, 51-200, 200+)

表单提交：
- 由于是纯静态站，使用 `mailto:` 或集成 Formspree/Web3Forms 等无后端方案
- 或者简单弹窗确认 + 复制内容到剪贴板让用户手动发邮件
- 最简方案：构造 mailto link with pre-filled body

WhatsApp + Email 快捷按钮保留在侧栏。

## Skill / Tool
- Agent (general-purpose, Codex role)
- 工具：Read + Edit

## 交付物
- `/home/leonard/flamesource-tech/contact/index.html` 表单优化完毕

## 验收标准
1. 所有 qualifying fields 到位
2. Required 字段有前端 validation
3. 提交有明确的反馈（成功/失败）
4. WhatsApp + Email 快捷入口保留
5. 手机端表单可用
6. PDPA 隐私提示可见

## 交叉审核
完成后由 Codex 5.4 agent 审核表单可用性和代码质量。
