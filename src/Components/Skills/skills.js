import React from "react";

import "./skills.css";

function Habilidades() {
  return (
    <div className="skills-card">
      <h1>Habilidades y herramientas</h1>
      <p>Utilizadas para darle vida a mis proyectos</p>
      <div className="container-logos">
        <div className="box-icon">
          <i class="fab fa-html5">
            <p>HTML</p>
          </i>
        </div>
        <div className="box-icon">
          <i class="fab fa-css3-alt">
            <p>CSS</p>
          </i>
        </div>
        <div className="box-icon">
          <i class="fab fa-js-square">
            <p>JS</p>
          </i>
        </div>
        <div className="box-icon">
          <i class="devicon-jquery-plain-wordmark">
            <p>JQUERY</p>
          </i>
        </div>
        <div className="box-icon">
          <i class="fas fa-terminal">
            <p>TERMINAL</p>
          </i>
        </div>
        <div className="box-icon">
          <i class="fab fa-git-alt">
            <p>GIT</p>
          </i>
        </div>
        <div className="box-icon">
          <i class="fab fa-react">
            <p>REACT</p>
          </i>
        </div>
        <div className="box-icon">
          <i class="fab fa-node">
            <p>NODEJS</p>
          </i>
        </div>
        <div className="box-icon">
          <i class="devicon-visualstudio-plain">
            <p>VISUAL STUDIO</p>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
