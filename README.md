# Heliovedha Chemicals — heliovedha.com — V2

Static multi-page marketing website. No backend, no database. Enquiry form uses `mailto:` to sales@heliovedha.com + WhatsApp.

## Files
- `index.html` — Home
- `about.html` — About / Why Us / Who We Serve
- `products.html` — Products & Sourcing (filter + coming-soon placeholder for future catalogue)
- `process.html` — Process & Services (What We Do + 4-step process)
- `trading.html` — Trading & Supply
- `contact.html` — Contact + Enquiry form
- `assets/` — logo.webp (recreated high-res), hero-lab, pharma, api, lab, warehouse
- `style.css`, `script.js`
- `vercel.json` — clean URLs so /about works without .html

## Deploy — Option A: Vercel Dashboard (easiest, no code)
1. Go to https://vercel.com → Add New → Project → Import Git Repository (or drag this folder if you use Vercel CLI / GitHub).
   - If you don't have a repo yet: create a GitHub repo named `heliovedha-website`, upload this folder, then Import it in Vercel.
2. Framework Preset: **Other** (static). Root Directory: `./` (this folder). Build Command: leave empty. Output Directory: leave empty / `./`.
3. Click Deploy. You'll get a temporary `*.vercel.app` URL — test it.

## Deploy — Option B: Vercel CLI
```bash
npm i -g vercel
cd heliovedha-website
vercel
# follow prompts, then:
vercel --prod
```

## Connect Zoho Domain — heliovedha.com
In Vercel: Project → Settings → Domains → Add `heliovedha.com` and `www.heliovedha.com` → copy the DNS values Vercel shows.

In Zoho Domains (https://domains.zoho.com):
- Go to your domain → DNS Management / DNS Records.
- **Do NOT change MX records** — those keep sales@heliovedha.com email working.
- Add / Edit ONLY these:
  - `A` | Host: `@` | Value: `76.76.21.21` | TTL: 3600
  - `CNAME` | Host: `www` | Value: `cname.vercel-dns.com.` | TTL: 3600
- If Zoho already has an A record for `@` pointing elsewhere, replace it with 76.76.21.21. If there's a CNAME for `www`, replace it.
- Save. Wait 10 min – few hours for propagation. Vercel will auto-issue HTTPS (SSL).

Verify: https://www.heliovedha.com and https://heliovedha.com both load. In Vercel, both should show “Valid Configuration”.

## Update content later
- GST: currently `336AAICH1154P1Z8` exactly as in PPT — update in footer of all pages + contact.html when you have the final number.
- Products: add new cards in `products.html` by copying a `<div class="card" data-cat="...">` block. Add a new filter button if you add a new category.
- Logo: if you get an SVG from your designer, replace `assets/logo.webp` references with `assets/logo.svg` (keep filename or update img src in all pages).
- Email: form sends to sales@heliovedha.com via mailto — change in `script.js` if needed.

## Local preview
Open `index.html` in a browser, or run `npx serve .` / `python3 -m http.server 8000` and visit http://localhost:8000


## V3 Changes (latest from PPTX + Word doc)
- GST corrected to 36AAICH1154P1Z8 (was 6AAICH1154P1Z8 — missing leading 3)
- Products page renamed to Products & Strategic Outsourcing + 4 new cards: Product Sourcing, Outsourcing Solutions, Global Procurement, Supply Chain Support
- Company mobile number removed from public site (header/footer/contact) per latest doc
- Enquiry form now has CAS No. field (optional, included in email)


## V3.4 — Menu looks odd fix (screenshot)
- Problem: 'Products & Strategic Outsourcing' (31 chars) + 'Process & Services' made header ~1230px > 1180px container, so both wrapped to 2 lines and looked misaligned.
- Fix 1 — Rename menu only: 'Products & Strategic Outsourcing' -> 'Products & Outsourcing' (22 chars, still says outsourcing), 'Process & Services' -> 'Process'. Nav + footer on all 6 pages. Page content / products page headings keep full meaning.
- Fix 2 — CSS: nav links white-space:nowrap, gap 4px, padding 8px 11px, font 14px, header flex-wrap:nowrap, container 1180 -> 1220px, medium breakpoint 901-1150px tightens nav to 13px. Mobile dropdown still wraps vertically as it should.
- Result: All 6 menu items + Share Requirement button on ONE line on desktop, no 2-line misalignment.
- Still 17 files only, no _1/_2 duplicates. Still includes V3.1 cta-row mobile fix, GST 36AAICH1154P1Z8, CAS field, no mobile number.
