import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css';
import './styles/variables.css';
import Btec from './pages/btec/Btec';
import PIBTec from './pages/pibtec/PIBTec';
import Selecao from './pages/selecao/Selecao';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Btec />} />
      <Route path="/Selecao" element={<Selecao />} />
      <Route path="/PIBTec" element={<PIBTec />} />
    </Routes>
  </BrowserRouter>
);