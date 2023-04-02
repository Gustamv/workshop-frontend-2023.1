import React from 'react';
import { NavLink } from 'react-router-dom';



function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/galeria">
              Galeria
            </NavLink>
          </li>
          <li>
            <NavLink to="/episodios">
              Episódios
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <img src={logo} alt="Logo The Office" />
        <h1>The Office</h1>
      </div>
    </header>
  );
}

export default Header;


