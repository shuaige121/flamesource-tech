# Flame Source Technology — Full Content Audit

**Date:** 2026-03-22
**Scope:** Every piece of content in `index.html` and `locales/en.json`
**Reference:** Positioning memo at `docs/positioning-memo.md`

---

## Legend

| Action | Meaning |
|---|---|
| **KEEP** | Factual, verifiable, useful |
| **REWRITE** | Good intent but needs evidence-based or business-outcome language |
| **DELETE** | Placeholder, unverifiable claim, empty shell, or AI hype |
| **NEED EVIDENCE** | Strong claim that requires real data to back it up |

---

## 1. Meta / SEO / Page Title

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `<title>` | Page title | "Flame Source OS — We Build AI That Works" | **REWRITE** | Positioning memo says OS is NOT the homepage hero. Title should lead with business outcome, not product name. |
| `<meta description>` | SEO description | "Flame Source OS — the AI operating system that turns business problems into working solutions. Model routing, skill library, zero prompt engineering." | **REWRITE** | Too product/AI-centric. Should describe what the company does for customers: automate operations workflows for SG SMEs. |
| `og:title` | Social share title | "Flame Source OS — We Build AI That Works" | **REWRITE** | Same issue as page title. |
| `og:description` | Social share desc | "The AI operating system. Give us the problem. Get back the result." | **REWRITE** | AI hype phrasing. Should communicate business value. |
| `twitter:title` | Twitter card | "Flame Source OS — We Build AI That Works" | **REWRITE** | Same as above. |
| `twitter:description` | Twitter card desc | "The AI operating system. Give us the problem. Get back the result." | **REWRITE** | Same as above. |

---

## 2. Navigation

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `nav.product` | Nav link | "Flame Source OS" | **REWRITE** | Per positioning memo, OS should be secondary ("Powered by"). Nav should say "Solutions" or "What We Do". |
| `nav.team` | Nav link | "Team" | **KEEP** | Clear and standard. |
| `nav.contact` | Nav CTA | "Get in Touch" | **KEEP** | Aligns with positioning memo CTA guidance. |
| Nav logo text | Brand | "FLAME SOURCE" | **KEEP** | Company name. |
| Language switcher | 9 languages | EN, 中文, BM, தமிழ், ID, ไทย, VI, မြန်မာ, FIL | **KEEP** | Supports multilingual audiences. Verify all locale files are complete. |

---

## 3. Poster Carousel — Recruitment (Slide 1)

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `poster.recruitment.tag` | Tag label | "Recruitment" | **KEEP** | Clear sector label. |
| `poster.recruitment.headline` | Headline | "500 Resumes. One Right Hire. Your Team Already Missed Her." | **REWRITE** | Dramatic but unverifiable. "500" and "One Right Hire" — where does 500 come from? Also, "Her" assumes gender. |
| `poster.recruitment.body` | Body text | "Half those resumes were written by AI. They all look the same..." | **REWRITE** | "Half those resumes were written by AI" — unverifiable claim. "Scores every application in seconds" — needs evidence. Good problem framing but needs real-world grounding. |
| `poster.recruitment.metric1` | Metric label | "resumes per role" | **KEEP** | Label is descriptive. |
| `poster.recruitment.metric2` | Metric label | "worth interviewing" | **KEEP** | Label is descriptive. |
| Metric values | 500 → 10 | Animated counter: 500 → 10 | **NEED EVIDENCE** | Are these real numbers from a real client? 500 resumes per role is plausible for some markets, but the "10 worth interviewing" ratio needs a specific client to back it up. Currently reads as invented. |
| `poster.caseLink` on slide | CTA button | "View Case Study →" | **REWRITE** | Only valid if the case study it opens is real. See Case Study section below. |

---

