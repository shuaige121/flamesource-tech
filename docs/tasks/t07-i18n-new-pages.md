# T07 — i18n 新页面翻译

## 前置依赖
- T01 (Solutions 内容), T02 (How We Work 内容), T03 (Company 内容) 必须先完成
- 英文内容定稿后才开始翻译

## Prompt
为新增的 5 个页面创建 i18n 翻译。当前只有首页 (`locales/*.json`) 有翻译 key。

方案：
- 每个子页面的翻译 key 加入同一个 locale JSON 文件（不拆分文件）
- Key 命名规则：`solutions.hero.title`, `howWeWork.step1.title`, `company.about.desc` 等
- 先从英文内容中提取所有需翻译的文本，建立完整 key 列表
- 然后为每种语言安排独立的母语编辑 agent

语言列表（9 种）：
en, zh-Hans, ms, ta, id, th, vi, my, fil

每种语言的 agent 要求：
- 不是翻译，是用该语言重写
- 母语级营销文案质量
- 保留品牌名英文
- 参考之前的风格（各语言已有首页的风格基调）

## Skill / Tool
- Step 1: 1 个 Agent 提取所有 key 并写入 en.json
- Step 2: 8 个并行 Agent（每语言一个）做母语重写

## 交付物
- `locales/en.json` 新增所有子页面 key
- 8 个 locale JSON 文件同步新增 key

## 验收标准
1. 所有 9 个 JSON 文件 key 数量一致
2. 所有 JSON 合法（python3 -c "import json; json.load(...)"）
3. 子页面切换语言后内容正确切换
4. 零 placeholder / 未翻译的 key
