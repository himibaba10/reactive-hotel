# Design Specification: Fresh & Natural Hotel App

## 1. Design Philosophy
The overarching visual identity for this application is **Fresh, Natural, and Breathable**. The UI should evoke the feeling of stepping into a well-lit, plant-filled resort lobby. We will achieve this through ample whitespace, organic color schemes, and high-quality photography. 

To give the application a modern edge without overwhelming the natural vibe, we will implement **Minimal Glassmorphism**. Instead of heavy, frosted-glass panels everywhere, we will use subtle translucent surfaces strictly for floating elements like navigation bars, dropdown menus, and quick-booking widgets to allow the natural background imagery to shine through.

---

## 2. Color Palette
The colors should feel earthy and grounding, avoiding harsh neons or purely synthetic tones.

* **Backgrounds (Base):** `#FAFAF8` (Off-white / Linen) - Keeps the interface bright and fresh.
* **Primary Accent:** `#4A6741` (Deep Sage / Forest Green) - Used for primary buttons, active states, and key icons.
* **Secondary Accent:** `#D4B895` (Warm Sand / Rattan) - Used for secondary buttons, borders, and highlighting amenities.
* **Text (Headings):** `#2C352D` (Very Dark Green/Charcoal) - Softer than pure black, maintaining the organic feel.
* **Text (Body):** `#5E665F` (Muted Slate) - Ensures high readability while blending with the earthy tones.

---

## 3. Typography
A two-font system that balances premium elegance with modern readability.

* **Headings (Serif):** *Playfair Display* or *Lora*. These evoke luxury, heritage, and a natural elegance. Ideal for room titles, section headers, and the hero text.
* **Body & UI (Sans-Serif):** *Inter* or *DM Sans*. Clean, geometric, and unobtrusive. Perfect for form inputs, dashboards, and long-form text (like the About Us page).

---

## 4. UI Elements & Minimal Glassmorphism (Tailwind)
Glassmorphism will be applied sparingly to maintain the "fresh" aesthetic. Too much blur can make a site feel heavy and slow. 

* **The "Glass" Utility Classes (Tailwind CSS):** `bg-white/40 backdrop-blur-md border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.05)]`
* **Sticky Navbar:** A slightly frosted glass navigation bar that allows hero images to peek through as the user scrolls.
* **Booking Widget:** A floating glass card overlapping the hero section where users input their check-in/check-out dates.
* **Modals & Dropdowns:** Soft glass effects for user profile menus or image gallery lightboxes.
* **Standard Cards (Rooms):** Instead of glass, standard room cards should use a clean white background (`bg-white`) with a very subtle, diffused drop shadow to keep the UI crisp.

---

## 5. Animation & Motion
Motion should feel organic and fluid, mimicking natural physics rather than rigid, linear transitions. 

* **Fluid Reveals:** Implementing GSAP to handle scroll-triggered animations. As the user scrolls down the `Our Rooms` or `Gallery` pages, images and text blocks should fade and slide up with a soft easing curve, creating a highly polished, premium browsing experience.
* **Parallax Effects:** Subtle parallax scrolling on the home page hero image and the `About Us` section to create depth without being disorienting.
* **Micro-interactions:** Buttons should have a smooth, short transition on hover (e.g., slightly lifting or changing opacity), rather than abrupt color snaps.

---

## 6. Media & Asset Strategy
Since the "natural" aesthetic relies heavily on high-quality photography (rooms, landscapes, amenities), asset delivery must be optimized to prevent sluggish load times.

* **Next-Gen Formats:** All photographic assets should be served in WebP or AVIF formats.
* **Image Treatments:** Photos should feel warm, sunlit, and un-filtered. Avoid heavy color-grading or artificial vignettes.

---

## 7. Component Architecture (React/JSX)
To keep the codebase maintainable while implementing these design rules, the UI should be broken down into highly modular JSX elements. 

* `<GlassHeader />`: Reusable across public routes.
* `<RoomCard />`: Handles the standard layout, image rendering, and hover states for room listings.
* `<AnimatedSection />`: A wrapper component that handles the GSAP intersection observers to fade content in as it enters the viewport.
* `<DashboardShell />`: A unified layout component for both User and Admin dashboards, utilizing a clean, non-glass sidebar and top-bar for maximum readability during data management.
