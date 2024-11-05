import React from "react";
import HeaderSelecao from "../../components/selecao/headerSelecao/HeaderSelecao";
import NavBar from "../../components/navbar-institucional/NavbarInstitucional";
import Footer from "../../components/footer/Footer";
import Pibtec from "../../components/selecao/pibtec/Pibtec";
import Pmbtec from "../../components/selecao/pmbtec/Pmbtec";

export default function Selecao() {
  return (
    <React.StrictMode>
      <NavBar />
      <HeaderSelecao />
      <Pibtec />  
      <Pmbtec />
      <Footer />
    </React.StrictMode>
  );
}