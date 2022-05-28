import logo from '../img/logo.png'
import React from 'react'

function Header({onDiscover, onJoin}) {
  return (
    <header className="Navbar">
      <div id="logo1">  
      <img src={logo}/>
      <span>Soundwave</span>
      </div>
      <div id="botones">
      <a onClick={onDiscover} href="#">Discover</a>
      <a onClick={onJoin} href="#">Join</a>
      </div>
    </header>
  )
}
export default Header