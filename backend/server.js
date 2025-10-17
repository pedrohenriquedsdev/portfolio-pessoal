import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB, sequelize } from "./database/index.js";
import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import { Project } from "./models/Project.js";
import { Contact } from "./models/Contact.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Configuração para __dirname no ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Rotas da API
app.use("/projects", projectRoutes);
app.use("/contact", contactRoutes);

// Health check
app.get("/health", (_, res) => res.json({ ok: true }));

// Servir React build
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Start do servidor
(async () => {
  try {
    await connectDB();
    // sincroniza as tabelas (use { alter: true } ou migrations em produção)
    await sequelize.sync();
    app.listen(PORT, () => console.log(`🚀 Backend rodando: http://localhost:${PORT}`));
  } catch (err) {
    console.error("Erro ao iniciar servidor:", err);
  }
})();
