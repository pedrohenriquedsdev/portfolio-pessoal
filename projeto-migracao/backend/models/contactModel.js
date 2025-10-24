import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db;

export async function initDb() {
  db = await open({
    filename: "./db/database.sqlite",
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log("📦 Banco de dados inicializado!");
}

export async function saveContact(name, email, message) {
  await db.run(
    "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
    [name, email, message]
  );
}
