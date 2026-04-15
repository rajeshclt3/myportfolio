# Architecture & Component Guide

This document describes the component-driven architecture for the portfolio site and how content is separated from presentation. Use this as a reference when adding components or content.

## Goals
- Reusable, testable UI components
- Content stored in Markdown/MDX for easy editing
- Fast static output for GitHub Pages with minimal runtime JS

## Folder layout

- `src/components/` — Presentational and small interactive components (ProfileCard, Hero, ProjectCard, ExperienceCard, ContactForm, CTASection, SidebarNav)
- `src/layouts/` — Page layout wrappers (DefaultLayout, ResumeLayout)
- `src/pages/` — Route entry points (index.astro, resume.astro, work.astro, contact.astro)
- `src/content/` — Markdown/MDX content (projects, experience entries, about)
- `src/styles/` — global styles and Tailwind entry
- `public/` — static assets (images, CV PDF)

## Component responsibilities

- `ProfileCard` — left sidebar personal card. Props: `image`, `name`, `title`, `location`, `email`, `links`.
- `SidebarNav` — navigation links. Props: `items[]` with `{label,href}`.
- `Hero` — page hero with title, subtitle, badges.
- `ProjectCard` — project preview used in the Work page and galleries. Props: `image`, `title`, `categories`, `excerpt`, `href`.
- `ExperienceCard` — resume item card with role/company/dates/description/tags.
- `ContactForm` — presentational form wired to FormSubmit by default. Props: `endpoint`.
- `CTASection` — call-to-action block used across pages.

## Data model (content)

- Projects: `src/content/projects/*.md` with frontmatter: `title`, `categories`, `excerpt`, `cover`, `slug`.
- Experience: `src/content/experience/*.md` with frontmatter: `role`, `company`, `start`, `end`, `tags`, `order`.
- Site metadata: add `src/data/site.json` (optional) with `name`, `email`, `social[]`, `nav[]`.

## Editing workflow

- Non-technical editors: edit Markdown files in `src/content/` via GitHub web editor.
- Developers: update components in `src/components/` and templates in `src/layouts/`.

## Styling

- Tailwind tokens are defined in `tailwind.config.cjs`. Keep colors, radii, and shadows centralized here.
- Use `src/styles/globals.css` to import Tailwind and add small utility classes used across components.

## Build & Deploy

- Local dev: `npm install && npm run dev`
- Build: `npm run build` — output in `dist/`
- GitHub Pages: use GitHub Actions or `gh-pages` to publish `dist/` to the `gh-pages` branch. Netlify/Cloudflare Pages are alternatives with one-click deploys.

## Adding a new reusable component

1. Create `src/components/MyComponent.astro` with clear props.
2. Add stories/examples in a page under `src/pages/dev/` for visual testing.
3. Use the component in a layout or page and keep content in Markdown where possible.

## Notes & future improvements

- Add MDX if you want inline components inside Markdown pages.
- For rich editing UIs, consider TinaCMS or NetlifyCMS later.
- For best performance, prefer Astro partial hydration for interactive islands.
