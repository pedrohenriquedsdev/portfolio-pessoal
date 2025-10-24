import React from "react";
import { FaCode, FaServer, FaMobileAlt } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="services">
      <h2 className="content-title">Serviços</h2>
      <div className="content">
        <div className="card">
          <div className="service-icon"><FaCode /></div>
          <div className="info">
            <h3>Desenvolvimento Web</h3>
          </div>
        </div>
        <div className="card">
          <div className="service-icon"><FaServer /></div>
          <div className="info">
            <h3>Backend e APIs</h3>
          </div>
        </div>
        <div className="card">
          <div className="service-icon"><FaMobileAlt /></div>
          <div className="info">
            <h3>Apps Mobile</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
