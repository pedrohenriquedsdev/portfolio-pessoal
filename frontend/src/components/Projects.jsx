import React, { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import ProjectCard from "./ProjectCard";

export default function Projects(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects).catch(console.error);
  }, []);

  return (
    <section className="work" id="work">
      <h2 className="content-title" style={{textAlign:"center"}}>Projetos</h2>
      <div className="content">
        {projects.length === 0 ? (
          <p style={{color:"#aaa"}}>Nenhum projeto disponível — adicione via API</p>
        ) : (
          projects.map(p => <ProjectCard key={p.id} project={p} />)
        )}
      </div>
    </section>
  );
}
