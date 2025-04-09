import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Bolacha Doce Logo" />
        </div>

        {/* Texto informativo */}
        <div className="footer-text">
          <p>Reserve um espaço no seu dia para falar sobre você e seus planos e descobrir um universo criativo de possibilidades.</p>
          <p>Esperamos você.</p>
        </div>

        {/* Contato e Redes Sociais */}
        <div className="footer-contact">
          <p>Lourdes . Belo Horizonte . MG</p>
          <p>+55 31 3017 3101</p>
          <p>CONTATO@BOLACHADOCE.COM.BR</p>
          <div className="footer-socials">
            {/* Links de redes sociais */}
            <a href="https://facebook.com"  rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com"  rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me"  rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
