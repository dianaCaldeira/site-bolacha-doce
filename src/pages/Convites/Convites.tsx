import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { 
  convitesList, 
  getDistinctPrincipais, 
  getDistinctSecundarias, 
  getDistinctAcabamentos 
} from '../../data';
import './Convites.css';

const Convites: React.FC = () => {
  const navigate = useNavigate();
  const [principalFilter, setPrincipalFilter] = useState('Todos');
  const [secundariaFilter, setSecundariaFilter] = useState('Todos');
  const [acabamentoFilter, setAcabamentoFilter] = useState('Todos');
  const [tiposPrincipais, setTiposPrincipais] = useState<string[]>([]);
  const [tiposSecundarios, setTiposSecundarios] = useState<string[]>([]);
  const [tiposAcabamentos, setTiposAcabamentos] = useState<string[]>([]);

  // Função para carregar os filtros dinamicamente
  useEffect(() => {
    setTiposPrincipais(getDistinctPrincipais());
    setTiposSecundarios(getDistinctSecundarias());
    setTiposAcabamentos(getDistinctAcabamentos());
  }, []);

  const handlePrincipalChange = (filter: string) => {
    setPrincipalFilter(filter);
  };

  const handleSecundariaChange = (filter: string) => {
    setSecundariaFilter(filter);
  };

  const handleAcabamentoChange = (filter: string) => {
    setAcabamentoFilter(filter);
  };

  // Função para navegar para a página de detalhes
  const handleVerDetalhes = (clientName: string) => {
    navigate(`/convites/${encodeURIComponent(clientName)}`);
  };

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
          Explore os convites que já criamos para nossos clientes. Cada um é único e personalizado,
          refletindo as características especiais de cada ocasião.
        </p>
        <div className="filter-section">
          <div className="filter-group">
            <select 
              className="filter-select"
              value={principalFilter}
              onChange={(e) => handlePrincipalChange(e.target.value)}
            >
              <option value="Todos">Tipos</option>
              {tiposPrincipais.map((tipo) => (
                <option key={tipo} value={tipo}>{tipo}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <select 
              className="filter-select"
              value={secundariaFilter}
              onChange={(e) => handleSecundariaChange(e.target.value)}
            >
              <option value="Todos">Estilos</option>
              {tiposSecundarios.map((tipo) => (
                <option key={tipo} value={tipo}>{tipo}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <select 
              className="filter-select"
              value={acabamentoFilter}
              onChange={(e) => handleAcabamentoChange(e.target.value)}
            >
              <option value="Todos">Acabamentos</option>
              {tiposAcabamentos.map((tipo) => (
                <option key={tipo} value={tipo}>{tipo}</option>
              ))}
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
                        style={{ backgroundImage: `url(${encodeURI(image)})` }}
                      >
                        <div className="image-error-fallback">
                          Convite
                        </div>
                      </div>
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
                    
                    <button 
                      className="view-details"
                      onClick={() => handleVerDetalhes(convite.name)}
                    >
                      Saiba Mais
                    </button>
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