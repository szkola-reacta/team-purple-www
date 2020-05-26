import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css'
import logo from '../img/mylogo.png';


const Header = () => (
  <div className="header-container">
    <img src={logo} className="myLogo" alt="logo" />
    <ul className="nav">
      <li className="nav__item">
        <NavLink to="/" exact className="nav__link">
          Start
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/react" className="nav__link">
          React
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/projects" className="nav__link">
          Projekty
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
