import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Btec from '../pages/Btec';
import PIBTec from '../pages/PIBTec';
import PMBTec from '../pages/PMBTec';
import Selecao from '../pages/Selecao';
import Startup from '../pages/Startup';
import Conteudos from '../pages/Conteudos';
import Login from '../pages/Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Btec />} />
      <Route path="/Selecao" element={<Selecao />} />
      <Route path="/PIBTec" element={<PIBTec />} />
      <Route path="/PMBTec" element={<PMBTec />} />
      <Route path="/Startup" element={<Startup />} />
      <Route path="/Conteudos" element={<Conteudos />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;