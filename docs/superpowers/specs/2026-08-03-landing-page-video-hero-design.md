# Landing page: Safari-framed video hero + official Play badge

**Date:** 2026-08-03
**Status:** Approved

## Problem

`src/app/page.tsx` ships a placeholder: a phone mockup reading "App preview coming
soon" and a hand-drawn SVG "Get it on Google Play" button. Three concrete defects:

1. The store link points at `com.nicedaytodye.makeiteditable`. The app's real
   package is `com.horseandradish.makeiteditable` (`app.config.js`). The link is
   broken.
2. The custom SVG button violates Google Play badge guidelines, which require the
   unmodified official asset.
3. There is no product footage, despite a rendered promo video existing at
   `../make-it-editable/remotion/out/StoreVideo.mp4`.

The site also calls the product "Make it editable" while the live Play listing
publishes it as "Web Editor: Inspect & Edit".

## Goal

Replace the landing page with a full hero built around the promo video, framed as a
macOS Safari window, with a guideline-compliant Google Play badge.

## Assets

| Destination | Source | Notes |
| --- | --- | --- |
| `public/store-video.mp4` | `../make-it-editable/remotion/out/StoreVideo.mp4` | 7.1 MB, 1920x1080, ~22 s, silent (`WITH_MUSIC = false`) |
| `public/google-play-badge.png` | `play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png` | Official 646x250 PNG, byte-for-byte unmodified |

Both are self-hosted. Cloudflare Workers static assets allow 25 MB per file, so the
7.1 MB video is within limits. The badge is copied rather than hotlinked because
Google's CDN asset can change without notice, and because a local copy guarantees it
stays unmodified.

## Naming

The page uses **Web Editor**, matching the Play listing ("Web Editor: Inspect &
Edit") and the video's end card. `layout.tsx` metadata is updated to match. The
privacy-policy page is left alone — out of scope.

## Components

### `BrowserFrame`

Pure CSS/JSX, no images. Renders dark macOS Safari chrome so it reads as a window
against the dark hero:

- Rounded window with border and drop shadow
- Traffic-light dots (red / amber / green)
- Back / forward chevrons
- Centered URL pill with a lock glyph
- Share and tabs glyphs on the right
- Content area holds `children` at 16:9

The address bar shows `example.com`. A real-looking domain is deliberately avoided:
the video's footage depicts a fictional news page, and a plausible URL would imply a
real publisher.

### Video element

```jsx
<video src="/store-video.mp4" autoPlay muted loop playsInline
       preload="metadata" aria-hidden="true" />
```

No native controls — the video is silent, so nothing is lost, and controls would
break the browser-window illusion. Marked `aria-hidden` as decorative; the adjacent
headline and feature list carry the same information in text.

`prefers-reduced-motion` is explicitly **not** handled. Doing so requires a client
component to pause the loop; the user chose to skip it. Recorded here so the omission
is a known decision rather than an oversight.

### Badge link

```jsx
<a href="https://play.google.com/store/apps/details?id=com.horseandradish.makeiteditable">
  <Image src="/google-play-badge.png" width={200} height={77} unoptimized />
</a>
```

`unoptimized` is required twice over: OpenNext on Cloudflare has no default image
optimizer, and re-encoding the badge would count as modifying it.

## Badge guideline compliance

Per <https://partnermarketinghub.withgoogle.com/brands/google-play/visual-identity/badge-guidelines/>:

- **Unmodified asset** — official PNG, no recolor, no rescale of wordmark or icon
- **Clear space** — the PNG's transparent margin (41 px on a 168 px badge) *is* the
  required quarter-height clear space; preserved by keeping the native aspect ratio
- **Minimum size** — rendered at 200x77 CSS px, comfortably legible
- **Contrast** — placed on a solid dark background
- **Attribution** — footer carries "Google Play and the Google Play logo are
  trademarks of Google LLC."

## Page structure

All copy is taken from the video source or `docs/store-listing.md`. Nothing invented.

| Section | Content | Origin |
| --- | --- | --- |
| Nav | Web Editor / Home / Privacy Policy | — |
| Hero | "Inspect & edit any website." | `Scene0Hook.tsx` |
| | Short description subhead | `docs/store-listing.md` |
| | Safari frame + video | — |
| | Google Play badge | — |
| Features | Live text editing, Image replacement, Network monitor, JS injection, Console logs, Storage viewer | `docs/store-listing.md` |
| Privacy | "Every change stays on your device." / "Nothing is uploaded. It's your private canvas." | `Scene5Punchline.tsx` |
| Footer | "Serious tools. Zero seriousness." + trademark line | `Scene6Logo.tsx` |

## Visual language

Tokens lifted from `remotion/src/theme.ts` so the page and the video read as one
piece: ink `#0A0C10`, teal `#1E9DAE`, orange `#FF6B35`, muted text `#8A94A6`.

Typography uses the `font-sans` utility, which Tailwind maps to `--font-geist-sans`.
`globals.css` sets `body { font-family: Arial }`, which is a pre-existing quirk; it is
not touched, and the utility overrides it within the page.

## Verification

1. `npm run check` (next build + tsc) passes
2. Dev server renders the page; screenshot confirms the Safari frame, the video, and
   the badge
3. Badge PNG in `public/` is byte-identical to Google's asset (checksum)
4. Store link resolves to a live listing

## Out of scope

- Privacy-policy page restyling
- `globals.css` cleanup
- Any change to the Remotion project
