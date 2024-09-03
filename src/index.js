import React from 'react';
import ReactDOM from 'react-dom/client';
//import Navbar from '././components/Navbar/Navbar';
import './styles/global.css';
import './styles/variables.css';
import Footer from './components/footer/Footer';
import Itabira from './components/itabira/Itabira';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    {/* <Navbar /> */}
    <Itabira/>
    <Footer/>
  </React.StrictMode>
);