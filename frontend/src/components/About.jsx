import React from "react";

export default function About(){
  return (
    <section className="about" id="about">
      <div className="content">
        <div className="col-left">
          <div className="content-title">Sobre mim</div>
          <p className="paragraph-text">
            Sou desenvolvedor focado em JavaScript, trabalhando com Node.js, React e SQLite.
            Crio backends leves e frontends responsivos com foco em performance e boas práticas.
          </p>
        </div>
        <div className="col-right">
          <div className="img-card">
            <img src="/assets/bg.jpg" alt="foto" />
          </div>
        </div>
      </div>
    </section>
  );
}
