import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const Sobre: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="sobre-content">
        <h1>Sobre Nós</h1>
        <p>
          Bem-vindo à nossa página Sobre! Aqui você pode conhecer mais sobre nossa
          história, valores e paixão pelo trabalho.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Sobre;  // Adicione esta linha