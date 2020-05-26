import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import './header.styles.scss';

const Header = () => (
  <div className="header-container">
    <img src={logo} className="logo" alt="logo" />
    <ul className="nav">
      <li className="nav__item">
        <Link to="/" className="nav__link">
          Widok główny
        </Link>
      </li>
      <li className="nav__item">
        <Link to="#" className="nav__link">
          Sekcja Reacta
        </Link>
      </li>
      <li className="nav__item">
        <Link to="#" className="nav__link">
          Przyszłe projekty
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
