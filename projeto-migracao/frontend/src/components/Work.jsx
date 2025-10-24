import React from "react";

export default function Work() {
  return (
    <section id="work" className="work">
      <h2 className="content-title">Projetos</h2>
      <div className="content">
        <div className="card">
          <div className="card-img">
            <img src="/bg.jpg" alt="Projeto 1" />
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="/bg.jpg" alt="Projeto 2" />
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="/bg.jpg" alt="Projeto 3" />
          </div>
        </div>
      </div>
    </section>
  );
}
