# Design Brief: Two Good Mini Café

## Purpose
Ultra-premium street café website showcasing Two Good Mini Café, Delhi. Brand showcase + menu discovery + order conversion. Three-page site: Home (hero, featured items, social proof), Menu (16 categories, glassmorphism cards), Contact.

## Tone & Differentiation
Bold, modern, street-smart luxury. Raw edges + refined execution. NOT cozy-rustic; this is a power move. Orange as electric accent on black + white. Aggressive warmth meets sophisticated restraint.

## Color Palette

| Token | OKLCH | Usage |
|-------|-------|-------|
| Primary | 0.66 0.187 50.2 | Orange (#ff7b00) — CTAs, category highlights, active states |
| Background | 0.98 0 0 (light) / 0.10 0 0 (dark) | Page surface |
| Card | 0.99 0 0 (light) / 0.14 0.01 0 (dark) | Glassmorphic menu cards, elevated surfaces |
| Foreground | 0.12 0 0 (light) / 0.96 0 0 (dark) | Text, high contrast |
| Muted | 0.92 0.01 0 (light) / 0.18 0.01 0 (dark) | Subtle backgrounds, disabled states |
| Border | 0.88 0.01 0 (light) / 0.24 0.01 0 (dark) | Subtle dividers, glass edge |
| Destructive | 0.58 0.20 28 | Error states, warnings |

## Typography
**Display:** Satoshi (geometric, contemporary, playful + refined). Headers, hero, large CTAs.
**Body:** Plus Jakarta Sans (clean, modern, all-size legible). Content, descriptions, copy.
**Mono:** GeistMono (structured). Pricing, SKUs, structured lists.

Type scale: 12, 14, 16, 18, 20, 24, 32, 48px (rem-based).

## Structural Zones

| Zone | Background | Border | Usage |
|------|-----------|--------|-------|
| Header/Nav | card | border (subtle) | Sticky navbar, logo, menu links, no shadow until scroll |
| Hero | background | none | Large typography, headline, two CTAs (Order on WhatsApp, View Menu) |
| Featured Items | background (alternating) | none | 4 elevated cards, staggered entry animation |
| Menu Cards | glass (card/40 + blur) | border/20 | 16-item grid per category, hover lift effect |
| Category Tabs | background/muted | none | Horizontal scroll on mobile, horizontal tabs on desktop |
| Contact Section | muted/30 | border | Map embed, hours, phone, WhatsApp button |
| Footer | card | border-t | Dark surface, minimal text, WhatsApp link prominent |

## Shape Language
**Radius:** 0.625rem (10px) base. Consistent throughout.
**Spacing:** 4px grid. Gaps: 8, 12, 16, 24, 32, 48px.
**Shadows:** Soft (4px 12px 8% opacity), Elevated (8px 24px 12% opacity). No glow except subtle orange accent glow on hover.

## Shadow Hierarchy
- `shadow-soft` — card hover, subtle depth
- `shadow-elevated` — featured items, section headers
- `shadow-glow` — orange accent subtle glow on interactive states

## Glassmorphism Strategy
Menu cards: `backdrop-blur-md`, `bg-card/40`, `border-border/20`, soft shadows. Hover: increase opacity to `/50`, border to `/30`.

## Component Patterns
**Buttons:** Orange primary (`primary` color), white text. Hover: `shadow-soft` + slight scale. Secondary: black/dark border, white text.
**Cards:** Glassmorphism default. Alt: solid card background with soft shadow.
**Form inputs:** `bg-input` with subtle border, focus ring in orange.
**Category tabs:** Active = orange underline + bold text. Inactive = muted text.
**Menu items:** Name (body bold), Price (mono, primary orange), Description (body secondary, small), Order button (orange).

## Motion & Animation
- **Stagger:** Menu items enter staggered (offset 100ms each).
- **Hover:** Card lift + shadow expand (translate -2px, shadow-soft).
- **Transition:** `transition-smooth` (all 0.3s cubic-bezier).
- **Page load:** Hero fade-in + text slide-in-up (offset 200ms for each line).
- **Scroll-driven:** Nav shadow appears on scroll past hero.

## Constraints
- NO bouncy animations. NO rainbow palettes. NO blur overuse (only menu cards).
- Text always AA+ contrast (checked on both light/dark).
- Orange used sparingly — for CTAs, highlights, active states. Not background.
- Mobile-first: stack vertical on <640px. Grid 2 cols at md, 3+ at lg.
- No custom colors in components. Use semantic tokens exclusively.

## Signature Detail
Subtle orange accent glow on hover states of CTAs (10px radius, 15% opacity). Creates premium, tactile feel without overload. Paired with soft shadow elevation — depth + warmth.

## Assets
- Fonts: Satoshi (display), Plus Jakarta Sans (body), GeistMono (mono) — bundled, @font-face in index.css.
- Images: Hero background (if generated), featured item photos (food imagery, premium shot), map embed on contact page.
