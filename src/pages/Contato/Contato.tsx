import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Contato: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="contato-content">
        <h1>Contato</h1>
        <p>Entre em contato conosco para saber mais ou solicitar um orçamento!</p>
      </div>
      <Footer />
    </div>
  );
};

export default Contato;  // Adicione esta linha