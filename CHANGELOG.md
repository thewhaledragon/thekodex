# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Humble, factual introduction with bullet points to the "About Me" page.

### Changed
- Renamed About page main title to "About Me".
- Removed "Core Competencies" and "Featured Research & Builds" sections for a cleaner, more focused layout.
- Fixed tag spacing in the chronological timeline to ensure clear separation.
- Redesigned the About Me page with a more premium aesthetic, including glassmorphism cards and a vertical timeline.
- Migrated global font to **Lexend** using `next/font/google` for better performance and consistency.
- Synchronized About page content with latest research updates from `about.md`.
- Removed redundant inline CSS font declarations across all components and pages.
- Refined the timeline UI with better spacing and hover states.
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
