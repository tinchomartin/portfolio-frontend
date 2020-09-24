import React from "react";
import "./loading.css";
import image from "./spinner.svg";

function Loading() {
  return (
    <div className="logo-spinner">
      <img src={image} alt="pacman spinner" />
    </div>
  );
}
export default Loading;
