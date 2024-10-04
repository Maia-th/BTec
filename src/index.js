import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css';
import './styles/variables.css';
import Btec from './pages/btec/Btec';
import PIBTec from './pages/pibtec/PIBTec';
import Selecao from './pages/selecao/Selecao';
import Startup from './pages/startup/Startup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Btec />} />
      <Route path="/Selecao" element={<Selecao />} />
      <Route path="/PIBTec" element={<PIBTec />} />
      <Route path="/Startup" element={<Startup />} />
    </Routes>
  </BrowserRouter>
);