## 4. Poster Carousel — Finance (Slide 2)

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `poster.finance.tag` | Tag label | "Finance" | **KEEP** | Clear sector label. |
| `poster.finance.headline` | Headline | "Three People. Forty Hours. One Wrong Number Undoes It All." | **REWRITE** | Good storytelling structure, but specific numbers (3 people, 40 hours) need to come from a real client. |
| `poster.finance.body` | Body text | "Payroll. Reconciliation. Invoicing. Forty hours a month..." | **REWRITE** | "Runs the entire cycle. No manual entry. No late nights. No correction email" — absolute claims ("no errors ever") need evidence. |
| Metric values | 40h → 0 | Animated counter: 40h → 0 | **NEED EVIDENCE** | "40 hours reduced to zero" is a bold claim. Zero manual work is almost never true. Needs real client data or should be softened to "40h → 2h" or similar. |
| `poster.finance.metric2` | Metric label | "errors over 6 months" | **NEED EVIDENCE** | "Zero errors over 6 months" is an extraordinary claim. Needs specific client attribution. |

---

## 5. Poster Carousel — Music Production (Slide 3)

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `poster.music.tag` | Tag label | "Music Production" | **REWRITE** | MOVE TO LAST / CONSIDER REMOVING FROM HOMEPAGE. Per positioning memo, Creative Production is lowest priority (pillar #5). Having it as slide 3 of 5 gives it equal weight with core offerings. |
| `poster.music.headline` | Headline | "The Song Took One Night. The Arrangement Killed Three Weeks." | **REWRITE** | Same concern — low priority vertical getting prime real estate. If kept, needs evidence for "three weeks." |
| `poster.music.body` | Body text | "...For Singapore artists, that gap kills momentum and income..." | **REWRITE** | "Handles arrangement and instrumentation in days, not weeks" — needs evidence from a real artist engagement. |
| Metric values | 3 wk → 2 days | Animated counter: 3wk → 2 days | **NEED EVIDENCE** | Is this from a real engagement? "3 weeks to 2 days" is a 90%+ reduction that needs a named or anonymized client. |
| Entire slide | Slide position | Music is poster slide #3 of 5 | **REWRITE** | MOVE TO LAST POSITION (slide 5) or REMOVE FROM HOMEPAGE CAROUSEL entirely. Positioning memo lists music as lowest priority. Recruitment, Finance, F&B, and Sales should come first. |

---

## 6. Poster Carousel — Restaurant / AR Smart Glasses (Slide 4)

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `poster.restaurant.tag` | Tag label | "F&B · AR Smart Glasses" | **KEEP** | Descriptive and accurate. |
| `poster.restaurant.headline` | Headline | '"Less Oil. Extra Crispy. No Chili." Your Burmese Server Got Every Word.' | **REWRITE** | **"Your Burmese Server"** — culturally problematic. Identifies staff by nationality/ethnicity in a headline. This reads as othering. Rewrite to focus on the communication gap without singling out a nationality: e.g., "Your Server Got Every Word" or "Your Multilingual Team Got Every Word." The Burmese context can appear in the body/case study where it's explanatory, not in the headline where it's reductive. |
| `poster.restaurant.body` | Body text | "Dish names are easy. The real problem is 'less salt', 'crispier'..." | **REWRITE** | Good problem framing. But "real-time subtitles of exactly what the customer said" is a specific technical claim that needs proof of working deployment. "AI tutor drills them on real requests until the glasses become a safety net, not a crutch" is good phrasing but needs evidence that the product exists and has been deployed. |
| Metric values | 12/wk → 0 | Animated counter: 12/wk → 0 | **NEED EVIDENCE** | "12 wrong orders per week reduced to zero." Zero is absolute. Is this from a real deployment? If so, name the timeframe and outlet count. If not, this is fabricated. |
| `poster.restaurant.metric1` | Label | "wrong orders / week" | **KEEP** | Descriptive label. |
| `poster.restaurant.metric2` | Label | "wrong orders now" | **KEEP** | Descriptive label. |

---

## 7. Poster Carousel — Sales Enablement (Slide 5)

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `poster.sales.tag` | Tag label | "Sales Enablement" | **KEEP** | Accurate sector label. |
| `poster.sales.headline` | Headline | "First Week on the Floor. She Closed Like a Ten-Year Vet." | **REWRITE** | Dramatic, unverifiable. "Closed Like a Ten-Year Vet" is hyperbole. Needs to be grounded in real outcomes. |
| `poster.sales.body` | Body text | "New reps fail because nobody is beside them when it counts..." | **REWRITE** | "Listens to every customer conversation live and coaches your rep on what to say next" — specific product claim. Is this deployed? "Like having your best closer in every room" — marketing hyperbole. |
| `poster.sales.caselink` | CTA text | "See the Case Study →" | **REWRITE** | Only valid if case study is real. See below. |
| Metric values | 3 mo → 2 wk | Animated counter: 3mo → 2wk | **NEED EVIDENCE** | "3 months ramp-up reduced to 2 weeks." This is a dramatic claim (85% reduction). Needs real client data. The case study below says "12 weeks → 3 weeks" which is different from the poster's "3 mo → 2 wk" — these numbers are inconsistent. |
| `poster.sales.metric1` | Label | "ramp-up time before" | **KEEP** | Descriptive. |
| `poster.sales.metric2` | Label | "with AI coaching" | **REWRITE** | "with AI coaching" is AI-forward language. Consider "with Flame Source" or "after deployment". |

---

## 8. Hero Section

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `hero.badge` | Badge text | "Singapore" | **KEEP** | Geographic anchor, good per positioning memo. |
| `hero.headline` | Main headline | "AI That Actually Ships." (en.json) / "We Build AI That Works." (HTML) | **REWRITE** | AI-forward headline. Positioning memo says "Lead with business outcomes, not AI capabilities." Rewrite to: "We Automate the Work Your Team Shouldn't Still Be Doing" or similar outcome-first framing. |
| `hero.sub` | Subheadline | "Your team burns 40% of its hours on work a machine should own." | **NEED EVIDENCE** | Where does "40%" come from? This looks like a made-up statistic. If there's a source (McKinsey, etc.), cite it. If not, remove or soften to "too many hours." |
| `hero.sub2` | Subheadline 2 | "Flame Source OS fixes that — one workflow at a time." | **REWRITE** | Per positioning memo, OS should not be the hero. Rewrite to company name: "We fix that — one workflow at a time." |
| `hero.cta1` | Primary CTA | "See How" (en.json) / "Learn More" (HTML) | **REWRITE** | Positioning memo says CTA should be "Talk to Us" or "Book an Intro". "See How" / "Learn More" is passive. |
| `hero.cta2` | Secondary CTA | "Talk to Us" | **KEEP** | Aligns with positioning memo CTA. |

---

## 9. The AI Gap Section

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `gap.label` | Section label | "The Problem" | **KEEP** | Clear section framing. |
| `gap.title` | Section title | "Every Company Has AI. Almost None Get Results." | **REWRITE** | AI-centric framing. Positioning memo says lead with business outcomes. Rewrite to focus on the operational problem: "Manual Workflows Are Eating Your Margins" or similar. |
| `gap.body1` | Paragraph 1 | "You bought the tools. You hired the people. Six months later the chatbot handles four questions..." | **REWRITE** | This is written from an AI-industry insider perspective, not the ICP's perspective. Singapore SME owners with 20-200 staff are not buying chatbots and hiring prompt engineers. Rewrite to describe their actual pain: manual processes, spreadsheets, overtime, errors. |
| `gap.body2` | Paragraph 2 | "The gap isn't intelligence. It's execution..." | **REWRITE** | "You need AI that touches the work — payroll, screening, ordering, translation" — the specifics are good but the framing is still AI-centric. Lead with business problem, mention AI only as mechanism. |
| `gap.stat` | Stat label | "of enterprise AI projects never reach production" | **NEED EVIDENCE** | **73%** — This appears to reference a commonly cited stat (sometimes attributed to Gartner or similar). However: (a) the exact figure varies by source, (b) no citation is provided, and (c) ICP (Singapore SMEs) are not "enterprise." This stat may not resonate with the target audience. Need to either cite the source or replace with a stat relevant to SMEs. |
| Stat value | 73% | Animated counter to 73% | **NEED EVIDENCE** | See above. Source must be cited or stat should be removed. |

---

## 10. Flame Source OS Section

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `product.label` | Section label | "Flame Source OS" | **REWRITE** | Per positioning memo: OS should be "Powered by Flame Source OS" on a secondary page, NOT a primary section. Consider renaming to "How We Work" or "Our Approach." |
| `product.title` | Section title | "Tell Us the Problem. We Ship the Fix." | **REWRITE** | Good energy but reads as startup slogan. "Ship" is tech jargon. Rewrite in business language. |
| `product.desc` | Description | "An AI operating system that orchestrates models, tools, and workflows..." | **REWRITE** | "AI operating system," "orchestrates models," "configurations" — heavy AI/tech jargon. ICP is ops directors and business owners. Simplify to what it means for them. |
| `product.f1.title` | Feature 1 title | "Model Routing" | **DELETE** | Technical jargon that means nothing to the ICP. "Model Routing" is infrastructure detail, not a customer benefit. |
| `product.f1.body` | Feature 1 body | "Picks the right AI model for each task automatically — balancing speed, accuracy, and cost. No prompt tuning. No vendor lock-in." | **DELETE** | "Prompt tuning," "vendor lock-in" — developer/AI-practitioner language. ICP does not care which model runs their payroll automation. |
| `product.f2.title` | Feature 2 title | "Skill Library" | **REWRITE** | "Skill Library" is internal product terminology. Rewrite to a customer-facing benefit like "Industry-Specific Solutions" or "Pre-Built Workflows." |
| `product.f2.body` | Feature 2 body | "Pre-built, domain-specific skills for recruitment, finance, content, translation, and more. Each skill encodes expert logic — not just prompts." | **REWRITE** | "Encodes expert logic — not just prompts" — "prompts" is AI jargon. Rewrite: "Each solution is built on real industry expertise, not generic templates." |
| `product.f3.title` | Feature 3 title | "Zero Prompt Engineering" | **DELETE** | ICP does not know what prompt engineering is. This benefit only resonates with people who have tried and failed at building AI themselves. Not the target audience. |
| `product.f3.body` | Feature 3 body | "Describe the outcome in plain language. The OS handles decomposition, tool selection, error recovery, and quality checks." | **REWRITE** | "Decomposition," "tool selection," "error recovery" — all technical implementation details. Rewrite as customer benefit: "Tell us what you need. We build, deploy, and maintain it." |

---

## 11. Capabilities Section ("Under the Hood")

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `cap.label` | Section label | "Under the Hood" | **REWRITE** | Per positioning memo, this technical depth should live on /solutions or a dedicated tech page, not the homepage. Consider removing entire section from homepage or converting to "How We Work" (Diagnose → Design → Deploy → Support). |
| `cap.title` | Section title | "What Powers Flame Source OS" | **REWRITE** | Same concern. ICP does not need to see "what powers" the system. They need to see results. |
| `cap.desc` | Description | "Three layers that make the operating system work." | **REWRITE** | Technical architecture framing. Not useful for ICP on homepage. |
| `cap.c1.title` | Card 1 title | "AI Orchestration" | **DELETE** | Pure technical jargon. "Multi-model routing, task decomposition, autonomous error recovery" — none of this speaks to an ops director. |
| `cap.c1.body` | Card 1 body | "Multi-model routing, task decomposition, autonomous error recovery..." | **DELETE** | See above. |
| `cap.c2.title` | Card 2 title | "Integration Engineering" | **REWRITE** | The concept is useful (we integrate with your existing tools) but "Integration Engineering" is jargon. Rewrite: "Works With Your Existing Systems" or "No Rip-and-Replace." |
| `cap.c2.body` | Card 2 body | "Connectors to ERPs, CRMs, databases, and custom APIs. We wire AI into your existing stack — no rip-and-replace, no six-month migration." | **REWRITE** | Good message ("no rip-and-replace") buried in jargon ("ERPs, CRMs, custom APIs, existing stack"). Simplify. |
| `cap.c3.title` | Card 3 title | "Intelligent Hardware" | **KEEP** | Differentiator — hardware capability is real (GameSir patents). |
| `cap.c3.body` | Card 3 body | "When software alone isn't enough, we design IoT sensors and edge devices that feed real-world data straight into the AI pipeline. 34 patents. 150+ countries." | **REWRITE** | "AI pipeline" is jargon. "34 patents. 150+ countries" is verifiable (GameSir) and should stay. Rewrite to connect hardware to a customer outcome (e.g., the AR glasses for restaurants). |

---

## 12. Team Section

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `team.label` | Section label | "Team" | **KEEP** | Standard. |
| `team.title` | Section title | "Who We Are" | **KEEP** | Standard. |
| Wu Linwei name + Chinese | Name display | "Wu Linwei / 武林威" | **KEEP** | Factual. |
| `team.wu.role` | Role | "Co-Founder · Hardware & BD" | **KEEP** | Factual. |
| `team.wu.bio` | Bio | "Co-founded GameSir, a consumer electronics brand in 150+ countries. Holds 34 patents..." | **KEEP** | Verifiable — GameSir is a real, well-known brand. Patent count and university are factual claims. |
| Chen Jinzhu name + Chinese | Name display | "Chen Jinzhu / 陈进柱" | **KEEP** | Factual. |
| `team.chen.role` | Role | "Chief Technology Officer" | **KEEP** | Factual. |
| `team.chen.bio` | Bio | "[X] years in software engineering. Former CTO leading a 100+ engineer team, delivering products with RMB 100M+ monthly revenue." | **NEED EVIDENCE** | "RMB 100M+ monthly revenue" — which company? This is a strong claim with no company name. Either name the company or remove the revenue figure. Also: the dynamic years calculation (`new Date().getFullYear() - 2008`) works but the en.json text says just "years in software engineering" with no number — the number is injected via JS. The en.json should not be used standalone without the JS. |
| `team.chen.bio` (JS) | Dynamic years | `cjEl.textContent = new Date().getFullYear() - 2008` → 18 years (2026) | **REWRITE** | The calculation assumes Chen started in 2008. Is this correct? Should be verified. Also, the `<span id="cjYears"></span>` in HTML is empty until JS runs — this means SSR / no-JS users see "years in software engineering" with no number. |
| Leonard name + Chinese | Name display | "Leonard Chow Yi Ding / 周义鼎" | **KEEP** | Factual. |
| `team.leonard.role` | Role | "Co-Founder · SG Operations" | **KEEP** | Factual. |
| `team.leonard.bio` | Bio | "Singaporean entrepreneur applying AI to real business problems. Built AI marketing automation and digital ordering platforms for local F&B." | **REWRITE** | "Applying AI to real business problems" — AI-forward language. Rewrite: "Singaporean entrepreneur focused on operations automation for local businesses." Also: "Built AI marketing automation" — which product? For credibility, name or describe it more specifically. |

---

## 13. Contact Section

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `contact.label` | Section label | "Get In Touch" | **KEEP** | Standard. |
| `contact.title` | Title | "Let's Talk" | **KEEP** | Aligns with positioning memo. |
| Company name | Legal name | "FLAME SOURCE TECHNOLOGY PTE. LTD." | **KEEP** | Factual, verifiable via ACRA. |
| `contact.address` | Address | "39 Hongkong Street #03-01, Singapore 059678" | **KEEP** | Verifiable physical address. |
| WhatsApp link | Phone | `wa.me/6588165505` | **KEEP** | Functional CTA. Verify number is active. |
| Email buttons | Emails | `info@flamesource.ai`, `bd@flamesource.ai` | **KEEP** | Standard business contact. |

---

## 14. Privacy Policy

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `privacy.label` | Label | "Legal" | **KEEP** | Standard. |
| `privacy.title` | Title | "Privacy Policy" | **KEEP** | Required. |
| `privacy.updated` | Date | "Last updated: March 2026" | **KEEP** | Current. |
| Sections 1-6 | Full PDPA privacy policy | Data collection, usage, DPO, third-party, retention (12mo), rights under PDPA | **KEEP** | Standard PDPA-compliant privacy policy. Appropriate for a Singapore company. |

---

## 15. Footer

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `footer.copy` | Copyright | "© 2024–2026 FLAME SOURCE TECHNOLOGY PTE. LTD. | UEN: 202432774E | Singapore" | **KEEP** | Factual, verifiable UEN. |
| `footer.privacy` | Link | "Privacy Policy" | **KEEP** | Standard. |

---

## 16. Case Studies (JavaScript `caseStudies` object)

### Case Study 0: Recruitment — "AI-Powered Resume Screening"

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `.client` | Client description | "A mid-size recruitment agency in Singapore" | **NEED EVIDENCE** | No name, no identifiable detail. Is this a real client? If anonymized, there should be enough detail to verify internally. |
| `.challenge` | Problem statement | "Processing 500+ resumes per open role manually..." | **NEED EVIDENCE** | Same "500" figure as poster. Needs a real source. |
| `.solution` | Solution description | "Deployed Flame Source OS to automatically read, score, and rank every application..." | **REWRITE** | Has this actually been deployed? If yes, keep but add specifics. If this is aspirational, it must be labeled as such or deleted. |
| `.results[0]` | Result | "Screening time reduced from 4 hours to under 2 minutes per role" | **NEED EVIDENCE** | Extraordinary claim (99.2% time reduction). Must come from real measurement. |
| `.results[1]` | Result | "98% accuracy in identifying top candidates" | **NEED EVIDENCE** | How was "accuracy" measured? Against what ground truth? This reads as fabricated. |
| `.results[2]` | Result | "Placed 23% more candidates in first 3 months" | **NEED EVIDENCE** | Specific percentage needs specific source data. |
| `.results[3]` | Result | "HR team reallocated to relationship building" | **REWRITE** | Vague and qualitative. Not a measurable result. |
| `.quote` | Testimonial | "We used to dread opening the inbox. Now we look forward to it." — Talent Acquisition Lead | **NEED EVIDENCE** | Is this a real quote from a real person? Unattributed quotes with no company name read as fabricated. If real, get permission and attribute properly. If fake, **DELETE**. |

### Case Study 1: Finance — "End-to-End Payroll Automation"

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `.client` | Client description | "A regional services company with 200+ staff" | **NEED EVIDENCE** | Anonymous. Real or placeholder? |
| `.challenge` | Problem statement | "A three-person finance team spending 40 hours every month..." | **NEED EVIDENCE** | Matches poster metrics. Real data or invented scenario? |
| `.results[0]` | Result | "40 hours of manual work eliminated per month" | **NEED EVIDENCE** | Same as poster. Needs evidence. |
| `.results[1]` | Result | "Zero errors across 6 consecutive months" | **NEED EVIDENCE** | "Zero errors" is an absolute claim. Must be verifiable. |
| `.results[2]` | Result | "Finance team redirected to strategic analysis" | **REWRITE** | Qualitative filler. |
| `.results[3]` | Result | "Audit preparation time cut by 60%" | **NEED EVIDENCE** | Specific percentage, no source. |
| `.quote` | Testimonial | "We went from firefighting errors to having time for actual financial strategy." — Finance Director | **NEED EVIDENCE** | Anonymous quote. Real or fabricated? |

### Case Study 2: Music Production — "AI-Accelerated Music Arrangement"

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `.client` | Client description | "An independent musician and producer in Singapore" | **NEED EVIDENCE** | MOVE TO LAST / CONSIDER REMOVING. Lowest priority vertical per positioning memo. Is this a real client? |
| `.results[0]` | Result | "Arrangement time reduced from 3 weeks to 2 days" | **NEED EVIDENCE** | Same as poster metric. |
| `.results[1]` | Result | "Doubled release cadence" | **NEED EVIDENCE** | Needs real data. |
| `.results[2]` | Result | "Artist retained full creative control" | **REWRITE** | Subjective/qualitative. Not measurable. |
| `.results[3]` | Result | "Production cost per track reduced by 65%" | **NEED EVIDENCE** | Specific percentage, no source. |
| `.quote` | Testimonial | "It's like having a co-producer who never sleeps and always gets my style." — Recording Artist | **NEED EVIDENCE** | Anonymous. Classic AI-hype phrasing ("never sleeps"). If real, attribute. If not, **DELETE**. |

### Case Study 3: F&B / AR Smart Glasses — "AR Smart Glasses + AI Teacher for Restaurant Staff"

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `.client` | Client description | "A multi-outlet restaurant group in Singapore employing Burmese service staff" | **REWRITE** | "Employing Burmese service staff" — defines the client by the nationality of their workers. Rewrite: "A multi-outlet restaurant group in Singapore with multilingual front-of-house teams." |
| `.challenge` | Problem statement | "Burmese servers pick up dish names quickly... The real breakdown is nuanced customer requests: 'less oil', 'less salt'..." | **REWRITE** | The problem description is detailed and specific (good), but repeatedly singles out "Burmese servers" in a way that could be seen as othering. Frame as a communication gap between customer and multilingual staff, not a deficiency of Burmese workers specifically. |
| `.challenge` detail | Metric in text | "12 wrong orders per week were coming from" | **NEED EVIDENCE** | Same 12/week figure from poster. Real measurement? |
| `.solution` | Solution description | "Servers wear AR smart glasses that display real-time subtitles... Off the floor, staff use the AI teacher app (myanmar-learning.web.app)..." | **NEED EVIDENCE** | This is the most detailed case study. References a specific app URL (myanmar-learning.web.app). Is this app live and functional? Has the AR glasses solution actually been deployed in a restaurant? If yes, this is the strongest case study. If not yet deployed, this is aspirational content presented as fact. |
| `.results[0]` | Result | "Wrong orders dropped from 12/week to 0 across all outlets" | **NEED EVIDENCE** | Zero wrong orders across ALL outlets. Absolute claim. |
| `.results[1]` | Result | "Food waste from modifier errors eliminated — saving S$2,400/month" | **NEED EVIDENCE** | Specific dollar figure. Real or calculated? How was this measured? |
| `.results[2]` | Result | "New staff floor-ready in 5 days instead of 3 weeks" | **NEED EVIDENCE** | Specific timeframe claims need evidence. |
| `.results[3]` | Result | "Staff voluntary turnover down 40% — confidence up, frustration gone" | **NEED EVIDENCE** | 40% turnover reduction is a major HR claim. Needs data over a meaningful period. |
| `.quote` | Testimonial | "The dish names were never the problem — my girls learned those in a week..." — Restaurant Owner | **NEED EVIDENCE** | Most detailed and specific-sounding quote. "My girls" is colloquial and gendered. If this is a real quote, keep the authenticity but note the language. If fabricated, **DELETE**. |

### Case Study 4: Sales Enablement — "Real-Time AI Sales Coaching"

| Location | Content | Current Text (abbreviated) | Action | Reason |
|---|---|---|---|---|
| `.client` | Client description | "A study-abroad consultancy in Singapore with 15 sales advisors and high staff turnover" | **NEED EVIDENCE** | Most specific client description. Real or fabricated? |
| `.challenge` | Problem statement | "Advisors need deep knowledge of 200+ programs across 8 countries... New advisors took 12 weeks to become productive." | **NEED EVIDENCE** | "200+ programs, 8 countries, 12 weeks" — specific numbers. Real data? |
| `.challenge` detail | Secondary client mention | "Same problem at a partner hair salon chain where stylists sell treatments while cutting hair." | **NEED EVIDENCE** | Additional client reference. Real partnership? |
| `.solution` | Solution description | "Flame Source OS uses STT to transcribe live customer conversations... delivers discreet coaching prompts to the advisor's screen or earpiece." | **NEED EVIDENCE** | Has this been built and deployed? "STT" is technical jargon that should be simplified for case study audience. |
| `.results[0]` | Result | "New advisor ramp-up time: 12 weeks → 3 weeks" | **NEED EVIDENCE** | NOTE: Poster says "3 mo → 2 wk" but case study says "12 weeks → 3 weeks." These are INCONSISTENT. 12 weeks = 3 months (matches), but 3 weeks ≠ 2 weeks. The poster claims 2 weeks, the case study claims 3 weeks. Which is it? |
| `.results[1]` | Result | "Junior advisor conversion rate improved by 55%" | **NEED EVIDENCE** | Strong claim. Real measurement? |
| `.results[2]` | Result | "Senior manager coaching hours reduced by 80%" | **NEED EVIDENCE** | Needs evidence. |
| `.results[3]` | Result | "AI practice used 6 hours/week per new rep, replacing 6 hours of manager shadowing" | **NEED EVIDENCE** | Specific and measurable. Real or modeled? |
| `.quote` | Testimonial | "I used to lose sleep every time a new hire sat with a client alone. Now the AI is in the room, and I sleep fine." — Sales Director | **NEED EVIDENCE** | Anonymous quote. Real or fabricated? |

---

## 17. Cross-Cutting Issues

| Issue | Location | Details | Action | Reason |
|---|---|---|---|---|
| **All 5 case studies may be fabricated** | JS `caseStudies` object | Every case study uses anonymous clients ("A mid-size agency," "A regional services company," "An independent musician," "A multi-outlet restaurant group," "A study-abroad consultancy"). None has a company name, a named person, or any externally verifiable detail. | **NEED EVIDENCE** | Per positioning memo: "Every metric must have evidence or gets deleted." These case studies are either (a) real and should be attributed or at minimum have enough detail to be credible, or (b) fabricated and should be removed entirely. Fabricated case studies on a company website are a serious credibility risk. |
| **Metric inconsistency** | Poster 5 vs Case Study 4 | Poster says ramp-up goes from "3 mo → 2 wk." Case study says "12 weeks → 3 weeks." | **REWRITE** | Must be consistent. Pick one number and use it everywhere. |
| **AI-forward language throughout** | Entire site | "AI operating system," "AI orchestration," "model routing," "prompt engineering," "multi-model," "LLM," "STT" | **REWRITE** | Positioning memo mandates: "'AI' appears where needed, never as the subject." Current site makes AI the subject in nearly every section. Systematic rewrite needed. |
| **Flame Source OS as hero** | Hero, Product section, nav | OS is positioned as the main product throughout the homepage. | **REWRITE** | Positioning memo says: "Internal delivery platform, NOT the homepage hero. Appears as: 'Powered by Flame Source OS.'" The entire homepage structure contradicts this. |
| **Missing "How We Work" section** | Homepage | Positioning memo calls for: "Diagnose → Design → Deploy → Support" | **REWRITE** | This section does not exist. The Capabilities section should be replaced with this process-oriented section. |
| **Missing proof/social proof** | Homepage | No client logos, no named testimonials, no recognizable references beyond GameSir | **NEED EVIDENCE** | Homepage has zero verifiable social proof. Even one named client or one logo strip would add credibility. |
| **"40%" claim in hero** | `hero.sub` | "Your team burns 40% of its hours on work a machine should own." | **NEED EVIDENCE** | No source cited. If from McKinsey/Deloitte, cite it. If made up, remove. |
| **"73%" stat** | AI Gap section | "73% of enterprise AI projects never reach production" | **NEED EVIDENCE** | Common industry stat but (a) no citation, (b) applies to "enterprise" not SMEs (the ICP). |
| **No-JS fallback for Chen bio** | Team section | `<span id="cjYears"></span>` is empty without JavaScript | **REWRITE** | Hardcode a fallback number or restructure the bio so it reads correctly without JS. |

---

## Summary Counts

| Action | Count |
|---|---|
| **KEEP** | 27 |
| **REWRITE** | 42 |
| **DELETE** | 5 |
| **NEED EVIDENCE** | 38 |

---

## Priority Recommendations

1. **Verify or remove all case studies.** If even one is fabricated, remove all until real ones exist. Fabricated testimonials are a reputational and potentially legal risk.
2. **Fix metric inconsistency** between poster 5 (3mo → 2wk) and case study 4 (12wk → 3wk).
3. **Rewrite "Your Burmese Server" headline** — culturally insensitive framing that singles out workers by ethnicity.
4. **Move Music Production to last position or off homepage** — lowest priority per positioning memo but currently occupies slide #3.
5. **Restructure homepage away from Flame Source OS as hero** — align with positioning memo (OS is internal, company and outcomes are the hero).
6. **Cite or remove 40% and 73% statistics** — uncited stats undermine credibility.
7. **Replace AI jargon with business language** — "model routing," "prompt engineering," "task decomposition," "AI orchestration" mean nothing to the ICP.
8. **Add a "How We Work" section** — Diagnose → Design → Deploy → Support, per positioning memo.
9. **Fix Chen Jinzhu bio** — verify 2008 start year, add company name for "100+ engineer team / RMB 100M+ revenue" claim, add no-JS fallback.
