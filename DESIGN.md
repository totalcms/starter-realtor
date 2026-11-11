---
name: Linen & Blush
description: A real estate agent's site set like a quiet linen-paper brochure, where the arch of a window is the only curve.
colors:
  ivory: "light-dark(oklch(.975 .008 60), oklch(.215 .022 345))"
  blush: "light-dark(oklch(.93 .028 25), oklch(.265 .03 350))"
  blush-soft: "light-dark(oklch(.955 .018 30), oklch(.3 .032 350))"
  rose: "light-dark(oklch(.52 .085 15), oklch(.8 .07 15))"
  rose-strong: "light-dark(oklch(.45 .085 15), oklch(.86 .06 15))"
  on-rose: "light-dark(oklch(.985 .006 60), oklch(.2 .025 345))"
  ink: "light-dark(oklch(.3 .02 30), oklch(.93 .014 50))"
  muted: "light-dark(oklch(.5 .02 30), oklch(.77 .02 40))"
  line: "light-dark(oklch(.86 .02 30), oklch(.37 .03 350))"
typography:
  display:
    fontFamily: "Cormorant Garamond, Garamond, Georgia, serif"
    fontSize: "clamp(2.6rem, 6vw, 4rem)"
    fontWeight: 300
    lineHeight: 1.02
  headline:
    fontFamily: "Cormorant Garamond, Garamond, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 2.75rem)"
    fontWeight: 300
    lineHeight: 1.08
  price:
    fontFamily: "Cormorant Garamond, Garamond, Georgia, serif"
    fontSize: "clamp(1.6rem, 2.4vw, 2rem)"
    fontWeight: 400
  body:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: "var(--yeti-text-md)"
    fontWeight: 300
  caps:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: ".75rem"
    fontWeight: 400
    letterSpacing: ".2em"
    textTransform: uppercase
  signature:
    fontFamily: "Allura, cursive"
    fontSize: "clamp(2rem, 4vw, 2.6rem)"
    fontWeight: 400
rounded:
  sm: "0"
  md: "0"
  lg: "0"
  arch-card: "10rem 10rem 0 0"
  arch-tall: "999px 999px 0 0"
spacing:
  page-max: "74rem"
  margin: "clamp(1rem, 4vw, 3rem)"
  section: "clamp(3rem, 7vw, 6rem)"
  prose: "60ch"
components:
  button-primary:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.on-rose}"
    rounded: "{rounded.md}"
    typography: "{typography.caps}"
  button-primary-hover:
    backgroundColor: "{colors.rose-strong}"
    textColor: "{colors.on-rose}"
  button-outline:
    borderColor: "{colors.rose}"
    textColor: "{colors.rose}"
    rounded: "{rounded.md}"
    typography: "{typography.caps}"
  status:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.rose}"
    typography: "{typography.caps}"
  status-sold:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.on-rose}"
  band:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.ink}"
  panel:
    backgroundColor: "{colors.ivory}"
    borderColor: "{colors.line}"
---

# Design System: Linen & Blush

## Overview

**Creative North Star: "The Arched Window"**

The site reads like a brochure printed on warm linen paper and handed over at an open house. A light Garamond sets the headlines and prices, a light geometric sans sets everything else, and small letter-spaced capitals do the labels, the nav and the buttons. Blush bands run edge to edge between ivory sections, and one rosewood accent marks what to do next.

One shape stands out: the arch. The hero portrait is a tall arch with a thin rosewood outline set off from it, and every listing photo has an arched top, like a window. Everything else keeps square corners and hairline rules, so the arch is the only curve and it always means "a home" or "her".

The look is elegant and feminine without being frilly: no florals, no gradients, no shadows. It refuses the real estate default of navy, gold and a search bar over a drone photo. Light and dark mode both ship and follow the visitor's system setting; dark is a deep plum-brown with blush and ivory type.

**Key Characteristics:**
- Warm ivory pages and blush bands, one rosewood accent.
- The arch as the only curve: hero portrait, listing photos, the photo-less card and the icon.
- A light Garamond (300 to 400) for display, a light Jost (300 to 500) for text.
- Small capitals at .75rem with .2em tracking for labels, nav, status and buttons.
- Her name in script twice: over the hero portrait and in the footer. Never anywhere else.
- Square corners, 1px hairlines, no shadows.

## Colors

Linen and blush, with one rosewood accent. Every value is a `light-dark()` pair, light first.

### Primary
- **Rosewood** (`rose`, `rose-strong`, with `on-rose` for type on a filled surface): the one accent. Buttons, links, the eyebrow labels, the status chip on a photo, the arch outline, the focus ring, the current language in the EN / ES switch, and the underline that marks her own listings. In dark mode it becomes a soft blush pink.

### Secondary
- **Blush** (`blush`): section bands that run edge to edge, the photo-less listing card and text selection. In dark mode, a step lighter than the page.
- **Blush Soft** (`blush-soft`): a paler blush for panels and cards that sit on a blush band, and Yeti's raised surface.

### Neutral
- **Ivory** (`ivory`): the page, and the chip behind a status label or the signature. Deep plum-brown in dark mode.
- **Ink** (`ink`): warm taupe for headings and body text.
- **Muted** (`muted`): intros, captions, "Courtesy of" lines, the fine print.
- **Line** (`line`): every hairline, table border and panel border.

### Named Rules
**The One Rosewood Rule.** Rosewood is the only accent. `rose-strong` is the same hue, darker, for hover. Photographs are content and exempt.

**The Sold Rule.** A status chip is ivory with rosewood type, except Sold, which is filled rosewood. Sold is the one state a visitor should see from across the room.

