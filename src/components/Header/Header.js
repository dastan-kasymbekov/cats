import React from 'react';
import "./Header.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="container">
        <NavLink to="/" className="link">Все котики</NavLink>
        <NavLink to="/favourites" className="link">Любимые котики</NavLink>
      </nav>
    </header>
  );
};

export default Header;