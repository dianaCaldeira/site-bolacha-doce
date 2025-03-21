import React from 'react';
import Header from '../../components/Header/Header';
import Presentation from '../../components/Presentation/Presentation';
import PhotoPanel from '../../components/PhotoPanel/PhotoPanel';
import Banner from '../../components/Banner/Banner';
import AboutProfessional from '../../components/AboutProfessional/AboutProfessional';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <PhotoPanel />
      <Banner />
      <AboutProfessional />
      <Footer />
    </div>
  );
};

export default Home;