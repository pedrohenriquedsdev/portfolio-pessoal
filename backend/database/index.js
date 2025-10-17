import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const dbFile = process.env.DATABASE_FILE || "./database.sqlite";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbFile,
  logging: false
});

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("✅ SQLite conectado via Sequelize.");
  } catch (err) {
    console.error("❌ Erro conectando o DB:", err);
    throw err;
  }
}
