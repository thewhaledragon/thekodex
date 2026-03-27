# The Kodex | AI Blog

The Kodex → [https://thewhaledragon.github.io/TheWhaleDragonKodex/](https://thewhaledragon.github.io/TheWhaleDragonKodex/)

A clean, fast static blog built with Next.js 14.
No CMS, no database — posts are plain Markdown files.

---

## 📁 Project structure

```
blog-next/
├── app/
│   ├── layout.tsx          ← root layout (site title / metadata)
│   ├── page.tsx            ← homepage (post list)
│   ├── about/page.tsx      ← about page
│   └── blog/[slug]/
│       └── page.tsx        ← individual post page
├── components/
│   ├── Header.tsx          ← site header + nav
│   └── Footer.tsx          ← site footer
├── content/
│   └── posts/
│       ├── _template.md    ← COPY THIS for every new post
│       ├── example-post-1.md
│       └── example-post-2.md
├── lib/
│   └── posts.ts            ← reads and parses markdown files
├── .github/
│   └── workflows/
│       └── deploy.yml      ← auto-deploy to GitHub Pages on push
├── next.config.js          ← static export config
└── package.json
```

---

## 🚀 First-time setup (on your machine)

### Prerequisites
- [Node.js 18+](https://nodejs.org) installed
- A [GitHub](https://github.com) account

### 1 — Install dependencies
```bash
npm install
```

### 2 — Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

### 3 — Personalise
Search the project for `✏️` comments — those are the spots to change:

| File | What to change |
|------|---------------|
| `app/layout.tsx` | Site title and description |
| `components/Header.tsx` | Your name, tagline |
| `components/Footer.tsx` | Your name, year |
| `app/about/page.tsx` | Your bio text |
| `app/blog/[slug]/page.tsx` | Your email address |

---

## ✏️ How to write a new blog post

### Step 1 — Create a Markdown file
Copy `content/posts/_template.md` and rename it:
```
content/posts/my-post-title.md
```
Use lowercase and hyphens — this becomes the URL: `/blog/my-post-title`

### Step 2 — Edit the frontmatter at the top
```markdown
---
title: "Your Post Title"
date: "2025-07-15"          ← YYYY-MM-DD format
tag: "Learning"             ← one tag shown as a label
excerpt: "A 1–2 sentence summary shown on the homepage."
subtitle: "Optional subtitle under the title."  ← delete if not needed
---

Your content starts here...
```

### Step 3 — Write your post in Markdown

```markdown
Normal paragraph text.

## Section heading

> A blockquote looks like this.

- Bullet one
- Bullet two

**Bold text** and *italic text* and [a link](https://example.com).
```

### Step 4 — Push to GitHub
```bash
git add .
git commit -m "Add post: my-post-title"
git push
```
GitHub Actions will automatically build and deploy your site in ~2 minutes.

---

## 🌐 Setting up GitHub Pages (first time)

### 1 — Create a new GitHub repository
Go to [github.com/new](https://github.com/new) and create a repo.
Name it anything (e.g. `my-blog`).

### 2 — Push your code
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### 3 — Enable GitHub Pages with GitHub Actions
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **"GitHub Actions"** (not "Deploy from a branch")
3. Click **Save**

That's it. The workflow in `.github/workflows/deploy.yml` handles everything.

### 4 — Your site URL
- Personal repo (`yourusername.github.io`): `https://yourusername.github.io`
- Project repo (any other name): `https://yourusername.github.io/repo-name`

> **If using a project repo**, add one line to `next.config.js`:
> ```js
> basePath: '/your-repo-name',
> ```
> This makes internal links work correctly under a subfolder.

---

## 🔄 Everyday workflow

```
Write post → git add . → git commit -m "..." → git push
```
GitHub Actions deploys automatically. Check the **Actions** tab in your repo to watch the build.

---

## 🎨 Changing colours or fonts

All CSS variables are in `app/globals.css`:

```css
:root {
  --bg:      #f4f9f4;   /* page background */
  --accent:  #2e7d4f;   /* main green colour */
  --text:    #1e2e22;   /* body text */
  --muted:   #5a7a62;   /* dates, captions, footer */
}
```

Change these values to instantly retheme the whole site.

Fonts are imported from Google Fonts in `app/globals.css` — swap the import URL to use different fonts.

---

## 🛠 Useful commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start local dev server at localhost:3000 |
| `npm run build` | Build static site into `/out` folder |
| `npm run lint` | Check for code issues |
