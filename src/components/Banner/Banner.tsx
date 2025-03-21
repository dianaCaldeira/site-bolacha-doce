import React from 'react';
import './Banner.css';

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h2>Convites personalizados para todas as ocasiões</h2>
        <p>Casamentos, aniversários, festas e muito mais!</p>
        <button className="banner-cta">Solicite um orçamento</button>
      </div>
      <div className="banner-image">
        {/* A imagem será definida como background no CSS */}
      </div>
    </section>
  );
};

export default Banner;
