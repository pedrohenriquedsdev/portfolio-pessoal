import React from "react";

export default function Skills(){
  return (
    <section className="skills" id="skills">
      <div className="content">
        <div className="col-left">
          <h2 className="content-title">Skills</h2>
          <div className="bar">
            <div className="info"><span>Node.js</span><span>90%</span></div>
            <div className="line"><div className="nodejs"></div></div>
          </div>
          <div className="bar">
            <div className="info"><span>React</span><span>85%</span></div>
            <div className="line"><div className="api"></div></div>
          </div>
        </div>
        <div className="col-right">
          <h2 className="content-title">Outras</h2>
          <div className="bar">
            <div className="info"><span>SQL</span><span>80%</span></div>
            <div className="line"><div className="sql"></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
