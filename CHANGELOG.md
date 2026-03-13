# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

### Changed
- Complete redesign of `app/about/page.tsx`: minimal, professional layout with a single vertical chronological timeline that merges Work Experience and Education. Removed all section icons; replaced with clean dot-and-line timeline connectors. Hero section retains gradient headline and key stats row. Selected Work now uses a compact 3-column card grid. Lexend font is enforced globally; existing color scheme (`--accent`, `--accent2`, `--muted`, `--border`, etc.) is used throughout with no new CSS variables.

### Fixed
- Added GitHub Pages `basePath` configuration in `next.config.js` to correctly resolve CSS, fonts, and link routes on production deployments.

### Changed
- Refactored `app/about/page.tsx` with a stunning glassmorphism design, floating animations (`animate-fade-up`), and unified premium visual containers, fulfilling the request to make it beautiful while keeping the existing color palette.
- Switched global font from Lora/Source Sans 3 to **Lexend** across all pages (`globals.css`, `Header`, `Footer`, all pages).
- Complete visual redesign of **About page**: fixed oversized icons (inline 18px SVGs), added hero section with gradient accent bar, skill tag cloud, `JobCard`/`ProjectCard`/`ConfBadge` component layout, and timeline-style education section.
- Redesigned **Home (blog listing) page**: gradient heading underline, uppercase tag pills, CSS-based hover on post links.
- Redesigned **Blog post page**: pill back-button, responsive clamped title, gradient accent bar, polished footer note.
- Redesigned **Header**: sticky with backdrop blur, Lexend logo, pill-style nav links.
- Added CSS utility classes `post-title-link`, `read-more-link`, `nav-link`, and `gradient-text` to `globals.css`.
- Complete redesign of the `app/about/page.tsx` page to display the author's work experience, education, and resume content with a modern Tailwind CSS layout.
- Restructured flat project root into the Next.js App Router directory layout defined in `README.md`:
  - `layout.tsx`, `globals.css`, `page.tsx` → `app/`
  - `app/about/page.tsx` and `app/blog/[slug]/page.tsx` promoted from staging area into `app/`
  - `Header.tsx`, `Footer.tsx` → `components/`
  - `posts.ts` → `lib/`
  - `_template.md` and all blog post `.md` files → `content/posts/`
  - `deploy.yml` → `.github/workflows/`

### Removed
- `mnt/` staging directory (AI-generated output directory, not part of the project)