## Typography

**Display Font:** Cormorant Garamond (with Garamond, Georgia, serif), at 300 and 400, italic for the hero accent
**Body Font:** Jost (with system-ui, sans-serif), variable 300 to 500
**Script:** Allura, for her signature only

**Character:** a bookish, airy Garamond gives the site its elegance, and Jost keeps forms, facts and labels easy to read. All three are self-hosted under the SIL Open Font License (`static/fonts/OFL.txt`).

### Hierarchy
- **Display** (300): the hero headline, with its last phrase in rosewood italic.
- **Headline** (300): section and page headings, centered under a small-capitals eyebrow.
- **Price** (400): prices on cards and listings, and the big numbers (homes sold, median price).
- **Body** (300): all running text, at Yeti's fluid base size, 60ch maximum.
- **Caps** (400, .75rem, .2em tracking, uppercase): eyebrows, nav, status chips, buttons, facts ("4 BD · 3 BA · 2,640 SQ FT").
- **Signature** (Allura): her first name, twice on the site.

### Named Rules
**The Light Weight Rule.** Nothing is heavier than 400 in the serif or 500 in the sans. Emphasis comes from rosewood, italics or capitals, never bold.

**The Two Script Uses Rule.** The signature appears once over the hero portrait and once in the footer. A third use cheapens it.

## Layout

Every section's content sits in a `.sheet`: up to 74rem wide with the same side margin (`spacing.margin`). Sections themselves are full width, so a blush band can run edge to edge. The vertical rhythm is the section padding (`spacing.section`). Long lists that read down the page (open houses, the readme) use `.sheet.narrow`, 52rem.

The home hero is two columns from 56rem up: words on the left, the arch on the right. Listing pages put the photos full width, then the facts and story beside an aside holding the showing form and the payment calculator. Card grids wrap on their own with a minimum width. The nav collapses behind a menu button on a phone.

### Named Rules
**The Centered Head Rule.** A section opens with a centered eyebrow, headline and one muted line of intro. A row that continues elsewhere uses a left heading with a "View all" link on the right instead.

**The Hers First Rule.** Every list of homes is sorted with her own listings first. The layout works the order out once (`listings`), and pages filter it; they never re-sort it.

## Elevation & Depth

Flat. The theme defines no shadows. Depth comes from blush bands against ivory and from the offset outline around the hero arch. Her own listings carry a 3px rosewood underline, drawn as an inset line, not a shadow.

### Named Rules
**The Hairline Rule.** Separation is a 1px `line` rule or a 1px panel border, never a card shadow.

## Shapes

Square corners everywhere: every Yeti radius, buttons, fields, panels and chips are 0. The only curves are the arches.

### Named Rules
**The Arch Rule.** Photographs of homes and of her get an arched top: `arch-card` (10rem) on listing cards and the first listing photo, `arch-tall` (a full half-circle) on the hero portrait. Nothing else is rounded, so the arch keeps its meaning.

## Components

### Buttons
- **Shape:** square corners, letter-spaced capitals at .75rem, weight 400. The forms' send button is styled to match.
- **Primary:** rosewood fill, `on-rose` text, for the one next step in a section.
- **Medium emphasis** (`data-emphasis="medium"`): rosewood outline and text, for the second choice.
- **Hover / Focus:** `rose-strong`; focus ring in rosewood.

### Listing Card
An arched photo with the status chip centered at the top and, on her own listings, "Listed by Valeria" at the foot of the photo. Below it: the price in the serif, the address and town, a hairline, the facts in capitals, and on another agent's home a muted italic "Listing courtesy of" line. The whole card is the link. A home with no photo shows a blush arch with a small house line drawing.

### Panels
A bordered box (1px `line`) on ivory, or blush-soft on a blush band: the showing form, the payment calculator, the valuation form, the private-list signup, the readme's note.

### Inputs / Fields
Total CMS's forms with corners squared, Jost at weight 300, fields on the page color with hairline borders, field icons off and help text upright and muted. Labels are small capitals. The submit button is a primary button.

### Navigation
Her name in the serif with "Peninsula Real Estate" in small capitals beneath, the nav links in capitals, and the EN / ES switch at the end, the current language in rosewood. On a phone the links fold behind a menu button.

### The Hero Arch
The portrait in a tall arch with a thin rosewood outline offset .85rem around it, and her name in script on an ivory chip at the foot. Version A and B of the home page share it; only the order of the buttons and the seller callout changes.

### Big Numbers
A price-style serif figure above a caps label: homes sold in 12 months, sales volume, a town's median price.

### Callouts
- **The private-list line:** one italic serif sentence and a button, centered.
- **The seller callout:** a two-part blush band, words on one side and the valuation button on the other.

### Open Houses
Rows on hairlines: the day in the serif, the time, and an optional muted note under them.

## Do's and Don'ts

### Do:
- **Do** define every new color as a `light-dark()` pair and check it in both modes.
- **Do** keep component rules in the `yeti.components` layer and change Yeti through public `--yeti-*` tokens.
- **Do** use the arch for photographs of homes and of her, and only for those.
- **Do** let rosewood mark the next step: one primary button in a section.
- **Do** write labels, buttons and form text in `builder/strings/`, in both languages.

### Don't:
- **Don't** add a second accent hue, a gradient or a shadow.
- **Don't** round a corner that isn't an arch.
- **Don't** set anything heavier than 400 in the serif or 500 in the sans.
- **Don't** use the script for anything but her name, or more than twice.
- **Don't** put type over a photograph, except the status chip and "Listed by" on a card.
- **Don't** force dark mode or add a theme switch; the page follows the visitor's system setting.
