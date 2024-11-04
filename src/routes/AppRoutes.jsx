import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Btec from '../pages/btec/Btec';
import PIBTec from '../pages/pibtec/PIBTec';
import PMBTec from '../pages/pmbtec/PMBTec';
import Selecao from '../pages/selecao/Selecao';
import Startup from '../pages/startup/Startup';
import Conteudos from '../pages/conteudos/Conteudos';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Btec />} />
      <Route path="/Selecao" element={<Selecao />} />
      <Route path="/PIBTec" element={<PIBTec />} />
      <Route path="/PMBTec" element={<PMBTec />} />
      <Route path="/Startup" element={<Startup />} />
      <Route path="/Conteudos" element={<Conteudos />} />
    </Routes>
  );
};

export default AppRoutes;