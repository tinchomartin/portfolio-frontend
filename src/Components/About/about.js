import React, { useState, useEffect } from "react";
import axios from "axios";
import "./about.css";

function About() {
  const [information, setInformation] = useState({});

  useEffect(() => {
    axios
      .get("https://port-backend.herokuapp.com/about")
      .then((res) => setInformation(res.data[0]));
  }, [setInformation]); //setinformation permite que la ejecución se realice cada vez que cambia de valor

  return (
    <React.Fragment>
      <div className="About">
        <div className="div-foto">
          {/* <img className="foto-perfil" src={information.photo} alt="" /> */}
        </div>
        <div className="Descripcion">
          <h1>Sitio en desarrollo</h1>
          <h1>Hola! mi nombre es {information.name}</h1>
          <h2>{information.profession}</h2>
          <p>{information.about_me}</p>
          {/* <ul className="Skills">
            {information.skills && //con hooks, primero hay que chequear que el item exista antes del map
              information.skills.map((skill, i) => <p key={i}>{skill}</p>)}
          </ul> */}
        </div>
        <div className="uno"></div>
      </div>
    </React.Fragment>
  );
}
export default About;
