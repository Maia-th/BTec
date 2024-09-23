import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css';
import './styles/variables.css';
import Btec from './pages/selecao/Selecao';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Btec />} />
    </Routes>
  </BrowserRouter>
);