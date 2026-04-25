---
name: nashwa-brand
description: >
  Nashwa brand design system for a nutrition specialist. Apply this skill whenever
  building any page, component, section, UI, artifact, or visual for Nashwa — a medical-grade
  nutrition specialist brand. Triggers: any mention of "nashwa", "nashwa website", "nashwa clinic",
  "nashwa page", "nashwa component", or when building landing pages, hero sections, service cards,
  testimonials, contact forms, appointment booking, or any visual output for the Nashwa brand.
  Always use this skill before writing any HTML, CSS, JSX, or design tokens for Nashwa.
---

# Nashwa Brand Guidelines
**Nashwa** — Nutrition Specialist  
Medical-grade design language. Clinical trust. Warm expertise.

---

## Brand Personality

Nashwa is a professional nutrition specialist whose brand must feel:
- **Medically credible** — clean, structured, precise (like a doctor's website)
- **Warmly approachable** — not cold or sterile; trustworthy and calm
- **Premium and modern** — elegant typography, generous whitespace, refined gradients
- **Feminine but professional** — subtle softness without sacrificing authority

Reference aesthetic: Egyptian medical specialist websites (structured hero with doctor photo, services grid, credentials/numbers strip, testimonials, booking CTA) — but elevated with Nashwa's color palette.

---

## Color Palette

### Primary Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary | Deep Purple | `#4A1C8F` | Headlines, nav, primary buttons, icon fills |
| White | Pure White | `#FFFFFF` | Backgrounds, cards, text on dark |
| Light Purple | Lavender Tint | `#F3EEFF` | Section backgrounds, subtle fills |
| Text Dark | Charcoal | `#1A1A2E` | Body text, paragraph copy |
| Text Muted | Soft Gray | `#6B7280` | Subtitles, meta info, captions |

### Accent (GRADIENT ONLY — never solid fills)

| Role | Name | Hex |
|------|------|-----|
| Accent | Violet-Pink | `#C84FD4` |

> ⚠️ **Critical rule**: The accent/second color (`#C84FD4`) is **ONLY used in gradients**. Never as a solid fill, border, or standalone element color. The gradient always transitions between the Primary Purple and the Accent.

### The Nashwa Gradient

```css
/* Standard gradient — left to right */
background: linear-gradient(135deg, #4A1C8F 0%, #C84FD4 100%);

/* Subtle/soft variant for large backgrounds */
background: linear-gradient(135deg, #4A1C8F 0%, #8B3FC1 60%, #C84FD4 100%);

/* Text gradient (for display headlines) */
background: linear-gradient(135deg, #4A1C8F, #C84FD4);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

Gradient is used for:
- CTA buttons (primary action buttons)
- Section accent bars / dividers
- Icon backgrounds (pill/circle behind icons)
- Hero overlays or decorative shapes
- Statistics/numbers strip background
- Highlighted badge or tag text

---

## Typography

| Role | Font | Weight | Size (desktop) |
|------|------|--------|----------------|
| Display / Hero H1 | `Playfair Display` | 700 | 56–72px |
| Section Headings H2 | `Playfair Display` | 600 | 36–48px |
| Sub-headings H3 | `Inter` or `DM Sans` | 600 | 22–28px |
| Body | `Inter` | 400 | 16–18px |
| Caption / Meta | `Inter` | 400 | 13–14px |
| Button | `Inter` | 600 | 15–16px, letter-spacing: 0.5px |

**Import in HTML:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## Layout & Structure

### Page Architecture (medical specialist pattern)

Every Nashwa page follows this proven medical specialist flow:

```
1. NAV BAR          — Logo left, links center/right, "Book Now" gradient CTA
2. HERO SECTION     — Split layout: text left (headline + bio blurb + CTA), doctor photo right
3. TRUST STRIP      — Full-width gradient bg: 3–4 stats (e.g. "500+ Clients", "8 Years Experience")
4. SERVICES GRID    — 3-column card grid with icon, title, short description
5. ABOUT SECTION    — 2-col: credentials/bio text left, photo or visual right
6. TESTIMONIALS     — 3-col cards with star rating, quote, client name
7. BOOK / CTA       — Full-width gradient section with headline + booking button
8. FOOTER           — Dark (deep purple) bg, logo, nav links, social, copyright
```

### Spacing System

```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 48px;
--space-xl: 80px;
--space-2xl: 120px;
```

Sections use `padding: 80px 0` (desktop) / `padding: 48px 0` (mobile).

### Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```

---

## Component Patterns

### Nav Bar
```
- Background: white with subtle shadow on scroll
- Logo: "Nashwa" in Playfair Display, deep purple
- Nav links: Inter 500, charcoal, hover → deep purple
- CTA button: gradient background, white text, border-radius: 8px
- Height: 72px
```

### Hero Section
```
- White or very light lavender background (#F9F6FF)
- Left column: 
    - Small tag/badge: gradient text "Nutrition Specialist"
    - H1 in Playfair Display
    - Body paragraph in Inter
    - Two buttons: primary (gradient) + secondary (outline deep purple)
- Right column: 
    - Doctor photo in a soft-rounded frame
    - Optional decorative gradient circle/blob behind photo
- Decorative element: subtle gradient arc or leaf shape in corner
```

### Service Cards
```css
.service-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 24px rgba(74, 28, 143, 0.08);
  border-top: 3px solid transparent;
  border-image: linear-gradient(135deg, #4A1C8F, #C84FD4) 1;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(74, 28, 143, 0.14);
}
/* Icon container */
.service-icon {
  width: 56px; height: 56px;
  border-radius: 14px;
  background: linear-gradient(135deg, #4A1C8F, #C84FD4);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 20px;
}
```

### Trust/Stats Strip
```css
.stats-strip {
  background: linear-gradient(135deg, #4A1C8F 0%, #C84FD4 100%);
  color: white;
  padding: 48px 0;
}
.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 700;
}
.stat-label {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  opacity: 0.85;
}
```

### Primary Button
```css
.btn-primary {
  background: linear-gradient(135deg, #4A1C8F, #C84FD4);
  color: white;
  padding: 14px 32px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.3px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.btn-primary:hover {
  opacity: 0.92;
  transform: translateY(-1px);
}
```

### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: #4A1C8F;
  border: 2px solid #4A1C8F;
  padding: 13px 32px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
}
.btn-secondary:hover {
  background: #F3EEFF;
}
```

### Testimonial Cards
```css
.testimonial-card {
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 2px 16px rgba(74, 28, 143, 0.07);
}
/* Stars in gradient */
.stars { color: #C84FD4; }
/* Quote mark accent */
.quote-mark {
  font-size: 48px;
  background: linear-gradient(135deg, #4A1C8F, #C84FD4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Playfair Display', serif;
  line-height: 1;
}
```

### Footer
```css
footer {
  background: #1A1A2E; /* Deep charcoal — not pure black */
  color: white;
  padding: 64px 0 32px;
}
footer a { color: rgba(255,255,255,0.7); }
footer a:hover { color: white; }
/* Logo in footer gets gradient text */
```

---

## CSS Variables (copy into every project)

```css
:root {
  --color-primary: #4A1C8F;
  --color-primary-light: #6B35C2;
  --color-accent: #C84FD4;       /* GRADIENT USE ONLY */
  --color-white: #FFFFFF;
  --color-lavender: #F3EEFF;
  --color-bg: #F9F6FF;
  --color-text: #1A1A2E;
  --color-muted: #6B7280;
  
  --gradient: linear-gradient(135deg, #4A1C8F 0%, #C84FD4 100%);
  --gradient-soft: linear-gradient(135deg, #4A1C8F 0%, #8B3FC1 60%, #C84FD4 100%);
  --shadow-card: 0 4px 24px rgba(74, 28, 143, 0.08);
  --shadow-hover: 0 8px 32px rgba(74, 28, 143, 0.14);
  
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 100px;
  
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
```

---

## Tone of Voice

- Professional and confident, but warm
- Arabic/Egyptian cultural context — respectful, formal-yet-friendly
- Use titles: "د. نشوى" or "Dr. Nashwa" depending on context
- Calls to action: "احجز استشارتك" / "Book Your Consultation" — action-oriented but never pushy
- Section headlines use questions or empowering statements: "Start your health journey today"

---

## What NOT to Do

- ❌ Never use `#C84FD4` as a solid fill — gradient only
- ❌ No neon, lime, orange, or warm reds
- ❌ No Comic Sans, handwriting fonts (except optionally for accent script if used sparingly)
- ❌ No cluttered layouts — generous whitespace is mandatory
- ❌ No dark mode by default — the brand is light and clean
- ❌ Don't mix too many gradients on one section — one gradient element per section max
- ❌ Don't use stock-photo collages — single, high-quality professional photo per section

---

## Quick Reference Summary

```
PRIMARY:  #4A1C8F (deep purple) — headlines, buttons, nav, borders
WHITE:    #FFFFFF — backgrounds, cards
ACCENT:   #C84FD4 — GRADIENT ONLY (never solid)
GRADIENT: linear-gradient(135deg, #4A1C8F, #C84FD4)
FONTS:    Playfair Display (headings) + Inter (body)
FEEL:     Medical specialist website — clean, credible, premium, warm
LAYOUT:   Nav → Hero → Stats Strip → Services → About → Testimonials → CTA → Footer
```
