import React, { useState, useEffect } from "react";
import axios from "axios";
import "./skills.css";

function Habilidades() {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    axios.get("https://portfolio-be-0ejd.onrender.com/skills").then((res) => {
      setSkills(res.data);
    });
  }, [setSkills]);

  return (
    <div className="skills-card" id="skills-card">
      <h1>Habilidades y herramientas</h1>
      <p>Utilizadas para darle vida a mis proyectos</p>
      <div className="container-logos">
        {skills.length > 0 &&
          skills.map((skills, item) => {
            return (
              <div className="box-icon" key={item}>
                <i className={skills.skill_icon}>
                  <p>{skills.skill_name}</p>
                </i>
              </div>
            );
          })}

        {/* <div className="box-icon">
          <i className="fab fa-css3-alt">
            <p>CSS</p>
          </i>
        </div>
        <div className="box-icon">
          <i className="fab fa-js-square">
            <p>JS</p>
          </i>
        </div>
        <div className="box-icon">
          <i className="devicon-jquery-plain-wordmark">
            <p>JQUERY</p>
          </i>
        </div>
        <div className="box-icon">
          <i className="fas fa-terminal">
            <p>TERMINAL</p>
          </i>
        </div>
        <div className="box-icon">
          <i className="fab fa-git-alt">
            <p>GIT</p>
          </i>
        </div>
        <div className="box-icon">
          <i className="fab fa-react">
            <p>REACT</p>
          </i>
        </div>
        <div className="box-icon">
          <i className="fab fa-node">
            <p>NODEJS</p>
          </i>
        </div>
        <div className="box-icon">
          <i className="devicon-visualstudio-plain">
            <p>VISUAL STUDIO</p>
          </i>
        </div> */}
      </div>
    </div>
  );
}

export default Habilidades;
