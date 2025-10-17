import { Contact } from "../models/Contact.js";

export async function createContact(req, res) {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: "Campos obrigatórios faltando" });
  try {
    const c = await Contact.create({ name, email, message });
    res.status(201).json({ message: "Mensagem enviada com sucesso", contact: c });
  } catch (err) {
    res.status(500).json({ error: "Erro interno" });
  }
}
