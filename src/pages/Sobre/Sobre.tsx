import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Sobre.css';

const Sobre: React.FC = () => {
  return (
    <div className="sobre-page">
      <Header />
      
      <div className="sobre-content">
        <div className="sobre-hero">
          <div className="sobre-box">
            <div className="sobre-label">
              <span>Sobre</span>
            </div>
          </div>
          
          <div className="sobre-description">
            <div className="description-content">
              <span>Mais sobre quem é a Bolacha</span>
            </div>
          </div>
        </div>
        
        <div className="processo-steps">
          {/* Primeiro passo */}
          <div className="processo-box box-1">
            <div className="processo-content">
              <span>Produção<br/>e<br/>criatividade</span>
            </div>
          </div>
          
          {/* Linha de conexão */}
          <div className="connection-line line-1"></div>
          
          {/* Segundo passo */}
          <div className="processo-box box-2">
            <div className="processo-content">
              <span>O que faz<br/>sua data<br/>ser única</span>
            </div>
          </div>
          
          {/* Linha de conexão */}
          <div className="connection-line line-2"></div>
          
          {/* Terceiro passo */}
          <div className="processo-box box-3">
            <div className="processo-content">
              <span>Como nós<br/>vamos<br/>criar uma<br/>lembrança<br/>eterna</span>
            </div>
          </div>
          
          {/* Linha de conexão */}
          <div className="connection-line line-3"></div>
          
          {/* Quarto passo */}
          <div className="processo-box box-4">
            <div className="processo-content">
              <span>Aqui é feito<br/>com carinho<br/>e amor<br/>para você</span>
            </div>
          </div>
          
          {/* Linha de conexão */}
          <div className="connection-line line-4"></div>
          
          {/* Quinto passo */}
          <div className="processo-box box-5">
            <div className="processo-content">
              <span>Conhecendo<br/>a cliente e<br/>colhendo<br/>suas idéias</span>
            </div>
          </div>
        </div>
        
        {/* Botão centralizado */}
        <div className="cta-container">
          <button className="cta-button">Quero conhecer melhor</button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sobre;