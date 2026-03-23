# Codex 5.4 -- Final Cross-Review

**Date:** 2026-03-23
**Reviewer:** Codex 5.4 (Claude Opus 4.6)
**Scope:** All 6 HTML pages + 9 locale JSON files
**Purpose:** Final GO/NO-GO before live deployment

---

## 1. Content Integrity

- PASS -- Zero instances of "Lorem", "TODO", or "TBD" found across all 6 HTML files. The word "placeholder" appears only in the contact page's map embed (`Map embed placeholder -- 39 Hongkong Street, Singapore`) and CSS class names / form input placeholders, which are expected functional uses, not leftover draft text.
- PASS -- No fabricated metrics. All numbers are verified: "34 patents" and "150+ countries" appear in verified team bios (Wu Linwei / GameSir). "Est. 2024" is factual. Outcome descriptions use qualitative language ("Screening time reduced from hours to minutes") rather than unverified percentages.
- PASS -- Team names correct everywhere:
  - Wu Linwei / 武林威 -- index.html (L783-784), company/index.html (L435-436)
  - Chen Jinzhu / 陈进柱 -- index.html (L792-794), company/index.html (L446-447)
  - Leonard Chow Yi Ding / 周义鼎 -- index.html (L802-804), company/index.html (L457-458)
- PASS -- Company details consistent: UEN 202432774E and address "39 Hongkong Street #03-01" appear in footer across all 6 pages, Schema.org on homepage + contact, company about section, and contact sidebar.

---

## 2. Links

- PASS -- All nav links use absolute paths: `/solutions/`, `/case-studies/`, `/how-we-work/`, `/company/`, `/contact/`. Consistent across all 6 pages.
- PASS -- Zero dead `href="#"` links found anywhere. The only `href="#"` was previously the case study cards (F-01); now case study cards have no href at all (they are `<div>` elements, not `<a>` tags). The homepage privacy footer link uses `href="#privacy"` which is a valid same-page anchor.
- PASS -- All CTA buttons point to `/contact/` or valid external targets (`https://wa.me/6588165505`). Verified on: homepage hero CTAs (L612-613), solutions page pillar CTAs (L384, 423, 462, 501, 540), how-we-work CTA section (L577), company contact section (L524).
- PASS -- Footer links consistent across all 6 pages: Solutions, Case Studies, How We Work, Company, Privacy. Sub-pages use `/#privacy` to link back to the homepage privacy section. Homepage uses `#privacy` as a same-page anchor.
- WARN -- Contact form `action="#"` (contact/index.html L470). This is intentional -- the JS intercepts the submit and opens mailto:. Not a dead link, but noted for clarity.

---

## 3. i18n (Internationalization)

- PASS -- `data-i18n` attributes present on all translatable elements across all 6 pages. Total: 421 occurrences.
- PASS -- en.json has exactly **348 keys**. Confirmed.
- PASS -- All 9 locale files have exactly 348 keys each: en, zh-Hans, ms, ta, id, th, vi, my, fil.
- PASS -- i18n JS loader present and functional on all 6 pages. Each page includes: `LANGS` array, `loadFont()`, `applyTranslations()`, `setLang()`, and auto-init from URL/localStorage.
- PASS -- Language switcher (`<select id="langSwitcher">`) present on all 6 pages with all 9 language options.
- FAIL -- **48 homepage-specific i18n keys are used in `data-i18n` attributes in index.html but are NOT present in en.json (or any locale file).** These cover: hero section (hero.powered), proof strip (proof.singapore, proof.sectors, proof.outcome, proof.est), solutions overview (solutions.label, solutions.title, solutions.recruitment.desc, solutions.finance.desc, solutions.frontline.desc, solutions.learnMore, solutions.also), featured case study (caseStudy.label, caseStudy.title, caseStudy.tag, caseStudy.headline, caseStudy.clientLabel, caseStudy.client, caseStudy.challengeLabel, caseStudy.challenge, caseStudy.outcomeLabel, caseStudy.outcome, caseStudy.readMore), process timeline (process.label, process.title, process.step1-5.title/desc), why-us section (whyUs.*), team section (team.meetFull), contact CTA (contact.headline, contact.talkToUs).

  **Impact:** English display is fine (hardcoded text remains). But when a user switches to any other language, these 48 elements will NOT translate -- they will keep their English text. This affects 8 of 11 sections on the homepage.

  **Fix:** Add these 48 keys to all 9 locale files, or remove the `data-i18n` attributes from these elements if translation is not intended.

---

## 4. SEO

- PASS -- Every page has a unique `<title>`:
  - index.html: "Flame Source Technology | Workflow Automation Singapore"
  - solutions: "Solutions -- Flame Source Technology"
  - case-studies: "Case Studies -- Flame Source Technology"
  - how-we-work: "How We Work -- Flame Source Technology"
  - company: "Company -- Flame Source Technology"
  - contact: "Contact -- Flame Source Technology"

- PASS -- Every page has `<meta name="description">` with unique, relevant content.

- PASS -- Every page has `<link rel="canonical">` with trailing slash:
  - `https://flamesource.ai/`, `https://flamesource.ai/solutions/`, etc.

- PASS -- Schema.org present on homepage (`Organization`) and contact page (`LocalBusiness`).

