import React, { useEffect, useState } from "react";
import axios from "axios";
import "./portfolio.css";
import Loading from "../Loading/loading.js";

function Portfolio() {
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://portfolio-be-0ejd.onrender.com/portfolio").then((res) => {
      setProjects(res.data);
      setLoading(false);
    });
  }, [setProjects]);
  return (
    <React.Fragment>
      <div className="card-portfolio" id="card-portfolio">
        {loading && <Loading />}
        {projects.length > 0 &&
          projects.map((project, i) => (
            <div className="individual-portfolio" key={i}>
              <h1>{project.name}</h1>
              <p>{project.descripcion}</p>
              <img src={project.image} alt="imagen-proyecto" />
              <div className="link-container">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  Visitar
                </a>
              </div>
              <div className="dos"></div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}

export default Portfolio;
