import React from "react";

export default function Hero(){
  return (
    <section className="main" id="home">
      <div className="content">
        <h2>Olá, eu sou <span>Pedro Henrique</span></h2>
        <div className="animated-text">
          <h3>Desenvolvedor</h3>
          <h3>Backend Node</h3>
          <h3>React & SQLite</h3>
        </div>
        <a className="btn" href="#work">Ver projetos</a>
        <div className="media-icons">
          {/* Insira ícones / links */}
        </div>
      </div>
    </section>
  );
}
