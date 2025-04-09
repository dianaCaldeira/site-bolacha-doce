import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './DetalhesConvite.css';

interface ConviteData {
  name: string;
  principal: string;
  secundaria: string;
  acabamento: string;
  images: string[];
  description: string;
}

const DetalhesConvite: React.FC = () => {
  const { clientName } = useParams<{ clientName: string }>();
  const navigate = useNavigate();
  const [convite, setConvite] = useState<ConviteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [allImages, setAllImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');

  // Lista de clientes e seus convites (igual à da página Convites.tsx)
  const convitesList = [
    { 
      name: 'Aida e Daniel', 
      principal: 'Casamento', 
      secundaria: 'Elegante', 
      acabamento: 'Dourado',
      images: [
        '/fotosconvites/Aída e Daniel/AidaDaniel1.jpg',
        '/fotosconvites/Aída e Daniel/AidaDaniel2.jpg',
        '/fotosconvites/Aída e Daniel/AidaDaniel3.jpg',
        '/fotosconvites/Aída e Daniel/AidaDaniel4.jpg',
        '/fotosconvites/Aída e Daniel/AidaDaniel5.jpg'
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
        '/fotosconvites/Alice e Victor/AliceVictor3.jpg',
        '/fotosconvites/Alice e Victor/AliceVictor4.jpg',
        '/fotosconvites/Alice e Victor/AliceVictor5.jpg'
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
        '/fotosconvites/Ana Carolina e Filipi/AnaCarolinaFilipi3.jpg',
        '/fotosconvites/Ana Carolina e Filipi/AnaCarolinaFilipi.jpg'
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
        '/fotosconvites/Ana Luisa e Samuel/AnaLuisaSamuel3.jpg',
        '/fotosconvites/Ana Luisa e Samuel/AnaLuisaSamuel4.jpg',
        '/fotosconvites/Ana Luisa e Samuel/AnaLuisaSamuel5.jpg'
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
        '/fotosconvites/Ana Luiza e Fernando/AnaLuizaFernando3.jpg',
        '/fotosconvites/Ana Luiza e Fernando/AnaLuizaFernando4.jpg',
        '/fotosconvites/Ana Luiza e Fernando/AnaLuizaFernando5.jpg'
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
        '/fotosconvites/Andressa e Caio/AndressaCaio3.jpg',
        '/fotosconvites/Andressa e Caio/AndressaCaio4.jpg',
        '/fotosconvites/Andressa e Caio/AndressaCaio5.jpg'
      ],
      description: 'Convite com estilo rústico finalizado com cordão natural. Criado especialmente para Andressa e Caio, combina perfeitamente com a proposta do casamento ao ar livre.'
    }
  ];

  useEffect(() => {
    if (clientName) {
      const decodedName = decodeURIComponent(clientName);
      const foundConvite = convitesList.find((c) => 
        c.name.toLowerCase() === decodedName.toLowerCase()
      );
      
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