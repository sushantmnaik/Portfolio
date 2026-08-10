import Database from "better-sqlite3";
import path from "path";

// The whole database lives in one file: data/portfolio.db
// No external service, no account, no cost - it's just a file on disk.
const dbPath = path.join(process.cwd(), "data", "portfolio.db");
const db = new Database(dbPath);

// Good practice for SQLite: enables faster, safer concurrent reads/writes.
db.pragma("journal_mode = WAL");

// Create tables if they don't already exist yet.
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

// Migration: add the `repo` column (owner/name on GitHub, used to fetch
// real dates) if this database was created before that column existed.
const projectColumns = db.prepare("PRAGMA table_info(projects)").all() as {
  name: string;
}[];
if (!projectColumns.some((col) => col.name === "repo")) {
  db.exec(`ALTER TABLE projects ADD COLUMN repo TEXT NOT NULL DEFAULT ''`);
}

export default db;
