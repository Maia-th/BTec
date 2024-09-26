import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css';
import './styles/variables.css';
import Selecao from './pages/selecao/Selecao';
import BTec from "./pages/btec/Btec";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BTec/>} />
      <Route path="/Selecao" element={<Selecao />} /> 
    </Routes>
  </BrowserRouter>
);