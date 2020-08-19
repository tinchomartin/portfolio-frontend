import React from "react";
import "./footer.css";

function Footer(props) {
  const children = props.children;
  return (
    <React.Fragment>
      {children}
      <div className="card-footer">
        <p>© 2020 | Diseñado y desarrollado por Martin Garay</p>
      </div>
    </React.Fragment>
  );
}

export default Footer;
