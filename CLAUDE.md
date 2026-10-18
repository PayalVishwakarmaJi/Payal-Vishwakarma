# Project: The Ambience — Interior Design Portfolio

A single-page, scroll-driven portfolio for an interior design studio (hotel lobbies, restaurants, cafés).
Design concept: **"The Drawing Set"** — the site is laid out like an architect's drawing set: paper, ink and clay, sharp edges, hairline rules, sheet numbers (A-01…A-08), mono annotations, a title-block footer.

## Stack
React 19 + Vite 8, plain JSX, hand-written CSS in `src/index.css` (single file, section-commented).
Lenis (smooth scroll, driven from `App.jsx`), Framer Motion (all animation), lucide-react (icons).
Do NOT add Tailwind, TypeScript, or new animation/UI libraries without asking.

## Design system (CSS variables in `:root`)
- Colors: `--paper #F1EDE5` (light bg), `--ink #12110F` (text, header, dark sections), `--clay #B8472A` (accent + Approach block), `--clay-bright #E4643F` (accent on dark), `--sand #E9DCC8` (Contact block). Use the variables, never new hex values (the three theme palettes in `Approach.jsx` are content, not UI).
- Section rhythm: Hero ink · Studio paper · Works paper · Approach clay · Process ink · Services paper · Contact sand · Footer ink. Header is always ink. Use `.dark`, `.clay`, `.sand` classes on sections; add dark/clay overrides at the bottom of `index.css`.
- Fonts are self-hosted via @fontsource (imported in `main.jsx`, never from Google): Fraunces Variable (display, with SOFT axis), Hanken Grotesk Variable (body), JetBrains Mono (labels/annotations, uppercase, letter-spaced).
- Shapes: sharp rectangles and hairlines only. No rounded cards, no shadows except the floating preview.
- Motion: `cubic-bezier(0.22, 1, 0.36, 1)` for reveals; `[0.76, 0, 0.24, 1]` for wipes/curtains. Animate only transform, opacity and clip-path.
- Each section starts with `<div class="sheet-tag"><b>A-0N</b> Name <i /> note</div>`. Headlines use `<Heading text="Word *accent*" />`.

## Structure
`App.jsx` → Preloader, Cursor, Header (solid bar + full-screen index menu), `.cols` background lines, then sections:
Hero (A-01) → Studio (A-02) → Works (A-03) → Approach (A-04) → Process (A-05, dark) → Services (A-06) → Contact (A-07) → Footer title block (A-08).
Shared helpers: `src/lenis.js` (`scrollToId`), `src/nav.js` (menu/footer links). Section ids: home, studio, work, approach, process, services, contact.

## Performance & accessibility rules
- No WebGL, no large blurs / backdrop-filter. Images are WebP (`public/images/*-sm.webp` for previews, full-size for the lightbox); originals live in `source-images/` (not served).
- Respect `prefers-reduced-motion` (Lenis is skipped; CSS animations/transitions are neutralised).
- Cursor follower and hover preview are desktop-only; touch devices show thumbnails inline.
- Mobile-first; verify at 375px width.

## Content notes
- Contact email / phone / LinkedIn constants live at the top of `Contact.jsx` and still show the previous owner's details until replaced. The form opens a `mailto:` (no backend).
- Process steps, service descriptions and project notes are draft copy written from the plans; replace with the studio's own words.

## Commands
`npm run dev`, `npm run build`, `npm run lint`
