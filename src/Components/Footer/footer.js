import React from "react";
import "./footer.css";

function Footer(props) {
  const children = props.children;
  return (
    <React.Fragment>
      {children}
      <div className="card-footer">
        <p>Diseñado y desarrollado por Martin Garay |</p>

        <a href="mailto:tincho.html@gmail.com">
          <i className="fas fa-at"></i>
        </a>
        <span>|</span>

        <a
          href="https://github.com/tinchomartin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-github-plain"></i>
        </a>
        <span>|</span>

        <a
          href="https://codepen.io/tinchomartin/pens/public"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-codepen-plain"></i>
        </a>
        <span>|</span>
      </div>
    </React.Fragment>
  );
}

export default Footer;
