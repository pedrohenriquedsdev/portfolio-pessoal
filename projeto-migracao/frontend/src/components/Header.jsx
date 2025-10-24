import React from "react";

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
}
