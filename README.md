# Carter Construction Group — Website

The complete, self-contained source code for the Carter Construction Group marketing website. This is a standard **React + Vite** project with **zero proprietary dependencies** — you own it outright and can run, host, sell, or hand it off to anyone.

## What's inside

- A single-page premium marketing site (hero, about, services, projects gallery, reviews, service area map, FAQ, contact).
- All images bundled locally in `./assets`.
- All business content (phone, reviews, services, FAQs) in `data.ts` — edit there to update the site.

## Requirements

- [Node.js](https://nodejs.org) 18 or newer (includes `npm`).

## Run it locally

```bash
npm install     # install dependencies (one time)
npm run dev     # start the local dev server — open the URL it prints
```

## Build for production

```bash
npm run build   # outputs a static site to the ./dist folder
npm run preview # preview the production build locally
```

The `dist/` folder is a plain static website. You can drop it on **any** host — Vercel, Netlify, Cloudflare Pages, GitHub Pages, AWS S3, or any web server. Nothing ties it to a specific platform.

## Deploy (easiest options)

- **Netlify / Vercel / Cloudflare Pages:** connect the folder (or a Git repo), set build command to `npm run build` and output directory to `dist`. Done.
- **Any web host:** run `npm run build` and upload the contents of `dist/`.

## Editing content

Open `data.ts` — it holds the phone number, Google reviews link, services, testimonials, and FAQs. Change the text there and the whole site updates. Replace images in `./assets` to swap photos.

## Ownership

This code is fully yours. It has no dependency on Bit Cloud or any external platform to run — it's plain React that anyone can build and host forever.
