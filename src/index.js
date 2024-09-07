import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/navbar-institucional/NavbarInstitucional';
import HeaderBtec from './components/header-btec/HeaderBtec';
import './styles/global.css';
import './styles/variables.css';
import Parceiros from './components/parceiros/Parceiros';
import Numeros from './components/numeros/Numeros'
import Programas from './components/programas/Programas'
import Footer from './components/footer/Footer';
import Itabira from './components/itabira/Itabira';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <NavBar /> 
    <HeaderBtec/>
    <Itabira/>
    <Programas/>
    <Numeros/>
    <Parceiros/>
    <Footer/>
  </React.StrictMode>
);