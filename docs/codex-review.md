# Codex 5.4 Cross-Review: Flame Source Tech Website (6 Pages)

**Date:** 2026-03-23
**Reviewer:** Codex 5.4 (Claude Opus 4.6)
**Files reviewed:**
- `/home/leonard/flamesource-tech/index.html`
- `/home/leonard/flamesource-tech/solutions/index.html`
- `/home/leonard/flamesource-tech/case-studies/index.html`
- `/home/leonard/flamesource-tech/how-we-work/index.html`
- `/home/leonard/flamesource-tech/company/index.html`
- `/home/leonard/flamesource-tech/contact/index.html`

---

## PASS

- **No lorem ipsum / TODO / TBD / FIXME** found in any page. All content is final.
- **Company details consistent** across all 6 pages: UEN 202432774E, address "39 Hongkong Street #03-01, Singapore 059678", founding year 2024, copyright 2024-2026.
- **Team names consistent**: Wu Linwei / 武林威, Chen Jinzhu / 陈进柱, Leonard Chow Yi Ding / 周义鼎 -- present on index.html and company/index.html with correct Chinese names.
- **All CSS custom properties identical** across all 6 pages (--accent, --bg-deep, --bg, --bg-card, etc.).
- **Every page has unique `<title>` and `<meta name="description">`**. No duplicates.
- **Canonical URLs present and correct** on all 6 pages (trailing slash matches directory structure).
- **All images have `alt` text** (logo, office photo, interior photo).
- **hreflang alternates** present on all 6 pages (en, zh-Hans, ms, ta, x-default).
- **Favicon chain complete**: favicon.ico, favicon-32.png, favicon-192.png, apple-touch-icon.png -- all assets exist on disk.
- **Responsive breakpoints** at 1024, 768, 480px on all pages. Grids collapse to single columns. No hardcoded pixel widths that would break mobile.
- **i18n `data-i18n` attributes** present on all user-facing text elements across all pages.
- **Language switcher** identical on all 6 pages (EN, CN, BM, Tamil, ID, TH, VI, MY, FIL).
- **Nav links structurally identical** across all 6 pages: Solutions, Case Studies, How We Work, Company, lang switcher, Talk to Us CTA.
- **Active nav state** correctly set per page (e.g., `class="active"` on /solutions/ for solutions page, on /case-studies/ for case studies, etc.).
- **Footer** structurally identical on all 6 pages (copyright line + privacy policy link).
- **JSON-LD structured data** present on index.html (Organization) and contact/index.html (LocalBusiness).
- **No JavaScript syntax errors** found (all IIFEs properly closed, no missing variables).
- **Chen Jinzhu years** dynamically computed (`new Date().getFullYear() - 2008`) on both index.html and company/index.html.
- **Form validation** on contact page has proper required attributes, real-time error clearing, and field-level error messages.
- **PDPA/Privacy Policy** fully present on index.html with expandable accordion; referenced from all footers and contact form.

---

## FAIL

### F-01: Case study cards link to `href="#"` (dead links)
- **File:** `case-studies/index.html`, lines 349, 362, 375, 388, 401
- **Issue:** All 5 case study cards use `<a href="#">`, which scrolls to page top on click. The "Read Case Study" link text promises a detail page that does not exist.
- **Impact:** Users clicking any case study card get a broken experience. Search engines see no meaningful link target.
- **Fix:** Either create individual case study detail pages and link to them, or change the `<a>` to a `<div>` and remove the "Read Case Study" link if detail pages are not planned.

### F-02: Unescaped `&` in HTML attribute value
- **File:** `solutions/index.html`, line 385
- **Content:** `<span class="pillar-tag" data-i18n="solutions.finance.tag">Finance & Back-Office</span>`
- **Issue:** The `&` should be `&amp;` in HTML content. Most browsers handle this gracefully, but it is technically invalid HTML and may cause issues in strict parsers.
- **Fix:** Change to `Finance &amp; Back-Office`.

### F-03: Homepage "Talk to Us" hero CTA links to `#contact` (mailto), not `/contact/`
- **File:** `index.html`, line 597
- **Content:** `<a href="#contact" class="btn btn-primary" data-i18n="hero.cta1">Talk to Us</a>`
- **Issue:** This scrolls to the Contact CTA section at the bottom of the homepage, which opens a `mailto:` link. Every other "Talk to Us" / CTA button on all other pages links to `/contact/` (the form page). This is inconsistent and means the homepage CTA bypasses the structured contact form.
- **Fix:** Change `href="#contact"` to `href="/contact/"` to match the rest of the site.

