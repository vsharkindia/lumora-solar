# Lumora Solar: Next.js marketing site (portfolio demo)

**▶ Live site: https://vsharkindia.github.io/lumora-solar/**

A fast, responsive marketing website for **Lumora Solar**, a *fictional* rooftop-solar installer,
designed and built by VShark Solutions as a portfolio piece.

## Highlights

- **Interactive savings calculator**: monthly bill, roof shading and offset sliders produce a live
  system size, price, payback, 25-year savings and CO₂ estimate, with a cumulative-savings chart.
- **Filterable project case studies** with hand-built SVG illustrations (no stock photos).
- **Quote form** with accessible client-side validation and a success state.
- Scroll-reveal animations and animated counters, all respecting `prefers-reduced-motion`.
- Mobile-first layout, sticky header with mobile menu, skip link, semantic HTML.
- Per-page SEO metadata. Fully static export, so it can be hosted on any CDN (GitHub Pages here).

## Tech

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · `next/font` · GitHub Actions → Pages.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export in ./out
```

Pages: `/`, `/solutions`, `/projects`, `/contact`. Content lives in `src/lib/site.ts` and `src/lib/projects.ts`.

---

*Lumora Solar, its staff, reviews and projects are fictional. The contact form does not send data.*

## Deploy

```bash
npm run deploy   # builds with the /lumora-solar base path and pushes ./out to the gh-pages branch
```
