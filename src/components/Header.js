import logo from "../img/logo.png";
import React from "react";

function Header({ onDiscover, onJoin }) {
  return (
    <header className="Navbar">
      <div id="logo1">
        <img src={logo} />
        <span>Soundwave</span>
      </div>
      <div id="botones">
        <a onClick={onDiscover}>Discover</a>
        <a onClick={onJoin}>Join</a>
      </div>
    </header>
  );
}
export default Header;
