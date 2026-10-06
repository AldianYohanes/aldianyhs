# Brand: Aldian Yohanes Portfolio

Direction: editorial, dark, deep teal. Quiet confidence, plain language, real work first.

## Voice
- First person, short sentences, concrete verbs (built, ran, connected).
- No hype words (seamless, elevate, next-gen). No claims without a source.
- English on the site. No em-dashes; use a hyphen or a period.

## Color (dark only, set in `shared/styles/globals.css`)
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#0a1315` | Page background |
| `--bg-raised` | `#0f1c1f` | Cards |
| `--line` | `#1d3236` | Borders, dividers |
| `--text` | `#e8f0ef` | Primary text |
| `--muted` | `#93a9a7` | Secondary text |
| `--accent` | `#5fd0bc` | The one accent: links, primary button, markers |
| `--accent-ink` | `#06201c` | Text on the accent |

One accent only. No second hue anywhere on the page.

## Typography
- Display and body: Geist (600 for headings, tight tracking `-0.03em` to `-0.045em`).
- Metadata and dates: Geist Mono.
- Hero name uses `clamp(3rem, 8.2vw, 7rem)`; body is 16-18px at 1.6 line height.

## Shape and motion
- Buttons are pills. Cards are 16px. No other radius.
- Motion only for hierarchy: hero entry stagger, one-time section reveal, card hover lift. All of it is off under `prefers-reduced-motion`.

## Content rules
- Every project and job claim comes from `lib/content.ts`; anything unconfirmed carries a `TODO` comment there.
- Private work (Pharos) is described as concepts only: no code, screenshots or internal data.
- Optional assets appear only when the file exists: `public/images/profile.jpg`, `public/cv/Aldian-Yohanes-CV.pdf`, and project covers named in `lib/content.ts`.
