import React, { useEffect, useState } from "react";
import axios from "axios";
import "./portfolio.css";

function Portfolio() {
  const [projects, setProjects] = useState({});

  useEffect(() => {
    axios.get("https://port-backend.herokuapp.com/portfolio").then((res) => {
      setProjects(res.data);
    });
  }, [setProjects]);
  return (
    <React.Fragment>
      <div className="card-portfolio">
        {projects.length > 0 &&
          projects.map((project, i) => (
            <div className="individual-portfolio" key={i}>
              <h1>{project.name}</h1>
              <img src={project.image} alt="imagen-proyecto" />
              <p>{project.description}</p>
              <a href={project.link}>Visitar</a>
              <div className="dos"></div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}

export default Portfolio;

{
  /*  */
}
