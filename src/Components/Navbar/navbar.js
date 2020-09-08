import React from "react";
import "./navbar.css";
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
          <li>Inicio</li>
          <li>Sobre mí</li>
          <li>Proyectos</li>
          <li>Habilidades</li>
          <li>Contacto</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
