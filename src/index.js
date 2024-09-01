import React from 'react';
import ReactDOM from 'react-dom/client';
//import Navbar from '././components/Navbar/Navbar';
import './styles/global.css';
import './styles/variables.css';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    {/* <Navbar /> */}
    <Footer/>
  </React.StrictMode>
);