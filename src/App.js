import React from "react";
import "./App.css";
import About from "./Components/About/about";
import Portfolio from "./Components/Portfolio/portfolio";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Footer>
        <About />
        <Portfolio />
      </Footer>
    </div>
  );
}

export default App;
