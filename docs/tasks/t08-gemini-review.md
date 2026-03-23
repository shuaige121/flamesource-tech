# T08 — Gemini 全站视觉评审

## 前置依赖
- 所有内容任务 (T01-T03) 完成
- CSS 一致性 (T05) 完成
- SEO (T06) 完成

## Prompt
对全站 6 个页面进行 Gemini 视觉评审。

流程：
1. 安装 playwright: `npm install --no-save playwright`
2. 对每个页面截图（桌面 1440x900 + 手机 375x812）
3. 每张截图送 Gemini review:
   `uv run ~/.claude/plugins/art/art.py review /tmp/screenshot.png -p "Review..."`
4. 收集所有问题
5. 按严重程度分类 (🔴 Critical / 🟡 Medium / 🟢 Minor)
6. 生成修复清单

页面列表：
- https://flamesource.ai/
- https://flamesource.ai/solutions/
- https://flamesource.ai/case-studies/
- https://flamesource.ai/how-we-work/
- https://flamesource.ai/company/
- https://flamesource.ai/contact/

评审重点：
- 排版：字距、行距、对齐、层级
- 响应式：手机端是否有溢出、截断
- 一致性：页面间视觉是否统一
- 可读性：文字在背景上是否清晰
- 信任感：看起来像真实公司还是 demo

## Skill / Tool
- Agent (general-purpose)
- 工具：Bash (playwright) + Bash (art.py review)

## 交付物
- `/home/leonard/flamesource-tech/docs/gemini-review-final.md` 评审报告
- 截图保存在 /tmp/

## 验收标准
1. 12 张截图（6 页面 × 2 视口）
2. 每张截图有 Gemini 评审结果
3. 问题按严重程度排序
4. 可直接交给下一个 Codex agent 执行修复

## 交叉审核
本任务本身就是审核任务，产出交给 CSS 修复 agent 执行。
