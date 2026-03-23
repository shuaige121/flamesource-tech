# T01 — Solutions 页面内容填充

## Prompt
你是 Flame Source Tech 的解决方案文案编辑。读取 `/home/leonard/flamesource-tech/docs/positioning-memo.md` 了解公司定位，读取 `/home/leonard/flamesource-tech/content/case-studies-content.md` 了解真实交付案例，然后重写 `/home/leonard/flamesource-tech/solutions/index.html` 中所有 5 个 solution pillar 的内容。

每个 pillar 需要：
- **问题描述**（2-3 句，站在客户角度，描述痛点）
- **我们做什么**（2-3 句，具体描述交付物，不用 AI 术语）
- **交付方式**（1-2 句，提及约 1 个月周期、迭代交付）
- **适合谁**（1 句，明确 ICP）

5 个 pillars 按优先级：
1. Recruitment Operations（客户：新加坡招聘顾问公司）
2. Finance & Back-Office（客户：物业服务公司）
3. Frontline Communication（客户：中餐厅，AR 眼镜 + AI 教练，广州团队协助硬件采购）
4. Sales Enablement（客户：创意工作室、留学公司、理发店）
5. Creative Production（客户：新加坡音乐人，知名制作人门下）

文案规则：
- Problem → Workflow → What changed → Honest outcome
- 业务语言，不是 AI 术语
- 不编造数字
- 每个 claim 有证据或删掉

## Skill / Tool
- Agent (general-purpose)
- 工具：Read + Edit

## 交付物
- `/home/leonard/flamesource-tech/solutions/index.html` 内容更新完毕
- 所有 placeholder 文本替换为真实内容

## 验收标准
1. 5 个 pillar 每个有完整的 问题/方案/交付/适合谁
2. 零 placeholder 文本
3. 零编造指标
4. 文案符合 positioning memo 的定位（解决方案公司，不是产品公司）
5. HTML 结构不变，只改内容
