import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Convites from './pages/Convites/Convites';
import DetalhesConvite from './pages/DetalhesConvite/DetalhesConvite';
import Contato from './pages/Contato/Contato';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/convites" element={<Convites />} />
      <Route path="/convites/:clientName" element={<DetalhesConvite />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
};

export default App;
