// Run with: npm run seed
// Creates your admin login and a couple of example projects so the site
// isn't empty on first run.

require("dotenv").config({ path: ".env.local" });
const path = require("path");
const bcrypt = require("bcryptjs");
const Database = require("better-sqlite3");

const dbPath = path.join(process.cwd(), "data", "portfolio.db");
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    passwordHash TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    imageUrl TEXT,
    projectUrl TEXT,
    tags TEXT NOT NULL DEFAULT '',
    featured INTEGER NOT NULL DEFAULT 0,
    sortOrder INTEGER NOT NULL DEFAULT 0,
    createdAt TEXT NOT NULL DEFAULT (datetime('now')),
    repo TEXT NOT NULL DEFAULT ''
  );
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    createdAt TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

const projectColumns = db.prepare("PRAGMA table_info(projects)").all();
if (!projectColumns.some((col) => col.name === "repo")) {
  db.exec(`ALTER TABLE projects ADD COLUMN repo TEXT NOT NULL DEFAULT ''`);
}

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@example.com";
  const password = process.env.ADMIN_PASSWORD || "changeme123";

  const existing = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
  if (existing) {
    console.log(`Admin user "${email}" already exists. Skipping.`);
  } else {
    const passwordHash = await bcrypt.hash(password, 10);
    db.prepare("INSERT INTO users (email, passwordHash) VALUES (?, ?)").run(email, passwordHash);
    console.log(`Created admin user:
  email:    ${email}
  password: ${password}
(Set ADMIN_EMAIL / ADMIN_PASSWORD in .env.local to change these before seeding.)`);
  }

  const projectCount = db.prepare("SELECT COUNT(*) as count FROM projects").get();
  if (projectCount.count === 0) {
    const insert = db.prepare(`
      INSERT INTO projects (title, description, imageUrl, projectUrl, tags, featured, sortOrder, repo)
      VALUES (@title, @description, @imageUrl, @projectUrl, @tags, @featured, @sortOrder, @repo)
    `);
    insert.run({
      title: "Waideek",
      description: "An AI-powered chatbot that answers your queries for free, no login or signup required.",
      imageUrl: "/waideek-favicon.png",
      projectUrl: "https://waideek.vercel.app/",
      tags: "Next.js,Gemini 2.5 Flash,Vercel",
      featured: 1,
      sortOrder: 0,
      repo: "", // add your Waideek GitHub repo here, e.g. "sushantmnaik/waideek"
    });
    insert.run({
      title: "Kumpix Description Writer",
      description: "Gives a short, AI-generated description for any word you type in.",
      imageUrl: "/kumpix-favicon.png",
      projectUrl: "https://kumpix.web.app/",
      tags: "React,Puppeteer,Bootstrap,Firebase",
      featured: 1,
      sortOrder: 1,
      repo: "", // add your Kumpix GitHub repo here
    });
    insert.run({
      title: "Waideek Playground",
      description: "A 3D car-in-city simulator game you can play right in the browser.",
      imageUrl: "",
      projectUrl: "https://sushantmnaik.github.io/Waideek-Playground/",
      tags: "Three.js,JavaScript,GitHub Pages",
      featured: 0,
      sortOrder: 2,
      repo: "sushantmnaik/Waideek-Playground",
    });
    insert.run({
      title: "Kumpix Login",
      description: "A login system where users can sign in and track their performance and activity.",
      imageUrl: "/kumpix-favicon.png",
      projectUrl: "https://kumpix.onrender.com/",
      tags: "Python,Flask,Render",
      featured: 0,
      sortOrder: 3,
      repo: "", // add your Kumpix Login GitHub repo here
    });
    console.log("Seeded 4 projects.");
  }
}

main().then(() => process.exit(0));
