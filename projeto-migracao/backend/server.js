import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import { initDb } from "./models/contactModel.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);

initDb();

app.listen(PORT, () => {
  console.log(`✅ Backend rodando em http://localhost:${PORT}`);
});
