# Almajlis Oasis

Build a premium, modern restaurant website for "Almajlis" — an authentic Arabian 

restaurant located in Gulshan-2, Dhaka, Bangladesh. This replaces an existing weak 

site (almajlisarabianrestaurant.com) — make this significantly more polished, 

functional, and visually rich.

═══════════════════════════════════

BRAND & VISUAL IDENTITY

═══════════════════════════════════

- Palette: deep terracotta/burnt orange (#C1622B or similar), rich charcoal black 

  (#1A1A1A), warm cream/sand (#F5EBDD), and antique gold accents (#C9A24B)

- Typography: elegant serif for headings (e.g. Playfair Display or Cormorant), clean 

  modern sans-serif for body (e.g. Inter or Poppins)

- Subtle Arabic geometric pattern motifs (mashrabiya-style lattice) used sparingly as 

  section dividers, background textures at low opacity, or border accents — not 

  overused or kitschy

- Generous white space, high-quality full-bleed food/interior photography, soft 

  shadows, rounded-but-refined corners (not overly playful)

- Overall feel: an upscale majlis (Arabian lounge/reception hall) — warm, hospitable, 

  premium — not a fast-casual or generic template look

- Support both English and Arabic (RTL) via a language toggle in the nav

═══════════════════════════════════

SITE STRUCTURE

═══════════════════════════════════

Pages: Home, Menu (full, filterable), About, Gallery, Reservations, Contact/FAQ

(Blog/Cart from the old site can be dropped unless you want them kept)

─────────────────────

1. NAVIGATION (sticky, transparent-over-hero → solid on scroll)

─────────────────────

- Logo left

- Links: Home, Menu, About, Gallery, Contact

- Language toggle (EN / عربي)

- Prominent "Reserve a Table" button → opens WhatsApp 

  (wa.me/8801830000233?text=Hi%2C%20I%20want%20to%20Reserve%20a%20Table)

- Mobile: hamburger menu, slide-in drawer, WhatsApp button always visible/fixed

─────────────────────

2. HERO SECTION

─────────────────────

- Full-viewport-height background: high-quality video loop or image of the dining 

  space / signature dish, dark gradient overlay for text legibility

- Eyebrow text: "Authentic Arabian Dining in the Heart of Dhaka"

- H1: something evocative, e.g. "Where Tradition Meets Taste"

- Subtext: one line about handcrafted dishes from the Arabian tradition

- Two CTAs: "View Menu" (primary, solid) and "Reserve a Table" (secondary, outline) 

  → WhatsApp link

- Small scroll-down indicator

─────────────────────

3. TRUST/HIGHLIGHTS STRIP

─────────────────────

3-4 icon + stat cards in a row (stacks on mobile):

- "100+ Arabian Dishes"

- "Est. [year] — Serving Dhaka"

- "Open Daily, 11 AM – 2 AM"

- "4.8★ Guest Rating" (only if real rating available)

─────────────────────

4. OUR STORY SECTION

─────────────────────

- Split layout: image of Managing Director Abdul Aziz Aishan on one side, story text 

  on the other

- Narrative: passion for authentic Arabian cuisine, hand-crafted kebabs, slow-cooked 

  mandi, warmth of Arabian hospitality brought to Dhaka

- Small credential line: "Abdul Aziz Aishan — Managing Director, Almajlis"

- CTA: "Discover Our Story" → About page

─────────────────────

5. SIGNATURE DISHES (real, working grid — this was broken on the old site)

─────────────────────

- 6-8 dish cards in a responsive grid (image, dish name in English + Arabic, short 

  1-line description, price in BDT)

- Each card links to a working menu anchor or dish detail — NO placeholder/undefined 

  links

- Hover state: subtle zoom on image + reveal "View Details"

- Section CTA: "Explore Full Menu"

─────────────────────

6. HOW YOU CAN ENJOY US (Dine In / Takeaway / Catering)

─────────────────────

Three equal cards, each with:

- Icon, title, one-line description

- Correct, CONSISTENT hours across all three: "Open Daily · 11:00 AM – 2:00 AM"

  (fix the old site's contradictory hours/days bug)

- Distinct CTA per card with pre-filled WhatsApp message:

  - Dine In → "Reserve a Table"

  - Takeaway → "Order for Pickup"

  - Catering → "Get a Catering Quote"

─────────────────────

7. MENU CATEGORIES PREVIEW

─────────────────────

- Grid/carousel of category tiles with background images: Kebab & Grills, Tagine & 

  Eqdah, Chicken & Meat, Rice & Sides, Desserts, Coffee & Drinks

- Each tile clickable → jumps to filtered section on full Menu page

- "View Full Menu" button below grid

─────────────────────

8. GALLERY TEASER

─────────────────────

- Masonry or grid of 6-8 high-quality photos (interior, dishes, ambiance)

- "View Full Gallery" CTA → Gallery page

- Optional lightbox on click

─────────────────────

9. TESTIMONIALS

─────────────────────

- Auto-rotating carousel or 3-column grid, real reviews:

  - M Jasim Nahid: praised the authentic atmosphere, food quality, and staff

  - Nasib Khan: recommends it for families and friends

  - Ahmed Alsakkaf: calls it the only real Arabic restaurant in Bangladesh

- Star rating display, guest name, "Valuable Guest" label

- Google Reviews badge/link if available

─────────────────────

10. RESERVATION SECTION

─────────────────────

- Two-column layout:

  LEFT — Reservation form: Name, Email, Phone, Party Size, Date, Time, Special 

  Requests (textarea) → on submit, either (a) sends via WhatsApp deep link with all 

  fields pre-filled in the message, or (b) posts to a form backend/email if the 

  builder supports it. Include clear success confirmation state.

  RIGHT — Restaurant info card: address (27 C/A Faisal Tower, 2nd Floor, Road 52, 

  Gulshan-2, Dhaka), embedded Google Map, phone (+880 1830 000233, tap-to-call), 

  email, hours, social icons (Instagram, Facebook, Snapchat)

─────────────────────

11. FAQ ACCORDION

─────────────────────

5-6 collapsible questions, e.g.:

- Do you take walk-ins or only reservations?

- Do you offer halal-certified meat? (assume yes)

- Is there parking available?

- Do you cater for large events/weddings?

- Do you offer vegetarian options?

─────────────────────

12. FOOTER

─────────────────────

- Logo + one-line tagline

- Quick links: About, Menu, Gallery, Reservations, FAQ

- Contact block: address, phone, email

- Social icons

- Newsletter signup (optional)

- Copyright line

- NO looping/duplicated marquee text bug like the old footer

═══════════════════════════════════

TECHNICAL REQUIREMENTS

═══════════════════════════════════

- Stack: React + Tailwind CSS (or Next.js if the builder supports it)

- Fully responsive: mobile-first, test at 375px, 768px, 1024px, 1440px

- Smooth scroll-triggered fade/slide-in animations (Framer Motion or CSS), subtle — 

  not distracting

- Lazy-loaded, optimized images (WebP where possible), proper alt text for SEO

- Semantic HTML, accessible (proper contrast ratios, keyboard navigation, ARIA labels 

  on interactive elements)

- Fast load: no render-blocking assets, skeleton loaders if fetching dynamic content

- SEO: proper meta title/description per page, Open Graph tags, structured data 

  (Restaurant schema — cuisine type, price range, address, hours) for rich Google 

  results

- Every link/button must be functional — no "/food/undefined" style placeholder 

  links or dead buttons

- WhatsApp integration as the primary conversion path (this audience books via 

  WhatsApp, not phone calls)

═══════════════════════════════════

TONE OF COPY

═══════════════════════════════════

Warm, confident, sensory — evoke aroma, tradition, hospitality. Avoid generic 

restaurant-template phrases like "delicious meals in a great atmosphere." Be specific: 

mention mandi, kebabs, Arabian hospitality, Dhaka's only authentic Arabian dining 

experience.


website : https://www.almajlisarabianrestaurant.com/
name of the resturant Almajlis Arabian Restaurant | مطعم المجلس العربي

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://almajlisarabianrestaurant.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cee95b2f-593e-4434-98de-8960503441a0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
