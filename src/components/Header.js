import logo from "../img/logo.png";
import React from "react";

function Header({ onDiscover, onJoin }) {
  return (
    <header className="Navbar" position="fixed">
      <div id="logo1">
        <img src={logo} alt=""/>
        <span>Soundwave</span>
      </div>
      <div id="botones">
        <p onClick={onDiscover}>Discover</p>
        <p onClick={onJoin}>Join</p>
      </div>
    </header>
  );
}
export default Header;
