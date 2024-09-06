import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/navbar-institucional/NavbarInstitucional';
import HeaderBtec from './components/header-btec/HeaderBtec';
import './styles/global.css';
import './styles/variables.css';
import Parceiros from './components/parceiros/Parceiros';
import Footer from './components/footer/Footer';
import Itabira from './components/itabira/Itabira';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <NavBar /> 
    <HeaderBtec/>
    <Itabira/>
    <Parceiros/>
    <Footer/>
  </React.StrictMode>
);