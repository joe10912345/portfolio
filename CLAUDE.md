# Joel Chang — Industrial Design Portfolio

Context for continuing this project in Claude Code. **Read this first.**

## What this is
A personal industrial-design portfolio for Joel Chang. Currently one self-contained `index.html`
(dark theme, custom UX/motion, no build step). Goal: replace the existing Wix site
(https://www.joel-chang-design.com) with a self-owned site deployed on **GitHub Pages**.

## Files in this folder
- `index.html` — homepage version A (deployed to GitHub Pages at joe10912345.github.io/portfolio).
- `index-b.html` — homepage version B (premium "high-end-visual-design" remake, for comparison).
- `defense/networking/electronics/lifestyle/industrial/experimental.html` — 6 category pages.
- 22 project detail pages (`moai-router.html`, `t-blade.html`, …) — rebuilt from the old Wix site,
  preserving original text+image order. Generated; safe to hand-edit.
- `about.html`, `contact.html` — rebuilt locally (Wix form replaced with mailto).
- `assets/site.css` — shared stylesheet for all subpages. `assets/images/<page>/` — 437 archived
  images (297MB) organized in per-page folders (one copy each; multi-page images assigned to the
  most specific page: project > category > about/contact > home; site-wide chrome in `shared/`).
  Mapping: `content/image_locations.tsv`. 7 images unrecoverable (Wix CDN 403), see 網站內容清冊.md §6.
- `文案/` — 31 per-page copy decks (txt, with 【圖 N】 image-position markers). This is Joel's
  editing surface: he edits these txt files, then asks Claude to sync changes into the HTML pages.
  Editing txt alone does NOT change the site — a sync pass is required.
- `content/` — data backup only (extracted text, page↔image manifests, sequences). Not served.
- `網站內容清冊.md` — full inventory of the Wix archive + rebuild mapping (zh-TW).
- `作品集網站_新手上線指南.md` — beginner-friendly deploy + customize guide (Traditional Chinese).
- `CLAUDE.md` — this file.

## Status (2026-07-07)
- **Site is fully Wix-independent** — zero references to wixstatic / joel-chang-design.com remain.
- **Full site is live** on GitHub Pages: homepage A + 6 category pages + 22 project pages + assets,
  at https://joe10912345.github.io/portfolio/.
- Images are unoptimized originals (~296MB) — compress to WebP later if load speed matters (Joel declined for now).
- Old Wix site + domain untouched.

## 維護架構 (set up 2026-07-07) — READ THIS
Three places, each with one job:
- **Working folder (edit here):** `G:\我的雲端硬碟\Web` — the Google-Drive-synced copy. Joel edits ONLY here; it syncs across his computers. This is his private workshop.
- **Publish bridge (never hand-edit):** `C:\Users\joe10\Desktop\Web` — the git repo. `.git` must stay OUT of Drive (Drive sync corrupts it), so the bridge lives on the desktop. A `DO_NOT_EDIT_HERE.txt` marker sits in it.
- **Live site:** GitHub `joe10912345/portfolio` → GitHub Pages.

**Publish flow (when Joel says "幫我上線"):**
1. `robocopy "G:\我的雲端硬碟\Web" "C:\Users\joe10\Desktop\Web" /E /XD ".git" ".claude" "content" "文案" /XF "desktop.ini" "Thumbs.db" "DO_NOT_EDIT_HERE.txt"` — sync Drive → bridge.
   ⚠️ Use `/E` (copy, non-destructive), NOT `/MIR`. Google Drive streams files on demand, so a file that
   hasn't downloaded locally looks "absent" to robocopy; `/MIR`'s purge then DELETES the good bridge copy
   (this happened 2026-07-08, deleting 3 about-page images — recovered from git). `/E` never deletes.
   If Joel genuinely deletes a file in Drive, remove it from the bridge explicitly (`git rm`) — don't rely on purge.
2. In the bridge: `git add -A && git commit && git push origin main`.
3. Pages rebuilds in ~1–2 min.

**GitHub holds the storefront only:** all `*.html` + `assets/` + the `*.md` docs. The workshop
files `content/` and `文案/` are **Drive-only** (git-ignored + excluded from the publish sync) — they
never go to GitHub. Edit copy in Drive `文案/`, then sync into the HTML (still requires a sync pass).

## Owner / working style
- Joel is a designer, not a developer. He designs layouts in **Figma** and wants to deploy via **GitHub**.
- Communicate in Traditional Chinese. Explain steps plainly (hand-holding). Keep public-facing site
  copy in English (matches his established brand); keep in-code editing comments in Chinese.

## Design direction
- Dark, refined, "cool UX" but **restrained** — matches Joel's brand voice: clarity, disciplined
  aesthetic, manufacturable beauty. Not neon/flashy slop.
- Single accent color, defined in `:root` → `--accent: #00A3FF`. Use one accent across the whole page.
- Existing motion: cursor glow, scroll-reveal (IntersectionObserver), count-up stats, hover scale,
  top scroll-progress bar.

## Brand content (authoritative — reuse verbatim)
- Name / role: **Joel Chang · Industrial Designer**
- Tagline: *"Designing memorable experiences through clarity, crafted aesthetics, and manufacturable beauty."*
- Work categories: **Defense, Networking, Electronics, Lifestyle, Industrial, Experimental**
- Stats: 8+ products in mass production · 15+ collaborations · 30+ production-ready prototypes ·
  8 design awards · 2+ family design languages
- Design approach (4 pillars): Discovery / *Clarity Through Insight* · Iteration / *Rapid Validation* ·
  Realization / *Buildable Execution* · Refinement / *Aesthetic Discipline*
- Links: LinkedIn https://www.linkedin.com/in/joel-chang · Behance https://www.behance.net/joe10912345
- Accent history: was electric lime #c6f24e until 2026-07-07, now **electric sky blue #00A3FF**
  (RGB 0,163,255) — "energetic, future-facing, not harsh". Semi-transparent uses are written as
  `rgba(0,163,255,…)`; change both if the accent ever changes again.

## Design skills to install (run these in this folder)
```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
npx skills add https://github.com/Leonxlnx/taste-skill --skill taste-skill
```
Naming caveat: in the `taste-skill` repo, the main skill's frontmatter name is **`design-taste-frontend`**
(folder `skills/taste-skill`). The exact strings `design-taste-frontend-v1` and `high-end-visual-design`
may not resolve as-is — verify with `npx skills` / the repo's `skills/` folder. Related premium skills
there: `soft-skill` (expensive soft UI), `gpt-taste` (Awwwards-level + GSAP motion).

## Next steps (suggested order)
1. ~~Upload full site to GitHub Pages~~ — DONE (2026-07-07). Full site is live.
2. Joel to decide between homepage A and B (or a merge) — `index-b.html` is the alternate, still shipped but not linked.
3. Image optimization pass if load speed becomes an issue (Joel declined for now — originals ship as-is).
4. Point the custom domain `joel-chang-design.com` at GitHub Pages only after the new site is approved.

## Constraints
- Must stay deployable to **GitHub Pages** (static hosting). If migrating to the taste-skill default
  stack (React/Next + Tailwind v4 + Motion), configure a **static export** so GitHub Pages can serve it.
- Keep it a single accent, one type system, and honor reduced-motion — see the installed guidelines.
