import React from 'react';
import './AboutProfessional.css';

const AboutProfessional: React.FC = () => {
  return (
    <section className="about-professional">
      {/* Foto da profissional */}
      <div className="photo-container">
        <div className="photo-frame">
          <div className="photo">
            <span>Julia</span>
          </div>
        </div>
      </div>

      {/* Texto da história */}
      <div className="info-container">
        <h3>Sobre Julia</h3>
        <p>
          Julia é apaixonada por criar convites personalizados que fazem parte dos momentos mais especiais da vida de
          nossos clientes. Com anos de experiência, ela combina criatividade e atenção aos detalhes em cada projeto.
        </p>

        {/* Botões para as páginas */}
        <div className="buttons">
          <button onClick={() => window.location.href = '/saiba-mais'}>Saiba Mais...</button>
          <button onClick={() => window.location.href = '/atendimento-personalizado'}>
            Atendimento Personalizado
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutProfessional;
