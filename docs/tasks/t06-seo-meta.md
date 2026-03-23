# T06 — 全站 SEO + Meta

## Prompt
为 6 个页面补齐 SEO metadata。

每个页面需要：
- `<title>` 标签（60 字符内，含品牌名）
- `<meta name="description">` （155 字符内，含关键词）
- OG tags（og:title, og:description, og:image, og:url）
- Twitter card tags
- Canonical URL
- hreflang tags（en, zh-Hans, ms, ta + x-default）
- Schema.org JSON-LD（Organization on homepage, LocalBusiness on contact）

关键词方向（不要堆砌）：
- workflow automation singapore
- operations automation
- recruitment automation singapore
- finance automation SME
- restaurant technology singapore
- AR smart glasses F&B
- AI sales coaching

每个页面的 alt text 检查 — 所有 `<img>` 必须有描述性 alt text，不是空的或 "image"。

## Skill / Tool
- Agent (general-purpose, Codex role)
- 工具：Read + Edit

## 交付物
- 6 个 HTML 文件的 meta/SEO 更新

## 验收标准
1. 每个页面 title 唯一且含品牌名
2. 每个页面 description 唯一且在 155 字符内
3. OG image 指向真实可访问的图片
4. Schema.org JSON-LD 在 homepage 和 contact 页面存在
5. 所有 img 有描述性 alt text

## 交叉审核
完成后由 Codex 5.4 agent 用 Lighthouse 或手动检查 SEO 得分。
