import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import './styles/variables.css';
import Footer from './components/footer/Footer';
import Itabira from './components/itabira/Itabira';
import Missao from './components/missao/Missao';
import QuemSomos from './components/quemSomos/QuemSomos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    {/* <Navbar /> */}
    <Itabira/>
    <QuemSomos/>
    <Missao/>
    <Footer/>
  </React.StrictMode>
);