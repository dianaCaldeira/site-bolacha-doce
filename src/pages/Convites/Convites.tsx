import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Convites.css';

const Convites: React.FC = () => {
  const [principalFilter, setPrincipalFilter] = useState('Todos');
  const [secundariaFilter, setSecundariaFilter] = useState('Todos');
  const [acabamentoFilter, setAcabamentoFilter] = useState('Todos');

  const handlePrincipalChange = (filter: string) => {
    setPrincipalFilter(filter);
  };

  const handleSecundariaChange = (filter: string) => {
    setSecundariaFilter(filter);
  };

  const handleAcabamentoChange = (filter: string) => {
    setAcabamentoFilter(filter);
  };

  const convitesList = [
    { 
      name: 'Convite Clássico Azul', 
      principal: 'Clássico', 
      secundaria: 'Azul', 
      acabamento: 'Dourado',
      images: [
        '/images/convite1.jpg',
        '/images/convite1-2.jpg',
        '/images/convite1-3.jpg'
      ],
      description: 'Convite elegante em tons de azul com acabamento dourado. Perfeito para casamentos sofisticados e eventos formais. Nosso modelo clássico inclui detalhes em dourado que acrescentam um toque de elegância ao design.'
    },
    { 
      name: 'Convite Moderno com Flores', 
      principal: 'Moderno', 
      secundaria: 'Flores', 
      acabamento: 'Metalizado',
      images: [
        '/images/convite2.jpg',
        '/images/convite2-2.jpg',
        '/images/convite2-3.jpg'
      ],
      description: 'Design moderno com flores e acabamento metalizado. Ideal para eventos contemporâneos e celebrações com tema floral. O acabamento metalizado dá um brilho especial que impressiona os convidados.'
    },
    { 
      name: 'Convite Tradicional Verde', 
      principal: 'Tradicional', 
      secundaria: 'Verde', 
      acabamento: 'Vegetal',
      images: [
        '/images/convite3.jpg',
        '/images/convite3-2.jpg',
        '/images/convite3-3.jpg'
      ],
      description: 'Convite tradicional em papel vegetal com estampa verde. Uma escolha consciente para quem valoriza a sustentabilidade sem abrir mão da qualidade e beleza.'
    },
    { 
      name: 'Convite com Estampa Aquarela', 
      principal: 'Estampa', 
      secundaria: 'Aquarela', 
      acabamento: 'Lacre de cera',
      images: [
        '/images/convite4.jpg',
        '/images/convite4-2.jpg',
        '/images/convite4-3.jpg'
      ],
      description: 'Belo convite com estampa em aquarela, finalizado com lacre de cera. Uma opção artística e elegante para ocasiões especiais.'
    },
    { 
      name: 'Convite Virtual Rosa', 
      principal: 'Virtual', 
      secundaria: 'Rosa', 
      acabamento: 'Brilho',
      images: [
        '/images/convite5.jpg',
        '/images/convite5-2.jpg',
        '/images/convite5-3.jpg'
      ],
      description: 'Convite digital em tons de rosa com efeito de brilho. Prático, econômico e sustentável, ideal para eventos modernos.'
    },
    { 
      name: 'Convite Minimalista', 
      principal: 'Moderno', 
      secundaria: 'Minimalista', 
      acabamento: 'Relevo seco',
      images: [
        '/images/convite6.jpg',
        '/images/convite6-2.jpg',
        '/images/convite6-3.jpg'
      ],
      description: 'Design minimalista moderno com técnica de relevo seco. Elegância na simplicidade, perfeito para eventos sofisticados.'
    }
  ];

  const filteredConvites = () => {
    return convitesList.filter(convite =>
      (convite.principal === principalFilter || principalFilter === 'Todos') &&
      (convite.secundaria === secundariaFilter || secundariaFilter === 'Todos') &&
      (convite.acabamento === acabamentoFilter || acabamentoFilter === 'Todos')
    );
  };

  return (
    <div className="page-container">
      <Header />
      <div className="convites-content">
        <h1>Nossos Convites</h1>
        <p>
          Explore os modelos exclusivos de convites que oferecemos. Temos opções para
          casamentos, aniversários, eventos e muito mais!
        </p>
        <div className="filter-section">
          <div className="filter-group">
            <select 
              className="filter-select"
              value={principalFilter}
              onChange={(e) => handlePrincipalChange(e.target.value)}
            >
              <option value="Todos">Principais</option>
              <option value="Clássico">Clássico</option>
              <option value="Moderno">Moderno</option>
              <option value="Tradicional">Tradicional</option>
              <option value="Estampa">Estampa</option>
              <option value="Virtual">Virtual</option>
            </select>
          </div>

          <div className="filter-group">
            <select 
              className="filter-select"
              value={secundariaFilter}
              onChange={(e) => handleSecundariaChange(e.target.value)}
            >
              <option value="Todos">Secundárias</option>
              <option value="Cor">Cor</option>
              <option value="Azul">Azul</option>
              <option value="Verde">Verde</option>
              <option value="Rosa">Rosa</option>
              <option value="Ilustração">Ilustração</option>
              <option value="Flores">Flores</option>
              <option value="Aquarela">Aquarela</option>
              <option value="Minimalista">Minimalista</option>
            </select>
          </div>

          <div className="filter-group">
            <select 
              className="filter-select"
              value={acabamentoFilter}
              onChange={(e) => handleAcabamentoChange(e.target.value)}
            >
              <option value="Todos">Acabamentos</option>
              <option value="Dourado">Dourado</option>
              <option value="Metalizado">Metalizado</option>
              <option value="Brilho">Brilho</option>
              <option value="Vegetal">Vegetal</option>
              <option value="Lacre de cera">Lacre de cera</option>
              <option value="Ponteira">Ponteira</option>
              <option value="Relevo seco">Relevo seco</option>
            </select>
          </div>
        </div>
        
        <div className="filter-search">
          <button className="filter-search-button">Buscar</button>
        </div>

        <div className="convites-list">
          {filteredConvites().length > 0 ? (
            filteredConvites().map((convite, index) => (
              <div key={index} className={`convite-item ${index % 2 === 1 ? 'reversed' : ''}`}>
                <div className="convite-gallery">
                  {convite.images.slice(0, 3).map((image, i) => (
                    <div 
                      key={i} 
                      className="convite-image-container"
                    >
                      <div 
                        className="convite-image" 
                        style={{ backgroundImage: `url(${image})` }}
                      ></div>
                    </div>
                  ))}
                </div>
                
                <div className="convite-info-section">
                  <div className="convite-info">
                    <h3>{convite.name}</h3>
                    <p>{convite.description}</p>
                    <div className="convite-tags">
                      <span className="tag">{convite.principal}</span>
                      <span className="tag">{convite.secundaria}</span>
                      <span className="tag">{convite.acabamento}</span>
                    </div>
                    
                    <button className="view-details">Saiba Mais</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">Nenhum convite encontrado com os filtros selecionados.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Convites;