### F-04: Homepage Contact CTA "Talk to Us" button opens `mailto:` instead of contact form
- **File:** `index.html`, line 816
- **Content:** `<a href="mailto:info@flamesource.ai" class="btn btn-primary">Talk to Us</a>`
- **Issue:** The primary CTA in the Contact section of the homepage is a raw mailto link. The dedicated `/contact/` page has a proper form with validation, PDPA consent, structured fields, and clipboard fallback. Sending users directly to mailto loses all that structure.
- **Fix:** Change to `href="/contact/"`.

### F-05: `og:url` values missing trailing slash (mismatch with canonical)
- **Files:** `solutions/index.html` line 11, `how-we-work/index.html` line 11, `company/index.html` line 11, `case-studies/index.html` line 11, `contact/index.html` line 11
- **Issue:** The `og:url` values use e.g. `https://flamesource.ai/solutions` (no trailing slash), but the canonical URLs use `https://flamesource.ai/solutions/` (with trailing slash). These should match to avoid duplicate-URL signals to social crawlers.
- **Fix:** Add trailing slash to all `og:url` values.

### F-06: `team.chen.bio` i18n key structure differs between index.html and company/index.html
- **File:** `index.html`, line 783
- **Content:** `<p class="team-bio"><span class="team-highlight"><span id="cjYears"></span> years</span> <span data-i18n="team.chen.bio">in software engineering...</span></p>`
- **File:** `company/index.html`, line 432
- **Content:** `<p class="team-bio" data-i18n="team.chen.bio"><span class="team-highlight"><span id="cjYears"></span> years</span> in software engineering...`
- **Issue:** On the homepage, the `data-i18n="team.chen.bio"` is on an inner `<span>`, and the years prefix is outside the i18n span. On the company page, the `data-i18n` is on the outer `<p>`, and the `applyTranslations()` function prepends years via special-case logic (`years + ' ' + t[key]`). When i18n is applied on the homepage, it replaces only the inner span's text (not the years prefix). When i18n is applied on the company page, it replaces the entire `<p>` content with `textContent`, destroying the `<span id="cjYears">` element and the highlight markup.
- **Impact:** Switching language on the company page will destroy the formatted years display and highlight spans in Chen Jinzhu's bio. On the homepage, the years prefix will remain in English even after language switch.
- **Fix:** Unify the markup structure. Use the same pattern on both pages, and ensure the i18n apply function handles the years+bio composite correctly without destroying DOM elements.

### F-07: `team.wu.bio` has different content on index.html vs company/index.html but uses same i18n key
- **File:** `index.html`, line 773 -- shorter bio, no education mention
- **File:** `company/index.html`, line 421 -- longer bio, includes B.Eng., supply chain details
- **Issue:** Both use `data-i18n="team.wu.bio"`, so when i18n is applied, both will display the same translation text (whatever is in the JSON file). The intentionally different lengths will be lost.
- **Impact:** Minor for English (the JSON value overrides both), but the differentiation between short (homepage) and full (company page) bios is lost.
- **Fix:** Use a different key for the homepage short bio (e.g., `team.wu.bioShort`) or accept that i18n will normalize them.

---

## WARN

### W-01: Map embed is a placeholder
- **File:** `contact/index.html`, line 566-568
- **Content:** `<div class="map-placeholder"><span>Map embed placeholder -- 39 Hongkong Street, Singapore</span></div>`
- **Impact:** Users see a grey box with placeholder text instead of an actual map. Not technically broken but looks unfinished.
- **Recommendation:** Either embed a Google Maps iframe or remove the placeholder entirely.

### W-02: Orphaned image assets not used by any HTML page
- **Files in `/home/leonard/flamesource-tech/assets/`:** `hero-bg.jpg`, `office-onenorth.jpg`, `poster-finance.jpg`, `poster-music.jpg`, `poster-recruitment.jpg`, `poster-restaurant.jpg`, `poster-sales.jpg`, `favicon-16.png`, `favicon-48.png`, `favicon-180.png`, `favicon-512.png`
- **Impact:** These add to deployment size but are never referenced. The poster images may have been intended for case study cards or OG images.
- **Recommendation:** Either use them or remove them to reduce deploy payload.

