import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

class Navbar extends React.Component {
  state = {
    show: true,
    scrollPosition: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollPosition: document.body.getBoundingClientRect().top,
      show:
        document.body.getBoundingClientRect().top > this.state.scrollPosition,
    });
  };

  render() {
    return (
      <nav className={this.state.show ? "active" : "hidden"}>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="card-portfolio"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Proyectos
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="skills-card"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="card-footer"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
