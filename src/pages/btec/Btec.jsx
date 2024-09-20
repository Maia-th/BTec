import React from "react";
import NavBar from "../../components/navbar-institucional/NavbarInstitucional";
import HeaderBtec from "../../components/btec/header-btec/HeaderBtec";
import Parceiros from "../../components/btec/parceiros/Parceiros";
import Numeros from "../../components/btec/numeros/Numeros";
import Programas from "../../components/btec/programas/Programas";
import Footer from "../../components/footer/Footer";
import Itabira from "../../components/btec/itabira/Itabira";
import Missao from "../../components/btec/missao/Missao";
import QuemSomos from "../../components/btec/quemSomos/QuemSomos";

export default function Btec() {
  return (
    <React.StrictMode>
      <NavBar />
      <HeaderBtec />
      <Itabira />
      <Programas />
      <QuemSomos />
      <Numeros />
      <Missao />
      <Parceiros />
      <Footer />
    </React.StrictMode>
  );
}
