import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import logo from "../../../image/logo.png";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="header-button">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/sobre">
          <button>Sobre</button>
        </Link>
      </div>

      <div className="header-logo">
        <img
          src={logo}
          alt="logo"
        />
      </div>

      <div className="header-button">
        <Link to="/convites">
          <button>Convites</button>
        </Link>
        <Link to="/contato">
          <button>Contato</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
