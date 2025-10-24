import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Erro ao enviar mensagem");
      }
    } catch {
      setStatus("Erro de conexão com o servidor");
    }
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
}
