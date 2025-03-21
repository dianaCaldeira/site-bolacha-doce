import React from 'react';
import './PhotoPanel.css';

const PhotoPanel: React.FC = () => {
  return (
    <section className="photo-panel">
      <div className="photo-panel-grid">
        {/* Linha 1: Grande à esquerda e duas médias à direita */}
        <div className="photo large" style={{ backgroundImage: "url('/images/photo1.jpg')" }}>
          <div className="overlay">
            <span>Convites</span>
          </div>
        </div>
        <div className="photo medium" style={{ backgroundImage: "url('/images/photo2.jpg')" }}></div>
        <div className="photo medium" style={{ backgroundImage: "url('/images/photo3.jpg')" }}></div>

        {/* Linha 2: Grande horizontal */}
        <div className="photo large-horizontal" style={{ backgroundImage: "url('/images/photo4.jpg')" }}></div>

        {/* Linha 3: Três pequenas à esquerda e uma grande vertical à direita */}
        <div className="photo small" style={{ backgroundImage: "url('/images/photo5.jpg')" }}></div>
        <div className="photo small" style={{ backgroundImage: "url('/images/photo6.jpg')" }}></div>
        <div className="photo small" style={{ backgroundImage: "url('/images/photo7.jpg')" }}></div>
        <div className="photo large-vertical" style={{ backgroundImage: "url('/images/photo8.jpg')" }}></div>
      </div>

      {/* Botão abaixo */}
      <div className="photo-panel-cta">
        <button>Vamos Criar Seu Convite?</button>
      </div>
    </section>
  );
};

export default PhotoPanel;
