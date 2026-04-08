# AI Change Log

## [2026-04-08]

### Added
- None.

### Modified
- Updated the root `<html>` element in `app/layout.tsx` to include `data-scroll-behavior="smooth"` so Next.js recognizes intentional smooth scrolling during route transitions.

### Fixed
- Fixed the recurring Next.js dev warning about missing `data-scroll-behavior="smooth"` while `scroll-behavior: smooth` is enabled globally.

### Notes
- No CSS behavior change was needed because smooth scrolling was already configured in `app/globals.css`; this update makes that intent explicit to Next.js.

## [2026-03-27]

### Added
- Added equation rendering support with KaTeX-backed markdown processing.
- Added support for blog cover images and inline post images sourced from markdown/frontmatter.
- Added shared page intro and site config utilities to reduce repeated layout code.
- Added a vendored `public/katex/` stylesheet and font bundle so math styles load without relying on package CSS resolution at runtime.

### Modified
- Updated homepage and root metadata descriptions to "My Study Notes on AI."
- Updated the about page intro description to "Neural Network ❤️ Humanity."
- Unified the content width and spacing across the home, blog, and about pages.
- Refined the blog listing and blog post UI with cleaner cards, cover media treatment, and shared metadata styling.
- Simplified the header and footer styling, including safer sticky-header spacing to prevent top clipping.
- Updated `content/posts/backpropagation.md` to exercise cover image, inline image, and math rendering.
- Pinned the Turbopack project root in `next.config.js` to reduce workspace-root build warnings.
- Switched the default site font back to Lexend loaded from Google Fonts at runtime, avoiding build-time font fetch failures.
- Added caching and explicit static rendering hints for blog content to reduce repeated markdown processing and duplicate renders.

### Fixed
- Fixed local post assets so they are copied into `public/post-assets` and render correctly in the static export.
- Fixed inconsistent page alignment caused by different hard-coded container widths.
- Fixed the repeated dev-server module resolution error for `katex/dist/katex.min.css` by loading KaTeX styles from `public/` instead of importing package CSS in `app/layout.tsx`.

### Notes
- Verified the app still compiles successfully with `npm run build`; I could not reproduce a compile error from the current checked-in files.
- Installed markdown rendering dependencies: `remark-gfm`, `remark-math`, `remark-rehype`, `rehype-katex`, `rehype-stringify`, `unist-util-visit`, and `katex`.
