import React from 'react';
import './PhotoPanel.css';

const PhotoPanel: React.FC = () => {
  return (
    /* Seção de convites - apenas esta parte deve permanecer */
    <section className="photos-grid-section">
      <div className="photos-container">
        {/* Grande quadrado à esquerda com "Convites" */}
        <div className="feature-box">
          <div className="feature-content">
            <span>Convites</span>
          </div>
        </div>
        
        {/* Grid de imagens à direita */}
        <div className="grid-images-container">
          <div className="grid-box-1">
            <div className="grid-item"></div>
          </div>
          
          <div className="grid-box-2">
            <div className="grid-item"></div>
          </div>
          
          <div className="grid-box-3">
            <div className="grid-item"></div>
          </div>
          
          <div className="grid-box-4">
            <div className="grid-item"></div>
          </div>
          
          <div className="grid-box-5">
            <div className="grid-item"></div>
          </div>
          
          <div className="grid-box-6">
            <div className="grid-item"></div>
          </div>
          
          <div className="grid-box-7">
            <div className="grid-item"></div>
          </div>
        </div>
      </div>
      
      {/* Botão centralizado abaixo */}
      <div className="action-button-container">
        <button className="action-button">Vamos Criar Seu Convite?</button>
      </div>
    </section>
  );
};

export default PhotoPanel;
