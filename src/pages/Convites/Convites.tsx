import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Convites: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="convites-content">
        <h1>Nossos Convites</h1>
        <p>
          Explore os modelos exclusivos de convites que oferecemos. Temos opções para
          casamentos, aniversários, eventos e muito mais!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Convites;  // Adicione esta linha