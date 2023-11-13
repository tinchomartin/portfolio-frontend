import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading/loading.js";
import "./about.css";

function About() {
  const [information, setInformation] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://portfolio-be-0ejd.onrender.com/about").then((res) => {
      setLoading(false);
      setInformation(res.data[0]);
    });
  }, [setInformation]); //setinformation permite que la ejecución se realice cada vez que cambia de valor

  return (
    <React.Fragment>
      <div className="About" id="About">
        <div className="Descripcion">
          <h1>
            Hola! Me llamo Martin Garay
            
          </h1>
{loading && <Loading />}
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