- PASS -- All `<img>` tags have `alt` text (9 images total across all pages).

- PASS -- hreflang tags for all 9 languages + x-default present on all 6 pages.

- PASS -- og:url has trailing slashes on all pages (F-05 resolved).

- WARN -- **Unescaped `&` in meta description attributes:**
  - `how-we-work/index.html` L7: `content="...Align & Sign, Build & Iterate..."` (meta description)
  - `how-we-work/index.html` L9: `content="...Align & Sign, Build & Iterate..."` (og:description)
  - `how-we-work/index.html` L15: `content="...Align & Sign, Build & Iterate..."` (twitter:description)
  - `case-studies/index.html` L7: `content="...finance, F&B, sales..."` (meta description)

  **Impact:** Technically invalid HTML. Most browsers and search engine parsers handle this gracefully, but validators will flag it. Should be `&amp;` in attribute values.

---

## 5. Technical

- PASS -- No unclosed HTML tags detected. All 6 files have matching `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, and closing tags.
- PASS -- No JS syntax errors detected. All scripts use ES5-compatible syntax with `var` declarations and `function` keywords.
- PASS -- CSS `:root` variables are consistent across all 6 pages: same 17 custom properties with identical values.
- PASS -- `.reveal` fallback animation present on all 6 pages (CSS `@keyframes autoReveal` with 2s animation-delay).
- PASS -- `<noscript>` fallback present on all 6 pages, overriding `.reveal` to `opacity: 1`.
- PASS -- Responsive grids collapse properly:
  - Solutions grid: 3-col -> 2-col -> 1-col
  - Process grid: 5-col -> 3-col -> 2-col -> 1-col
  - Team grid: 3-col -> 1-col
  - Case studies grid: 2-col -> 1-col
  - Contact grid: 1.2fr+0.8fr -> 1-col

- WARN -- **Unescaped `F&B` in element text content:**
  - `solutions/index.html` L444: `<h3>...F&B Staff</h3>`
  - `solutions/index.html` L459: `<p>F&B operators...</p>`
  - `case-studies/index.html` L359: `<button>F&B</button>`

  **Impact:** Browsers render this correctly, but it is technically invalid HTML. Since the `data-i18n` attributes on these elements will replace the text via JS translation, the impact is cosmetic-only for the English fallback.

---

## 6. Previous FAIL Items

| ID | Issue | Status | Notes |
|----|-------|--------|-------|
| F-01 | `href="#"` on case study cards | PASS | Cards are now `<div>` elements, no href at all. |
| F-02 | Unescaped `&` in HTML | WARN | Still present in 4 meta tags and 3 element texts (see Sections 4 + 5). Not a functional blocker. |
| F-03 | Homepage hero CTA1 goes to /contact/ | PASS | `index.html` L612: `<a href="/contact/" class="btn btn-primary">`. |
| F-04 | Homepage hero CTA2 points correctly | PASS | `index.html` L613: `<a href="/case-studies/" class="btn btn-outline">`. |
| F-05 | og:url has trailing slashes | PASS | All 6 pages confirmed with trailing slashes. |
| F-06 | Company page bios use separate i18n keys | PASS | Company page uses `company.team.wu.bio`, `company.team.chen.bio`, `company.team.leonard.bio` -- distinct from homepage keys `team.wu.bio`, etc. |
| F-07 | Company page bios have separate i18n keys | PASS | Same as F-06 -- confirmed. |

---

## Summary

| Category | PASS | FAIL | WARN |
|----------|------|------|------|
| Content integrity | 4 | 0 | 0 |
| Links | 4 | 0 | 1 |
| i18n | 5 | 1 | 0 |
| SEO | 7 | 0 | 1 |
| Technical | 6 | 0 | 1 |
| Previous FAILs | 7 | 0 | 1 |
| **Total** | **33** | **1** | **4** |

### FAIL Items

1. **FAIL-001: 48 homepage i18n keys missing from locale files**
   - File: `index.html` (all `data-i18n` attributes in sections: hero, proof, solutions overview, featured case study, process, why-us, team overview, contact CTA)
   - Impact: Homepage does not translate when users switch language. All other 5 pages translate correctly.
   - Fix: Add these 48 keys to all 9 locale JSON files with proper translations.

### WARN Items

1. **WARN-001: Unescaped `&` in meta description attributes** (how-we-work L7/9/15, case-studies L7). Should be `&amp;`.
2. **WARN-002: Unescaped `F&B` in element text** (solutions L444/459, case-studies L359). Should be `F&amp;B`.
3. **WARN-003: Contact form action="#"** (contact L470). Intentional -- JS intercepts submit. Not a dead link.
4. **WARN-004: Map embed placeholder text visible to users** (contact L586). The text "Map embed placeholder -- 39 Hongkong Street, Singapore" is displayed. Consider replacing with an actual map embed or removing the placeholder text.

---

## Recommendation

### NO-GO

The homepage i18n gap (FAIL-001) means the most important page on the site will not translate for 8 of 9 supported languages. Since the site explicitly advertises 9-language support via the language switcher on every page, this is a functional gap that will be immediately visible to non-English visitors.

**To convert to GO:** Add the 48 missing keys to all 9 locale files. The WARN items are non-blocking but should be addressed in a follow-up pass.
