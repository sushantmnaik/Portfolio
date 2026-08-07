# Sushant Naik — Portfolio

A personal portfolio site built with Next.js, presented as a developer "changelog" —
your projects appear as versioned releases. Includes a private admin dashboard
to add/edit/delete projects and read contact form messages, backed by a local
SQLite database.

**Every tool used here is free and open-source, with no paid tiers or usage costs:**
Next.js, React, Tailwind CSS, NextAuth.js, and SQLite (via `better-sqlite3`,
just a local file — no database hosting bill, ever).

## 1. Install dependencies

```bash
npm install
```

## 2. Set up your environment file

```bash
cp .env.local.example .env.local
```

Open `.env.local` and set:
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — the login you'll use at `/admin/login`
- `AUTH_SECRET` — a random secret (a working default is already filled in, but
  generate your own for anything beyond local testing):
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
  ```

## 3. Create your database + admin login

```bash
npm run seed
```

This creates `data/portfolio.db` (a single file — your entire database) with
your admin account and a few starter projects pulled from your profile
(Waideek, Kumpix, Waideek Playgrounds, Kumpix Login System). Edit or delete
them anytime from the admin dashboard.

## 4. Run it

```bash
npm run dev
```

- Public site: http://localhost:3000
- Admin login: http://localhost:3000/admin/login

## Customizing

- **Your info (name, bio, skills, socials):** edit `lib/config.ts` directly.
- **Projects:** don't edit code — log into `/admin` and use the dashboard.
- **Colors/fonts:** edit the CSS variables at the top of `app/globals.css`,
  and the font choices in `app/layout.tsx`.
- **Contact form submissions:** view them at `/admin/messages`.

## Deploying (optional, still free)

[Vercel's free tier](https://vercel.com) is the easiest way to put this
online — connect your GitHub repo and it deploys automatically. Just add the
same environment variables (`AUTH_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`)
in the Vercel project settings.

**Note on hosting:** SQLite is a file on disk, which works great for running
this locally or on a server/VM where the filesystem persists. Some serverless
hosts (like Vercel) reset the filesystem on each deploy, so the database
would reset too. For serverless hosting, you'd eventually want a hosted
database instead — but that's a later problem, and not something you need to
worry about to build, run, and use this site today.

## Project structure

```
app/                  Pages and API routes (Next.js App Router)
  admin/               Admin dashboard, login, project/message management
  api/                 Auth and contact form API routes
components/           Reusable UI pieces
lib/
  config.ts            <- your name/bio/skills/socials
  db.ts                 SQLite connection + table setup
  projects.ts           Project database queries
  messages.ts            Contact message database queries
  actions.ts             Server actions for admin CRUD
  auth.ts                 NextAuth configuration
scripts/seed.js        Creates your admin login + starter projects
data/portfolio.db      Your database (created after `npm run seed`)
```
