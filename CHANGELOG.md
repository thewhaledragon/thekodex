# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

### Fixed
- Added GitHub Pages `basePath` configuration in `next.config.js` to correctly resolve CSS, fonts, and link routes on production deployments.

### Changed
- Restructured flat project root into the Next.js App Router directory layout defined in `README.md`:
  - `layout.tsx`, `globals.css`, `page.tsx` → `app/`
  - `app/about/page.tsx` and `app/blog/[slug]/page.tsx` promoted from staging area into `app/`
  - `Header.tsx`, `Footer.tsx` → `components/`
  - `posts.ts` → `lib/`
  - `_template.md` and all blog post `.md` files → `content/posts/`
  - `deploy.yml` → `.github/workflows/`

### Removed
- `mnt/` staging directory (AI-generated output directory, not part of the project)
