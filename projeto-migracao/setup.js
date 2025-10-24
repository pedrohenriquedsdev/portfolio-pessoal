import fs from "fs";
import path from "path";

// Função auxiliar para criar pasta se não existir
function mkdir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// Função auxiliar para criar arquivo
function createFile(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

// Caminhos principais
const baseDir = process.cwd();
const backendDir = path.join(baseDir, "backend");
const frontendDir = path.join(baseDir, "frontend");

// === BACKEND ===
mkdir(path.join(backendDir, "db"));
mkdir(path.join(backendDir, "models"));
mkdir(path.join(backendDir, "routes"));

// backend/package.json
createFile(path.join(backendDir, "package.json"), `{
  "name": "backend",
  "version": "1.0.0",
  "main": "server.js",
  "type": "module",
  "scripts": { "start": "node server.js" },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "sqlite": "^4.2.1",
    "sqlite3": "^5.1.6"
  }
}`);

// backend/models/contactModel.js
createFile(path.join(backendDir, "models/contactModel.js"), `import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db;
export async function initDb() {
  db = await open({ filename: "./db/database.sqlite", driver: sqlite3.Database });
  await db.exec(\`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  \`);
  console.log("📦 Banco de dados inicializado!");
}
export async function saveContact(name, email, message) {
  await db.run("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)", [name, email, message]);
}`);

// backend/routes/contactRoutes.js
createFile(path.join(backendDir, "routes/contactRoutes.js"), `import express from "express";
import { saveContact } from "../models/contactModel.js";
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    await saveContact(name, email, message);
    res.status(200).json({ success: true, message: "Contato salvo com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao salvar contato" });
  }
});
export default router;`);

// backend/server.js
createFile(path.join(backendDir, "server.js"), `import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import { initDb } from "./models/contactModel.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);

initDb();

app.listen(PORT, () => console.log(\`✅ Backend rodando em http://localhost:\${PORT}\`));
`);

// === FRONTEND ===
mkdir(path.join(frontendDir, "public"));
mkdir(path.join(frontendDir, "src/components"));
mkdir(path.join(frontendDir, "src/styles"));

// frontend/package.json (compatível com Vite 7 + plugin React + react-icons)
createFile(path.join(frontendDir, "package.json"), `{
  "name": "frontend",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.11.0"
  },
  "devDependencies": {
    "vite": "^7.1.12",
    "@vitejs/plugin-react": "^3.1.0"
  }
}`);

// frontend/vite.config.js
createFile(path.join(frontendDir, "vite.config.js"), `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: { "/api": "http://localhost:3001" }
  }
});
`);

// frontend/src/main.jsx
createFile(path.join(frontendDir, "src/main.jsx"), `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
`);

// frontend/src/App.jsx
createFile(path.join(frontendDir, "src/App.jsx"), `import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}`);

// frontend/src/components/Header.jsx
createFile(path.join(frontendDir, "src/components/Header.jsx"), `import React from "react";
export default function Header() {
  return (
    <header>
      <a href="#" className="brand">Portfolio</a>
      <nav className="navigation">
        <a href="#about">Sobre</a>
        <a href="#skills">Skills</a>
        <a href="#services">Serviços</a>
        <a href="#work">Trabalho</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}`);

// frontend/src/components/About.jsx
createFile(path.join(frontendDir, "src/components/About.jsx"), `import React from "react";
export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="content-title">Sobre Mim</h2>
      <div className="content">
        <div className="col-left">
          <p className="paragraph-text">
            Olá! Eu sou Pedro, desenvolvedor full stack. Amo criar projetos web modernos e eficientes.
          </p>
        </div>
        <div className="col-right">
          <div className="img-card">
            <img src="/bg.jpg" alt="Sobre" />
          </div>
        </div>
      </div>
    </section>
  );
}`);

// frontend/src/components/Skills.jsx
createFile(path.join(frontendDir, "src/components/Skills.jsx"), `import React from "react";
export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="content-title">Skills</h2>
      <div className="content">
        <div className="col-left">
          <div className="bar">
            <div className="info"><span>Node.js</span><span>90%</span></div>
            <div className="line nodejs"></div>
          </div>
          <div className="bar">
            <div className="info"><span>Python</span><span>85%</span></div>
            <div className="line python"></div>
          </div>
          <div className="bar">
            <div className="info"><span>SQL</span><span>80%</span></div>
            <div className="line sql"></div>
          </div>
        </div>
        <div className="col-right">
          <div className="bar">
            <div className="info"><span>API</span><span>85%</span></div>
            <div className="line api"></div>
          </div>
          <div className="bar">
            <div className="info"><span>DevOps</span><span>70%</span></div>
            <div className="line devops"></div>
          </div>
        </div>
      </div>
    </section>
  );
}`);

// frontend/src/components/Services.jsx
createFile(path.join(frontendDir, "src/components/Services.jsx"), `import React from "react";
import { FaCode, FaServer, FaMobileAlt } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="services">
      <h2 className="content-title">Serviços</h2>
      <div className="content">
        <div className="card">
          <div className="service-icon"><FaCode /></div>
          <div className="info"><h3>Desenvolvimento Web</h3></div>
        </div>
        <div className="card">
          <div className="service-icon"><FaServer /></div>
          <div className="info"><h3>Backend e APIs</h3></div>
        </div>
        <div className="card">
          <div className="service-icon"><FaMobileAlt /></div>
          <div className="info"><h3>Apps Mobile</h3></div>
        </div>
      </div>
    </section>
  );
}`);

// frontend/src/components/Work.jsx
createFile(path.join(frontendDir, "src/components/Work.jsx"), `import React from "react";
export default function Work() {
  return (
    <section id="work" className="work">
      <h2 className="content-title">Projetos</h2>
      <div className="content">
        <div className="card">
          <div className="card-img"><img src="/bg.jpg" alt="Projeto 1" /></div>
        </div>
        <div className="card">
          <div className="card-img"><img src="/bg.jpg" alt="Projeto 2" /></div>
        </div>
        <div className="card">
          <div className="card-img"><img src="/bg.jpg" alt="Projeto 3" /></div>
        </div>
      </div>
    </section>
  );
}`);

// frontend/src/components/Footer.jsx
createFile(path.join(frontendDir, "src/components/Footer.jsx"), `import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer-title">Portfolio</h3>
      <p>Desenvolvido por Pedro Santos | <a href="#">GitHub</a></p>
    </footer>
  );
}`);

// frontend/src/components/Contact.jsx
createFile(path.join(frontendDir, "src/components/Contact.jsx"), `import React, { useState } from "react";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault(); setStatus("Enviando...");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(form) });
      const data = await res.json();
      if(res.ok){ setStatus("Mensagem enviada com sucesso!"); setForm({ name:"", email:"", message:"" }); }
      else setStatus(data.error || "Erro ao enviar mensagem");
    } catch { setStatus("Erro de conexão com o servidor"); }
  };
  return (
    <section id="contact">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Seu nome" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Seu e-mail" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Sua mensagem" value={form.message} onChange={handleChange} required />
        <button type="submit">Enviar</button>
        {status && <p>{status}</p>}
      </form>
    </section>
  );
}`);

// frontend/src/styles/style.css
createFile(path.join(frontendDir, "src/styles/style.css"), fs.readFileSync(path.join(baseDir, "style.css"), "utf8"));

console.log("✅ Estrutura completa criada com sucesso!");
