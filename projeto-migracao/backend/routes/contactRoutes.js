import express from "express";
import { saveContact } from "../models/contactModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });

    await saveContact(name, email, message);
    res.status(200).json({ success: true, message: "Contato salvo com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao salvar contato" });
  }
});

export default router;
