import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Convites.css';

const Convites: React.FC = () => {
  const navigate = useNavigate();
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

  // Função para navegar para a página de detalhes
  const handleVerDetalhes = (clientName: string) => {
    navigate(`/convites/${encodeURIComponent(clientName)}`);
  };

  // Lista de clientes com seus convites
  const convitesList = [
    { 
      name: 'Aida e Daniel', 
      principal: 'Casamento', 
      secundaria: 'Elegante', 
      acabamento: 'Dourado',
      images: [
        '/fotosconvites/Aída e Daniel/AidaDaniel1.jpg',
        '/fotosconvites/Aída e Daniel/AidaDaniel2.jpg',
        '/fotosconvites/Aída e Daniel/AidaDaniel3.jpg'
      ],
      description: 'Convite de casamento elegante e sofisticado, com acabamento em detalhes dourados. Personalizado especialmente para Aida e Daniel, refletindo a elegância da união do casal.'
    },
    { 
      name: 'Alice e Victor', 
      principal: 'Casamento', 
      secundaria: 'Moderno', 
      acabamento: 'Metalizado',
      images: [
        '/fotosconvites/Alice e Victor/AliceVictor1.jpg',
        '/fotosconvites/Alice e Victor/AliceVictor2.jpg',
        '/fotosconvites/Alice e Victor/AliceVictor3.jpg'
      ],
      description: 'Design moderno com toques metalizados, criado exclusivamente para o casamento de Alice e Victor. Um convite que combina elegância contemporânea com detalhes personalizados.'
    },
    { 
      name: 'Ana Carolina', 
      principal: 'Aniversário', 
      secundaria: 'Floral', 
      acabamento: 'Papel especial',
      images: [
        '/fotosconvites/Ana Carolina/AnaCarolina1.jpg',
        '/fotosconvites/Ana Carolina/AnaCarolina2.jpg',
        '/fotosconvites/Ana Carolina/AnaCarolina3.jpg'
      ],
      description: 'Convite de aniversário com delicado design floral em papel especial. Criado para Ana Carolina, traz elementos que refletem sua personalidade e o tom da celebração.'
    },
    { 
      name: 'Ana Carolina e Filipi', 
      principal: 'Casamento', 
      secundaria: 'Romântico', 
      acabamento: 'Laço de fita',
      images: [
        '/fotosconvites/Ana Carolina e Filipi/AnaCarolinaFilipi1.jpg',
        '/fotosconvites/Ana Carolina e Filipi/AnaCarolinaFilipi2.jpg',
        '/fotosconvites/Ana Carolina e Filipi/AnaCarolinaFilipi3.jpg'
      ],
      description: 'Convite romântico finalizado com delicado laço de fita. Especialmente desenhado para o casamento de Ana Carolina e Filipi, transmitindo a essência de amor e união.'
    },
    { 
      name: 'Ana Luisa e Samuel', 
      principal: 'Casamento', 
      secundaria: 'Minimalista', 
      acabamento: 'Relevo seco',
      images: [
        '/fotosconvites/Ana Luisa e Samuel/AnaLuisaSamuel1.jpg',
        '/fotosconvites/Ana Luisa e Samuel/AnaLuisaSamuel2.jpg',
        '/fotosconvites/Ana Luisa e Samuel/AnaLuisaSamuel3.jpg'
      ],
      description: 'Design minimalista com técnica de relevo seco. Criado para o casamento de Ana Luisa e Samuel, reflete a elegância na simplicidade que o casal tanto aprecia.'
    },
    { 
      name: 'Ana Luiza e Fernando', 
      principal: 'Casamento', 
      secundaria: 'Clássico', 
      acabamento: 'Dourado',
      images: [
        '/fotosconvites/Ana Luiza e Fernando/AnaLuizaFernando1.jpg',
        '/fotosconvites/Ana Luiza e Fernando/AnaLuizaFernando2.jpg',
        '/fotosconvites/Ana Luiza e Fernando/AnaLuizaFernando3.jpg'
      ],
      description: 'Convite clássico com requintados detalhes em dourado. Idealizado para Ana Luiza e Fernando, transmite a formalidade e elegância que marcará a união do casal.'
    },
    { 
      name: 'Andressa e Caio', 
      principal: 'Casamento', 
      secundaria: 'Rústico', 
      acabamento: 'Cordão',
      images: [
        '/fotosconvites/Andressa e Caio/AndressaCaio1.jpg',
        '/fotosconvites/Andressa e Caio/AndressaCaio2.jpg',
        '/fotosconvites/Andressa e Caio/AndressaCaio3.jpg'
      ],
      description: 'Convite com estilo rústico finalizado com cordão natural. Criado especialmente para Andressa e Caio, combina perfeitamente com a proposta do casamento ao ar livre.'
    }
  ];

  const filteredConvites = () => {
    return convitesList.filter(convite =>
      (convite.principal === principalFilter || principalFilter === 'Todos') &&
      (convite.secundaria === secundariaFilter || secundariaFilter === 'Todos') &&
      (convite.acabamento === acabamentoFilter || acabamentoFilter === 'Todos')
    );
  };

  useEffect(() => {
    // Atualizar as opções de filtro com base nos convites disponíveis
    // Você pode implementar isso se quiser opções de filtro dinâmicas
  }, []);

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
              <option value="Casamento">Casamento</option>
              <option value="Aniversário">Aniversário</option>
              <option value="Formatura">Formatura</option>
              <option value="Batizado">Batizado</option>
              <option value="15 Anos">15 Anos</option>
            </select>
          </div>

          <div className="filter-group">
            <select 
              className="filter-select"
              value={secundariaFilter}
              onChange={(e) => handleSecundariaChange(e.target.value)}
            >
              <option value="Todos">Estilos</option>
              <option value="Clássico">Clássico</option>
              <option value="Moderno">Moderno</option>
              <option value="Rústico">Rústico</option>
              <option value="Elegante">Elegante</option>
              <option value="Minimalista">Minimalista</option>
              <option value="Romântico">Romântico</option>
              <option value="Floral">Floral</option>
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
              <option value="Papel especial">Papel especial</option>
              <option value="Laço de fita">Laço de fita</option>
              <option value="Relevo seco">Relevo seco</option>
              <option value="Cordão">Cordão</option>
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