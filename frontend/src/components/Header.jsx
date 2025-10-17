import React from "react";

export default function Header(){
  return (
    <header>
      <a href="/" className="brand">Pedro Henrique</a>
      <nav className="navigation">
        <a href="#about">Sobre</a>
        <a href="#skills">Skills</a>
        <a href="#work">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
      <div className="menu-btn" />
    </header>
  );
}
