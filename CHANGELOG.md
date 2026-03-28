# Change Log

## [v3.0.1]

**Visual Intelligence Engine & Performance Optimization**

- Eliminated 11MB `vi-data.json` by using synchronous runtime seeded PRNG generation
- Added AVIF image variants across the site for massive image size savings (~50%)
- Migrated Typekit to self-hosted Google Fonts (drastically reducing FOIT/FOUT and third-party JS)
- Pre-allocated animation buffers to eliminate Garbage Collection pressure in visual engine
- Added lightweight Service Worker layer for offline/PWA capabilities
- Fixed various mobile layout bugs (scrolling specificity thresholds)

## [v3.0.0]

**Remove Three.js dependency**

- Removed Three.js dependency and use custom WebGL2 implementation

## [v2.1.1]

**Minor design tweak**

- Better underline style for links.

## [v2.1.0]

**Pre-rendered website**

- Full static-site generation using vike-solid plugin
  - Still experimental with some lacking support such as sitemap generation

## [v2.0.0]

**Major revamp of the styles**

- Rewrote all the styles from scratch, mainly to remove Bootstrap dependency

## [v2.0.0-rc.3]

**Workflow updates**

- Set up workflow to automatically build and deploy the website

## [v2.0.0-rc.2]

**Minor updates**

- Add SEO and ARIA labels
- Update highlight colouring
- Attempt to fix WebGL2 flickering issue on iOS devices

## [v2.0.0-rc.1]

**Major revamp of the website**

- Rewrote everything in TypeScript (finally!)
- Migrated from React to SolidJS
- Multi-page application for better optimisation
- Use CSS variables for easier and richer templating (WIP)
- Various UX and design improvements
- Various under-the-hood optimisations
