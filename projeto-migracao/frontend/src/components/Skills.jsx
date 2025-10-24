import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="content-title">Skills</h2>
      <div className="content">
        <div className="col-left">
          <div className="bar">
            <div className="info"><span>Node.js</span><span>90%</span></div>
            <div className="line nodejs"></div>
          </div>
          <div className="bar">
            <div className="info"><span>Python</span><span>85%</span></div>
            <div className="line python"></div>
          </div>
          <div className="bar">
            <div className="info"><span>SQL</span><span>80%</span></div>
            <div className="line sql"></div>
          </div>
        </div>
        <div className="col-right">
          <div className="bar">
            <div className="info"><span>API</span><span>85%</span></div>
            <div className="line api"></div>
          </div>
          <div className="bar">
            <div className="info"><span>DevOps</span><span>70%</span></div>
            <div className="line devops"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
