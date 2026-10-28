# Yassine Khlif Portfolio

## Goal
Build a polished, single-page engineering portfolio using the uploaded résumé as the downloadable CV and source of verified career details.

## Experience
- Sticky navigation with active-section tracking, smooth scrolling, and a compact mobile menu.
- Hero with an animated role line, subtle grid/parallax treatment, social links, project CTA, and CV download.
- About, grouped skills, animated experience timeline, project grid, certifications, visual résumé summary, and contact/footer sections.
- Dark theme by default with an accessible light/dark toggle and saved preference.
- Tasteful entry loader, reveal/stagger animations, keyboard focus states, reduced-motion support, and responsive layouts.

## Visual Direction
Deep charcoal/navy surfaces, electric cyan-blue accents, restrained glass effects, a geometric background grid, Space Grotesk headings, and clean sans-serif body text. Motion will be subtle and purposeful rather than decorative.

## Technical Details
- Implement the page at `/` with semantic HTML and reusable data-driven sections.
- Use IntersectionObserver for section reveals and active navigation, plus pointer-based hero parallax.
- Use the uploaded PDF through the project asset flow for both download and an embedded preview.
- Keep the contact form client-side with a mailto handoff, since no messaging service was requested.
- Add unique portfolio metadata and social tags for the home page.
- Verify desktop and mobile rendering, navigation, theme switching, CV access, and contact submission behavior.