### W-03: Homepage footer has a `footer-nav` with links; other pages have a simpler footer
- **File:** `index.html`, lines 878-884 -- footer includes a `<ul class="footer-nav">` with links to Solutions, Case Studies, How We Work, Company, Privacy.
- **All other pages:** Footer contains only the copyright line and a Privacy Policy link. No footer-nav.
- **Impact:** Minor inconsistency. Homepage footer is more feature-rich than subpages.
- **Recommendation:** Either add the footer-nav to all pages or remove it from the homepage for consistency.

### W-04: `team.leonard.bio` has different content on index.html vs company/index.html but same i18n key
- **File:** `index.html`, line 793 -- shorter version
- **File:** `company/index.html`, line 443 -- includes UCD education, more detail
- **Impact:** Same issue as F-07. When i18n is applied, both get the same translation. Different English defaults will be overridden.
- **Recommendation:** Use different i18n keys if the bios are intentionally different lengths.

### W-05: Contact form uses `mailto:` submission, no server-side endpoint
- **File:** `contact/index.html`, lines 687-729
- **Issue:** The form does not POST to a backend. It constructs a `mailto:` URL and tries to open the mail client, with clipboard copy as fallback. This is a known limitation (documented in the feedback message), but it means enquiry data is never stored server-side and depends on the user's mail client opening.
- **Recommendation:** Consider adding a Cloudflare Workers or Pages Functions endpoint to capture form data, then redirect to a thank-you state.

### W-06: `data-i18n-placeholder` attributes on contact form inputs not handled by most pages' i18n code
- **File:** `contact/index.html` -- the `applyTranslations()` function includes a second loop for `data-i18n-placeholder` (line 764).
- **Other pages** -- their `applyTranslations()` functions do not include this loop. This is fine since only the contact page uses form placeholders, but it means the i18n code is not uniform across pages.
- **Impact:** No functional issue currently, but if form elements were added to other pages, placeholders would not translate.

### W-07: `hreflang` alternates only cover 4 languages but site supports 9
- **All pages:** `hreflang` tags exist for `en`, `zh-Hans`, `ms`, `ta`, and `x-default`.
- **Missing:** `id` (Indonesian), `th` (Thai), `vi` (Vietnamese), `my` (Myanmar), `fil` (Filipino) -- all supported in the language switcher and have locale JSON files.
- **Impact:** Search engines will not know about the Indonesian, Thai, Vietnamese, Myanmar, and Filipino versions.
- **Fix:** Add `hreflang` link tags for all 9 supported languages on every page.

### W-08: CSS is fully inlined and duplicated across all 6 pages
- **All files.**
- **Impact:** Each page carries its own copy of the full CSS (~280-500 lines). Any design change requires editing 6 files. Total redundant CSS across the site is roughly 30-40 KB.
- **Recommendation:** Extract shared styles into a single `styles.css` file and link it from all pages. Keep page-specific styles inline or in separate small files.

### W-09: i18n JavaScript code duplicated across all 6 pages
- **All files.**
- **Impact:** The `setLang()`, `applyTranslations()`, `loadFont()`, LANGS array, and FONT_MAP are copy-pasted into every page with slight variations. The homepage version has extra special-case logic. Bugs fixed in one page's i18n code will not propagate to others.
- **Recommendation:** Extract into a shared `i18n.js` file.

### W-10: Locales fetch path differs between index.html and subpages
- **File:** `index.html`, line 1007 -- `fetch('locales/' + lang + '.json')` (relative, no `../`)
- **All subpages** -- `fetch('../locales/' + lang + '.json')` (relative with `../`)
- **Impact:** This is actually correct since index.html is in the root and subpages are one directory deep. But it means the i18n code cannot be directly shared without adjusting the path. A base-relative path like `/locales/` would be more robust.

---

## Summary

| Severity | Count |
|----------|-------|
| FAIL     | 7     |
| WARN     | 10    |
| PASS     | 20    |

**Critical items to fix before launch:**
1. F-01: Dead `href="#"` links on all case study cards
2. F-03/F-04: Homepage CTA should point to `/contact/`, not `#contact`/`mailto:`
3. F-05: og:url trailing slash mismatch
4. F-06: Chen Jinzhu bio i18n will break on language switch (company page)
5. W-07: Missing hreflang for 5 of 9 supported languages
