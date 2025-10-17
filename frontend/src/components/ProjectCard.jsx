import React from "react";

export default function ProjectCard({ project }){
  return (
    <div className="card">
      <div className="card-img">
        <img src={project.image ? project.image : "/assets/bg.jpg"} alt={project.title} />
      </div>
      <div style={{padding:"16px"}}>
        <h3 style={{color:"#6c63ff"}}>{project.title}</h3>
        <p style={{color:"#cfcfd9"}}>{project.description}</p>
        {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="btn" style={{marginTop:"10px", display:"inline-block"}}>Ver projeto</a>}
      </div>
    </div>
  );
}
