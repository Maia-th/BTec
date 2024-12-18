import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Btec from '../pages/Btec';
import PIBTec from '../pages/PIBTec';
import PMBTec from '../pages/PMBTec';
import Selecao from '../pages/Selecao';
import Startup from '../pages/Startup';
import Conteudos from '../pages/Conteudos';
import Login from '../pages/Login';
import Institucional from '../layout/Default';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Institucional><Btec /></Institucional>} />
      <Route path="/Selecao" element={<Institucional><Selecao /></Institucional>} />
      <Route path="/PIBTec" element={<Institucional><PIBTec /></Institucional>} />
      <Route path="/PMBTec" element={<Institucional><PMBTec /></Institucional>} />
      <Route path="/Startup" element={<Institucional><Startup /></Institucional>} />
      <Route path="/Conteudos" element={<Institucional><Conteudos /></Institucional>} />
      <Route path="/Login" element={<Institucional><Login /></Institucional>} />
    </Routes>
  );
};

export default AppRoutes;