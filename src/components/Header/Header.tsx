import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import logo from "../../../image/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="desktop-nav">
        <div className="header-button">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/sobre">
            <button>Sobre</button>
          </Link>
        </div>
      </div>

      <div className="header-logo">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
          />
        </Link>
      </div>

      <div className="desktop-nav">
        <div className="header-button">
          <Link to="/convites">
            <button>Convites</button>
          </Link>
          <Link to="/contato">
            <button>Contato</button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>
          <button>Home</button>
        </Link>
        <Link to="/sobre" onClick={toggleMenu}>
          <button>Sobre</button>
        </Link>
        <Link to="/convites" onClick={toggleMenu}>
          <button>Convites</button>
        </Link>
        <Link to="/contato" onClick={toggleMenu}>
          <button>Contato</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
