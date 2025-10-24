import React from "react";

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="content-title">Sobre Mim</h2>
      <div className="content">
        <div className="col-left">
          <p className="paragraph-text">
            Olá! Eu sou Pedro, desenvolvedor backend. Iniciando a trajetória com backend JS.
          </p>
        </div>
        <div className="col-right">
          <div className="img-card">
            <img src="/minhafoto.jpg" alt="Sobre" />
          </div>
        </div>
      </div>
    </section>
  );
}
