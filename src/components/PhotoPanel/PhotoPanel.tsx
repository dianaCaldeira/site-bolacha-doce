import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { convitesList } from '../../data';
import './PhotoPanel.css';

const PhotoPanel: React.FC = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<string[]>([]);
  const [nextImages, setNextImages] = useState<string[]>([]);
  const [featureImage, setFeatureImage] = useState<string>('');
  const [nextFeatureImage, setNextFeatureImage] = useState<string>('');
  const [isChanging, setIsChanging] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Função para obter 8 imagens aleatórias dos convites (7 para o grid + 1 para o feature)
  const getRandomImages = useCallback(() => {
    // Cria um array com todas as imagens disponíveis
    const allImages: string[] = [];
    convitesList.forEach(convite => {
      convite.images.forEach(image => {
        allImages.push(image);
      });
    });
    
    // Embaralha o array
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    
    // Pega as primeiras 8 imagens (1 para feature + 7 para grid)
    return shuffled.slice(0, 8);
  }, []);
  
  // Inicializa as imagens
  useEffect(() => {
    const randomImages = getRandomImages();
    setFeatureImage(randomImages[0]);
    setImages(randomImages.slice(1, 8));
    setIsLoading(false);
  }, [getRandomImages]);
  
  // Configura o intervalo para trocar as imagens
  useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      // Prepara as próximas imagens
      const randomImages = getRandomImages();
      setNextFeatureImage(randomImages[0]);
      setNextImages(randomImages.slice(1, 8));
      
      // Inicia a transição
      setIsChanging(true);
      
      // Após a transição, atualiza as imagens principais
      setTimeout(() => {
        setFeatureImage(randomImages[0]);
        setImages(randomImages.slice(1, 8));
        setIsChanging(false);
      }, 2000); // Tempo igual à duração da animação CSS
      
    }, 6000); // Intervalo entre mudanças de imagem
    
    return () => clearInterval(interval);
  }, [getRandomImages, isLoading]);
  
  const handleRedirect = () => {
    navigate('/convites');
  };
  
  return (
    <section className="photos-grid-section">
      <div className="photos-container">
        {/* Quadrado maior à esquerda com imagem dinâmica */}
        <div className="feature-box">
          <div className="feature-content">
            {/* Imagem atual com fade-out */}
            <div 
              className={`feature-image ${isChanging ? 'changing' : ''}`}
              style={{ 
                backgroundImage: `url(${encodeURI(featureImage)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            
            {/* Próxima imagem com fade-in */}
            {isChanging && (
              <div 
                className="feature-image new"
                style={{ 
                  backgroundImage: `url(${encodeURI(nextFeatureImage)})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            )}
          </div>
        </div>
        
        {/* Grid de imagens à direita */}
        <div className="grid-images-container">
          {/* Imagens atuais com fade-out */}
          {images.map((image, index) => (
            <div key={`current-${index}`} className={`grid-box-${index + 1}`}>
              <div 
                className={`grid-item ${isChanging ? 'changing' : ''}`}
                style={{ 
                  backgroundImage: `url(${encodeURI(image)})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              
              {/* Próximas imagens com fade-in */}
              {isChanging && nextImages[index] && (
                <div 
                  className="grid-item new"
                  style={{ 
                    backgroundImage: `url(${encodeURI(nextImages[index])})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Botão centralizado abaixo */}
      <div className="action-button-container">
        <button className="action-button" onClick={handleRedirect}>
          Veja Todos os Convites
        </button>
      </div>
    </section>
  );
};

export default PhotoPanel;
