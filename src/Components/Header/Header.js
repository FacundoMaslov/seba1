import React from "react";
import "./Header.scss";
import Logo from "../../../src/assets/img/Logo1.png";

export default function Header() {
  return (
    <div className="header ">
      <div className="header_item">
        <img className="logo" src={Logo} alt="Tweeter"></img>
      </div>
      <div className="header_item">
        <p>Tweeter</p>
      </div>
    </div>
  );
}
