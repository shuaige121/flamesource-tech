# Gemini Visual Review -- Final Report

**Date:** 2026-03-23
**Reviewed by:** Gemini 2.5 Flash (via art.py) + Claude visual verification
**Pages:** 6 pages x 2 viewports (desktop 1440x900, mobile 375x812) = 12 screenshots

---

## Score Summary

| Page | Desktop | Mobile | Avg |
|------|---------|--------|-----|
| Home (`/`) | 4 | 3.5 | 3.75 |
| Solutions (`/solutions/`) | 3 | 3 | 3.0 |
| Case Studies (`/case-studies/`) | 8 | 4.5 | 6.25 |
| How We Work (`/how-we-work/`) | 6.5 | 3 | 4.75 |
| Company (`/company/`) | 3 | 4 | 3.5 |
| Contact (`/contact/`) | 8 | 8 | 8.0 |
| **Site Average** | **5.4** | **4.3** | **4.9** |

---

## Cross-Page Critical Pattern

The single most impactful issue spans **all 6 pages**: massive blocks of empty dark space (50-80% of page height) between content sections and the footer. This is likely caused by CSS sections with fixed `min-height` or `height: 100vh` that contain no rendered content. This makes every page except Contact look fundamentally broken/unfinished.

---

## Issues by Severity

### 🔴 Critical (Fix Immediately)

| # | Issue | Pages Affected | Description |
|---|-------|---------------|-------------|
| C1 | **Massive empty space / missing section content** | ALL except Contact | Huge dark voids between hero/content and footer. Sections appear to have `min-height` set but contain no visible content. Users will assume the site is broken. |
| C2 | **Solutions page shows only "01" section** | Solutions | Numbered "01 Automated Screening" implies 02, 03, etc. should follow, but they are invisible/missing. Page is 80% empty. |
| C3 | **Company page "Who We Are" has no body content** | Company | Section heading present but zero copy, no team photos, no imagery. Page looks abandoned. |
| C4 | **Home page missing core content sections** | Home | Below the hero and trust bar, the entire page is empty. No features, no social proof, no how-it-works, no testimonials. |
| C5 | **Case Studies page cards missing on mobile** | Case Studies (mobile) | Filter buttons visible but no case study cards render below them. Page appears empty/broken. |
| C6 | **How We Work mobile shows only card "01"** | How We Work (mobile) | Headline says "Five Steps" but only step 01 is visible. Steps 02-05 are missing. No carousel indicators. |
| C7 | **Footer nav text wrapping on mobile** | Home (mobile) | Footer links like "Case / Studies" and "How / We / Work" break into vertical multi-line fragments. Unreadable and untappable. |

### 🟡 Medium (Fix Soon)

| # | Issue | Pages Affected | Description |
|---|-------|---------------|-------------|
| M1 | **No primary CTA in body content** | Home, Solutions, Company, How We Work | The only conversion path is "Talk to Us" in the nav. No contextual CTAs (Book a Demo, Get Started) within page content. |
| M2 | **Zero social proof site-wide** | ALL | No client logos, testimonials, specific metrics, or named case studies anywhere. For B2B automation, this is a trust killer. |
| M3 | **Secondary button ("See Case Studies") invisible** | Home (desktop + mobile) | Dark outline on dark background with dark image behind it. Button is nearly invisible. Needs solid/semi-transparent fill. |
| M4 | **Form placeholder text low contrast** | Contact | Placeholder text inside slate-blue input fields is too dark. Likely fails WCAG AA contrast requirements. |
| M5 | **How We Work 5-column cards too cramped** | How We Work (desktop) | Five cards forced into one row. Text wraps awkwardly with very short lines. Consider 3+2 grid or horizontal scroll. |
| M6 | **Company page hero unbalanced** | Company (desktop) | Text occupies only left side, right side completely empty. Needs hero image, illustration, or split-screen layout. |
| M7 | **Language selector ("EN") looks like input field** | ALL (desktop) | Dark bordered box looks like a search/text input rather than a dropdown. Needs dropdown chevron or different styling. |
| M8 | **Contact form high friction on mobile** | Contact (mobile) | 7 fields including long-form textarea on first interaction. Consider multi-step form or reducing required fields. |
| M9 | **No supporting imagery/graphics** | Solutions, Company, How We Work | Pages are 100% text-based. No icons, illustrations, photos, or diagrams to break monotony. |
| M10 | **"Prefer a Quick Chat?" box floats awkwardly** | Contact (desktop) | Right-side contact box is much shorter than left form. Should be `position: sticky` to follow scroll. |
| M11 | **Redundant "Singapore-based" copy** | Home (mobile) | Paragraph text says "Singapore-based" and the stats bar below it repeats "Singapore-based" immediately. |
| M12 | **Missing empty state for case studies** | Case Studies (mobile) | If cards fail to render, there is no fallback message. Should show "Loading..." or placeholder. |

