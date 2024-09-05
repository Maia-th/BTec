import React from 'react';
import ReactDOM from 'react-dom/client';
//import Navbar from '././components/Navbar/Navbar';
import './styles/global.css';
import './styles/variables.css';
import Footer from './components/footer/Footer';
import Itabira from './components/itabira/Itabira';
import Missao from './components/missao/Missao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    {/* <Navbar /> */}
    <Missao/>
    <Itabira/>
    <Footer/>
  </React.StrictMode>
);