import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ConviteData, findConviteByName } from '../../data';
import './DetalhesConvite.css';

const DetalhesConvite: React.FC = () => {
  const { clientName } = useParams<{ clientName: string }>();
  const navigate = useNavigate();
  const [convite, setConvite] = useState<ConviteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [allImages, setAllImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    if (clientName) {
      const foundConvite = findConviteByName(clientName);
      
      if (foundConvite) {
        setConvite(foundConvite);
        setAllImages(foundConvite.images);
        if (foundConvite.images.length > 0) {
          setSelectedImage(foundConvite.images[0]);
        }
      }
      
      setLoading(false);
    }
  }, [clientName]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleVoltar = () => {
    navigate('/convites');
  };

  if (loading) {
    return (
      <div className="page-container">
        <Header />
        <div className="detalhes-content">
          <div className="loading">Carregando...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!convite) {
    return (
      <div className="page-container">
        <Header />
        <div className="detalhes-content">
          <div className="not-found">
            <h2>Convite não encontrado</h2>
            <button onClick={handleVoltar} className="button-back">
              Voltar para Convites
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-container">
      <Header />
      <div className="detalhes-content">
        <div className="detalhes-header">
          <button onClick={handleVoltar} className="button-back">
            ← Voltar
          </button>
          <h1>{convite.name}</h1>
        </div>

        <div className="detalhes-info">
          <div className="detalhes-tags">
            <span className="tag">{convite.principal}</span>
            <span className="tag">{convite.secundaria}</span>
            <span className="tag">{convite.acabamento}</span>
          </div>
          <p className="detalhes-description">{convite.description}</p>
        </div>

        <div className="detalhes-gallery">
          <div className="main-image-container">
            <img 
              src={encodeURI(selectedImage)} 
              alt="Imagem do convite" 
              className="main-image" 
            />
          </div>

          <div className="thumbnails-container">
            {allImages.map((image, index) => (
              <div 
                key={index}
                className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
                onClick={() => handleImageClick(image)}
              >
                <img src={encodeURI(image)} alt={`Imagem ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetalhesConvite; 