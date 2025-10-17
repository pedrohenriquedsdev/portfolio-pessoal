import { useState, useEffect } from "react";
import { createContact } from "../services/api";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const textos = ["Texto 1", "Texto 2", "Texto 3", "Texto 4"];
  const [indice, setIndice] = useState(0);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % textos.length);
    }, 3000); // troca a cada 3 segundos

    return () => clearInterval(interval); // limpa o intervalo ao desmontar o componente
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createContact(form);
      alert("Mensagem enviada! Obrigado.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-form">
        <h3>Contato</h3>
        <h3>{textos[indice]}</h3>
        
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <input name="name" placeholder="Seu nome" value={form.name} onChange={onChange} required />
          </div>
          <div className="input-box">
            <input name="email" type="email" placeholder="Seu e-mail" value={form.email} onChange={onChange} required />
          </div>
          <div className="input-box">
            <textarea name="message" rows="6" placeholder="Sua mensagem" value={form.message} onChange={onChange} required />
          </div>
          <button className="send-btn" type="submit" disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
        </form>
      </div>
    </section>
  );
}