### 🟢 Minor (Polish & Refinement)

| # | Issue | Pages Affected | Description |
|---|-------|---------------|-------------|
| G1 | **Orange accent text contrast** | ALL | Dark orange (#...) on navy background may fail WCAG AAA. Brighten orange by 10-15% for "SOLUTIONS", "PROCESS", "01" labels. |
| G2 | **"Est. 2024" as negative trust signal** | Home | Highlighting a very recent founding year in B2B can imply lack of track record. Replace with outcome metrics. |
| G3 | **Copyright "2024-2026" looks odd** | ALL (footer) | Future copyright year is unconventional. Use "2024-2025" or just current year. |
| G4 | **"Powered by Flame Source OS" monospace font** | Home | Monospace feels disconnected from the clean sans-serif used everywhere else. Low contrast too. |
| G5 | **Footer text too small and low contrast** | ALL | Copyright, UEN, Privacy Policy text is very small and dim gray. Brighten slightly for accessibility. |
| G6 | **Nav active state underline too tight** | ALL (desktop) | Underline touches bottom of text. Add 2-4px offset for cleaner look. |
| G7 | **Hero paragraph line length too wide** | Company, Solutions (desktop) | Body text spans full container width. Constrain to ~60-70 characters per line with `max-width`. |
| G8 | **H1 line-height cramped** | Contact, Company (mobile) | Main headlines feel dense. Increase line-height slightly for breathing room. |
| G9 | **Privacy Policy link color inconsistency** | Contact | Orange in form disclaimer, white/gray in footer. Pick one link color. |
| G10 | **Phone placeholder assumes Singapore** | Contact | "+65 XXXX XXXX" — if international clients expected, add country code selector. |
| G11 | **Mobile hamburger menu padding asymmetric** | ALL (mobile) | Right-edge spacing of hamburger icon doesn't match left-edge spacing of logo. |
| G12 | **Background image competes with hero text** | Home (desktop) | Building facade behind subheadline reduces contrast slightly. Increase overlay opacity. |

---

## Priority Fix Plan

### Phase 1 -- Structural (Fixes C1-C7)
These are the highest-impact issues. The site currently looks broken/unfinished.

1. **Audit all section containers** for `min-height: 100vh` or similar CSS that creates empty space when content is missing. Remove or set to `min-height: auto`.
2. **Populate missing content sections** on Home (features, social proof, how-it-works), Solutions (sections 02-05), and Company (Who We Are body, team, imagery).
3. **Fix mobile rendering** of case study cards, how-we-work steps 02-05, and footer nav wrapping.
4. **Ensure footer sits directly below content** -- verify flexbox/grid layout pushes footer to bottom of content, not bottom of artificially tall containers.

### Phase 2 -- Conversion & Trust (Fixes M1-M5)
1. Add contextual CTAs within each page body (not just nav).
2. Add social proof elements: client logos, testimonials, specific outcome metrics.
3. Fix secondary button visibility on home page.
4. Fix contact form placeholder contrast.
5. Reconsider how-we-work card layout (3+2 or carousel).

### Phase 3 -- Polish (Fixes M6-M12, G1-G12)
1. Balance company hero layout.
2. Restyle language selector.
3. Improve orange accent contrast.
4. Fix footer text sizing and contrast.
5. Address typography spacing issues.

---

## Screenshots

All 12 screenshots saved to `/tmp/`:

| File | Page | Viewport |
|------|------|----------|
| `gemini-final-home-desktop.png` | Home | 1440x900 |
| `gemini-final-home-mobile.png` | Home | 375x812 |
| `gemini-final-solutions-desktop.png` | Solutions | 1440x900 |
| `gemini-final-solutions-mobile.png` | Solutions | 375x812 |
| `gemini-final-case-studies-desktop.png` | Case Studies | 1440x900 |
| `gemini-final-case-studies-mobile.png` | Case Studies | 375x812 |
| `gemini-final-how-we-work-desktop.png` | How We Work | 1440x900 |
| `gemini-final-how-we-work-mobile.png` | How We Work | 375x812 |
| `gemini-final-company-desktop.png` | Company | 1440x900 |
| `gemini-final-company-mobile.png` | Company | 375x812 |
| `gemini-final-contact-desktop.png` | Contact | 1440x900 |
| `gemini-final-contact-mobile.png` | Contact | 375x812 |

---

## Raw Gemini Reviews

### Home -- Desktop (4/10)
- Hero section strong: modern aesthetic, clear value prop, good brand colors
- Bottom 80% is massive empty dark bands -- looks incomplete
- Trust bar ("5 sectors deployed") present but no actual proof
- "Talk to Us" is high-friction CTA with no supporting content
- Secondary CTA nearly invisible

### Home -- Mobile (3.5/10)
- Strong initial value prop, bold color palette fits tech space
- 70% of page is blank dark gradient between hero and footer
- Footer nav text wrapping is broken ("Case / Studies", "How / We / Work")
- "Powered by Flame Source OS" is low contrast dark gray on dark
- Redundant "Singapore-based" in both paragraph and stats bar

### Solutions -- Desktop (3/10)
- Typography hierarchy excellent where content exists
- Only section "01" visible, implies 02/03 should follow
- Massive empty space below -- looks unfinished
- No CTA in body, no social proof, no supporting imagery
- Orange "01" text may fail WCAG contrast

### Solutions -- Mobile (3/10)
- Typography hierarchy good, readability high
- Only "01 Recruitment Operations" card visible, missing body text
- Massive dead space (5+ screen heights) between card and footer
- No CTA anywhere besides hamburger menu
- Orange accent borderline on WCAG contrast

### Case Studies -- Desktop (8/10)
- Best non-contact page. Sleek, polished B2B aesthetic
- Good grid layout, clear filter system, readable cards
- Case studies anonymized -- named clients would boost trust
- Body text slightly small relative to headings
- Still has empty space below cards before footer
- "EN" selector looks like default HTML element

### Case Studies -- Mobile (4.5/10)
- Visual design language is sleek and consistent
- Critical: no case study cards visible below filters -- page appears empty
- Massive blank void in lower two-thirds
- If no content, needs empty state UX
- Filter buttons well-arranged for mobile

### How We Work -- Desktop (6.5/10)
- Strong dark-mode aesthetic, consistent brand application
- All 5 process cards visible in one row
- 5-column layout too cramped -- text wraps awkwardly
- Massive empty space below cards
- No supporting imagery or iconography

### How We Work -- Mobile (3/10)
- Only card "01 Consult" visible out of promised "Five Steps"
- 5-6 screen heights of dead space between card and footer
- No carousel indicators, no swipe affordance
- No CTA to capture intent after reading process
- Typography and color consistency remain strong

### Company -- Desktop (3/10)
- "Who We Are" section has heading but zero body content
- Page dominated by empty dark blocks with faint divider lines
- No team photos, office images, or visual proof of any kind
- Text pushed to top-left, severe visual imbalance
- Footer too bare-bones for B2B credibility

### Company -- Mobile (4/10)
- Clean typography hierarchy maintained
- Massive layout gap between "Who We Are" and footer
- Zero CTA on the page
- Copyright "2024-2026" looks like template error
- Footer alignment switches from left to center (inconsistent)
- UEN and location in footer are good trust signals

### Contact -- Desktop (8/10)
- Best page on the site. Clean, professional lead-gen layout
- Good form structure, clear hierarchy, consistent design
- Placeholder text contrast too low in form fields
- Right column ("Quick Chat?") should be sticky
- Lacks social proof (client logos, testimonial)
- "EN" selector looks like form input

### Contact -- Mobile (8/10)
- Very solid mobile design, professional dark theme
- Excellent trust signals: PDPA mention, UEN, full entity name
- Excessive blank space below form before footer (CSS bug)
- 7-field form is high friction on mobile
- Form disclaimer text small and low contrast
- Privacy Policy link color inconsistent (orange in form, gray in footer)
